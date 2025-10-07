"use client";
import React from "react";
import Container from "@/components/constants/Container";
import { Heading } from "@/components/textComponents/Heading";
import { Body } from "@/components/textComponents/Body";

export const ServiceIntroduction = ({ children, industries }) => {
  return (
    <Container className="bg-white py-16">
      <div className="max-w-4xl mx-auto text-center">
        <Heading className="text-3xl font-bold text-gray-800">
          Service Introduction
        </Heading>
        <div className="mt-4 text-gray-600">{children}</div>
        <div className="mt-8">
          <h4 className="text-xl font-semibold text-gray-800">
            Industries Served
          </h4>
          <Body className="mt-2 text-gray-600">{industries}</Body>
        </div>
      </div>
    </Container>
  );
};