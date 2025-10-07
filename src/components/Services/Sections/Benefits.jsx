"use client";
import React from "react";
import Container from "@/components/constants/Container";
import { Heading } from "@/components/textComponents/Heading";
import { Body } from "@/components/textComponents/Body";

export const Benefits = ({ benefits }) => {
  return (
    <Container className="bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto text-center">
        <Heading className="text-3xl font-bold text-gray-800">
          What You Get
        </Heading>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-md"
            >
              <h4 className="text-xl font-semibold text-gray-800">
                {benefit.title}
              </h4>
              <Body className="mt-2 text-gray-600">
                {benefit.description}
              </Body>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};