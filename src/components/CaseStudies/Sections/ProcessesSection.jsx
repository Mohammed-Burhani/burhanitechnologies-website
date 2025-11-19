"use client";
import { useState, useEffect, useRef } from "react";
import Container from "@/components/constants/Container";
import { PortableText } from "@portabletext/react";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";

const portableTextComponents = {
  types: {
    image: ({ value }) => {
      return (
        <div className="my-8">
          <Image
            src={urlForImage(value)}
            alt={value.alt || "Process image"}
            width={1200}
            height={600}
            className="rounded-lg w-full h-auto"
          />
          {value.caption && (
            <p className="text-sm text-gray-500 mt-2 text-center italic">
              {value.caption}
            </p>
          )}
        </div>
      );
    },
  },
  block: {
    h1: ({ children }) => (
      <h1 className="text-4xl font-bold font-inter mt-8 mb-4 text-gray-900">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl font-bold font-inter mt-6 mb-3 text-gray-900">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-semibold font-inter mt-5 mb-2 text-gray-900">
        {children}
      </h3>
    ),
    normal: ({ children }) => (
      <p className="text-gray-700 leading-relaxed mb-4">{children}</p>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc list-inside space-y-2 mb-4 text-gray-700">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal list-inside space-y-2 mb-4 text-gray-700">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="ml-4">{children}</li>,
    number: ({ children }) => <li className="ml-4">{children}</li>,
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-bold text-gray-900">{children}</strong>
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
          className="text-[#6F36D2] hover:underline"
        >
          {children}
        </a>
      );
    },
  },
};

export const ProcessesSection = ({ processes }) => {
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
      {
        rootMargin: "-20% 0px -70% 0px",
      }
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

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  if (!processes || processes.length === 0) {
    return null;
  }

  return (
    <Container className="bg-gray-50 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Sticky Sidebar Navigation */}
        <div className="lg:col-span-3">
          <div className="sticky top-32">
            <h3 className="text-2xl font-bold font-inter text-gray-900 mb-6">
              Processes
            </h3>
            <nav className="space-y-2">
              {processes.map((process, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(index)}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 ${
                    activeId === index
                      ? "bg-[#6F36D2] text-white font-semibold"
                      : "text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {process.title}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Vertical Separator */}
        <div className="lg:col-span-1 flex justify-center">
          <div className="hidden lg:block w-px h-full bg-gradient-to-b from-[#6F36D2] via-[#6F36D2] to-transparent" />
        </div>

        {/* Processes Content */}
        <div className="lg:col-span-8 space-y-20">
          {processes.map((process, index) => (
            <div
              key={index}
              data-index={index}
              ref={(el) => (sectionRefs.current[index] = el)}
              className="scroll-mt-32"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Process Header */}
              <div className="mb-8">
                <h2 className="text-4xl 4xl:text-5xl font-bold font-inter text-gray-900 mb-4">
                  {process.title}
                </h2>
              </div>

              {/* Highlights */}
              {process.highlights && process.highlights.length > 0 && (
                <div className="mb-8 bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold font-inter text-gray-900 mb-4">
                    Highlights
                  </h3>
                  <ul className="space-y-2">
                    {process.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-[#6F36D2] mr-2">•</span>
                        <span className="text-gray-700">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Process Content */}
              <div className="prose prose-lg max-w-none mb-8">
                <PortableText
                  value={process.content}
                  components={portableTextComponents}
                />
              </div>

              {/* Images Gallery */}
              {process.images && process.images.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {process.images.map((image, idx) => (
                    <div key={idx} className="relative">
                      <Image
                        src={urlForImage(image)}
                        alt={image.alt || `${process.title} image ${idx + 1}`}
                        width={600}
                        height={400}
                        className="rounded-lg w-full h-auto shadow-lg"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};
