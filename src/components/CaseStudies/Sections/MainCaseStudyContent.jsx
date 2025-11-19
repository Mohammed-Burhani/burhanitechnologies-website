"use client";
import Container from "@/components/constants/Container";
import { Body } from "@/components/textComponents/Body";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { urlForImage } from "@/sanity/lib/image";

const portableTextComponents = {
  types: {
    image: ({ value }) => {
      return (
        <div className="my-8">
          <Image
            src={urlForImage(value)}
            alt={value.alt || "Case study image"}
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

export const MainCaseStudyContent = ({ title, content, image }) => {
  return (
    <Container className="bg-gray-50 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12" data-aos="fade-up">
        <div className="lg:col-span-4">
          <h2 className="text-4xl 4xl:text-5xl font-bold font-inter text-gray-900 sticky top-32">
            {title}
          </h2>
        </div>

        <div className="lg:col-span-1 flex justify-center">
          <div className="hidden lg:block w-px h-full bg-gradient-to-b from-[#6F36D2] via-[#6F36D2] to-transparent" />
        </div>

        <div className="lg:col-span-7">
          <div className="prose prose-lg max-w-none">
            <PortableText value={content} components={portableTextComponents} />
          </div>

          {image && (
            <div className="mt-12" data-aos="zoom-in">
              <Image
                src={urlForImage(image)}
                alt={title}
                width={1200}
                height={800}
                className="rounded-lg w-full h-auto shadow-lg"
              />
            </div>
          )}
        </div>
      </div>
    </Container>
  );
};
