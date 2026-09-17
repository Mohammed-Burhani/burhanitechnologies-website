"use client";

import Container from "@/components/constants/Container";
import {
  ArrowsClockwise,
  ChatCircleDots,
  Database,
  PuzzlePiece,
} from "@phosphor-icons/react";

const pains = [
  {
    icon: ArrowsClockwise,
    quote:
      "Half the week goes into moving data between systems.",
    body: "Someone exports from one tool, cleans it up, and types it into the next. The same hours, every week, on work nobody wanted to do.",
  },
  {
    icon: ChatCircleDots,
    quote:
      "I cannot get a straight answer on where things stand.",
    body: "The real status lives in four places, and none of them update each other. Getting one number means three phone calls.",
  },
  {
    icon: PuzzlePiece,
    quote:
      "The software we started on cannot handle what we do now.",
    body: "It fit the volume five years ago. The workarounds built around it have quietly become the process.",
  },
  {
    icon: Database,
    quote: "We have the data. We still cannot answer the question.",
    body: "Everything is recorded somewhere. Pulling a single number out of it takes two days and a person who knows where to look.",
  },
];

const PainPoints = () => {
  return (
    <section className="relative overflow-hidden bg-white py-16 sxl:py-24">
      {/* Tech-grid backdrop, light-mode, same system as the client strip */}
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
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-10 h-[380px] w-[380px] rounded-full bg-[#6F36D2]/[0.07] blur-[120px]"
      />

      <Container className="relative">
        <h2 className="max-w-2xl text-2xl font-semibold leading-tight tracking-tight text-zinc-900 sm:text-3xl lg:text-4xl">
          When everyday work starts slowing the business
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-14 lg:gap-8">
          {pains.map((pain) => {
            const Icon = pain.icon;
            return (
              <div
                key={pain.quote}
                className="group relative flex flex-col gap-4 overflow-hidden rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#6F36D2]/30 hover:shadow-lg hover:shadow-[#6F36D2]/[0.06] sm:p-8"
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-[#6F36D2]/[0.06] blur-2xl transition-opacity duration-300 group-hover:opacity-150"
                />

                <div className="relative flex h-11 w-11 items-center justify-center rounded-full border border-[#6F36D2]/20 bg-[#6F36D2]/[0.06]">
                  <Icon size={20} weight="bold" className="text-[#6F36D2]" />
                </div>

                <h3 className="relative text-lg font-semibold italic leading-snug text-zinc-900 sm:text-xl">
                  &ldquo;{pain.quote}&rdquo;
                </h3>
                <p className="relative text-sm leading-relaxed text-zinc-500 sm:text-base">
                  {pain.body}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default PainPoints;