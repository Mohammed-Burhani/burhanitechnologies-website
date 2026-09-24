"use client";

import Container from "@/components/constants/Container";
import { EnvelopeOpen, ClockCountdown, PlugsConnected } from "@phosphor-icons/react";

const signals = [
  {
    icon: EnvelopeOpen,
    quote:
      "Someone still has to open every invoice and type it into the system by hand.",
    body: "That single step usually sets the pace for everything after it. OCR reads the document and NLP places the data in the right fields, so the person who used to type it now checks the exceptions instead.",
  },
  {
    icon: ClockCountdown,
    quote: "An approval sits in someone's inbox for days before anyone notices.",
    body: "Routing that depends on a person remembering to forward an email will eventually fail quietly. A workflow with rules and an escalation path moves the approval itself and flags it the moment it stalls.",
  },
  {
    icon: PlugsConnected,
    quote:
      "We bought an automation licence and it still could not touch our old system.",
    body: "Generic platforms assume a modern interface underneath them. Where the legacy system cannot be changed, a bot built to work at the screen level reads and enters data the way a person already does.",
  },
];

const ManualProcessing = () => {
  return (
    <section className="relative overflow-hidden bg-white py-16 sxl:py-24">
      <Container>
        <h2 className="max-w-2xl text-2xl font-semibold leading-tight tracking-tight text-zinc-900 sm:text-3xl lg:text-4xl">
          Where manual processing holds up the next step
        </h2>

        {/* Staggered offset panels: alternating vertical lift breaks the row
           rhythm without borders, cards, or the numeral/zebra treatments
           used for equivalent sections on sibling pillar pages */}
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-6 lg:mt-16">
          {signals.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={item.quote}
                className={`flex flex-col gap-4 border-t-2 border-[#6F36D2] pt-6 ${
                  i === 1 ? "sm:mt-8" : i === 2 ? "sm:mt-16" : ""
                }`}
              >
                <Icon size={24} weight="bold" className="text-[#6F36D2]" />
                <h3 className="text-lg font-semibold italic leading-snug text-zinc-900 sm:text-xl">
                  &ldquo;{item.quote}&rdquo;
                </h3>
                <p className="text-sm leading-relaxed text-zinc-500 sm:text-base">
                  {item.body}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default ManualProcessing;
