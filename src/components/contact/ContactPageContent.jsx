"use client";
import { useRef } from "react";
import Link from "next/link";
import { motion, useReducedMotion, useScroll } from "framer-motion";
import {
  CaretRight,
  Clock,
  EnvelopeSimple,
  MapPin,
  Phone,
  WhatsappLogo,
} from "@phosphor-icons/react";

import Container from "@/components/constants/Container";
import ContactForm from "@/components/form/ContactForm";
import Reveal from "./Reveal";

const EASE_CLASS = "ease-[cubic-bezier(0.32,0.72,0,1)]";

const steps = [
  {
    number: "01",
    title: "Review your requirement",
    text: "Our team reviews the business problem, service need and outcome you describe.",
  },
  {
    number: "02",
    title: "Discuss the scope",
    text: "We clarify the workflow, existing systems and people involved before proposing an approach.",
  },
  {
    number: "03",
    title: "Agree the next step",
    text: "Scope, delivery, pricing and support are agreed for your project before work begins.",
  },
];

const hours = [
  "Monday to Friday, 09:00 to 18:00 IST",
  "Saturday, 09:00 to 13:00 IST",
];

const gridBackdrop = {
  backgroundImage:
    "linear-gradient(to right, rgba(111,54,210,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(111,54,210,0.12) 1px, transparent 1px)",
  backgroundSize: "48px 48px",
};

const maskAt = (shape) => ({
  maskImage: shape,
  WebkitMaskImage: shape,
});

/**
 * Double-bezel container: an outer tray with a hairline ring holding an inner
 * core with its own highlight and a concentric radius (2rem - 0.375rem).
 * Shadows are tinted with the brand purple, never pure black.
 */
const Bezel = ({
  children,
  className = "",
  coreClassName = "",
  dark = false,
}) => (
  <div
    className={`rounded-[2rem] bg-zinc-900/[0.04] p-1.5 ring-1 ring-zinc-900/[0.07] ${className}`}
  >
    <div
      className={`h-full rounded-[calc(2rem-0.375rem)] ${
        dark
          ? "bg-[#14141B] shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_30px_60px_-30px_rgba(111,54,210,0.45)]"
          : "bg-white shadow-[inset_0_1px_1px_rgba(255,255,255,1),0_24px_50px_-32px_rgba(111,54,210,0.22)]"
      } ${coreClassName}`}
    >
      {children}
    </div>
  </div>
);

const IconWell = ({ children, dark = false }) => (
  <span
    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ring-1 ring-inset ${
      dark
        ? "bg-white/[0.06] text-[#B79CE8] ring-white/10"
        : "bg-[#6F36D2]/[0.06] text-[#6F36D2] ring-[#6F36D2]/20"
    }`}
  >
    {children}
  </span>
);

const darkContactLink = `group flex items-center gap-3 font-inter text-base text-white transition-colors duration-300 ${EASE_CLASS} hover:text-[#B79CE8]`;
const lightLink = `w-fit transition-colors duration-300 ${EASE_CLASS} hover:text-[#6F36D2]`;
const inlineLink = `text-[#6F36D2] underline underline-offset-4 transition-colors duration-300 ${EASE_CLASS} hover:text-zinc-900`;

/** Process steps joined by a line that draws as the section scrolls into view. */
const ProcessTimeline = () => {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 75%", "end 60%"],
  });

  return (
    <ol ref={ref} className="relative flex flex-col gap-12">
      <span
        aria-hidden="true"
        className="absolute bottom-5 left-5 top-5 w-px -translate-x-1/2 bg-zinc-900/10"
      />
      <motion.span
        aria-hidden="true"
        className="absolute bottom-5 left-5 top-5 w-px origin-top -translate-x-1/2 bg-[#6F36D2]"
        style={{ scaleY: reduce ? 1 : scrollYProgress }}
      />
      {steps.map((step, index) => (
        <li key={step.number} className="relative pl-16">
          <span className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-white font-inter text-sm font-bold text-[#6F36D2] ring-1 ring-[#6F36D2]/40">
            {step.number}
          </span>
          <Reveal delay={index * 0.08}>
            <h3 className="pt-1.5 font-inter text-xl font-semibold tracking-tight text-zinc-900 sm:text-2xl">
              {step.title}
            </h3>
            <p className="mt-3 max-w-[52ch] font-inter text-base leading-relaxed text-zinc-600">
              {step.text}
            </p>
          </Reveal>
        </li>
      ))}
    </ol>
  );
};

export default function ContactPageContent() {
  return (
    <main id="main" className="bg-white font-inter text-zinc-900">
      {/* Hero: stays on the dark brand surface used by the home and service heroes */}
      <section className="relative overflow-hidden bg-[#0B0B10] pt-16 lg:pt-[72px]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(640px_circle_at_88%_0%,rgba(111,54,210,0.3),transparent_62%),radial-gradient(520px_circle_at_0%_100%,rgba(111,54,210,0.14),transparent_65%)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-50"
          style={{
            ...gridBackdrop,
            ...maskAt(
              "radial-gradient(ellipse 80% 90% at 70% 10%, black 20%, transparent 100%)",
            ),
          }}
        />

        <Container className="relative z-10 pt-4 pb-10 sm:pt-6 sm:pb-12 xl:pt-8 xl:pb-16">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
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
                        Contact
                      </span>
                    </li>
                  </ol>
                </nav>
              </Reveal>

              <Reveal delay={0.08}>
                <h1 className="max-w-3xl font-inter text-3xl font-semibold leading-[1.15] tracking-tight text-white sm:text-4xl lg:text-[2.5rem] xl:text-[2.75rem]">
                  What business problem do you want to solve?
                </h1>
              </Reveal>

              <Reveal delay={0.16}>
                <p className="mt-5 max-w-2xl font-inter text-base leading-relaxed text-zinc-300">
                  Tell us what needs to work better, the result you want and the
                  service you need. We can then discuss an approach that fits
                  your business.
                </p>
              </Reveal>
            </div>

            <Reveal delay={0.24} className="hidden lg:block">
              <div className="rounded-[2rem] bg-white/[0.04] p-1.5 ring-1 ring-white/10">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[calc(2rem-0.375rem)]">
                  <img
                    src="https://picsum.photos/seed/burhani-discovery-call-chennai/900/675"
                    alt=""
                    className="h-full w-full object-cover"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B10]/60 via-transparent to-transparent" />
                  <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0_1px_1px_rgba(255,255,255,0.12)]" />
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Form + technical leadership */}
      <section className="relative bg-zinc-50">
        <Container className="relative">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-7">
              <Reveal>
                <Bezel coreClassName="p-6 sm:p-10">
                  <div className="mb-8 rounded-2xl bg-[#6F36D2]/[0.05] p-5 ring-1 ring-inset ring-[#6F36D2]/20">
                    <h2 className="font-inter text-xl font-semibold tracking-tight text-zinc-900">
                      Start with your business requirement
                    </h2>
                    <p className="mt-3 font-inter text-base leading-relaxed text-zinc-600">
                      This form is for business projects. Share the problem and
                      the outcome you are looking for.
                    </p>
                    <p className="mt-3 font-inter text-base leading-relaxed text-zinc-600">
                      Looking for a role?{" "}
                      <a
                        href="mailto:connect@burhanitechnologies.com?subject=Career%20enquiry"
                        className={inlineLink}
                      >
                        Send a career enquiry by email
                      </a>
                      .
                    </p>
                  </div>
                  <ContactForm />
                </Bezel>
              </Reveal>
            </div>

            <div className="lg:col-span-5">
              <Reveal delay={0.1} className="lg:sticky lg:top-28">
                <Bezel dark coreClassName="relative overflow-hidden p-7 sm:p-9">
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-[radial-gradient(420px_circle_at_100%_0%,rgba(111,54,210,0.28),transparent_60%)]"
                  />
                  <div className="relative">
                    <p className="font-inter text-xs font-medium uppercase tracking-[0.18em] text-[#B79CE8]">
                      Technical leadership
                    </p>
                    <h2 className="mt-4 font-inter text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                      Yusuf Shabbir
                    </h2>
                    <p className="mt-1 font-inter text-base text-[#B79CE8]">
                      CTO
                    </p>
                    <p className="mt-5 font-inter text-base leading-relaxed text-zinc-300">
                      Our technical team reviews the workflow and systems your
                      project needs to connect. We agree your project contacts
                      during scoping.
                    </p>

                    <div className="mt-7 flex flex-col gap-4 border-t border-white/10 pt-7">
                      <a
                        href="mailto:connect@burhanitechnologies.com"
                        className={darkContactLink}
                      >
                        <IconWell dark>
                          <EnvelopeSimple
                            size={20}
                            weight="regular"
                            aria-hidden="true"
                          />
                        </IconWell>
                        connect@burhanitechnologies.com
                      </a>
                      <a href="tel:+917299002152" className={darkContactLink}>
                        <IconWell dark>
                          <Phone size={20} weight="regular" aria-hidden="true" />
                        </IconWell>
                        +91 72990 02152
                      </a>
                      <a
                        href="https://wa.me/917299002152"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group mt-1 inline-flex w-fit items-center gap-2.5 rounded-full px-5 py-3 font-inter text-base font-medium text-white ring-1 ring-inset ring-white/20 transition duration-500 ${EASE_CLASS} hover:bg-white/[0.07] hover:ring-white/30 active:scale-[0.98]`}
                      >
                        <WhatsappLogo
                          size={22}
                          weight="fill"
                          className="text-[#25D366]"
                          aria-hidden="true"
                        />
                        WhatsApp us
                      </a>
                    </div>

                    <p className="mt-7 flex items-start gap-3 font-inter text-sm leading-relaxed text-zinc-400">
                      <Clock
                        size={18}
                        weight="regular"
                        className="mt-0.5 shrink-0"
                        aria-hidden="true"
                      />
                      <span>
                        {hours.map((line) => (
                          <span key={line} className="block">
                            {line}
                          </span>
                        ))}
                      </span>
                    </p>
                  </div>
                </Bezel>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* What happens after you send it */}
      <section className="relative overflow-hidden bg-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            ...gridBackdrop,
            ...maskAt(
              "radial-gradient(ellipse 70% 60% at 20% 30%, black 20%, transparent 100%)",
            ),
          }}
        />
        <Container className="relative">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <Reveal className="lg:sticky lg:top-28">
                <h2 className="font-inter text-2xl font-semibold leading-tight tracking-tight text-zinc-900 sm:text-3xl lg:text-4xl">
                  What happens after you send it
                </h2>
                <p className="mt-5 max-w-[46ch] font-inter text-base leading-relaxed text-zinc-600">
                  See the{" "}
                  <Link href="/book-a-consultation" className={inlineLink}>
                    consultation agenda
                  </Link>{" "}
                  and our{" "}
                  <Link
                    href="/knowledge-base/what-you-need-ready-before-a-discovery-call"
                    className={inlineLink}
                  >
                    preparation guide
                  </Link>{" "}
                  to make the first discussion useful.
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <ProcessTimeline />
            </div>
          </div>
        </Container>
      </section>

      {/* Office details */}
      <section className="relative border-t border-zinc-200 bg-zinc-50">
        <Container className="relative">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
            <Reveal className="lg:col-span-6 lg:row-span-2">
              <Bezel className="h-full" coreClassName="relative overflow-hidden">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 opacity-50"
                  style={{
                    ...gridBackdrop,
                    ...maskAt(
                      "radial-gradient(ellipse 90% 80% at 100% 100%, black 10%, transparent 100%)",
                    ),
                  }}
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-[radial-gradient(380px_circle_at_100%_100%,rgba(111,54,210,0.16),transparent_62%)]"
                />
                <div className="relative flex h-full min-h-[18rem] flex-col justify-between gap-10 p-7 sm:p-10">
                  <IconWell>
                    <MapPin size={20} weight="regular" aria-hidden="true" />
                  </IconWell>
                  <div>
                    <h2 className="font-inter text-xl font-semibold tracking-tight text-zinc-900 sm:text-2xl">
                      Visit our office
                    </h2>
                    <address className="mt-4 font-inter text-base not-italic leading-relaxed text-zinc-600 sm:text-lg">
                      1st Floor, Vanguard House, #48, Moore St,
                      <br />
                      Parry&apos;s Corner, George Town,
                      <br />
                      Chennai, Tamil Nadu 600001
                    </address>
                  </div>
                </div>
              </Bezel>
            </Reveal>

            <Reveal delay={0.08} className="lg:col-span-6">
              <Bezel className="h-full" coreClassName="p-7 sm:p-8">
                <div className="flex items-start gap-4">
                  <IconWell>
                    <Phone size={20} weight="regular" aria-hidden="true" />
                  </IconWell>
                  <div>
                    <h2 className="font-inter text-xl font-semibold tracking-tight text-zinc-900">
                      Talk to us
                    </h2>
                    <p className="mt-3 flex flex-col gap-1 font-inter text-base leading-relaxed text-zinc-600">
                      <a href="tel:+917299002152" className={lightLink}>
                        +91 72990 02152
                      </a>
                      <a
                        href="mailto:connect@burhanitechnologies.com"
                        className={lightLink}
                      >
                        connect@burhanitechnologies.com
                      </a>
                    </p>
                  </div>
                </div>
              </Bezel>
            </Reveal>

            <Reveal delay={0.16} className="lg:col-span-6">
              <Bezel className="h-full" coreClassName="p-7 sm:p-8">
                <div className="flex items-start gap-4">
                  <IconWell>
                    <Clock size={20} weight="regular" aria-hidden="true" />
                  </IconWell>
                  <div>
                    <h2 className="font-inter text-xl font-semibold tracking-tight text-zinc-900">
                      Office hours
                    </h2>
                    <p className="mt-3 font-inter text-base leading-relaxed text-zinc-600">
                      {hours.map((line) => (
                        <span key={line} className="block">
                          {line}
                        </span>
                      ))}
                    </p>
                  </div>
                </div>
              </Bezel>
            </Reveal>
          </div>
        </Container>
      </section>
    </main>
  );
}
