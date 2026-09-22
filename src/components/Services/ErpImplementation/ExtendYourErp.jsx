"use client";

import Link from "next/link";
import Container from "@/components/constants/Container";
import { ArrowUpRight, Stack, ArrowsClockwise, ChartBar } from "@phosphor-icons/react";

const secondary = [
  {
    icon: ArrowsClockwise,
    heading: "Integration Services",
    body: "Keep records moving between Tally, SAP, Salesforce and your internal software.",
    href: "/services/integration-services",
  },
  {
    icon: ChartBar,
    heading: "Data Analysis & Reporting",
    body: "Bring operational records into dashboards and reports your team can use.",
    href: "/services/data-analysis-and-reporting",
  },
];

const ExtendYourErp = () => {
  return (
    <section className="relative overflow-hidden bg-white py-16 sxl:py-24">
      <Container>
        <h2 className="max-w-2xl text-2xl font-semibold leading-tight tracking-tight text-zinc-900 sm:text-3xl lg:text-4xl">
          Extend your ERP around the work it supports
        </h2>

        {/* Asymmetric bento with a solid accent-tinted feature panel rather
           than a photo tile, so this composition reads differently from the
           equivalent bento on the services hub */}
        <div className="mt-10 grid grid-cols-1 gap-5 lg:mt-14 lg:grid-cols-2 lg:gap-6">
          <Link
            href="/services/line-of-business-lob-applications"
            className="group relative flex min-h-[280px] flex-col justify-between overflow-hidden rounded-2xl bg-[#0B0B10] p-7 transition-transform duration-300 hover:-translate-y-1 sm:p-8 lg:row-span-2"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full bg-[#6F36D2]/25 blur-3xl"
            />
            <div className="relative flex h-12 w-12 items-center justify-center rounded-full border border-[#6F36D2]/30 bg-[#6F36D2]/[0.15]">
              <Stack size={22} weight="bold" className="text-[#B79CE8]" />
            </div>
            <div className="relative flex flex-col gap-3">
              <h3 className="text-xl font-semibold leading-snug text-white sm:text-2xl">
                Line of Business Applications
              </h3>
              <p className="text-sm leading-relaxed text-zinc-400 sm:text-base">
                Give one department a shared application for its requests,
                records and decisions.
              </p>
              <span className="mt-1 inline-flex w-fit items-center gap-1.5 text-sm font-medium text-[#B79CE8] transition-colors duration-200 group-hover:text-white">
                Explore
                <ArrowUpRight
                  size={14}
                  weight="bold"
                  className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </span>
            </div>
          </Link>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-1 lg:gap-6">
            {secondary.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group flex flex-col gap-3 rounded-2xl border-l-2 border-[#6F36D2]/30 bg-zinc-50 p-6 transition-colors duration-300 hover:border-[#6F36D2] hover:bg-[#6F36D2]/[0.04] sm:p-7"
                >
                  <Icon size={22} weight="bold" className="text-[#6F36D2]" />
                  <h3 className="text-lg font-semibold leading-snug text-zinc-900">
                    {item.heading}
                  </h3>
                  <p className="text-sm leading-relaxed text-zinc-500">
                    {item.body}
                  </p>
                  <span className="mt-auto inline-flex w-fit items-center gap-1.5 pt-1 text-sm font-medium text-zinc-400 transition-colors duration-200 group-hover:text-[#6F36D2]">
                    Explore
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

export default ExtendYourErp;
