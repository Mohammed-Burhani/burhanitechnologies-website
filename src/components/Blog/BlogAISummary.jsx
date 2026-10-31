"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowClockwise,
  ArrowUpRight,
  CaretDown,
  Check,
  Copy,
  Sparkle,
  WarningCircle,
} from "@phosphor-icons/react";

const WORDS_PER_MIN = 220;
const MIN_WORDS = 250; // hide the card on very short posts
const STORAGE_VERSION = "v2";

// Sanity PortableText -> plain text. Headings are marked so the model sees structure.
const toPlainText = (body) =>
  (body || [])
    .filter((b) => b?._type === "block")
    .map((b) => {
      const t = (b.children || []).map((s) => s.text || "").join("").trim();
      if (!t) return "";
      return /^h[1-4]$/.test(b.style || "") ? `## ${t}` : t;
    })
    .filter(Boolean)
    .join("\n\n");

const isValidSummary = (d) =>
  d &&
  typeof d.tldr === "string" &&
  Array.isArray(d.keyPoints) &&
  d.keyPoints.every((p) => p && typeof p.detail === "string");

const KIND_LABEL = {
  service: "Service",
  industry: "Industry",
  "case-study": "Case study",
  article: "Article",
  guide: "Guide",
  page: "Page",
};

const SectionTitle = ({ children }) => (
  <h3 className="mb-3 text-sm font-semibold text-zinc-900">{children}</h3>
);

const AiSummary = ({
  postId,
  title,
  body,
  categories = [],
  relatedBlogs = [],
  className = "",
}) => {
  const reduceMotion = useReducedMotion();
  const pathname = usePathname();
  const abortRef = useRef(null);
  const cacheKey = `ai-summary:${STORAGE_VERSION}:${postId || title}`;

  const [status, setStatus] = useState("idle"); // idle | loading | done | error
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [open, setOpen] = useState(true);
  const [copied, setCopied] = useState(false);

  const text = useMemo(() => toPlainText(body), [body]);
  const words = useMemo(
    () => (text ? text.split(/\s+/).filter(Boolean).length : 0),
    [text]
  );
  const readMinutes = Math.max(1, Math.round(words / WORDS_PER_MIN));

  // Extra pages to offer the AI. The main catalog (services, case studies,
  // posts...) lives on the server in internalLinks.js and is ranked there.
  const candidates = useMemo(() => {
    const cats = (categories || []).filter((c) => c?.slug && c?.title).map((c) => ({
      url: `/blog/category/${c.slug}`,
      title: `More on ${c.title}`,
      about: `Other articles about ${c.title}`,
    }));
    const related = (relatedBlogs || [])
      .filter((b) => b?.slug?.current && b?.title)
      .map((b) => ({
        url: `/blog/${b.slug.current}`,
        title: b.title,
        about: b.excerpt || "",
      }));
    return [...cats, ...related];
  }, [categories, relatedBlogs]);

  // Restore a summary already generated this session.
  useEffect(() => {
    try {
      const saved = JSON.parse(sessionStorage.getItem(cacheKey) || "null");
      if (isValidSummary(saved)) {
        setData(saved);
        setStatus("done");
      }
    } catch {}
  }, [cacheKey]);

  useEffect(() => () => abortRef.current?.abort(), []);

  const generate = useCallback(async () => {
    abortRef.current?.abort();
    const controller = new AbortController();
    abortRef.current = controller;

    setStatus("loading");
    setError("");

    try {
      const res = await fetch("/api/blog-summary", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, text, candidates, currentPath: pathname }),
        signal: controller.signal,
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(json.error || "Couldn't generate a summary.");
      if (!isValidSummary(json)) throw new Error("Got an unexpected response. Please try again.");

      setData(json);
      setOpen(true);
      setStatus("done");
      try {
        sessionStorage.setItem(cacheKey, JSON.stringify(json));
      } catch {}
    } catch (err) {
      if (err.name === "AbortError") return;
      setError(err.message || "Couldn't generate a summary.");
      setStatus("error");
    }
  }, [title, text, candidates, pathname, cacheKey]);

  const handleCopy = async () => {
    if (!data) return;
    const points = data.keyPoints
      .map((p) => `- ${p.title ? `${p.title}: ` : ""}${p.detail}`)
      .join("\n");
    try {
      await navigator.clipboard.writeText(`${data.tldr}\n\n${points}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  };

  if (words < MIN_WORDS) return null;

  const isDone = status === "done" && data;
  const subtitle = isDone
    ? `The main points of this ${readMinutes} min read, in about 30 seconds`
    : readMinutes > 1
    ? `Get the main points of this ${readMinutes} min read in about 30 seconds`
    : "Get the main points in about 30 seconds";

  const enter = (i = 0) =>
    reduceMotion
      ? { initial: false }
      : {
          initial: { opacity: 0, y: 6 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.06 * i, duration: 0.35, ease: [0.16, 1, 0.3, 1] },
        };

  return (
    <section
      aria-label="AI summary"
      className={`relative mb-10 overflow-hidden rounded-2xl border border-[#6F36D2]/20 bg-[#6F36D2]/[0.04] ${className}`}
    >
      <span aria-hidden="true" className="absolute inset-y-0 left-0 w-1 bg-[#6F36D2]" />

      <div className="p-5 pl-6 sm:p-6 sm:pl-8">
        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-3">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#6F36D2] text-white">
              <Sparkle size={18} weight="fill" />
            </span>
            <div>
              <h2 className="text-base font-semibold leading-tight text-zinc-900">
                AI summary
              </h2>
              <p className="mt-0.5 text-sm leading-snug text-zinc-500">{subtitle}</p>
            </div>
          </div>

          {isDone && (
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label={open ? "Hide summary" : "Show summary"}
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-zinc-500 transition-colors duration-200 hover:bg-[#6F36D2]/10 hover:text-[#6F36D2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6F36D2]"
            >
              <CaretDown
                size={18}
                weight="bold"
                className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
              />
            </button>
          )}
        </div>

        <div aria-live="polite">
          {/* Idle */}
          {status === "idle" && (
            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
              <button
                type="button"
                onClick={generate}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#6F36D2] px-5 py-3 text-sm font-medium text-white shadow-[0_1px_0_rgba(255,255,255,0.08)_inset] transition-all duration-200 hover:bg-[#7C43E0] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6F36D2] focus-visible:ring-offset-2 active:scale-[0.98]"
              >
                <Sparkle size={16} weight="fill" />
                Summarize this article
              </button>
              <span className="text-sm text-zinc-500">Takes a few seconds.</span>
            </div>
          )}

          {/* Loading */}
          {status === "loading" && (
            <div className="mt-5" role="status">
              <p className="mb-4 text-sm text-zinc-600">
                Reading the article and picking out the main points…
              </p>
              <div className="flex flex-col gap-2.5">
                {["w-full", "w-11/12", "w-2/3"].map((w, i) => (
                  <span
                    key={i}
                    className={`h-3.5 ${w} animate-pulse rounded-full bg-[#6F36D2]/15`}
                  />
                ))}
              </div>
              <div className="mt-5 flex flex-col gap-3">
                {[0, 1, 2].map((i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#6F36D2]/25" />
                    <span
                      className="h-3 animate-pulse rounded-full bg-zinc-200"
                      style={{ width: `${88 - i * 14}%` }}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Error */}
          {status === "error" && (
            <div className="mt-5 flex flex-col gap-3 rounded-xl border border-red-200 bg-red-50 p-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="flex items-start gap-2 text-sm text-red-700">
                <WarningCircle size={18} weight="bold" className="mt-0.5 shrink-0" />
                {error}
              </p>
              <button
                type="button"
                onClick={generate}
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg border border-red-200 bg-white px-4 py-2 text-sm font-medium text-red-700 transition-colors duration-200 hover:bg-red-100"
              >
                <ArrowClockwise size={16} weight="bold" />
                Try again
              </button>
            </div>
          )}

          {/* Result */}
          <AnimatePresence initial={false}>
            {isDone && open && (
              <motion.div
                key="content"
                initial={reduceMotion ? false : { height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={reduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden"
              >
                {/* The short version */}
                <div className="mt-5 rounded-xl border border-[#6F36D2]/15 bg-white p-4 sm:p-5">
                  <p className="mb-1.5 text-sm font-semibold text-[#6F36D2]">
                    The short version
                  </p>
                  <p className="text-base font-medium leading-relaxed text-zinc-900 sm:text-lg">
                    {data.tldr}
                  </p>
                </div>

                {/* Key points */}
                <div className="mt-6">
                  <SectionTitle>What to know</SectionTitle>
                  <ul className="flex flex-col gap-4">
                    {data.keyPoints.map((point, i) => (
                      <motion.li
                        key={i}
                        {...enter(i)}
                        className="flex items-start gap-3"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#6F36D2]"
                        />
                        <div className="text-sm leading-relaxed text-zinc-600 sm:text-base">
                          {point.title && (
                            <p className="font-semibold text-zinc-900">{point.title}</p>
                          )}
                          <p>{point.detail}</p>
                        </div>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Plain-English terms */}
                {data.terms?.length > 0 && (
                  <div className="mt-6 rounded-xl bg-white/70 p-4 ring-1 ring-zinc-200/70">
                    <SectionTitle>Terms in plain English</SectionTitle>
                    <dl className="flex flex-col gap-2.5 text-sm leading-relaxed">
                      {data.terms.map((t) => (
                        <div key={t.term}>
                          <dt className="inline font-semibold text-zinc-900">{t.term}</dt>
                          <dd className="inline text-zinc-600">: {t.meaning}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                )}

                {/* Internal links */}
                {data.links?.length > 0 && (
                  <div className="mt-6">
                    <SectionTitle>Want to go deeper?</SectionTitle>
                    <ul className="flex flex-col gap-2">
                      {data.links.map((link) => (
                        <li key={link.url}>
                          <Link
                            href={link.url}
                            className="group flex items-center justify-between gap-4 rounded-xl border border-zinc-200 bg-white px-4 py-3 transition-colors duration-200 hover:border-[#6F36D2]/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6F36D2]"
                          >
                            <span className="min-w-0">
                              <span className="flex items-center gap-2">
                                <span className="truncate text-sm font-semibold text-zinc-900 transition-colors duration-200 group-hover:text-[#6F36D2]">
                                  {link.title}
                                </span>
                                {link.kind && (
                                  <span className="shrink-0 rounded-full bg-[#6F36D2]/10 px-2 py-0.5 text-xs font-medium text-[#6F36D2]">
                                    {KIND_LABEL[link.kind] || "Page"}
                                  </span>
                                )}
                              </span>
                              {link.reason && (
                                <span className="mt-0.5 block text-sm leading-snug text-zinc-500">
                                  {link.reason}
                                </span>
                              )}
                            </span>
                            <ArrowUpRight
                              size={18}
                              weight="bold"
                              className="shrink-0 text-zinc-400 transition-colors duration-200 group-hover:text-[#6F36D2]"
                            />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Footer */}
                <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-[#6F36D2]/10 pt-4">
                  <p className="text-xs text-zinc-500">
                    Written by AI, so it can make mistakes. The full article below
                    has the details.
                  </p>
                  <button
                    type="button"
                    onClick={handleCopy}
                    className="inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-medium text-[#6F36D2] transition-colors duration-200 hover:bg-[#6F36D2]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6F36D2]"
                  >
                    {copied ? <Check size={16} weight="bold" /> : <Copy size={16} weight="bold" />}
                    {copied ? "Copied" : "Copy summary"}
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default AiSummary;