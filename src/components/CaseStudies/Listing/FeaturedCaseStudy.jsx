import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";

import Bezel from "./Bezel";
import { EASE_CLASS, industryIcon } from "./caseStudyMeta";

/**
 * Full-width spotlight for one case study. Used for the latest (or flagged)
 * study on the unfiltered view, and for a filter that matches a single study.
 * The CTA is a stretched link so the whole card is one hit target.
 */
export default function FeaturedCaseStudy({ study, badge }) {
  const Icon = industryIcon(study.industry);

  return (
    <article className="group relative">
      <Bezel dark className="bg-zinc-900/[0.06]" coreClassName="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(520px_circle_at_0%_0%,rgba(111,54,210,0.28),transparent_62%)]"
        />

        <div className="relative grid grid-cols-1 gap-8 p-3 sm:p-4 lg:grid-cols-[1fr_1.05fr] lg:items-stretch lg:gap-10">
          <div className="order-2 flex flex-col justify-center px-3 pb-4 sm:px-4 lg:order-1 lg:py-8 lg:pl-8 lg:pr-0">
            {badge && (
              <span className="mb-5 inline-flex w-fit items-center rounded-full bg-white/[0.06] px-3 py-1 font-inter text-xs font-medium text-[#B79CE8] ring-1 ring-inset ring-white/10">
                {badge}
              </span>
            )}

            {study.industry && (
              <p className="flex items-center gap-2 font-inter text-sm font-medium text-[#B79CE8]">
                <Icon size={18} weight="bold" aria-hidden="true" />
                {study.industry}
              </p>
            )}

            <h2 className="mt-3 font-inter text-2xl font-semibold leading-tight tracking-tight text-white sm:text-3xl xl:text-[2.25rem]">
              {study.title}
            </h2>

            {study.excerpt && (
              <p className="mt-4 max-w-[52ch] font-inter text-base leading-relaxed text-zinc-300">
                {study.excerpt}
              </p>
            )}

            {study.client && (
              <p className="mt-6 max-w-[44ch] border-l-2 border-[#6F36D2]/50 pl-3 font-inter text-sm leading-snug text-zinc-400">
                {study.client}
              </p>
            )}

            <div className="mt-8">
              <Link
                href={`/case-studies/${study.slug}`}
                className={`inline-flex items-center justify-center gap-3 rounded-lg bg-[#6F36D2] py-2.5 pl-5 pr-2.5 font-inter text-sm font-medium text-white shadow-[0_1px_0_rgba(255,255,255,0.08)_inset] outline-none transition duration-500 ${EASE_CLASS} after:absolute after:inset-0 after:content-[''] hover:bg-[#7C43E0] focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#14141B] active:scale-[0.98] sm:text-base`}
              >
                Read the case study
                <span
                  className={`flex h-8 w-8 items-center justify-center rounded-full bg-white/15 transition-transform duration-500 ${EASE_CLASS} group-hover:scale-105`}
                >
                  <ArrowUpRight
                    size={16}
                    weight="bold"
                    aria-hidden="true"
                    className={`transition-transform duration-500 ${EASE_CLASS} group-hover:-translate-y-px group-hover:translate-x-0.5 motion-reduce:transition-none`}
                  />
                </span>
              </Link>
            </div>
          </div>

          <div className="relative order-1 aspect-[4/3] overflow-hidden rounded-[1.375rem] bg-[#0B0B10] lg:order-2 lg:aspect-auto lg:min-h-[420px]">
            {study.image ? (
              <Image
                src={study.image}
                alt={`${study.title} case study`}
                fill
                sizes="(min-width: 1024px) 52vw, 100vw"
                className={`object-cover transition-transform duration-700 ${EASE_CLASS} group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100`}
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-[radial-gradient(320px_circle_at_70%_0%,rgba(111,54,210,0.4),transparent_70%)]">
                <Icon
                  size={72}
                  weight="light"
                  className="text-[#B79CE8]"
                  aria-hidden="true"
                />
              </div>
            )}
            <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0_1px_1px_rgba(255,255,255,0.12)]" />
          </div>
        </div>
      </Bezel>
    </article>
  );
}
