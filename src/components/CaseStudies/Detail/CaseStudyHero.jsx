import Image from "next/image";
import Link from "next/link";
import { CaretRight } from "@phosphor-icons/react/dist/ssr";

import Container from "@/components/constants/Container";
import Reveal from "@/components/contact/Reveal";
import { industryIcon } from "../Listing/caseStudyMeta";

const gridBackdrop = {
  backgroundImage:
    "linear-gradient(to right, rgba(111,54,210,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(111,54,210,0.12) 1px, transparent 1px)",
  backgroundSize: "48px 48px",
  maskImage:
    "radial-gradient(ellipse 80% 90% at 50% 0%, black 20%, transparent 100%)",
  WebkitMaskImage:
    "radial-gradient(ellipse 80% 90% at 50% 0%, black 20%, transparent 100%)",
};

export default function CaseStudyHero({
  title,
  client,
  industry,
  excerpt,
  bannerImage,
}) {
  const Icon = industryIcon(industry);

  return (
    <section className="relative overflow-hidden bg-[#0B0B10] pt-16 lg:pt-[72px]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(640px_circle_at_50%_0%,rgba(111,54,210,0.35),transparent_62%),radial-gradient(520px_circle_at_100%_100%,rgba(111,54,210,0.14),transparent_65%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-50"
        style={gridBackdrop}
      />

      <Container className="relative z-10 pt-4 pb-10 sm:pt-6 sm:pb-12 xl:pt-8 xl:pb-16">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-12">
          <div>
            <Reveal>
              <nav aria-label="Breadcrumb" className="mb-6">
                <ol className="flex flex-wrap items-center gap-1.5 font-inter text-sm text-zinc-400">
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
                    <Link
                      href="/case-studies"
                      className="transition-colors duration-300 hover:text-white"
                    >
                      Case Studies
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
                      {title}
                    </span>
                  </li>
                </ol>
              </nav>
            </Reveal>

            <Reveal delay={0.08}>
              {industry && (
                <span className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-[#6F36D2]/[0.12] px-3 py-1.5 font-inter text-sm font-medium text-[#B79CE8] ring-1 ring-inset ring-[#6F36D2]/30">
                  <Icon size={16} weight="bold" aria-hidden="true" />
                  {industry}
                </span>
              )}
            </Reveal>

            <Reveal delay={0.16}>
              <h1 className="mt-4 max-w-3xl font-inter text-3xl font-semibold leading-normal tracking-tight text-white sm:text-4xl lg:text-[2.5rem] xl:text-[2.75rem]">
                {title}
              </h1>
            </Reveal>

            <Reveal delay={0.24}>
              {excerpt && (
                <p className="mt-5 max-w-xl font-inter text-base leading-relaxed text-zinc-300">
                  {excerpt}
                </p>
              )}
            </Reveal>

            <Reveal delay={0.32}>
              {client && (
                <p className="mt-6 max-w-[44ch] border-l-2 border-[#6F36D2]/50 pl-3 font-inter text-sm leading-snug text-zinc-400">
                  Client: {client}
                </p>
              )}
            </Reveal>
          </div>

          {bannerImage && (
            <Reveal delay={0.4} className="hidden lg:block">
              <div className="aspect-[4/3] w-full overflow-hidden rounded-[1.5rem] bg-white/[0.04] p-1 ring-1 ring-white/10">
                <div className="relative h-full overflow-hidden rounded-[calc(1.5rem-0.25rem)] bg-[#14141B]">
                  <Image
                    src={bannerImage}
                    alt={`${title} case study`}
                    fill
                    priority
                    sizes="(min-width: 1024px) 40vw, 0px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B10]/55 via-transparent to-transparent" />
                  <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0_1px_1px_rgba(255,255,255,0.12)]" />
                </div>
              </div>
            </Reveal>
          )}
        </div>
      </Container>
    </section>
  );
}
