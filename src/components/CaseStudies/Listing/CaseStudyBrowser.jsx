"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, FolderOpen } from "@phosphor-icons/react";

import Container from "@/components/constants/Container";
import Reveal from "@/components/contact/Reveal";
import Bezel from "./Bezel";
import CaseStudyCard from "./CaseStudyCard";
import FeaturedCaseStudy from "./FeaturedCaseStudy";
import { EASE_CLASS, planGridSpans } from "./caseStudyMeta";

const ALL = "all";

const chipBase = `inline-flex shrink-0 snap-start items-center gap-2 rounded-full px-4 py-2 font-inter text-sm font-medium outline-none transition-colors duration-300 ${EASE_CLASS} focus-visible:ring-2 focus-visible:ring-[#6F36D2] focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-50 active:scale-[0.98]`;
const chipActive = "bg-[#6F36D2] text-white";
const chipIdle =
  "bg-white text-zinc-700 ring-1 ring-inset ring-zinc-200 hover:text-[#6F36D2] hover:ring-[#6F36D2]/40";

const EmptyState = () => (
  <Reveal>
    <Bezel coreClassName="flex flex-col items-center gap-5 px-6 py-16 text-center sm:px-14">
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#6F36D2]/[0.06] text-[#6F36D2] ring-1 ring-inset ring-[#6F36D2]/20">
        <FolderOpen size={26} weight="regular" aria-hidden="true" />
      </span>
      <h2 className="font-inter text-2xl font-semibold tracking-tight text-zinc-900">
        No case studies published yet
      </h2>
      <p className="max-w-md font-inter text-base leading-relaxed text-zinc-600">
        Our delivered projects will be listed here as they are published. In the
        meantime, you can see the kinds of systems we build.
      </p>
      <Link
        href="/services"
        className={`group inline-flex items-center justify-center gap-2 rounded-lg border border-zinc-300 px-5 py-3 font-inter text-sm font-medium text-zinc-800 transition-colors duration-300 ${EASE_CLASS} hover:border-[#6F36D2]/50 hover:text-[#6F36D2] active:scale-[0.98] sm:text-base`}
      >
        See what we build
        <ArrowUpRight size={16} weight="bold" aria-hidden="true" />
      </Link>
    </Bezel>
  </Reveal>
);

export default function CaseStudyBrowser({ studies }) {
  const [active, setActive] = useState(ALL);

  const industries = useMemo(() => {
    const counts = new Map();
    studies.forEach((study) => {
      if (!study.industry) return;
      counts.set(study.industry, (counts.get(study.industry) ?? 0) + 1);
    });
    return Array.from(counts, ([label, count]) => ({ label, count }));
  }, [studies]);

  // If the active industry vanished (data refresh), fall back to everything.
  const filter = industries.some((item) => item.label === active) ? active : ALL;

  const featured = useMemo(
    () => studies.find((study) => study.featured) ?? studies[0],
    [studies],
  );

  const view = useMemo(() => {
    if (filter === ALL) {
      return {
        spotlight: featured,
        badge: featured?.featured ? "Featured case study" : "Latest case study",
        list: studies.filter((study) => study !== featured),
      };
    }
    const matches = studies.filter((study) => study.industry === filter);
    // A single match is shown as the full-width spotlight, never a lone card.
    return matches.length === 1
      ? { spotlight: matches[0], badge: null, list: [] }
      : { spotlight: null, badge: null, list: matches };
  }, [filter, studies, featured]);

  const spans = useMemo(() => planGridSpans(view.list.length), [view.list]);
  const total = (view.spotlight ? 1 : 0) + view.list.length;
  const showFilters = studies.length > 1 && industries.length > 1;

  return (
    <div className="bg-zinc-50 font-inter text-zinc-900">
      <Container className="relative">
        {studies.length === 0 ? (
          <EmptyState />
        ) : (
          <>
            {showFilters && (
              <Reveal>
                <h2 className="font-inter text-xl font-semibold tracking-tight text-zinc-900 sm:text-2xl">
                  Browse by industry
                </h2>
                <div
                  role="group"
                  aria-label="Filter case studies by industry"
                  className="-mx-7 mt-5 flex snap-x gap-2 overflow-x-auto px-7 pb-2 [scrollbar-width:none] sm:-mx-10 sm:px-10 xl:mx-0 xl:flex-wrap xl:overflow-visible xl:px-0 [&::-webkit-scrollbar]:hidden"
                >
                  <button
                    type="button"
                    aria-pressed={filter === ALL}
                    onClick={() => setActive(ALL)}
                    className={`${chipBase} ${filter === ALL ? chipActive : chipIdle}`}
                  >
                    All
                    <span
                      className={`text-xs ${filter === ALL ? "text-white/80" : "text-zinc-500"}`}
                    >
                      {studies.length}
                    </span>
                  </button>
                  {industries.map((item) => (
                    <button
                      key={item.label}
                      type="button"
                      aria-pressed={filter === item.label}
                      onClick={() => setActive(item.label)}
                      className={`${chipBase} ${filter === item.label ? chipActive : chipIdle}`}
                    >
                      {item.label}
                      <span
                        className={`text-xs ${filter === item.label ? "text-white/80" : "text-zinc-500"}`}
                      >
                        {item.count}
                      </span>
                    </button>
                  ))}
                </div>
              </Reveal>
            )}

            <p className="sr-only" role="status" aria-live="polite">
              Showing {total} {total === 1 ? "case study" : "case studies"}
            </p>

            {/* Keyed on the filter so the reveal replays when the set changes */}
            <div key={filter} className={showFilters ? "mt-8 sm:mt-10" : ""}>
              {view.spotlight && (
                <Reveal>
                  <FeaturedCaseStudy
                    study={view.spotlight}
                    badge={view.badge}
                  />
                </Reveal>
              )}

              {view.list.length > 0 && (
                <div
                  className={`grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-12 lg:gap-6 ${
                    view.spotlight ? "mt-5 lg:mt-6" : ""
                  }`}
                >
                  {view.list.map((study, index) => {
                    const orphan =
                      view.list.length % 2 === 1 &&
                      index === view.list.length - 1;
                    return (
                      <Reveal
                        key={study.id}
                        delay={(index % 3) * 0.08}
                        className={`${spans[index]} ${orphan ? "sm:max-lg:col-span-2" : ""}`}
                      >
                        <CaseStudyCard
                          study={study}
                          wideOnTablet={orphan}
                          wide={spans[index] === "lg:col-span-7"}
                        />
                      </Reveal>
                    );
                  })}
                </div>
              )}
            </div>
          </>
        )}
      </Container>
    </div>
  );
}
