import Link from "next/link";
import { CaretRight } from "@phosphor-icons/react/dist/ssr";

import Container from "@/components/constants/Container";
import Reveal from "@/components/contact/Reveal";

const gridBackdrop = {
  backgroundImage:
    "linear-gradient(to right, rgba(111,54,210,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(111,54,210,0.12) 1px, transparent 1px)",
  backgroundSize: "48px 48px",
  maskImage:
    "radial-gradient(ellipse 80% 90% at 50% 0%, black 20%, transparent 100%)",
  WebkitMaskImage:
    "radial-gradient(ellipse 80% 90% at 50% 0%, black 20%, transparent 100%)",
};

export default function KnowledgeBaseHeroRevised() {
  return (
    <section className="relative overflow-hidden bg-[#0B0B10] pt-16 lg:pt-[72px]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(640px_circle_at_50%_0%,rgba(111,54,210,0.35),transparent_62%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-50"
        style={gridBackdrop}
      />

      <Container className="relative z-10 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex flex-wrap items-center justify-center gap-1.5 font-inter text-sm text-zinc-400">
                <li>
                  <Link
                    href="/"
                    className="transition-colors duration-300 hover:text-white"
                  >
                    Home
                  </Link>
                </li>
                <li aria-hidden="true" className="flex items-center">
                  <CaretRight
                    size={12}
                    weight="bold"
                    className="text-zinc-500"
                  />
                </li>
                <li>
                  <span aria-current="page" className="text-zinc-200">
                    Knowledge Base
                  </span>
                </li>
              </ol>
            </nav>
          </Reveal>

          <Reveal delay={0.08}>
            <span className="inline-flex items-center rounded-full bg-[#6F36D2]/[0.12] px-3 py-1.5 font-inter text-xs font-medium uppercase tracking-wider text-[#B79CE8] ring-1 ring-inset ring-[#6F36D2]/30">
              Knowledge Base
            </span>
          </Reveal>

          <Reveal delay={0.16}>
            <h1 className="mt-6 font-inter text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl lg:text-[2.75rem]">
              Plan the work before, during and after a software build
            </h1>
          </Reveal>

          <Reveal delay={0.24}>
            <p className="mt-5 font-inter text-base leading-relaxed text-zinc-300 sm:text-lg">
              Procedural answers to the questions clients ask before, during and
              after a build. No pitch here, just how it runs.
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
