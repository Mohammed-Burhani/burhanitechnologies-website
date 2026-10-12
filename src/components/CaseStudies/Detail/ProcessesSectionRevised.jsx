"use client";
import { useState, useEffect, useRef } from "react";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

import Container from "@/components/constants/Container";
import Reveal from "@/components/contact/Reveal";
import Bezel from "../Listing/Bezel";
import { EASE_CLASS } from "../Listing/caseStudyMeta";

const portableTextComponents = {
  types: {
    image: ({ value }) => {
      return (
        <div className="my-8">
          <div className="overflow-hidden rounded-[1.5rem] bg-zinc-900/[0.04] p-1.5 ring-1 ring-zinc-900/[0.07]">
            <Image
              src={value.url}
              alt={value.alt || "Process image"}
              width={1200}
              height={600}
              className="w-full rounded-[calc(1.5rem-0.375rem)] object-cover"
            />
          </div>
          {value.caption && (
            <p className="mt-3 font-inter text-sm italic text-zinc-500">
              {value.caption}
            </p>
          )}
        </div>
      );
    },
  },
  block: {
    h2: ({ children }) => (
      <h3 className="mb-3 mt-8 font-inter text-2xl font-semibold tracking-tight text-zinc-900">
        {children}
      </h3>
    ),
    h3: ({ children }) => (
      <h4 className="mb-2 mt-6 font-inter text-xl font-semibold tracking-tight text-zinc-900">
        {children}
      </h4>
    ),
    normal: ({ children }) => (
      <p className="mb-4 font-inter text-base leading-relaxed text-zinc-700">
        {children}
      </p>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="mb-4 space-y-2 pl-5 font-inter text-base text-zinc-700">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="mb-4 list-decimal space-y-2 pl-5 font-inter text-base text-zinc-700">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => (
      <li className="relative before:absolute before:-left-5 before:text-[#6F36D2] before:content-['•']">
        {children}
      </li>
    ),
    number: ({ children }) => <li>{children}</li>,
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-semibold text-zinc-900">{children}</strong>
    ),
    em: ({ children }) => <em className="italic">{children}</em>,
    link: ({ value, children }) => {
      const target = (value?.href || "").startsWith("http")
        ? "_blank"
        : undefined;
      return (
        <a
          href={value?.href}
          target={target}
          rel={target === "_blank" ? "noopener noreferrer" : undefined}
          className="font-medium text-[#6F36D2] underline decoration-[#6F36D2]/30 decoration-1 underline-offset-2 transition-colors duration-300 hover:decoration-[#6F36D2]"
        >
          {children}
        </a>
      );
    },
  },
};

export default function ProcessesSectionRevised({ processes }) {
  const [activeId, setActiveId] = useState(0);
  const sectionRefs = useRef({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(parseInt(entry.target.dataset.index));
          }
        });
      },
      { rootMargin: "-20% 0px -70% 0px" }
    );

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [processes]);

  const scrollToSection = (index) => {
    const element = sectionRefs.current[index];
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  if (!processes || processes.length === 0) return null;

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <Container>
        <Reveal>
          <h2 className="mb-12 font-inter text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl lg:mb-16">
            How we worked through it
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[280px_1fr] lg:gap-16">
          {/* Sticky nav */}
          <div className="hidden lg:block">
            <div className="sticky top-24">
              <nav className="space-y-2">
                {processes.map((process, index) => (
                  <button
                    key={index}
                    onClick={() => scrollToSection(index)}
                    className={`w-full rounded-lg px-4 py-2.5 text-left font-inter text-sm font-medium transition-all duration-300 ${EASE_CLASS} ${
                      activeId === index
                        ? "bg-[#6F36D2] text-white shadow-sm"
                        : "text-zinc-700 hover:bg-zinc-100"
                    }`}
                  >
                    {process.title}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-16">
            {processes.map((process, index) => (
              <div
                key={index}
                data-index={index}
                ref={(el) => (sectionRefs.current[index] = el)}
                className="scroll-mt-24"
              >
                <Reveal>
                  <Bezel>
                    <div className="p-6 lg:p-8">
                      <h3 className="mb-6 font-inter text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl">
                        {process.title}
                      </h3>

                      {process.highlights && process.highlights.length > 0 && (
                        <div className="mb-6 rounded-xl bg-zinc-50 p-4 ring-1 ring-inset ring-zinc-900/[0.04]">
                          <h4 className="mb-3 font-inter text-sm font-semibold uppercase tracking-wide text-zinc-500">
                            Highlights
                          </h4>
                          <ul className="space-y-2">
                            {process.highlights.map((highlight, idx) => (
                              <li
                                key={idx}
                                className="flex items-start gap-2 font-inter text-sm text-zinc-700"
                              >
                                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#6F36D2]" />
                                <span>{highlight}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      <div className="prose prose-zinc max-w-none">
                        <PortableText
                          value={process.content}
                          components={portableTextComponents}
                        />
                      </div>

                      {process.images && process.images.length > 0 && (
                        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
                          {process.images.map((imageUrl, idx) => (
                            <div
                              key={idx}
                              className="overflow-hidden rounded-[1.5rem] bg-zinc-900/[0.04] p-1.5 ring-1 ring-zinc-900/[0.07]"
                            >
                              <Image
                                src={imageUrl}
                                alt={`${process.title} image ${idx + 1}`}
                                width={600}
                                height={400}
                                className="w-full rounded-[calc(1.5rem-0.375rem)] object-cover"
                              />
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </Bezel>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
