"use client";

import { ArrowRight } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import Container from "../constants/Container";

const facts = [
  { label: "Since 2010" },
  { label: "Based in India" },
  { label: "Clients in India, the US, the UAE and Australia" },
  { label: "Early working versions, reviewed with your team" },
];

const Banner = () => {
  const router = useRouter();

  return (
    <section className="relative overflow-hidden bg-[#0B0B10] pt-8 lg:pt-10">
      {/* Brand accent: single restrained glow, not a scattered blob field */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-[-10%] h-[560px] w-[560px] rounded-full bg-[#6F36D2] opacity-[0.18] blur-[140px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[url(/Banner/Banner_SVG.svg)] bg-cover bg-center opacity-40"
      />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 items-center gap-10 xl:grid-cols-[1.15fr_0.85fr] xl:gap-8">
          {/* Left: message */}
          <div className="flex flex-col gap-5 xl:gap-6">
            <span className="text-sm font-medium tracking-wide text-[#B79CE8]">
              Business software expertise since 2010
            </span>

            <h1 className="max-w-xl text-3xl font-semibold leading-[1.15] tracking-tight text-white sm:text-4xl lg:text-[2.75rem] xl:text-5xl">
              Our engineers build custom software around the way your
              business works.
            </h1>

            <p className="max-w-lg text-sm leading-relaxed text-zinc-400 sm:text-base">
              Since 2010, Burhani Technologies has designed, developed and
              integrated business software. Our engineers bring experience
              from healthcare systems, apparel ERP, warehouse operations,
              lending and events to your requirements. We use AI to expedite
              development, and build AI capabilities into workflows where
              they help your team complete the work.
            </p>

            <div className="mt-1 flex flex-col gap-3 sm:flex-row sm:items-center">
              <button
                type="button"
                onClick={() => router.push("/contact")}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#6F36D2] px-5 py-3 text-sm font-medium text-white shadow-[0_1px_0_rgba(255,255,255,0.08)_inset] transition-transform duration-200 hover:bg-[#7C43E0] active:scale-[0.98] sm:text-base"
              >
                Book a free consultation
                <ArrowRight size={18} weight="bold" />
              </button>

              <button
                type="button"
                onClick={() => router.push("/services")}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-zinc-700 px-5 py-3 text-sm font-medium text-zinc-200 transition-colors duration-200 hover:border-zinc-500 hover:text-white active:scale-[0.98] sm:text-base"
              >
                See what we build
              </button>
            </div>
          </div>

          {/* Right: single supporting visual, capped height so it never pushes the fold */}
          <div className="relative hidden aspect-[16/11] w-full overflow-hidden rounded-2xl border border-white/10 lg:block xl:aspect-auto xl:h-full xl:max-h-[440px]">
            <img
              src="https://picsum.photos/seed/burhani-engineers-workstation/900/1125"
              alt="Burhani Technologies engineers reviewing a working software build"
              className="h-full w-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B10]/70 via-transparent to-transparent" />
          </div>
        </div>

        {/* Trust strip: same view as the hero at every resolution, not a separate section to scroll to */}
        <div className="mt-10 grid grid-cols-1 gap-y-4 gap-x-6 border-t border-white/5 py-6 sm:grid-cols-2 lg:grid-cols-4 lg:py-7">
          {facts.map((fact) => (
            <p
              key={fact.label}
              className="border-l-2 border-[#6F36D2]/50 pl-3 text-xs leading-snug text-zinc-400 sm:text-sm"
            >
              {fact.label}
            </p>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Banner;