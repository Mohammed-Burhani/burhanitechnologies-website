import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";

import Bezel from "./Bezel";
import { EASE_CLASS, industryIcon } from "./caseStudyMeta";

/**
 * Listing card. `wideOnTablet` lays the card out as image + text between the
 * 640px and 1023px breakpoints, used when it is the last card of an odd count
 * and spans both columns so the two-column grid never ends on a gap.
 * `wide` is for the 7-column desktop slot: a flatter image keeps its height
 * close to the 5-column card beside it so the row has no dead space.
 */
export default function CaseStudyCard({
  study,
  wideOnTablet = false,
  wide = false,
}) {
  const Icon = industryIcon(study.industry);

  return (
    <Link
      href={`/case-studies/${study.slug}`}
      className={`group block h-full rounded-[2rem] outline-none focus-visible:ring-2 focus-visible:ring-[#6F36D2] focus-visible:ring-offset-4 focus-visible:ring-offset-zinc-50`}
    >
      <Bezel
        className={`h-full transition-[box-shadow,transform] duration-500 ${EASE_CLASS} group-hover:-translate-y-1 group-hover:ring-[#6F36D2]/30 motion-reduce:transition-none motion-reduce:group-hover:translate-y-0`}
        coreClassName={`flex flex-col p-2 ${
          wideOnTablet ? "sm:max-lg:flex-row" : ""
        }`}
      >
        <div
          className={`relative aspect-[4/3] w-full shrink-0 overflow-hidden rounded-[1.125rem] bg-[#14141B] ${
            wide ? "lg:aspect-[16/10]" : ""
          } ${wideOnTablet ? "sm:max-lg:aspect-auto sm:max-lg:w-[42%]" : ""}`}
        >
          {study.image ? (
            <Image
              src={study.image}
              alt={`${study.title} case study`}
              fill
              sizes="(min-width: 1023px) 40vw, (min-width: 640px) 50vw, 100vw"
              className={`object-cover transition-transform duration-700 ${EASE_CLASS} group-hover:scale-[1.04] motion-reduce:transition-none motion-reduce:group-hover:scale-100`}
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-[radial-gradient(260px_circle_at_70%_0%,rgba(111,54,210,0.35),transparent_70%)]">
              <Icon
                size={56}
                weight="light"
                className="text-[#B79CE8]"
                aria-hidden="true"
              />
            </div>
          )}
          <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0_1px_1px_rgba(255,255,255,0.12)]" />
        </div>

        <div className="flex flex-1 flex-col p-4 sm:p-5">
          {study.industry && (
            <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-[#6F36D2]/[0.07] px-2.5 py-1 font-inter text-xs font-medium text-[#6F36D2] ring-1 ring-inset ring-[#6F36D2]/15">
              <Icon size={14} weight="bold" aria-hidden="true" />
              {study.industry}
            </span>
          )}

          <h3 className="mt-4 font-inter text-lg font-semibold leading-snug tracking-tight text-zinc-900 transition-colors duration-300 group-hover:text-[#6F36D2] sm:text-xl">
            {study.title}
          </h3>

          {study.excerpt && (
            <p className="mt-3 line-clamp-3 font-inter text-sm leading-relaxed text-zinc-600">
              {study.excerpt}
            </p>
          )}

          <div className="mt-auto flex items-end justify-between gap-4 pt-6">
            <p className="line-clamp-2 max-w-[28ch] font-inter text-xs leading-relaxed text-zinc-500">
              {study.client}
            </p>
            <span
              className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-zinc-900/[0.05] text-zinc-700 transition-colors duration-500 ${EASE_CLASS} group-hover:bg-[#6F36D2] group-hover:text-white`}
            >
              <ArrowUpRight
                size={16}
                weight="bold"
                aria-hidden="true"
                className={`transition-transform duration-500 ${EASE_CLASS} group-hover:-translate-y-px group-hover:translate-x-0.5 motion-reduce:transition-none`}
              />
              <span className="sr-only">Read the case study</span>
            </span>
          </div>
        </div>
      </Bezel>
    </Link>
  );
}
