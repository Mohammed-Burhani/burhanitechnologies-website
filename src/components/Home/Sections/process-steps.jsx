"use client";

import Container from "@/components/constants/Container";

const steps = [
  {
    index: "01",
    heading: "We map what you run today",
    body: "Before anything is designed, we walk the workflow with the people doing it and write down where the work stalls.",
  },
  {
    index: "02",
    heading: "We agree the scope and the price",
    body: "You get a fixed price and a dated plan after discovery. The figure holds once the scope is agreed, and payment runs against milestones.",
  },
  {
    index: "03",
    heading: "You review working software early",
    body: "Our engineers use AI to expedite development, then review and test each increment. We put the working workflow in front of your team for feedback.",
  },
  {
    index: "04",
    heading: "We stay after go-live",
    body: "The team that built it handles the updates, the integrations and the support calls. Support stays with the same people.",
  },
];

const ProcessSteps = () => {
  return (
    <section className="relative overflow-hidden border-t border-white/5 bg-[#0B0B10] py-16 lg:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(111,54,210,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(111,54,210,0.12) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse 70% 55% at 50% 0%, black 30%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 55% at 50% 0%, black 30%, transparent 100%)",
        }}
      />

      <Container className="relative">
        <h2 className="max-w-2xl text-2xl font-semibold leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl">
          From your first workflow to a working system
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4 lg:gap-6">
          {steps.map((step) => (
            <div
              key={step.index}
              className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-7"
            >
              <span className="font-inter text-3xl font-bold text-[#6F36D2]">
                {step.index}
              </span>
              <h3 className="text-lg font-semibold text-white">
                {step.heading}
              </h3>
              <p className="text-sm leading-relaxed text-zinc-400">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ProcessSteps;
