import Link from "next/link";
import { ArrowRight, WhatsappLogo } from "@phosphor-icons/react/dist/ssr";

import Container from "@/components/constants/Container";
import Reveal from "@/components/contact/Reveal";
import { EASE_CLASS } from "@/components/CaseStudies/Listing/caseStudyMeta";

const gridBackdrop = {
  backgroundImage:
    "linear-gradient(to right, rgba(111,54,210,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(111,54,210,0.12) 1px, transparent 1px)",
  backgroundSize: "48px 48px",
  maskImage:
    "radial-gradient(ellipse 70% 80% at 50% 50%, black 20%, transparent 100%)",
  WebkitMaskImage:
    "radial-gradient(ellipse 70% 80% at 50% 50%, black 20%, transparent 100%)",
};

export default function KnowledgeBaseCTA() {
  return (
    <section className="relative overflow-hidden bg-[#0B0B10] py-16 sm:py-20 lg:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(640px_circle_at_50%_50%,rgba(111,54,210,0.3),transparent_62%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-50"
        style={gridBackdrop}
      />

      <Container className="relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <h2 className="font-inter text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl lg:text-[2.5rem]">
              Still have a question?
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-5 font-inter text-base leading-relaxed text-zinc-300 sm:text-lg">
              Ask it directly. Thirty minutes, free, and you keep the workflow
              map whether or not we build anything together.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className={`group inline-flex items-center justify-center gap-3 rounded-lg bg-[#6F36D2] py-3 pl-6 pr-3 font-inter text-sm font-medium text-white shadow-[0_1px_0_rgba(255,255,255,0.08)_inset] outline-none transition duration-500 ${EASE_CLASS} hover:bg-[#7C43E0] focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0B10] active:scale-[0.98] sm:text-base`}
              >
                Book a free consultation
                <span
                  className={`flex h-9 w-9 items-center justify-center rounded-full bg-white/15 transition-transform duration-500 ${EASE_CLASS} group-hover:scale-105`}
                >
                  <ArrowRight
                    size={16}
                    weight="bold"
                    aria-hidden="true"
                    className={`transition-transform duration-500 ${EASE_CLASS} group-hover:translate-x-0.5 motion-reduce:transition-none`}
                  />
                </span>
              </Link>

              <Link
                href="https://wa.me/917299002152"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/[0.06] px-6 py-3 font-inter text-sm font-medium text-white outline-none backdrop-blur-sm transition duration-500 ${EASE_CLASS} hover:border-white/30 hover:bg-white/[0.1] focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0B10] sm:text-base`}
              >
                <WhatsappLogo size={20} weight="fill" />
                Message us on WhatsApp
              </Link>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
