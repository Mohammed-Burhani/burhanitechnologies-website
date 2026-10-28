"use client";

import Container from "@/components/constants/Container";
import {
  ScanSmiley,
  Robot,
  FlowArrow,
  Wrench,
  Eye,
  CaretRight,
} from "@phosphor-icons/react";

const stages = [
  {
    icon: ScanSmiley,
    heading: "Document capture with OCR and NLP",
    body: "Invoices, forms and scanned paperwork read automatically and placed into the right fields, so the first manual step in most back-office processes goes away.",
  },
  {
    icon: Robot,
    heading: "Robotic process automation for legacy systems",
    body: "Bots that work at the screen level for systems too old or too regulated to change, with a log of every action they take.",
  },
  {
    icon: FlowArrow,
    heading: "Workflow automation across departments",
    body: "Approvals and handoffs routed by rule rather than by memory, with escalation when something sits too long in one place.",
  },
  {
    icon: Wrench,
    heading: "Custom automation tools for one-off processes",
    body: "A specific tool for the one process too particular for any platform to cover, built to do exactly that job and nothing else.",
  },
  {
    icon: Eye,
    heading: "Process visibility and exception handling",
    body: "A live view of where work is moving and where it has stalled, so exceptions get a person's attention instead of sitting unnoticed.",
  },
];

const ConnectCapture = () => {
  return (
    <section className="relative overflow-hidden border-t border-white/5 bg-[#0B0B10] py-16 sxl:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-0 h-[420px] w-[420px] rounded-full bg-[#6F36D2]/[0.1] blur-[140px]"
      />

      <Container className="relative !py-0">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-semibold leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl">
            Connect capture, decisions and execution
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-zinc-400 sm:text-base">
            We follow a request or document from arrival to completion and
            identify what people copy, check or chase. Capture, validation
            and routing are designed together. Routine actions can proceed
            automatically, while exceptions reach the person responsible with
            the information needed to resolve them.
          </p>
        </div>

        {/* Connected pipeline: the five capabilities read as sequential
           stages of one flow, not a bento grid or card row, matching the
           section's own framing of capture -> decision -> execution */}
        <div className="mt-12 lg:mt-16">
          <div className="grid grid-cols-1 gap-x-8 sm:grid-cols-2 xl:grid-cols-5 xl:gap-x-0">
            {stages.map((stage, i) => {
              const Icon = stage.icon;
              return (
                <div key={stage.heading} className="relative flex min-w-0 items-stretch border-b border-white/10 py-7 last:border-b-0 sm:last:col-span-2 xl:border-b-0 xl:border-r xl:py-0 xl:last:col-span-1 xl:last:border-r-0">
                  <div className="flex min-w-0 flex-1 flex-col gap-3 xl:px-6 xl:py-2">
                    <Icon size={22} weight="bold" className="text-[#B79CE8]" />
                    <h3 className="text-base font-semibold leading-snug text-white">
                      {stage.heading}
                    </h3>
                    <p className="text-sm leading-relaxed text-zinc-400">
                      {stage.body}
                    </p>
                  </div>
                  {i !== stages.length - 1 && (
                    <div
                      aria-hidden="true"
                      className="absolute -right-2 top-1/2 hidden -translate-y-1/2 items-center bg-[#0B0B10] xl:flex"
                    >
                      <CaretRight
                        size={16}
                        weight="bold"
                        className="text-[#6F36D2]/40"
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ConnectCapture;
