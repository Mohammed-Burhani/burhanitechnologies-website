"use client";
import Container from "@/components/constants/Container";
import { Heading } from "@/components/textComponents/Heading";
import { Body } from "@/components/textComponents/Body";
import React from "react";

export const Differentiators = () => {
  const differentiators = [
    {
      title: "End-to-End Custom Development",
      description:
        "From architecture to deployment, we build solutions tailored to your exact requirements using the latest tech stacks.",
    },
    {
      title: "Agile + DevOps Methodology",
      description:
        "15–90 day delivery cycles with continuous integration, automated testing, and iterative releases.",
    },
    {
      title: "Flexible Fulfillment Standards",
      description:
        "No cookie-cutter solutions. Every system adapts to your unique business processes and scales with you.",
    },
    {
      title: "Full-Stack Ownership",
      description:
        "Design, development, deployment, integration, and ongoing support - one partner for your entire digital transformation.",
    },
    {
      title: "Industry-Proven Expertise",
      description:
        "Deep experience in healthcare product development, manufacturing automation, construction management, and automotive systems.",
    },
  ];

  return (
    <Container className="bg-[#F5F5F5] py-20">
      <div className="text-center">
        <Heading className="text-4xl font-bold text-gray-800">
          Why Enterprise Teams Choose Burhani
        </Heading>
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {differentiators.map((item, index) => (
          <div
            key={index}
            className="p-6 bg-white rounded-lg shadow-md"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <h3 className="text-xl font-semibold text-gray-800">
              {item.title}
            </h3>
            <Body className="mt-4 text-gray-600">{item.description}</Body>
          </div>
        ))}
      </div>

      <div
        className="mt-16 text-center p-8 bg-white rounded-lg shadow-lg"
        data-aos="fade-up"
      >
        <Body className="text-xl italic text-gray-700">
          “Burhani Technologies delivered a robust and scalable solution that
          has significantly improved our operational efficiency. Their
          commitment to quality and deep understanding of our industry sets them
          apart.”
        </Body>
        <p className="mt-4 text-lg font-semibold text-gray-800">
          - CTO, Leading Manufacturing Firm
        </p>
      </div>
    </Container>
  );
};
