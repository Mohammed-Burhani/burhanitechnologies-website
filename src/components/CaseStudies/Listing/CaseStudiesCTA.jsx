"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { ArrowUpRight, WhatsappLogo } from "@phosphor-icons/react";

import Container from "@/components/constants/Container";
import Reveal from "@/components/contact/Reveal";
import { EASE_CLASS } from "./caseStudyMeta";

// The three headings every case study on this page is written under, so the
// closing section shows what the same conversation will produce for the visitor.
const outline = [
  {
    label: "Goal",
    text: "What should change in the way your team works.",
  },
  {
    label: "Challenge",
    text: "The systems, data and constraints standing in the way.",
  },
  {
    label: "Outcome",
    text: "The result we agree to measure before the build begins.",
  },
];

const gridBackdrop = {
  backgroundImage:
    "linear-gradient(to right, rgba(111,54,210,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(111,54,210,0.12) 1px, transparent 1px)",
  backgroundSize: "48px 48px",
  maskImage:
    "radial-gradient(ellipse 60% 70% at 50% 50%, black 30%, transparent 100%)",
  WebkitMaskImage:
    "radial-gradient(ellipse 60% 70% at 50% 50%, black 30%, transparent 100%)",
};

// Staggered offsets so the project images read as a tilted wall, not a table.
const TILE_OFFSETS = [
  "",
  "translate-y-10",
  "",
  "-translate-y-6",
  "translate-y-4",
  "-translate-y-2",
];

/**
 * Pulls the button a few pixels toward the cursor, so the primary action feels
 * like it has mass. Springs back on leave. Static under reduced motion.
 */
const MagneticLink = ({ href, children, className }) => {
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 18, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 220, damping: 18, mass: 0.4 });

  const handleMove = (event) => {
    if (reduce) return;
    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - (rect.left + rect.width / 2)) * 0.22);
    y.set((event.clientY - (rect.top + rect.height / 2)) * 0.32);
  };
  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      style={{ x: sx, y: sy }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="w-fit"
    >
      <Link href={href} className={className}>
        {children}
      </Link>
    </motion.div>
  );
};

export default function CaseStudiesCTA({ images = [] }) {
  const sectionRef = useRef(null);
  const reduce = useReducedMotion();

  // The project wall drifts against the scroll, so the panel keeps moving as
  // the visitor reaches the end of the page.
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const wallY = useTransform(scrollYProgress, [0, 1], ["-7%", "7%"]);

  // Spotlight follows the pointer inside the panel to show where it is live.
  const mx = useMotionValue(-400);
  const my = useMotionValue(-400);
  const spotlight = useMotionTemplate`radial-gradient(380px circle at ${mx}px ${my}px, rgba(111,54,210,0.24), transparent 70%)`;

  const handlePointer = (event) => {
    if (reduce) return;
    const rect = event.currentTarget.getBoundingClientRect();
    mx.set(event.clientX - rect.left);
    my.set(event.clientY - rect.top);
  };

  const wall = images.slice(0, 6);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#0B0B10] py-2 sm:py-4 lg:py-8"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-50"
        style={gridBackdrop}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#6F36D2]/[0.14] blur-[140px]"
      />

      <Container className="relative">
        <Reveal>
          <div className="rounded-[2rem] bg-white/[0.04] p-1.5 ring-1 ring-white/10">
            <div
              onPointerMove={handlePointer}
              className="relative overflow-hidden rounded-[calc(2rem-0.375rem)] bg-[#12121A] shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_30px_70px_-30px_rgba(111,54,210,0.55)]"
            >
              {/* Project wall: the work itself as the backdrop */}
              {wall.length > 0 && (
                <motion.div
                  aria-hidden="true"
                  style={{ y: reduce ? 0 : wallY }}
                  className="pointer-events-none absolute -right-[6%] -top-[14%] hidden h-[130%] w-[66%] origin-center rotate-[8deg] grid-cols-3 gap-3 opacity-[0.6] [mask-image:linear-gradient(to_left,black_35%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_left,black_35%,transparent_100%)] md:grid"
                >
                  {wall.map((src, index) => (
                    <div
                      key={`${src}-${index}`}
                      className={`relative aspect-[3/4] overflow-hidden rounded-2xl ${TILE_OFFSETS[index]}`}
                    >
                      <Image
                        src={src}
                        alt=""
                        fill
                        sizes="20vw"
                        className="object-cover saturate-[0.85]"
                      />
                    </div>
                  ))}
                </motion.div>
              )}

              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,#12121A_28%,rgba(18,18,26,0.55)_55%,rgba(18,18,26,0)_100%)]"
              />
              <motion.div
                aria-hidden="true"
                style={{ background: spotlight }}
                className="pointer-events-none absolute inset-0 hidden [@media(hover:hover)]:block"
              />

              <div className="relative grid grid-cols-1 gap-10 px-6 py-12 sm:px-10 sm:py-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-14 lg:px-14 lg:py-20">
                <div>
                  <h2 className="max-w-xl font-inter text-3xl font-semibold leading-[1.12] tracking-tight text-white sm:text-4xl lg:text-5xl">
                    Your system could be the{" "}
                    <span className="text-[#B79CE8]">next case study</span>
                  </h2>
                  <p className="mt-5 max-w-[48ch] font-inter text-base leading-relaxed text-zinc-300">
                    Tell us the workflow you want to fix. We will shape it into a
                    goal, a challenge and an outcome before any build starts.
                  </p>

                  <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
                    <MagneticLink
                      href="/contact"
                      className={`group inline-flex items-center justify-center gap-3 rounded-lg bg-[#6F36D2] py-3 pl-6 pr-3 font-inter text-sm font-medium text-white shadow-[0_1px_0_rgba(255,255,255,0.1)_inset,0_18px_40px_-16px_rgba(111,54,210,0.9)] outline-none transition-colors duration-500 ${EASE_CLASS} hover:bg-[#7C43E0] focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#12121A] active:scale-[0.98] sm:text-base`}
                    >
                      Book a free consultation
                      <span
                        className={`flex h-9 w-9 items-center justify-center rounded-full bg-white/15 transition-transform duration-500 ${EASE_CLASS} group-hover:scale-105`}
                      >
                        <ArrowUpRight
                          size={16}
                          weight="bold"
                          aria-hidden="true"
                          className={`transition-transform duration-500 ${EASE_CLASS} group-hover:-translate-y-px group-hover:translate-x-0.5 motion-reduce:transition-none`}
                        />
                      </span>
                    </MagneticLink>

                    <a
                      href="https://wa.me/917299002152"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center justify-center gap-2.5 rounded-lg border border-zinc-600 px-6 py-3 font-inter text-sm font-medium text-zinc-100 outline-none transition-colors duration-500 ${EASE_CLASS} hover:border-zinc-400 hover:bg-white/[0.05] focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#12121A] active:scale-[0.98] sm:text-base`}
                    >
                      <WhatsappLogo
                        size={20}
                        weight="fill"
                        className="text-[#25D366]"
                        aria-hidden="true"
                      />
                      Message us on WhatsApp
                    </a>
                  </div>
                </div>

                {/* What the first conversation produces, in the case study's own headings */}
                <ol className="flex flex-col gap-3">
                  {outline.map((item, index) => (
                    <Reveal as="li" key={item.label} delay={0.1 + index * 0.1}>
                      <div className="rounded-2xl bg-[#12121A]/80 p-1 ring-1 ring-white/10">
                        <div className="rounded-[calc(1rem-0.25rem+0.125rem)] bg-[#161620] px-5 py-4 shadow-[inset_0_1px_1px_rgba(255,255,255,0.07)]">
                          <p className="font-inter text-base font-semibold tracking-tight text-white">
                            {item.label}
                          </p>
                          <p className="mt-1 font-inter text-sm leading-relaxed text-zinc-400">
                            {item.text}
                          </p>
                        </div>
                      </div>
                    </Reveal>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
