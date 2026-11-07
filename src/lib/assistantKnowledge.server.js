import { createHash } from "crypto";
import { client } from "@/sanity/lib/client";
import { SITE_PAGES } from "@/components/Blog/internallinks";

// Server-side source of truth for the assistant. The browser caches a copy in
// IndexedDB for retrieval, but the chat route only trusts doc ids resolved here.

const TTL_MS = 10 * 60 * 1000;
const MAX_DOC_CHARS = 1800;

const sanity = client.withConfig({ useCdn: false, perspective: "published" });

const QUERY = `{
  "caseStudies": *[_type == "caseStudy" && !(_id in path("drafts.**")) && defined(slug.current)]
    | order(publishedAt desc) {
      title, "slug": slug.current, client, industry, excerpt, goal, challenge, outcome,
      "processes": processes[]{ title, highlights, "body": pt::text(content) }
    },
  "faqs": *[_type == "faq" && !(_id in path("drafts.**"))]
    | order(category->order asc, order asc) {
      _id, question, answer, "category": category->title
    }
}`;

const clip = (s, n = MAX_DOC_CHARS) => String(s || "").replace(/\s+/g, " ").trim().slice(0, n);

function caseStudyDoc(c) {
  const steps = (c.processes || [])
    .map((p) => [p.title, ...(p.highlights || []), clip(p.body, 300)].filter(Boolean).join(": "))
    .join(" | ");
  const text = [
    c.client && `Client: ${c.client}.`,
    c.industry && `Industry: ${c.industry}.`,
    c.excerpt,
    c.goal && `Goal: ${c.goal}`,
    c.challenge && `Challenge: ${c.challenge}`,
    c.outcome && `Outcome: ${c.outcome}`,
    steps && `How we did it: ${steps}`,
  ]
    .filter(Boolean)
    .join(" ");
  return {
    id: `cs:${c.slug}`,
    type: "case-study",
    title: clip(c.title, 140),
    url: `/case-studies/${c.slug}`,
    text: clip(text),
  };
}

function faqDoc(f) {
  return {
    id: `faq:${f._id}`,
    type: "faq",
    title: clip(f.question, 160),
    url: null, // FAQs have no page of their own
    text: clip(`${f.category ? `${f.category}. ` : ""}${f.answer}`),
  };
}

function pageDoc(p) {
  return {
    id: `page:${p.url}`,
    type: "page",
    title: p.title,
    url: p.url,
    text: clip(`${p.title}. ${p.about || ""}`, 300),
  };
}

let cached = null; // { at, value }
let inflight = null;

async function build() {
  const data = await sanity.fetch(QUERY);
  const docs = [
    ...(data.caseStudies || []).map(caseStudyDoc),
    ...(data.faqs || []).map(faqDoc),
    ...SITE_PAGES.map(pageDoc),
  ];
  const version = createHash("sha1").update(JSON.stringify(docs)).digest("hex").slice(0, 12);
  return { version, docs, byId: new Map(docs.map((d) => [d.id, d])) };
}

export async function getKnowledge() {
  if (cached && Date.now() - cached.at < TTL_MS) return cached.value;
  inflight ??= build()
    .then((value) => {
      cached = { at: Date.now(), value };
      return value;
    })
    .catch((err) => {
      if (cached) return cached.value; // serve stale rather than fail
      throw err;
    })
    .finally(() => {
      inflight = null;
    });
  return inflight;
}
