"use client";
import { useState } from "react";
import { Star } from "@phosphor-icons/react/dist/ssr";

import Container from "@/components/constants/Container";
import Reveal from "@/components/contact/Reveal";
import Bezel from "@/components/CaseStudies/Listing/Bezel";
import { EASE_CLASS } from "@/components/CaseStudies/Listing/caseStudyMeta";

const TESTIMONIALS = [
  {
    title: "Highly Professional and Reliable",
    desc: "Collaborating with Burhani Technologies for our digital transformation was a seamless experience. Their expertise, timely communication, and commitment to delivering excellence truly stood out.",
    client: "Sarah L.",
    role: "CTO",
  },
  {
    title: "A Game-Changer for Our Business",
    desc: "Working with Burhani Technologies transformed how we approach IT challenges. Their innovative solutions and dedicated support have significantly improved our efficiency.",
    client: "Mark R.",
    role: "Operations Director",
  },
  {
    title: "Unmatched Expertise and Service",
    desc: "From start to finish, Burhani Technologies provided top-notch service. They took the time to understand our needs and delivered tailored solutions that surpassed our expectations.",
    client: "Priya S.",
    role: "Product Manager",
  },
  {
    title: "Outstanding Team and Results",
    desc: "The team exceeded our expectations at every step of our IT project. Their strategic approach and hands-on support made all the difference.",
    client: "Michael K.",
    role: "CEO",
  },
  {
    title: "Exceptional Support and Innovation",
    desc: "We approached Burhani Technologies for help with optimizing our IT operations, and they delivered beyond our expectations. Their innovative solutions have been a tremendous asset.",
    client: "Emily T.",
    role: "Head of Engineering",
  },
  {
    title: "Reliable, Responsive, and Remarkable",
    desc: "Choosing Burhani Technologies was one of the best decisions we've made. Their ability to adapt to our needs and provide effective IT solutions has set a new standard.",
    client: "David P.",
    role: "Technical Lead",
  },
];

const TestimonialCard = ({ testimonial, index }) => (
  <Reveal delay={index * 0.08}>
    <Bezel className="h-full">
      <div className="flex h-full flex-col p-6 lg:p-8">
        <div className="mb-4 flex gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={16} weight="fill" className="text-[#6F36D2]" />
          ))}
        </div>

        <h3 className="mb-3 font-inter text-lg font-semibold tracking-tight text-zinc-900 sm:text-xl">
          {testimonial.title}
        </h3>

        <p className="mb-6 flex-1 font-inter text-sm leading-relaxed text-zinc-700 sm:text-base">
          {testimonial.desc}
        </p>

        <div className="border-t border-zinc-900/[0.08] pt-4">
          <p className="font-inter text-sm font-semibold text-zinc-900">
            {testimonial.client}
          </p>
          <p className="mt-1 font-inter text-xs text-zinc-500">
            {testimonial.role}
          </p>
        </div>
      </div>
    </Bezel>
  </Reveal>
);

export default function TestimonialsRevised() {
  const [visibleCount, setVisibleCount] = useState(3);
  const showAll = visibleCount >= TESTIMONIALS.length;

  return (
    <section className="bg-zinc-50 py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="mb-12 text-center lg:mb-16">
          <Reveal>
            <span className="inline-flex items-center rounded-full bg-[#6F36D2]/[0.08] px-3 py-1 font-inter text-xs font-medium uppercase tracking-wider text-[#6F36D2] ring-1 ring-inset ring-[#6F36D2]/20">
              Testimonials
            </span>
          </Reveal>

          <Reveal delay={0.08}>
            <h2 className="mt-4 font-inter text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl lg:text-[2.5rem]">
              Trusted by companies worldwide
            </h2>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mx-auto mt-4 max-w-2xl font-inter text-base leading-relaxed text-zinc-600 sm:text-lg">
              We are driven by our passion for serving customers with excellence.
              Our success is intertwined with the success of each company we work
              with.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.slice(0, visibleCount).map((testimonial, index) => (
            <TestimonialCard
              key={index}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>

        {!showAll && (
          <Reveal delay={0.2}>
            <div className="mt-10 text-center">
              <button
                onClick={() => setVisibleCount(TESTIMONIALS.length)}
                className={`inline-flex items-center gap-2 rounded-lg border border-zinc-900/10 bg-white px-6 py-3 font-inter text-sm font-medium text-zinc-900 shadow-sm outline-none transition duration-500 ${EASE_CLASS} hover:border-[#6F36D2]/30 hover:bg-zinc-50 focus-visible:ring-2 focus-visible:ring-[#6F36D2] focus-visible:ring-offset-2 sm:text-base`}
              >
                Show more testimonials
              </button>
            </div>
          </Reveal>
        )}
      </Container>
    </section>
  );
}
