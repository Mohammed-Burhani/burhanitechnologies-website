"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Container from "@/components/constants/Container";
import { Body } from "@/components/textComponents/Body";
import { Heading } from "@/components/textComponents/Heading";
import { ArrowLeft, ArrowRight } from "iconsax-react";
import { ProjectCards } from "./Blocks/ProjectsCard";

// Example number of cards
const totalCards = 15; // You can update this to any number of cards you want

export const LatestProjects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    if (currentIndex < totalCards - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <Container
      className={
        "bg-white flex justify-between flex-wrap 2xl:flex-nowrap gap-10"
      }
    >
      {/* SECTION FOR TITLE AND NAVIGATION  */}
      <div className="4xl:!sticky !top-44 h-full min-w-fit">
        <h4 className="uppercase text-[#6622DC] font-bold">our work</h4>
        <Heading className="mt-7">Our Latest Projects</Heading>
        <Body className={"max-w-lg mt-4"}>
          At Burhani Technologies, we offer a range of services designed to help
          businesses 3X their growth. Our highly experienced team can help you
          achieve business goals and make profit.
        </Body>

        <div className="flex items-center gap-4 mt-4">
          <button
            onClick={prevSlide}
            className={`bg-[#6622DC] p-3 rounded-full ${
              currentIndex === 0 ? "cursor-not-allowed opacity-50" : ""
            }`}
            disabled={currentIndex === 0}
          >
            <ArrowLeft color="white" size={32} />
          </button>
          <button
            onClick={nextSlide}
            className={`bg-[#6622DC] p-3 rounded-full ${
              currentIndex === totalCards - 1
                ? "cursor-not-allowed opacity-50"
                : ""
            }`}
            disabled={currentIndex === totalCards - 1}
          >
            <ArrowRight color="white" size={32} />
          </button>
        </div>
      </div>

      <div className="flex gap-10 relative overflow-hidden">
        {/* SLIDER ANIMATION */}

        {/* Render ProjectCards multiple times */}
        {Array.from({ length: totalCards }).map((_, index) => (
          <motion.div
            key={index}
            className="w-[28rem]"
            animate={{ x: -(currentIndex * 488) + "px" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <ProjectCards />
          </motion.div>
        ))}
      </div>
    </Container>
  );
};
