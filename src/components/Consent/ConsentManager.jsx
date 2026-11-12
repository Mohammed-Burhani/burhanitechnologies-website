"use client";

import { useEffect, useId, useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { Cookie } from "@phosphor-icons/react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  ACCEPT_ALL,
  CATEGORIES,
  OPEN_PREFERENCES_EVENT,
  REJECT_ALL,
  clearGoogleAnalyticsCookies,
  getConsent,
  saveConsent,
  subscribe,
} from "@/lib/consent";
import { AnalyticsTracker, MarketingTracker } from "./Trackers";

const BUTTON =
  "inline-flex min-h-11 items-center justify-center rounded-full px-5 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b79ce8]";
const PRIMARY = `${BUTTON} bg-[#6f36d2] text-white hover:bg-[#7d46dd]`;
const SECONDARY = `${BUTTON} border border-white/30 bg-white/10 text-white hover:bg-white/20`;

// undefined = not known yet (server render and first client render); null = no choice made.
const useConsent = () => useSyncExternalStore(subscribe, getConsent, () => undefined);

export default function ConsentManager() {
  const consent = useConsent();
  const [preferencesOpen, setPreferencesOpen] = useState(false);

  useEffect(() => {
    const open = () => setPreferencesOpen(true);
    window.addEventListener(OPEN_PREFERENCES_EVENT, open);
    return () => window.removeEventListener(OPEN_PREFERENCES_EVENT, open);
  }, []);

  // Whenever analytics is not granted, no Google cookie may exist. Sweeping on load (rather
  // than only at the moment of withdrawal) is required because a running GA rewrites its
  // session cookie while the page unloads. It also removes cookies left over from visitors
  // who accepted statistics under the previous consent tool.
  useEffect(() => {
    if (consent !== undefined && !consent?.analytics) clearGoogleAnalyticsCookies();
  }, [consent]);

  if (consent === undefined) return null;

  function commit(choices) {
    const previous = getConsent();
    saveConsent(choices);
    setPreferencesOpen(false);

    // Scripts that are already running cannot be unloaded, so withdrawing consent
    // restarts the page without them.
    const withdrawn =
      (previous?.analytics && !choices.analytics) || (previous?.marketing && !choices.marketing);
    if (withdrawn) window.location.reload();
  }

  return (
    <>
      {consent?.analytics && <AnalyticsTracker />}
      {consent?.marketing && <MarketingTracker />}

      {consent === null && !preferencesOpen && (
        <section
          aria-label="Cookie consent"
          className="fixed inset-x-4 bottom-4 z-[60] rounded-[20px] border border-white/15 bg-[#0d0c12] p-5 text-zinc-100 shadow-[0_30px_90px_-12px_rgba(30,10,70,0.75)] motion-safe:animate-in motion-safe:fade-in-0 motion-safe:slide-in-from-bottom-4 sm:inset-x-auto sm:bottom-6 sm:left-6 sm:max-w-[26rem]"
        >
          <h2 className="text-base font-semibold text-white">Your cookie choices</h2>
          <p className="mt-2 text-sm leading-relaxed text-zinc-300">
            We always use the cookies that keep the site working and the contact form safe. With your
            permission we also use analytics and marketing cookies to see which pages are read. Nothing
            optional loads until you choose. See our{" "}
            <Link href="/privacy-policy" className="underline underline-offset-4 hover:text-white">
              privacy policy
            </Link>
            .
          </p>
          <div className="mt-4 grid grid-cols-2 gap-3">
            <button type="button" className={SECONDARY} onClick={() => commit(REJECT_ALL)}>
              Reject all
            </button>
            <button type="button" className={PRIMARY} onClick={() => commit(ACCEPT_ALL)}>
              Accept all
            </button>
          </div>
          <button
            type="button"
            onClick={() => setPreferencesOpen(true)}
            className="mt-3 min-h-11 w-full rounded-full text-sm font-medium text-zinc-200 underline underline-offset-4 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b79ce8]"
          >
            Choose by category
          </button>
        </section>
      )}

      {consent !== null && (
        <button
          type="button"
          onClick={() => setPreferencesOpen(true)}
          aria-label="Cookie settings"
          title="Cookie settings"
          className="fixed bottom-4 left-4 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-[#0d0c12] text-zinc-100 shadow-[0_12px_40px_-8px_rgba(30,10,70,0.6)] transition-colors hover:bg-[#1c1829] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b79ce8] sm:bottom-6 sm:left-6"
        >
          <Cookie size={22} weight="duotone" aria-hidden="true" />
        </button>
      )}

      <Dialog open={preferencesOpen} onOpenChange={setPreferencesOpen}>
        <DialogContent className="z-[70] max-h-[90dvh] overflow-y-auto rounded-[20px] border-white/15 bg-[#0d0c12] text-zinc-100 sm:max-w-lg">
          <PreferencesForm initial={consent} onCommit={commit} />
        </DialogContent>
      </Dialog>
    </>
  );
}

// Mounted only while the dialog is open, so the toggles always start from the saved choice.
function PreferencesForm({ initial, onCommit }) {
  const [choices, setChoices] = useState({
    analytics: initial?.analytics ?? false,
    marketing: initial?.marketing ?? false,
  });

  return (
    <>
      <DialogHeader>
        <DialogTitle className="text-xl text-white">Cookie settings</DialogTitle>
        <DialogDescription className="leading-relaxed text-zinc-300">
          Choose which cookies we may use. You can change this at any time from Cookie settings in the
          footer, and your choice is kept for 180 days.
        </DialogDescription>
      </DialogHeader>

      <ul className="grid gap-3">
        {CATEGORIES.map((category) => (
          <li key={category.id} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
            <CategoryRow
              category={category}
              checked={category.locked ? true : choices[category.id]}
              onChange={(value) => setChoices((current) => ({ ...current, [category.id]: value }))}
            />
          </li>
        ))}
      </ul>

      <div className="grid gap-3 sm:grid-cols-3">
        <button type="button" className={SECONDARY} onClick={() => onCommit(REJECT_ALL)}>
          Reject all
        </button>
        <button type="button" className={SECONDARY} onClick={() => onCommit(choices)}>
          Save choices
        </button>
        <button type="button" className={PRIMARY} onClick={() => onCommit(ACCEPT_ALL)}>
          Accept all
        </button>
      </div>
    </>
  );
}

function CategoryRow({ category, checked, onChange }) {
  const labelId = useId();
  const descriptionId = useId();

  return (
    <div className="flex items-start justify-between gap-4">
      <div>
        <h3 id={labelId} className="text-sm font-semibold text-white">
          {category.label}
        </h3>
        <p id={descriptionId} className="mt-1 text-sm leading-relaxed text-zinc-300">
          {category.description}
        </p>
      </div>
      {category.locked ? (
        <span className="shrink-0 pt-0.5 text-xs font-medium text-zinc-300">Always on</span>
      ) : (
        <button
          type="button"
          role="switch"
          aria-checked={checked}
          aria-labelledby={labelId}
          aria-describedby={descriptionId}
          onClick={() => onChange(!checked)}
          className={`relative mt-0.5 h-7 w-12 shrink-0 rounded-full border transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b79ce8] ${
            checked ? "border-[#6f36d2] bg-[#6f36d2]" : "border-white/40 bg-white/10"
          }`}
        >
          <span
            aria-hidden="true"
            className={`absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white transition-transform motion-reduce:transition-none ${
              checked ? "translate-x-5" : "translate-x-0"
            }`}
          />
        </button>
      )}
    </div>
  );
}
