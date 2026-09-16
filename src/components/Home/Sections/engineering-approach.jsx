"use client";

import Container from "@/components/constants/Container";
import { ArrowRight, ShieldCheck } from "@phosphor-icons/react";
import Link from "next/link";

const pillars = [
  {
    heading: "We use AI to accelerate development",
    body: "Our team maps your requirements, designs the architecture and develops the application. We use AI assistance to expedite that work and bring a complete workflow into review sooner. Frontier models can contribute code and test drafts; our engineers make the implementation decisions, integrate the code and test it against your business requirements.",
    linkLabel: "Work with our application development team",
    href: "/services/application-development",
  },
  {
    heading: "We build AI into useful business workflows",
    body: "We design and build automation systems around the work your team repeats. Our engineers connect document capture, validation, approvals and system actions, incorporating AI where interpreting information helps the process. The result is a workflow that moves routine work forward and gives people the context to resolve exceptions.",
    linkLabel: "Explore business process automation",
    href: "/services/business-process-automation-solutions",
  },
];

const EngineeringApproach = () => {
  return (
    <section className="border-t border-white/5 bg-[#0B0B10] py-16 lg:py-24">
      <Container>
        <h2 className="max-w-2xl text-2xl font-semibold leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl">
          Our engineers turn requirements into working systems
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-8 lg:mt-14 lg:grid-cols-2 lg:gap-10">
          {pillars.map((pillar) => (
            <div
              key={pillar.heading}
              className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8"
            >
              <h3 className="text-lg font-semibold text-white sm:text-xl">
                {pillar.heading}
              </h3>
              <p className="text-sm leading-relaxed text-zinc-400 sm:text-base">
                {pillar.body}
              </p>
              <Link
                href={pillar.href}
                className="group mt-2 inline-flex w-fit items-center gap-1.5 text-sm font-medium text-[#B79CE8] transition-colors duration-200 hover:text-white sm:text-base"
              >
                {pillar.linkLabel}
                <ArrowRight
                  size={16}
                  weight="bold"
                  className="transition-transform duration-200 group-hover:translate-x-0.5"
                />
              </Link>
            </div>
          ))}
        </div>

        {/* Guardrails block: distinct from the two link-cards above, no CTA, governance framing */}
        <div className="mt-8 flex flex-col gap-4 rounded-2xl border border-[#6F36D2]/20 bg-[#6F36D2]/[0.04] p-6 sm:p-8 lg:mt-10 lg:flex-row lg:items-start lg:gap-8">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#6F36D2]/30 bg-[#6F36D2]/10">
            <ShieldCheck size={20} weight="bold" className="text-[#B79CE8]" />
          </div>
          <div className="flex flex-col gap-3">
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