import React from "react";
import Container from "@/components/constants/Container";
import { Heading } from "@/components/textComponents/Heading";
import { Body } from "@/components/textComponents/Body";

export const Banner = () => {
  return (
    <Container className="bg-gradient-to-br from-[#180030] to-[#391C6C] text-white min-h-[50vh] flex flex-col justify-center items-center">
      <div className="text-center max-w-4xl">
        <h4
          className="uppercase text-[#E3C8FF] font-extrabold text-sm mb-4"
          data-aos="fade-down"
        >
          Our Blog
        </h4>

        <Heading data-aos="fade-up" className="text-white">
          Insights & Innovation
        </Heading>

        <Body className="mt-4 text-gray-200" data-aos="fade-up">
          Explore the latest trends, best practices, and expert insights in
          software development, automation, and digital transformation.
        </Body>
      </div>
    </Container>
  );
};
