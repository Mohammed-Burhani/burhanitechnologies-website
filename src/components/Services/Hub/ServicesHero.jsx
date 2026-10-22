"use client";

import Link from "next/link";
import Container from "@/components/constants/Container";
import { ArrowDown, ArrowRight, CaretRight } from "@phosphor-icons/react";

const facts = [
  { label: "Since 2010" },
  { label: "Clients across four countries" },
  { label: "Scope, review and staged delivery" },
];

const ServicesHero = () => {
  return (
    <section className="relative overflow-hidden bg-[#0B0B10] pt-16 lg:pt-10">
      {/* Brand accent: one restrained glow, matching the homepage hero */}
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
          <ol className="flex flex-wrap items-center gap-1.5 font-inter text-smallText text-zinc-400">
            <li>
              <Link
                href="/"
                className="rounded-sm transition-colors duration-200 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C9B5EC]"
              >
                Home
              </Link>
            </li>
            <li aria-hidden="true" className="flex items-center">
              <CaretRight size={12} weight="bold" className="text-zinc-600" />
            </li>
            <li>
              <span aria-current="page" className="text-zinc-300">
                Services
              </span>
            </li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] xl:gap-8">
          {/* Left: message */}
          <div className="flex flex-col gap-5 xl:gap-6">
            <span className="text-sm font-medium tracking-wide text-[#B79CE8]">
              Services
            </span>

            <h1 className="max-w-xl text-3xl font-semibold leading-normal tracking-tight text-white sm:text-4xl lg:text-[2.75rem] xl:text-5xl">
              Software development services built around the workflow you
              already run
            </h1>

            <p className="max-w-lg text-sm leading-relaxed text-zinc-400 sm:text-base">
              Our engineers design, build and integrate custom software, ERP
              and automation systems, supported by cloud and UI/UX expertise.
              We use AI to expedite development and incorporate AI
              capabilities where they improve the workflow your business needs
              to run.
            </p>

            <div className="mt-1 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/contact"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-[#6F36D2] px-5 py-3 text-sm font-medium text-white shadow-[0_1px_0_rgba(255,255,255,0.08)_inset] transition-colors duration-200 hover:bg-[#7C43E0] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C9B5EC] sm:text-base"
              >
                Book a free consultation
                <ArrowRight size={18} weight="bold" />
              </Link>
              <Link
                href="#service-practices"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-zinc-300 transition-colors duration-200 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C9B5EC]"
              >
                What we build
                <ArrowDown size={16} aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* Right: single supporting visual, capped so it never pushes the fold */}
          <div className="relative hidden aspect-[16/11] w-full overflow-hidden rounded-2xl border border-white/10 lg:block xl:aspect-auto xl:h-full xl:max-h-[420px]">
            <img width="800" height="640"
              src="/illustrations/discovery.svg"
              alt="Conceptual illustration: start with one business problem"
              className="h-full w-full object-contain bg-[#14111d]"
              loading="eager"
            />
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-y-4 gap-x-6 border-t border-white/5 py-6 sm:grid-cols-3 lg:py-7">
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

export default ServicesHero;
