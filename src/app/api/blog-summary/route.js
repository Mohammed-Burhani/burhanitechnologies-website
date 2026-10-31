import { NextResponse } from "next/server";
import { createHash } from "crypto";
import { SITE_PAGES } from "@/components/Blog/internallinks";

export const runtime = "nodejs";
export const maxDuration = 60;

/* ------------------------------ config ------------------------------ */

const IS_PROD = process.env.NODE_ENV === "production";
const MIN_CHARS = 600;
const MAX_CHARS = 24000;
const MAX_CANDIDATES = 20;
const CACHE_LIMIT = 300;
const RATE_LIMIT = 12; // per IP
const RATE_WINDOW_MS = 10 * 60 * 1000;
const GEMINI_TIMEOUT_MS = 22000;
const GROK_TIMEOUT_MS = 20000; // both together stay inside maxDuration

const GEMINI_KEY = () => process.env.GEMINI_API_KEY;
const XAI_KEY = () => process.env.XAI_API_KEY || process.env.GROK_API_KEY;
const GEMINI_MODEL = () => process.env.GEMINI_MODEL || "gemini-3.5-flash";
const XAI_MODEL = () => process.env.XAI_MODEL || "grok-4.20-non-reasoning";

// Which provider goes first. Any provider missing from the list is appended,
// so there is ALWAYS a fallback: Gemini fails or has no key -> Grok runs.
const ORDER = () => {
  const wanted = (process.env.AI_SUMMARY_ORDER || "gemini,grok")
    .split(",")
    .map((s) => s.trim().toLowerCase())
    .filter((n) => PROVIDERS[n]);
  return [...new Set([...wanted, ...Object.keys(PROVIDERS)])];
};

const cache = new Map();
const hits = new Map();

/* ------------------------------ prompts ------------------------------ */

const SYSTEM = `You write quick summaries of blog articles for busy, non-technical readers such as business owners and managers.

Write at a 7th to 8th grade reading level: short sentences, everyday words, active voice. Swap jargon for plain words. If a technical word or acronym must stay, explain it in "terms".

Return ONLY a JSON object, no markdown, in exactly this shape:
{
  "tldr": string,
  "keyPoints": [{"title": string, "detail": string}],
  "terms": [{"term": string, "meaning": string}],
  "links": [{"url": string, "reason": string}]
}

Rules:
- "tldr": 1-2 sentences, max 35 words. The main takeaway, said plainly, as if telling a friend. Do not start with "This article".
- "keyPoints": 3 to 5 items. "title" is a plain 2-5 word label. "detail" is ONE sentence, max 22 words, concrete. Keep real numbers and examples from the article.
- "terms": 0 to 3 jargon words or acronyms that appear in the article (like ERP or API). "meaning" max 18 words, no jargon. Use [] if none.
- "links": 0 to 3 pages chosen ONLY from the INTERNAL PAGES list. Copy the url exactly. "reason" max 14 words, starts with a verb, tells the reader what they will get (for example "See how a custom ERP connects your sales and stock"). Only include a page that clearly relates to the article. Prefer a mix: one service page if it fits, then a related article or case study. Use the consultation page only if the article describes a problem the reader may want help solving. Never link two pages that cover the same thing. Use [] if none fit.
- Use only information in the article. Never invent facts, numbers or claims.
- Write in the same language as the article. Plain text only, no markdown.`;

const userPrompt = (title, text, candidates) => {
  const pages = candidates.length
    ? candidates
        .map((c) => `- ${c.url} | ${c.title} | ${c.kind}${c.about ? ` | ${c.about}` : ""}`)
        .join("\n")
    : "(none)";
  return `Article title: ${title || "Untitled"}\n\nINTERNAL PAGES:\n${pages}\n\nArticle:\n${text}`;
};

/* ----------------------------- providers ----------------------------- */

// If the configured model doesn't exist (404), retry once with a known-good
// default before the route falls back to Grok.
const GEMINI_DEFAULT = "gemini-3.5-flash";

async function callGemini(args) {
  const models = [...new Set([GEMINI_MODEL(), GEMINI_DEFAULT])];
  let lastErr;
  for (const model of models) {
    try {
      return await geminiRequest(model, args);
    } catch (err) {
      lastErr = err;
      if (!String(err?.message).startsWith("Gemini 404")) throw err;
      console.warn(`[blog-summary] Gemini model "${model}" not found`);
    }
  }
  throw lastErr;
}

async function geminiRequest(model, { title, text, candidates }) {
  const key = GEMINI_KEY();
  const str = { type: "STRING" };
  const list = (properties) => ({
    type: "ARRAY",
    items: { type: "OBJECT", properties, required: Object.keys(properties) },
  });

  const attempt = (withThinking) =>
    fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json", "x-goog-api-key": key },
        signal: AbortSignal.timeout(GEMINI_TIMEOUT_MS),
        body: JSON.stringify({
          systemInstruction: { parts: [{ text: SYSTEM }] },
          contents: [
            { role: "user", parts: [{ text: userPrompt(title, text, candidates) }] },
          ],
          generationConfig: {
            // Gemini 3 thinks at "high" by default, which is slow. Summaries
            // don't need deep reasoning. (Google advises leaving temperature
            // at its default on Gemini 3, so it is not set here.)
            ...(withThinking && { thinkingConfig: { thinkingLevel: "low" } }),
            maxOutputTokens: 4096,
            responseMimeType: "application/json",
            responseSchema: {
              type: "OBJECT",
              properties: {
                tldr: str,
                keyPoints: list({ title: str, detail: str }),
                terms: list({ term: str, meaning: str }),
                links: list({ url: str, reason: str }),
              },
              required: ["tldr", "keyPoints", "terms", "links"],
            },
          },
        }),
      }
    );

  let res = await attempt(true);
  if (res.status === 400) {
    const detail = await res.text();
    // Older models reject thinkingLevel; retry once without it.
    if (!/thinking/i.test(detail)) throw new Error(`Gemini 400: ${detail.slice(0, 300)}`);
    res = await attempt(false);
  }
  if (!res.ok) {
    throw new Error(`Gemini ${res.status}: ${(await res.text()).slice(0, 300)}`);
  }
  const data = await res.json();
  return (data?.candidates?.[0]?.content?.parts || [])
    .map((p) => p.text || "")
    .join("");
}

async function callGrok({ title, text, candidates }) {
  const res = await fetch("https://api.x.ai/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${XAI_KEY()}`,
    },
    signal: AbortSignal.timeout(GROK_TIMEOUT_MS),
    body: JSON.stringify({
      model: XAI_MODEL(),
      temperature: 0.3,
      response_format: { type: "json_object" },
      messages: [
        { role: "system", content: SYSTEM },
        { role: "user", content: userPrompt(title, text, candidates) },
      ],
    }),
  });
  if (!res.ok) {
    throw new Error(`Grok ${res.status}: ${(await res.text()).slice(0, 300)}`);
  }
  const data = await res.json();
  return data?.choices?.[0]?.message?.content || "";
}

const PROVIDERS = { gemini: callGemini, grok: callGrok };
const HAS_KEY = { gemini: GEMINI_KEY, grok: XAI_KEY };

/* ------------------------------ helpers ------------------------------ */

const str = (v, max) => (typeof v === "string" ? v.trim().slice(0, max) : "");

// Only same-site paths are accepted: no protocol, no "//", no query strings.
const SAFE_URL = /^\/(?!\/)[A-Za-z0-9\-_/]*$/;

function sanitizeCandidates(input) {
  if (!Array.isArray(input)) return [];
  const seen = new Set();
  const out = [];
  for (const c of input) {
    if (out.length >= MAX_CANDIDATES) break;
    if (!c || typeof c.url !== "string" || !SAFE_URL.test(c.url)) continue;
    if (typeof c.title !== "string" || !c.title.trim() || seen.has(c.url)) continue;
    seen.add(c.url);
    out.push({
      url: c.url,
      title: str(c.title, 100),
      about: str(c.about, 160),
    });
  }
  return out;
}

/* --------------------- picking relevant internal pages --------------------- */

const STOP = new Set(
  "the and for with from that this are can you our your how what why not into about more most best guide software development service services solution solutions business company companies chennai india using use used make makes need needs own".split(
    " "
  )
);
// 5-letter prefixes act as a cheap stemmer: automation/automate/automated -> "autom"
const stems = (t) =>
  (t.toLowerCase().match(/[a-z0-9]{3,}/g) || [])
    .filter((w) => !STOP.has(w))
    .map((w) => w.slice(0, 5));

const KIND_BONUS = { service: 1.5, industry: 1, "case-study": 0.5 };

function mergePages(...lists) {
  const seen = new Set();
  return lists.flat().filter((p) => p && !seen.has(p.url) && seen.add(p.url));
}

function rankPages(title, text, pages, currentPath) {
  const freq = new Map();
  for (const w of stems(`${title} ${title} ${title}\n${text}`)) {
    freq.set(w, (freq.get(w) || 0) + 1);
  }

  const scored = pages
    .filter((p) => p.url !== currentPath)
    .map((p) => {
      const slug = p.url.split("/").pop().replace(/-/g, " ");
      const keys = new Set(stems(`${p.title} ${p.about || ""} ${slug}`));
      let score = 0;
      for (const k of keys) {
        const f = freq.get(k);
        if (f) score += 1 + Math.log(f);
      }
      return { p, score: score > 0 ? score + (KIND_BONUS[p.kind] || 0) + (p.boost || 0) : 0 };
    });

  const top = scored
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, MAX_CANDIDATES - 2)
    .map((x) => x.p);

  // Always offer the consultation page so there is a next step.
  const cta = pages.find((p) => p.url === "/book-a-consultation");
  if (cta && !top.some((p) => p.url === cta.url)) top.push(cta);
  return top;
}

function normalize(raw, candidates) {
  const cleaned = String(raw)
    .replace(/^```(?:json)?/i, "")
    .replace(/```$/, "")
    .trim();
  const json = JSON.parse(cleaned);

  const tldr = str(json.tldr, 400);

  const keyPoints = (Array.isArray(json.keyPoints) ? json.keyPoints : [])
    .map((p) =>
      typeof p === "string"
        ? { title: "", detail: str(p, 260) }
        : { title: str(p?.title, 60), detail: str(p?.detail, 260) }
    )
    .filter((p) => p.detail)
    .slice(0, 5);

  const terms = (Array.isArray(json.terms) ? json.terms : [])
    .map((t) => ({ term: str(t?.term, 40), meaning: str(t?.meaning, 200) }))
    .filter((t) => t.term && t.meaning)
    .slice(0, 3);

  // Links must match a real page we offered. Titles come from OUR list.
  const byUrl = new Map(candidates.map((c) => [c.url, c]));
  const links = [];
  for (const l of Array.isArray(json.links) ? json.links : []) {
    const match = byUrl.get(str(l?.url, 200));
    if (match && !links.some((x) => x.url === match.url)) {
      links.push({
        url: match.url,
        title: match.title,
        kind: match.kind || "page",
        reason: str(l?.reason, 120),
      });
    }
    if (links.length === 3) break;
  }

  if (!tldr || keyPoints.length < 2) throw new Error("Bad summary shape");
  return { tldr, keyPoints, terms, links };
}

function isRateLimited(ip) {
  const now = Date.now();
  const entry = hits.get(ip);
  if (!entry || now > entry.reset) {
    hits.set(ip, { count: 1, reset: now + RATE_WINDOW_MS });
    return false;
  }
  entry.count += 1;
  return entry.count > RATE_LIMIT;
}

/* ------------------------------- route ------------------------------- */

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const title = str(body?.title, 300);
  const text = typeof body?.text === "string" ? body.text.trim() : "";
  const currentPath =
    typeof body?.currentPath === "string"
      ? body.currentPath.split(/[?#]/)[0].replace(/\/$/, "")
      : "";
  // Pages sent by the browser (related posts, categories) are added on top of
  // the trusted catalog, then everything is ranked against this article.
  const extra = sanitizeCandidates(body?.candidates).map((c) => ({
    ...c,
    kind: c.url.startsWith("/blog/category/") ? "page" : "article",
    boost: 1.5,
  }));
  const candidates = rankPages(title, text, mergePages(SITE_PAGES, extra), currentPath);

  if (text.length < MIN_CHARS) {
    return NextResponse.json(
      { error: "This article is too short to summarize." },
      { status: 400 }
    );
  }

  const trimmed = text.slice(0, MAX_CHARS);
  const hash = createHash("sha256")
    .update(JSON.stringify([title, trimmed, candidates]))
    .digest("hex");

  // Cache only in production, so dev always hits the providers (easy testing).
  if (IS_PROD && cache.has(hash)) {
    return NextResponse.json({ ...cache.get(hash), cached: true });
  }

  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown";
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Please try again in a few minutes." },
      { status: 429 }
    );
  }

  const errors = [];
  for (const name of ORDER()) {
    if (!HAS_KEY[name]()) {
      errors.push(`${name}: no API key set`);
      continue;
    }
    try {
      const raw = await PROVIDERS[name]({ title, text: trimmed, candidates });
      const summary = { ...normalize(raw, candidates), provider: name };
      if (errors.length) {
        console.warn(`[blog-summary] used ${name} after: ${errors.join(" | ")}`);
      }
      if (IS_PROD) {
        if (cache.size >= CACHE_LIMIT) cache.delete(cache.keys().next().value);
        cache.set(hash, summary);
      }
      return NextResponse.json(summary);
    } catch (err) {
      console.error(`[blog-summary] ${name} failed:`, err?.message);
      errors.push(`${name}: ${err?.message}`);
    }
  }

  return NextResponse.json(
    {
      error: "Couldn't generate a summary right now. Please try again.",
      ...(!IS_PROD && { debug: errors }),
    },
    { status: 502 }
  );
}