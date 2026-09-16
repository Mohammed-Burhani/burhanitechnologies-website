"use client";

import Container from "@/components/constants/Container";
import { ArrowRight, Code, GitBranch, ShieldCheck } from "@phosphor-icons/react";
import Link from "next/link";

const pillars = [
  {
    icon: Code,
    heading: "We use AI to accelerate development",
    body: "Our team maps your requirements, designs the architecture and develops the application. We use AI assistance to expedite that work and bring a complete workflow into review sooner. Frontier models can contribute code and test drafts; our engineers make the implementation decisions, integrate the code and test it against your business requirements.",
    linkLabel: "Work with our application development team",
    href: "/services/application-development",
  },
  {
    icon: GitBranch,
    heading: "We build AI into useful business workflows",
    body: "We design and build automation systems around the work your team repeats. Our engineers connect document capture, validation, approvals and system actions, incorporating AI where interpreting information helps the process. The result is a workflow that moves routine work forward and gives people the context to resolve exceptions.",
    linkLabel: "Explore business process automation",
    href: "/services/business-process-automation-solutions",
  },
];

const EngineeringApproach = () => {
  return (
    <section className="relative overflow-hidden border-t border-white/5 bg-[#0B0B10] py-16 lg:py-24">
      {/* Tech-grid backdrop, dark-mode counterpart of the client-strip pattern */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(111,54,210,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(111,54,210,0.12) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse 70% 55% at 15% 20%, black 30%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 55% at 15% 20%, black 30%, transparent 100%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-[#6F36D2]/[0.12] blur-[130px]"
      />

      <Container className="relative">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#6F36D2]/25 bg-[#6F36D2]/[0.06] px-3 py-1 font-inter text-smallText font-medium text-[#B79CE8]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#B79CE8]" />
          How we build
        </span>

        <h2 className="max-w-2xl text-2xl font-semibold leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl">
          Our engineers turn requirements into working systems
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-8 lg:mt-14 lg:grid-cols-2 lg:gap-10">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.heading}
                className="group relative flex flex-col gap-4 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#6F36D2]/40 hover:bg-white/[0.04] sm:p-8"
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-[#6F36D2]/10 blur-2xl transition-opacity duration-300 group-hover:opacity-150"
                />

                <div className="relative flex h-11 w-11 items-center justify-center rounded-full border border-[#6F36D2]/30 bg-[#6F36D2]/10">
                  <Icon size={20} weight="bold" className="text-[#B79CE8]" />
                </div>

                <h3 className="relative text-lg font-semibold text-white sm:text-xl">
                  {pillar.heading}
                </h3>
                <p className="relative text-sm leading-relaxed text-zinc-400 sm:text-base">
                  {pillar.body}
                </p>
                <Link
                  href={pillar.href}
                  className="group/link relative mt-2 inline-flex w-fit items-center gap-1.5 text-sm font-medium text-[#B79CE8] transition-colors duration-200 hover:text-white sm:text-base"
                >
                  {pillar.linkLabel}
                  <ArrowRight
                    size={16}
                    weight="bold"
                    className="transition-transform duration-200 group-hover/link:translate-x-0.5"
                  />
                </Link>
              </div>
            );
          })}
        </div>

        {/* Guardrails block: distinct from the two link-cards above, no CTA, governance framing */}
        <div className="relative mt-8 flex flex-col gap-4 overflow-hidden rounded-2xl border border-[#6F36D2]/20 bg-[#6F36D2]/[0.04] p-6 sm:p-8 lg:mt-10 lg:flex-row lg:items-start lg:gap-8">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(183,156,232,0.08) 1px, transparent 1px)",
              backgroundSize: "24px 100%",
            }}
          />
          <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#6F36D2]/30 bg-[#6F36D2]/10">
            <ShieldCheck size={20} weight="bold" className="text-[#B79CE8]" />
          </div>
          <div className="relative flex flex-col gap-3">
            <h3 className="text-lg font-semibold text-white sm:text-xl">
              Define access, actions and review points
            </h3>
            <p className="max-w-3xl text-sm leading-relaxed text-zinc-400 sm:text-base">
              The engineering brief for an AI-enabled workflow includes the
              records it may access, the actions it may take and the
              decisions that need approval. These guardrails are translated
              into validation, permission checks and activity records around
              the model-assisted step.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default EngineeringApproach;