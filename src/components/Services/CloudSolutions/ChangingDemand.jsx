"use client";

import Container from "@/components/constants/Container";

const signals = [
  {
    index: "01",
    quote:
      "Our servers sit nearly idle most of the year and then fall over the one week that matters.",
    body: "Fixed hardware is sized for a guess about peak demand, and the guess is usually wrong in one direction or the other. Cloud infrastructure scales with the load you get, on the day you get it.",
  },
  {
    index: "02",
    quote: "We do not know what happens to our systems if the office loses power.",
    body: "On-premise infrastructure usually depends on one building staying online. A cloud environment with a proper backup and recovery plan keeps running from a different location while the office sorts itself out.",
  },
  {
    index: "03",
    quote:
      "Every quote we get is for moving our servers somewhere else. Nobody addresses why the application is slow in the first place.",
    body: "Lift-and-shift moves the same bottleneck to a more expensive address. Where the application itself is the problem, the architecture gets rebuilt for the platform it will run on rather than simply relocated onto it.",
  },
];

const ChangingDemand = () => {
  return (
    <section className="relative overflow-hidden bg-white py-16 sxl:py-24">
      <Container>
        <h2 className="max-w-2xl text-2xl font-semibold leading-tight tracking-tight text-zinc-900 sm:text-3xl lg:text-4xl">
          When infrastructure struggles with changing demand
        </h2>

        {/* Full-width rows with an oversized watermark numeral behind the
           text, a fourth distinct treatment for this recurring 3-objection
           section across the pillar pages */}
        <div className="mt-12 divide-y divide-zinc-200 border-t border-zinc-200 lg:mt-16">
          {signals.map((item) => (
            <div key={item.index} className="relative overflow-hidden py-10 lg:py-12">
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -right-2 -top-6 select-none font-inter text-[7rem] font-bold leading-none text-zinc-100 sm:text-[9rem]"
              >
                {item.index}
              </span>
              <div className="relative max-w-2xl">
                <h3 className="text-lg font-semibold italic leading-snug text-zinc-900 sm:text-xl">
                  &ldquo;{item.quote}&rdquo;
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-500 sm:text-base">
                  {item.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ChangingDemand;
