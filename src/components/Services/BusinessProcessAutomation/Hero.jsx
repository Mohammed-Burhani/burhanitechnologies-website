"use client";

import Link from "next/link";
import Container from "@/components/constants/Container";
import { ArrowRight, ArrowUpRight, CaretRight } from "@phosphor-icons/react";

const facts = [
  { label: "Delivered for a finance organisation serving public borrowers" },
  { label: "Built with UiPath and Automation Anywhere" },
];

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-[#0B0B10] pt-8 lg:pt-10">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-[-10%] h-[560px] w-[560px] rounded-full bg-[#6F36D2] opacity-[0.18] blur-[140px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[url(/Banner/Banner_SVG.svg)] bg-cover bg-center opacity-40"
      />

      <Container className="relative z-10">
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex flex-wrap items-center gap-1.5 font-inter text-smallText text-zinc-500">
            <li>
              <Link
                href="/"
                className="transition-colors duration-200 hover:text-zinc-300"
              >
                Home
              </Link>
            </li>
            <li aria-hidden="true" className="flex items-center">
              <CaretRight size={12} weight="bold" className="text-zinc-600" />
            </li>
            <li>
              <Link
                href="/services"
                className="transition-colors duration-200 hover:text-zinc-300"
              >
                Services
              </Link>
            </li>
            <li aria-hidden="true" className="flex items-center">
              <CaretRight size={12} weight="bold" className="text-zinc-600" />
            </li>
            <li>
              <span aria-current="page" className="text-zinc-300">
                Business Process Automation
              </span>
            </li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 items-center gap-10 xl:grid-cols-[1.15fr_0.85fr] xl:gap-8">
          <div className="flex flex-col gap-5 xl:gap-6">
            <span className="text-sm font-medium tracking-wide text-[#B79CE8]">
              Service
            </span>

            <h1 className="max-w-xl text-3xl font-semibold leading-[1.15] tracking-tight text-white sm:text-4xl lg:text-[2.75rem] xl:text-5xl">
              Automate document handling, approvals and routine business
              tasks
            </h1>

            <p className="max-w-lg text-sm leading-relaxed text-zinc-400 sm:text-base">
              Our engineers build automation systems that reduce repeated
              document handling, data entry and approval chasing. We connect
              AI-enabled capture, business rules, integrations and human
              review around the process your organisation needs to complete.
            </p>

            <div className="mt-1 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#6F36D2] px-5 py-3 text-sm font-medium text-white shadow-[0_1px_0_rgba(255,255,255,0.08)_inset] transition-transform duration-200 hover:bg-[#7C43E0] active:scale-[0.98] sm:text-base"
              >
                Book a free consultation
                <ArrowRight size={18} weight="bold" />
              </Link>

              <Link
                href="/case-studies/digitalizing-the-end-to-end-loan-lifecycle"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-zinc-700 px-5 py-3 text-sm font-medium text-zinc-200 transition-colors duration-200 hover:border-zinc-500 hover:text-white active:scale-[0.98] sm:text-base"
              >
                Read the client project
                <ArrowUpRight size={16} weight="bold" />
              </Link>
            </div>
          </div>

          <div className="relative hidden aspect-[16/11] w-full overflow-hidden rounded-2xl border border-white/10 lg:block xl:aspect-auto xl:h-full xl:max-h-[420px]">
            <img
              src="https://picsum.photos/seed/burhani-document-capture-automation/900/1125"
              alt="A document capture workflow feeding a business process automation system"
              className="h-full w-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B10]/70 via-transparent to-transparent" />
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-y-4 gap-x-6 border-t border-white/5 py-6 sm:grid-cols-2 lg:py-7">
          {facts.map((fact) => (
            <p
              key={fact.label}
              className="border-l-2 border-[#6F36D2]/50 pl-3 text-xs leading-snug text-zinc-400 sm:text-sm"
            >
              {fact.label}
            </p>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Hero;
