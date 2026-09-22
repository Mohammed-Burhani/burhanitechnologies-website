"use client";

import Link from "next/link";
import Container from "@/components/constants/Container";
import { ArrowUpRight, Database, FlowArrow } from "@phosphor-icons/react";

const secondary = [
  {
    icon: Database,
    heading: "Our departments do not agree on the numbers",
    body: "One system that sales, production, stores and dispatch all write into.",
    tag: "ERP implementation",
    href: "/services/erp-implementation",
  },
  {
    icon: FlowArrow,
    heading: "My team spends its week on manual work",
    body: "Connect document capture, routing and human review around the work your team repeats.",
    tag: "Business process automation",
    href: "/services/business-process-automation-solutions",
  },
];

const ChooseTheWork = () => {
  return (
    <section className="relative overflow-hidden bg-white py-16 sxl:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(111,54,210,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(111,54,210,0.08) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse 70% 55% at 85% 15%, black 30%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 55% at 85% 15%, black 30%, transparent 100%)",
        }}
      />

      <Container className="relative">
        <h2 className="max-w-2xl text-2xl font-semibold leading-tight tracking-tight text-zinc-900 sm:text-3xl lg:text-4xl">
          Choose the work you need to improve
        </h2>

        {/* Asymmetric bento: the photo-led tile carries the third choice so the
           grid reads as one composition, not three repeated bordered cards */}
        <div className="mt-10 grid grid-cols-1 gap-5 lg:mt-14 lg:grid-cols-2 lg:gap-6">
          <Link
            href="/services/application-development"
            className="group relative flex min-h-[320px] flex-col justify-end overflow-hidden rounded-2xl lg:row-span-2"
          >
            <img
              src="https://picsum.photos/seed/burhani-custom-build-review/900/1100"
              alt=""
              aria-hidden="true"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B10]/95 via-[#0B0B10]/50 to-transparent" />
            <div className="relative flex flex-col gap-3 p-6 sm:p-8">
              <h3 className="text-xl font-semibold leading-snug text-white sm:text-2xl">
                The software we have cannot handle what we do now
              </h3>
              <p className="text-sm leading-relaxed text-zinc-300 sm:text-base">
                A system built around your process, delivered in stages.
              </p>
              <span className="mt-1 inline-flex w-fit items-center gap-1.5 text-sm font-medium text-[#B79CE8] transition-colors duration-200 group-hover:text-white">
                Custom software development
                <ArrowUpRight
                  size={14}
                  weight="bold"
                  className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </span>
            </div>
          </Link>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-1 lg:gap-6">
            {secondary.map((choice) => {
              const Icon = choice.icon;
              return (
                <Link
                  key={choice.href}
                  href={choice.href}
                  className="group flex flex-col gap-3 rounded-2xl border-l-2 border-[#6F36D2]/30 bg-zinc-50 p-6 transition-colors duration-300 hover:border-[#6F36D2] hover:bg-[#6F36D2]/[0.04] sm:p-7"
                >
                  <Icon
                    size={22}
                    weight="bold"
                    className="text-[#6F36D2]"
                  />
                  <h3 className="text-lg font-semibold leading-snug text-zinc-900">
                    {choice.heading}
                  </h3>
                  <p className="text-sm leading-relaxed text-zinc-500">
                    {choice.body}
                  </p>
                  <span className="mt-auto inline-flex w-fit items-center gap-1.5 pt-1 text-sm font-medium text-zinc-400 transition-colors duration-200 group-hover:text-[#6F36D2]">
                    {choice.tag}
                    <ArrowUpRight
                      size={14}
                      weight="bold"
                      className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ChooseTheWork;
