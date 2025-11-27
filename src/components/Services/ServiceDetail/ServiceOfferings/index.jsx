"use client";
import { useState } from "react";
import Container from "@/components/constants/Container";
import { Body } from "@/components/textComponents/Body";
import { Heading } from "@/components/textComponents/Heading";
import { ServiceList } from "./ServiceList";
import { ServiceDetails } from "./ServiceDetails";

export const ServiceOfferings = ({ title, description, offerings }) => {
  // Only show if offerings exist in Sanity
  if (!offerings || offerings.length === 0) {
    return null;
  }

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Container className="bg-gradient-to-br from-[#180030] via-[#4a1a7d] to-[#6F36D2] relative overflow-hidden py-20">
      <div className="absolute inset-0 bg-[#000] w-full h-full opacity-30" />
      
      <div className="relative z-10">
        {(title || description) && (
          <div className="mb-16" data-aos="fade-up">
            {title && (
              <Heading className="text-white text-4xl md:text-5xl mb-6">
                {title}
              </Heading>
            )}
            {description && (
              <Body className="text-gray-200 text-lg max-w-4xl">
                {description}
              </Body>
            )}
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ServiceList 
            services={offerings}
            activeIndex={activeIndex}
            onServiceClick={setActiveIndex}
          />
          <ServiceDetails service={offerings[activeIndex]} />
        </div>
      </div>
    </Container>
  );
};
