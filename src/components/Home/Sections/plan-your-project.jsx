"use client";

import Link from "next/link";
import Container from "@/components/constants/Container";
import { ArrowUpRight, Sparkle, WhatsappLogo } from "@phosphor-icons/react";

const PlanYourProject = () => {
  return (
    <section className="relative overflow-hidden bg-[#0B0B10] py-16 sm:py-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(111,54,210,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(111,54,210,0.12) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse 60% 70% at 50% 50%, black 30%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 60% 70% at 50% 50%, black 30%, transparent 100%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#6F36D2]/[0.14] blur-[130px]"
      />

      <Container className="relative">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-5 rounded-2xl border border-white/10 bg-white/[0.02] px-6 py-14 text-center sm:px-14">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#6F36D2]/25 bg-[#6F36D2]/[0.06] px-3 py-1 font-inter text-smallText font-medium text-[#B79CE8]">
            <Sparkle size={14} weight="bold" />
            Let&apos;s talk
          </span>

          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            Plan your next software project
          </h2>
          <p className="max-w-xl text-sm leading-relaxed text-zinc-400 sm:text-base">
            Tell us which workflow you want to improve and the systems it
            depends on. We will help define a practical starting point.
          </p>

          <div className="mt-2 flex flex-col items-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#6F36D2] px-6 py-3.5 text-sm font-medium text-white shadow-[0_1px_0_rgba(255,255,255,0.08)_inset] transition-transform duration-200 hover:bg-[#7C43E0] active:scale-[0.98] sm:text-base"
            >
              Book a free consultation
              <ArrowUpRight size={16} weight="bold" />
            </Link>
            <a
              href="https://wa.me/917299002152"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-zinc-700 px-6 py-3.5 text-sm font-medium text-zinc-200 transition-colors duration-200 hover:border-zinc-500 hover:text-white active:scale-[0.98] sm:text-base"
            >
              <WhatsappLogo size={18} weight="bold" />
              Message us on WhatsApp
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default PlanYourProject;
