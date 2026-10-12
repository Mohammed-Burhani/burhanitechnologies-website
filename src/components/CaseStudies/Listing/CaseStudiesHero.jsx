import Link from "next/link";
import Image from "next/image";
import { CaretRight } from "@phosphor-icons/react/dist/ssr";

import Container from "@/components/constants/Container";
import Reveal from "@/components/contact/Reveal";

const gridBackdrop = {
  backgroundImage:
    "linear-gradient(to right, rgba(111,54,210,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(111,54,210,0.12) 1px, transparent 1px)",
  backgroundSize: "48px 48px",
  maskImage:
    "radial-gradient(ellipse 80% 90% at 70% 10%, black 20%, transparent 100%)",
  WebkitMaskImage:
    "radial-gradient(ellipse 80% 90% at 70% 10%, black 20%, transparent 100%)",
};

// Placement of up to three delivered-project images: one tall tile on the left
// and two stacked on the right. Fewer images collapse to whatever fits.
const TILE_LAYOUT = {
  1: ["col-span-2 row-span-2"],
  2: ["row-span-2", "row-span-2"],
  3: ["row-span-2", "", ""],
};

const Tile = ({ src, className = "", delay = 0, priority = false }) => (
  <Reveal delay={delay} className={`min-h-0 ${className}`}>
    <div className="h-full rounded-[1.5rem] bg-white/[0.04] p-1 ring-1 ring-white/10">
      <div className="relative h-full overflow-hidden rounded-[calc(1.5rem-0.25rem)] bg-[#14141B]">
        <Image
          src={src}
          alt=""
          fill
          priority={priority}
          sizes="(min-width: 1024px) 24vw, 0px"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B10]/55 via-transparent to-transparent" />
        <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0_1px_1px_rgba(255,255,255,0.12)]" />
      </div>
    </div>
  </Reveal>
);

export default function CaseStudiesHero({ images = [] }) {
  const tiles = images.slice(0, 3);
  const layout = TILE_LAYOUT[tiles.length];

  return (
    <section className="relative overflow-hidden bg-[#0B0B10] pt-16 lg:pt-[72px]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(640px_circle_at_88%_0%,rgba(111,54,210,0.3),transparent_62%),radial-gradient(520px_circle_at_0%_100%,rgba(111,54,210,0.14),transparent_65%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-50"
        style={gridBackdrop}
      />

      <Container className="relative z-10 pt-4 pb-10 sm:pt-6 sm:pb-12 xl:pt-8 xl:pb-16">
        <div
          className={`grid grid-cols-1 items-center gap-10 ${
            tiles.length ? "lg:grid-cols-[1.15fr_0.85fr] lg:gap-12" : ""
          }`}
        >
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
                    <span aria-current="page" className="text-zinc-200">
                      Case Studies
                    </span>
                  </li>
                </ol>
              </nav>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="max-w-3xl font-inter text-3xl font-semibold leading-[1.15] tracking-tight text-white sm:text-4xl lg:text-[2.5rem] xl:text-[2.75rem]">
                Systems we have built for clients, and what changed for them
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mt-5 max-w-xl font-inter text-base leading-relaxed text-zinc-300">
                Each case study sets out the client&apos;s goal, the challenge
                we worked through and the outcome we delivered.
              </p>
            </Reveal>
          </div>

          {tiles.length > 0 && (
            <div className="hidden aspect-[5/4] w-full grid-cols-2 grid-rows-2 gap-3 lg:grid">
              {tiles.map((src, index) => (
                <Tile
                  key={src}
                  src={src}
                  className={layout[index]}
                  delay={0.2 + index * 0.1}
                  priority={index === 0}
                />
              ))}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
