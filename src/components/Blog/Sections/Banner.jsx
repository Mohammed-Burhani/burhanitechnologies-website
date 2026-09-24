import React from "react";
import Container from "@/components/constants/Container";

export const Banner = () => {
  return (
    <section className="relative overflow-hidden bg-[#0B0B10] pt-20 lg:pt-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-[#6F36D2] opacity-[0.16] blur-[140px]"
      />

      <Container className="relative z-10 flex flex-col items-center pb-14 text-center lg:pb-20">
        <span className="text-sm font-medium tracking-wide text-[#B79CE8]">
          Our blog
        </span>

        <h1 className="mt-4 max-w-2xl text-3xl font-semibold leading-[1.15] tracking-tight text-white sm:text-4xl lg:text-[2.75rem] xl:text-5xl">
          Notes from the engineering team
        </h1>

        <p className="mt-4 max-w-lg text-sm leading-relaxed text-zinc-400 sm:text-base">
          Trends, best practices and hands-on lessons from building software,
          automation and integrations for real client operations.
        </p>
      </Container>
    </section>
  );
};
