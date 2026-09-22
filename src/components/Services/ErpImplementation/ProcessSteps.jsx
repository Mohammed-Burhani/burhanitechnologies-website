"use client";

import Container from "@/components/constants/Container";

const steps = [
  {
    index: "01",
    heading: "Discovery",
    body: "We walk your current workflow with the people who run it and record where work stalls, duplicates or waits.",
  },
  {
    index: "02",
    heading: "Scope and quote",
    body: "A fixed price and a dated plan, issued after discovery. Payment runs against milestones.",
  },
  {
    index: "03",
    heading: "Design",
    body: "Review the proposed workflow, interfaces and data requirements before implementation. The design work follows the scope of the project.",
  },
  {
    index: "04",
    heading: "Build and review",
    body: "Implement the agreed scope in short cycles, review the changes and test the behaviour with representative records and exceptions.",
  },
  {
    index: "05",
    heading: "Integrate and release",
    body: "Test the required connections, confirm acceptance with your team and release according to the agreed rollout plan.",
  },
  {
    index: "06",
    heading: "Support",
    body: "The team that built it handles updates, integrations and support calls after go-live.",
  },
];

const ProcessSteps = () => {
  return (
    <section className="relative overflow-hidden border-t border-white/5 bg-[#0B0B10] py-16 sxl:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-1/4 h-[420px] w-[420px] rounded-full bg-[#6F36D2]/[0.1] blur-[140px]"
      />

      <Container className="relative">
        <h2 className="text-2xl font-semibold leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl">
          From process mapping to ERP rollout
        </h2>

        <div className="relative mt-12 lg:mt-16">
          <div
            aria-hidden="true"
            className="absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-[#6F36D2]/60 via-white/10 to-transparent sm:left-[23px]"
          />

          <div className="flex flex-col gap-10 sm:gap-12">
            {steps.map((step) => (
              <div key={step.index} className="relative flex gap-6 sm:gap-8">
                <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#6F36D2]/40 bg-[#0B0B10] font-inter text-sm font-semibold text-[#B79CE8] sm:h-12 sm:w-12 sm:text-base">
                  {step.index}
                </span>
                <div className="flex flex-col gap-1.5 pt-1.5 sm:pt-2">
                  <h3 className="text-lg font-semibold text-white sm:text-xl">
                    {step.heading}
                  </h3>
                  <p className="max-w-2xl text-sm leading-relaxed text-zinc-400 sm:text-base">
                    {step.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ProcessSteps;
