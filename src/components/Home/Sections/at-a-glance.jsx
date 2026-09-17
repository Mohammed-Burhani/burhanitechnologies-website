"use client";

import Container from "@/components/constants/Container";

const stats = [
  { value: "2010", label: "Building business software since" },
  {
    value: "4",
    label: "Countries we deliver into: India, the US, the UAE and Australia",
  },
  { value: "6", label: "Client projects across four industry groups" },
  { value: "5", label: "Connected service practices" },
];

const AtAGlance = () => {
  return (
    <section className="relative overflow-hidden border-t border-white/5 bg-[#0B0B10] py-16 lg:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-0 h-[380px] w-[380px] rounded-full bg-[#6F36D2]/[0.1] blur-[130px]"
      />

      <Container className="relative">
        <h2 className="text-2xl font-semibold leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl">
          At a glance
        </h2>

        <div className="mt-10 grid grid-cols-1 divide-y divide-white/5 border-t border-white/5 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:mt-14 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col gap-2 py-8 first:pt-0 sm:px-6 sm:py-0 sm:first:pl-0 lg:px-8"
            >
              <span className="font-inter text-4xl font-bold tracking-tight text-white sm:text-5xl">
                {stat.value}
              </span>
              <span className="max-w-[22ch] text-sm leading-relaxed text-zinc-400 sm:text-base">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default AtAGlance;
