"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  Anchor,
  ArrowCounterClockwise,
  Article,
  ChatTeardropDots,
  Compass,
  PaperPlaneRight,
  Question,
  ThumbsDown,
  ThumbsUp,
  WarningCircle,
  X,
} from "@phosphor-icons/react";
import { loadKnowledge, retrieve } from "@/lib/assistantKnowledge.client";
import { ASSISTANT_NAME, SUGGESTED_PROMPTS } from "./constants";

/*
 * Shape system: interactive = full pill, containers = 20px, bubbles = 18px.
 * Accent: #6f36d2 (site purple) only. Theme: dark only, matches site shell (bg-black).
 * Z-index: FAB 45, panel 50 (site FABs sit at 40).
 */

const SPRING = { type: "spring", stiffness: 260, damping: 26 };
const NUDGE_KEY = "bt-assistant-nudge-seen";

const PROMPT_ICONS = { compass: Compass, article: Article, question: Question };
const SOURCE_ICONS = { "case-study": Article, faq: Question, page: Compass };

export default function Assistant() {
  const reduce = useReducedMotion();

  const [open, setOpen] = useState(false);
  const [sync, setSync] = useState("idle"); // idle | syncing | ready
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [thinking, setThinking] = useState(false);
  const [showNudge, setShowNudge] = useState(false);

  const knowledge = useRef(null);
  const scrollRef = useRef(null);
  const inputRef = useRef(null);
  const fabRef = useRef(null);
  // First open: load case studies and FAQs (IndexedDB first, network at most daily).
  useEffect(() => {
    if (!open || sync !== "idle") return;
    setSync("syncing");
    loadKnowledge()
      .then((k) => {
        knowledge.current = k;
      })
      .catch(() => {}) // no knowledge: the assistant still answers and points to the team
      .finally(() => setSync("ready"));
  }, [open, sync]);

  // Nudge once per session, only while the panel is closed.
  useEffect(() => {
    if (open) return;
    let seen = false;
    try {
      seen = sessionStorage.getItem(NUDGE_KEY) === "1";
    } catch {}
    if (seen) return;
    const t = setTimeout(() => setShowNudge(true), 4500);
    return () => clearTimeout(t);
  }, [open]);

  const dismissNudge = useCallback(() => {
    setShowNudge(false);
    try {
      sessionStorage.setItem(NUDGE_KEY, "1");
    } catch {}
  }, []);

  useEffect(() => {
    if (open) dismissNudge();
  }, [open, dismissNudge]);

  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTo({ top: el.scrollHeight, behavior: reduce ? "auto" : "smooth" });
  }, [messages, thinking, reduce]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
        fabRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const ask = useCallback(
    async (text) => {
      const q = text.trim();
      if (!q || thinking || sync !== "ready") return;
      const history = messages
        .filter((m) => m.role === "user" || m.role === "bot")
        .map((m) => ({ role: m.role, text: m.text }));
      setMessages((m) => [...m, { id: `u${Date.now()}`, role: "user", text: q }]);
      setInput("");
      setThinking(true);
      try {
        const docIds = knowledge.current ? retrieve(knowledge.current, q) : [];
        const res = await fetch("/api/assistant/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ question: q, history, docIds }),
        });
        const data = await res.json().catch(() => ({}));
        if (!res.ok) throw Object.assign(new Error(data.error), { status: res.status });
        setMessages((m) => [
          ...m,
          { id: `b${Date.now()}`, role: "bot", text: data.answer, sources: data.sources || [] },
        ]);
      } catch (err) {
        setMessages((m) => [
          ...m,
          {
            id: `e${Date.now()}`,
            role: "error",
            question: q,
            detail:
              err?.status === 429
                ? err.message
                : "Our AI provider is busy right now. Try once more.",
          },
        ]);
      } finally {
        setThinking(false);
      }
    },
    [thinking, sync, messages],
  );

  const retry = (errorMsg) => {
    setMessages((m) => {
      const i = m.findIndex((x) => x.id === errorMsg.id);
      return m.slice(0, Math.max(0, i - 1)); // drop failed question and error; ask() re-adds it
    });
    // let state flush so history excludes the failed turn
    setTimeout(() => ask(errorMsg.question), 0);
  };

  const reset = () => {
    setMessages([]);
    setThinking(false);
    setInput("");
  };

  const onSubmit = (e) => {
    e.preventDefault();
    ask(input);
  };

  const empty = messages.length === 0 && !thinking;

  return (
    <div data-assistant-proto>
      {/* Nudge */}
      <AnimatePresence>
        {showNudge && !open && (
          <motion.div
            initial={reduce ? false : { opacity: 0, x: 12, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 8 }}
            transition={SPRING}
            className="fixed bottom-[34px] right-24 z-[45] hidden items-center gap-1 rounded-full border border-white/10 bg-[#15121d] py-1 pl-4 pr-1 text-sm text-zinc-100 shadow-[0_12px_40px_-8px_rgba(30,10,70,0.6)] sm:flex"
          >
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="py-1.5 pr-2 text-left hover:text-white"
            >
              Ask {ASSISTANT_NAME} about our work
            </button>
            <button
              type="button"
              onClick={dismissNudge}
              aria-label="Dismiss"
              className="flex h-8 w-8 items-center justify-center rounded-full text-zinc-400 transition hover:bg-white/10 hover:text-white"
            >
              <X size={14} weight="bold" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FAB */}
      <motion.button
        ref={fabRef}
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? `Close ${ASSISTANT_NAME}` : `Open ${ASSISTANT_NAME}, our AI assistant`}
        aria-expanded={open}
        aria-controls="assistant-panel"
        whileHover={reduce ? undefined : { scale: 1.06 }}
        whileTap={reduce ? undefined : { scale: 0.94 }}
        transition={SPRING}
        className="fixed bottom-6 right-5 z-[45] flex h-[60px] w-[60px] items-center justify-center rounded-full bg-[#6f36d2] text-white shadow-[0_14px_36px_-6px_rgba(80,33,157,0.7),inset_0_1px_0_rgba(255,255,255,0.28)] transition-colors hover:bg-[#7d46dd] sm:bottom-7 sm:right-7"
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={open ? "x" : "chat"}
            initial={reduce ? false : { rotate: -60, opacity: 0, scale: 0.7 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={reduce ? undefined : { rotate: 60, opacity: 0, scale: 0.7 }}
            transition={{ duration: 0.18 }}
            className="flex"
          >
            {open ? <X size={26} weight="bold" /> : <ChatTeardropDots size={28} weight="fill" />}
          </motion.span>
        </AnimatePresence>
      </motion.button>

      {/* Panel */}
      <AnimatePresence>
        {open && (
          <motion.section
            id="assistant-panel"
            role="dialog"
            aria-label={`${ASSISTANT_NAME}, Burhani Technologies assistant`}
            initial={reduce ? false : { opacity: 0, scale: 0.92, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={reduce ? undefined : { opacity: 0, scale: 0.94, y: 12 }}
            transition={SPRING}
            style={{ transformOrigin: "bottom right" }}
            className="fixed inset-0 z-50 flex flex-col overflow-hidden border-white/10 bg-[#0d0c12] text-zinc-100 sm:inset-auto sm:bottom-[100px] sm:right-7 sm:h-[min(640px,calc(100dvh-11.5rem))] sm:w-[400px] sm:rounded-[20px] sm:border sm:shadow-[0_30px_90px_-12px_rgba(30,10,70,0.75),inset_0_1px_0_rgba(255,255,255,0.08)]"
          >
            <Header onReset={reset} onClose={() => setOpen(false)} canReset={messages.length > 0} />
            <SyncStrip state={sync} />

            <div
              ref={scrollRef}
              className="flex-1 space-y-4 overflow-y-auto overscroll-contain px-4 py-5 [scrollbar-color:rgba(255,255,255,0.22)_transparent] [scrollbar-width:thin]"
              aria-live="polite"
              aria-busy={thinking}
            >
              {empty && <Welcome onPick={ask} disabled={sync !== "ready"} />}

              {messages.map((m) => (
                <Message key={m.id} m={m} reduce={reduce} onRetry={() => retry(m)} />
              ))}

              {thinking && <Thinking />}
            </div>

            <form onSubmit={onSubmit} className="border-t border-white/10 bg-[#0d0c12] p-3 sm:p-4">
              <label htmlFor="assistant-input" className="sr-only">
                Ask {ASSISTANT_NAME} a question
              </label>
              <div className="flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.05] py-1.5 pl-4 pr-1.5 transition focus-within:border-[#8050d4] focus-within:bg-white/[0.07]">
                <input
                  ref={inputRef}
                  id="assistant-input"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  disabled={sync !== "ready"}
                  placeholder={sync === "ready" ? "Ask about our work or services" : "Getting ready"}
                  autoComplete="off"
                  maxLength={400}
                  className="min-w-0 flex-1 bg-transparent text-[15px] text-zinc-50 outline-none focus-visible:!outline-none placeholder:text-zinc-400 disabled:cursor-not-allowed"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || thinking || sync !== "ready"}
                  aria-label="Send message"
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#6f36d2] text-white transition hover:bg-[#7d46dd] active:scale-[0.96] disabled:bg-white/10 disabled:text-zinc-500"
                >
                  <PaperPlaneRight size={18} weight="fill" />
                </button>
              </div>
              <p className="mt-2.5 px-1 text-xs leading-relaxed text-zinc-400">
                AI can get things wrong. For a firm answer,{" "}
                <Link href="/contact" className="text-zinc-200 underline underline-offset-2 hover:text-white">
                  contact our team
                </Link>
                .
              </p>
            </form>
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
}

function Header({ onReset, onClose, canReset }) {
  return (
    <header className="flex items-center gap-3 border-b border-white/10 bg-gradient-to-b from-[#1a1426] to-[#0d0c12] px-4 py-3.5">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#6f36d2] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.3)]">
        <Anchor size={20} weight="bold" />
      </div>
      <div className="min-w-0 flex-1">
        <h2 className="text-base font-semibold leading-tight text-white">{ASSISTANT_NAME}</h2>
        <p className="truncate text-xs text-zinc-400">Website assistant from Burhani Technologies</p>
      </div>
      <button
        type="button"
        onClick={onReset}
        disabled={!canReset}
        aria-label="Start a new chat"
        className="flex h-9 w-9 items-center justify-center rounded-full text-zinc-300 transition hover:bg-white/10 hover:text-white disabled:opacity-30 disabled:hover:bg-transparent"
      >
        <ArrowCounterClockwise size={18} />
      </button>
      <button
        type="button"
        onClick={onClose}
        aria-label="Close chat"
        className="flex h-9 w-9 items-center justify-center rounded-full text-zinc-300 transition hover:bg-white/10 hover:text-white sm:hidden"
      >
        <X size={18} weight="bold" />
      </button>
    </header>
  );
}

function SyncStrip({ state }) {
  if (state === "syncing") {
    return (
      <div className="border-b border-white/10 px-4 py-2.5" role="status">
        <p className="text-xs text-zinc-300">Loading our case studies and FAQs</p>
        <div className="mt-2 h-1 overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-1/3 animate-pulse rounded-full bg-[#8050d4]" />
        </div>
      </div>
    );
  }
  return null;
}

function Welcome({ onPick, disabled }) {
  return (
    <div className="pt-4">
      <h3 className="text-2xl font-semibold leading-[1.15] tracking-tight text-white">
        Ask {ASSISTANT_NAME} about our work.
      </h3>
      <p className="mt-2 max-w-[34ch] text-[15px] leading-relaxed text-zinc-300">
        Projects we have shipped, the services we offer, and what a build looks like.
      </p>
      <div className="mt-5 flex flex-wrap gap-2">
        {SUGGESTED_PROMPTS.map((p) => {
          const Icon = PROMPT_ICONS[p.icon] ?? Question;
          return (
            <button
              key={p.id}
              type="button"
              disabled={disabled}
              onClick={() => onPick(p.label)}
              className="flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-3.5 py-2 text-sm text-zinc-100 transition hover:border-[#8050d4] hover:bg-[#6f36d2]/15 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50"
            >
              <Icon size={16} className="text-[#a98af0]" />
              {p.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function Message({ m, reduce, onRetry }) {
  const enter = reduce
    ? {}
    : { initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, transition: SPRING };

  if (m.role === "user") {
    return (
      <motion.div {...enter} className="flex justify-end">
        <p className="max-w-[85%] rounded-[18px] rounded-br-md bg-[#6f36d2] px-4 py-2.5 text-[15px] leading-relaxed text-white">
          {m.text}
        </p>
      </motion.div>
    );
  }

  if (m.role === "error") {
    return (
      <motion.div {...enter} className="flex gap-2.5">
        <BotAvatar />
        <div className="max-w-[88%] rounded-[18px] rounded-tl-md border border-red-400/30 bg-red-500/10 px-4 py-3">
          <p className="flex items-center gap-1.5 text-sm font-medium text-red-200">
            <WarningCircle size={16} weight="fill" />
            {ASSISTANT_NAME} lost signal
          </p>
          <p className="mt-1 text-sm leading-relaxed text-zinc-200">
            {m.detail}
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={onRetry}
              className="rounded-full bg-[#6f36d2] px-4 py-1.5 text-sm text-white transition hover:bg-[#7d46dd] active:scale-[0.98]"
            >
              Try again
            </button>
            <Link
              href="/contact"
              className="rounded-full border border-white/20 px-4 py-1.5 text-sm text-zinc-100 transition hover:bg-white/10"
            >
              Contact the team
            </Link>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div {...enter} className="flex gap-2.5">
      <BotAvatar />
      <div className="min-w-0 max-w-[88%]">
        <p className="rounded-[18px] rounded-tl-md border border-white/10 bg-white/[0.05] px-4 py-3 text-[15px] leading-relaxed text-zinc-100">
          {m.text}
        </p>
        {m.sources?.length > 0 && (
          <div className="mt-2.5">
            <p className="mb-1.5 px-1 text-xs text-zinc-400">From our site</p>
            <ul className="flex flex-wrap gap-1.5">
              {m.sources.map((s) => {
                const Icon = SOURCE_ICONS[s.kind] ?? Article;
                return (
                  <li key={s.id}>
                    {s.href ? (
                      <Link
                        href={s.href}
                        className="flex max-w-full items-center gap-1.5 rounded-full border border-white/15 px-3 py-1.5 text-xs text-zinc-200 transition hover:border-[#8050d4] hover:text-white"
                      >
                        <Icon size={14} className="shrink-0 text-[#a98af0]" />
                        <span className="truncate">{s.title}</span>
                      </Link>
                    ) : (
                      <span className="flex max-w-full items-center gap-1.5 rounded-full border border-white/15 px-3 py-1.5 text-xs text-zinc-300">
                        <Icon size={14} className="shrink-0 text-[#a98af0]" />
                        <span className="truncate">{s.title}</span>
                      </span>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
        <Feedback />
      </div>
    </motion.div>
  );
}

function Feedback() {
  const [vote, setVote] = useState(null);
  const base =
    "flex h-8 w-8 items-center justify-center rounded-full text-zinc-400 transition hover:bg-white/10 hover:text-white";
  return (
    <div className="mt-1.5 flex gap-0.5">
      <button
        type="button"
        aria-label="Helpful answer"
        aria-pressed={vote === "up"}
        onClick={() => setVote(vote === "up" ? null : "up")}
        className={`${base} ${vote === "up" ? "!text-[#a98af0]" : ""}`}
      >
        <ThumbsUp size={16} weight={vote === "up" ? "fill" : "regular"} />
      </button>
      <button
        type="button"
        aria-label="Unhelpful answer"
        aria-pressed={vote === "down"}
        onClick={() => setVote(vote === "down" ? null : "down")}
        className={`${base} ${vote === "down" ? "!text-[#a98af0]" : ""}`}
      >
        <ThumbsDown size={16} weight={vote === "down" ? "fill" : "regular"} />
      </button>
    </div>
  );
}

function BotAvatar() {
  return (
    <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#6f36d2]/25 text-[#c4aef7]">
      <Anchor size={14} weight="bold" />
    </div>
  );
}

// Skeleton shaped like the answer bubble it will become.
function Thinking() {
  return (
    <div className="flex gap-2.5" role="status" aria-label={`${ASSISTANT_NAME} is typing`}>
      <BotAvatar />
      <div className="w-[78%] animate-pulse space-y-2 rounded-[18px] rounded-tl-md border border-white/10 bg-white/[0.04] px-4 py-3.5">
        <div className="h-3 w-full rounded-full bg-white/15" />
        <div className="h-3 w-5/6 rounded-full bg-white/15" />
        <div className="h-3 w-2/3 rounded-full bg-white/15" />
      </div>
    </div>
  );
}
