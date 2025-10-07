"use client";
import React from "react";
import Container from "@/components/constants/Container";
import { Heading } from "@/components/textComponents/Heading";
import { Body } from "@/components/textComponents/Body";

export const Methodology = ({ steps, techStack }) => {
  return (
    <Container className="bg-white py-16">
      <div className="max-w-4xl mx-auto text-center">
        <Heading className="text-3xl font-bold text-gray-800">
          Our Development Methodology
        </Heading>
        <div className="mt-8 space-y-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="p-6 bg-gray-50 rounded-lg shadow-sm"
            >
              <h4 className="text-xl font-semibold text-gray-800">
                {step.title}
              </h4>
              <Body className="mt-2 text-gray-600">{step.description}</Body>
            </div>
          ))}
        </div>
        <div className="mt-12">
          <h4 className="text-2xl font-bold text-gray-800">
            Technology Stack
          </h4>
          <Body className="mt-4 text-gray-600">{techStack}</Body>
        </div>
      </div>
    </Container>
  );
};