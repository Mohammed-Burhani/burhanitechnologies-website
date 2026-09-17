"use client";

import Link from "next/link";
import Container from "@/components/constants/Container";
import { ArrowRight } from "@phosphor-icons/react";

const items = [
  {
    index: "01",
    heading: "Work moving between systems by hand",
    body: "We map the steps a person repeats, then move them into software that runs on a rule and reports what it did.",
    tag: "Business process automation",
    href: "/services/business-process-automation-solutions",
  },
  {
    index: "02",
    heading: "No single version of the status",
    body: "One system that sales, production and dispatch all write into, so the status reads the same wherever you look at it.",
    tag: "ERP implementation",
    href: "/services/erp-implementation",
  },
  {
    index: "03",
    heading: "Software you have outgrown",
    body: "A system built around your process, delivered in stages so your team can review a complete workflow early.",
    tag: "Custom application development",
    href: "/services/application-development",
  },
  {
    index: "04",
    heading: "Data you cannot get an answer out of",
    body: "Dashboards built on your live operational data, so the question gets answered on screen instead of in somebody\u2019s spreadsheet.",
    tag: "Data analysis and reporting",
    href: "/services/data-analysis-and-reporting",
  },
];

const ConnectedSystems = () => {
  return (
    <section className="relative overflow-hidden border-t border-white/5 bg-[#0B0B10] py-16 lg:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 bottom-0 h-[380px] w-[380px] rounded-full bg-[#6F36D2]/[0.1] blur-[130px]"
      />

      <Container className="relative">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-semibold leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl">
            Connect the work across your business
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-zinc-400 sm:text-base">
            We have been building business software since 2010. Applications,
            shared records and automation work together to reduce repeated
            entry and make the next decision clearer.
          </p>
        </div>

        {/* Connected sequence: each answer maps 1:1 to a pain point above, so the
           list itself carries that thread instead of four disconnected cards */}
        <div className="relative mt-12 lg:mt-16">
          <div
            aria-hidden="true"
            className="absolute left-[27px] top-3 hidden h-[calc(100%-2rem)] w-px bg-gradient-to-b from-[#6F36D2]/60 via-white/10 to-transparent sm:block lg:left-[31px]"
          />

          <div className="flex flex-col">
            {items.map((item, i) => (
              <Link
                key={item.heading}
                href={item.href}
                className="group relative flex flex-col gap-4 border-t border-white/5 py-8 first:border-t-0 first:pt-0 sm:flex-row sm:items-start sm:gap-8 lg:py-10"
              >
                <div className="relative z-10 flex shrink-0 items-center gap-4 sm:flex-col sm:items-center sm:gap-0">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-white/10 bg-[#0B0B10] font-inter text-sm font-semibold text-zinc-500 transition-colors duration-300 group-hover:border-[#6F36D2]/60 group-hover:text-[#B79CE8] lg:h-16 lg:w-16">
                    {item.index}
                  </span>
                </div>

                <div className="flex flex-1 flex-col gap-3 sm:pt-1">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <h3 className="text-xl font-semibold text-white transition-colors duration-200 group-hover:text-[#B79CE8] sm:text-2xl">
                      {item.heading}
                    </h3>
                    <span className="inline-flex items-center rounded-full border border-white/10 px-3 py-1 font-inter text-smallText font-medium text-zinc-400 transition-colors duration-200 group-hover:border-[#6F36D2]/30 group-hover:text-[#B79CE8]">
                      {item.tag}
                    </span>
                  </div>

                  <p className="max-w-2xl text-sm leading-relaxed text-zinc-400 sm:text-base">
                    {item.body}
                  </p>

                  <span className="mt-1 inline-flex w-fit items-center gap-1.5 text-sm font-medium text-zinc-500 transition-colors duration-200 group-hover:text-[#B79CE8]">
                    See how it works
                    <ArrowRight
                      size={16}
                      weight="bold"
                      className="transition-transform duration-200 group-hover:translate-x-1"
                    />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ConnectedSystems;