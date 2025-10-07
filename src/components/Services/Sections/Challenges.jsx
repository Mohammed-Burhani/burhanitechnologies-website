"use client";
import React from "react";
import Container from "@/components/constants/Container";
import { Heading } from "@/components/textComponents/Heading";
import { Body } from "@/components/textComponents/Body";

export const Challenges = ({ challenges }) => {
  return (
    <Container className="bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto text-center">
        <Heading className="text-3xl font-bold text-gray-800">
          The Challenges We Solve
        </Heading>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {challenges.map((challenge, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-md"
            >
              <Body className="text-gray-600">{challenge}</Body>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};