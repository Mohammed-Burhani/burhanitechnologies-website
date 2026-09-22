"use client";

import Container from "@/components/constants/Container";

const objections = [
  {
    index: "01",
    quote:
      "We looked at three off-the-shelf tools and none of them fit how we work.",
    body: "Packaged software is built for the average business in your category. The moment your process has a genuine exception, you end up customising someone else's assumptions instead of running your own.",
  },
  {
    index: "02",
    quote:
      "Our developers are stretched thin on support tickets and cannot start something new.",
    body: "A separate build team can take on the new application while your developers maintain existing systems. The scope should define responsibilities, technical access and how both teams review changes.",
  },
  {
    index: "03",
    quote:
      "We tried to hire for this and the search went on for months with nothing to show for it.",
    body: "Commissioning a build gives you access to a delivery team for the agreed scope. Compare that option with hiring against the work you expect to retain in-house after launch.",
  },
];

const WhySwitch = () => {
  return (
    <section className="relative overflow-hidden bg-white py-16 sxl:py-24">
      <Container>
        <h2 className="max-w-2xl text-2xl font-semibold leading-tight tracking-tight text-zinc-900 sm:text-3xl lg:text-4xl">
          When your software no longer fits the business
        </h2>

        {/* Single-column numbered list: large index numerals carry the rhythm
           instead of repeating the bordered-card pattern used elsewhere */}
        <div className="mt-10 divide-y divide-zinc-200 border-t border-zinc-200 lg:mt-14">
          {objections.map((item) => (
            <div
              key={item.index}
              className="grid grid-cols-1 gap-3 py-9 sm:grid-cols-[auto_1fr] sm:gap-8 lg:py-12"
            >
              <span className="font-inter text-4xl font-bold leading-none text-zinc-200 sm:text-5xl">
                {item.index}
              </span>
              <div className="flex flex-col gap-3">
                <h3 className="text-lg font-semibold italic leading-snug text-zinc-900 sm:text-xl">
                  &ldquo;{item.quote}&rdquo;
                </h3>
                <p className="max-w-2xl text-sm leading-relaxed text-zinc-500 sm:text-base">
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

export default WhySwitch;
