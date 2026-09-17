"use client";

import Link from "next/link";
import Container from "@/components/constants/Container";
import {
  ArrowUpRight,
  Calculator,
  ClipboardText,
  Eye,
  Plugs,
  ShieldCheck,
  UsersThree,
} from "@phosphor-icons/react";

const points = [
  {
    icon: UsersThree,
    heading: "One team, architecture to hosting",
    body: "The people who designed it are the people who deploy it and the people who answer the phone afterwards. You never sit between three vendors explaining one problem twice.",
  },
  {
    icon: Eye,
    heading: "You see it running early",
    body: "Our engineers use AI to expedite development, then review, integrate and test each increment. Your team sees working software early and helps shape the next release.",
  },
  {
    icon: ClipboardText,
    heading: "Built around your process",
    body: "We map the workflow you already run before anything is designed. We compare the fit of an existing product with the requirements that justify a custom build.",
  },
  {
    icon: Plugs,
    heading: "It connects to what you already run",
    body: "Tally, SAP, Salesforce and in-house systems. Where a system cannot be modified, we automate at the interface layer so it never has to be.",
  },
  {
    icon: ShieldCheck,
    heading: "Informed by the operating conditions",
    body: "Delivered systems in healthcare, apparel manufacturing, warehousing, lending and events. Each carried its own compliance rules and floor-level constraints.",
  },
  {
    icon: Calculator,
    heading: "You get the number before the proposal",
    body: "Projects here typically run between USD 7,500 and USD 15,000 or above. We say that on the first call, quote a fixed price after discovery, and bill against milestones.",
  },
];

export const Differentiators = () => {
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
          What you can expect from working with us
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3 lg:gap-8">
          {points.map((point) => {
            const Icon = point.icon;
            return (
              <div
                key={point.heading}
                className="group relative flex flex-col gap-4 overflow-hidden rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#6F36D2]/30 hover:shadow-lg hover:shadow-[#6F36D2]/[0.06] sm:p-8"
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-[#6F36D2]/[0.06] blur-2xl transition-opacity duration-300 group-hover:opacity-150"
                />

                <div className="relative flex h-11 w-11 items-center justify-center rounded-full border border-[#6F36D2]/20 bg-[#6F36D2]/[0.06]">
                  <Icon size={20} weight="bold" className="text-[#6F36D2]" />
                </div>

                <h3 className="relative text-lg font-semibold text-zinc-900 sm:text-xl">
                  {point.heading}
                </h3>
                <p className="relative text-sm leading-relaxed text-zinc-500 sm:text-base">
                  {point.body}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-6 border-t border-zinc-200 pt-8 sm:flex-row sm:items-center lg:mt-14">
          <p className="max-w-xl text-sm leading-relaxed text-zinc-500 sm:text-base">
            Read about{" "}
            <Link
              href="/about"
              className="font-medium text-[#6F36D2] underline decoration-[#6F36D2]/30 underline-offset-2 transition-colors duration-200 hover:text-[#4f2496] hover:decoration-[#4f2496]"
            >
              Burhani
            </Link>{" "}
            and meet our{" "}
            <Link
              href="/leadership"
              className="font-medium text-[#6F36D2] underline decoration-[#6F36D2]/30 underline-offset-2 transition-colors duration-200 hover:text-[#4f2496] hover:decoration-[#4f2496]"
            >
              leadership and technical team
            </Link>
            .
          </p>
          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-[#6F36D2] px-5 py-3 text-sm font-medium text-white shadow-[0_1px_0_rgba(255,255,255,0.08)_inset] transition-transform duration-200 hover:bg-[#7C43E0] active:scale-[0.98] sm:text-base"
          >
            Book a free consultation
            <ArrowUpRight size={16} weight="bold" />
          </Link>
        </div>
      </Container>
    </section>
  );
};
