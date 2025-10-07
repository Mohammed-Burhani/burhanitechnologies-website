"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Container from "@/components/constants/Container";
import { Body } from "@/components/textComponents/Body";
import { Heading } from "@/components/textComponents/Heading";
import { ArrowLeft, ArrowRight } from "iconsax-react";
import { ProjectCards } from "./Blocks/ProjectsCard";

export const LatestProjects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      title: "Custom ERP for Manufacturing",
      challenge:
        "A leading manufacturer was struggling with disconnected systems for inventory, production, and sales, leading to operational inefficiencies and delays.",
      solution:
        "We developed a custom ERP system that integrated all business processes into a single platform, providing real-time data and automated workflows.",
      outcome:
        "Reduced production lead times by 30%, improved inventory accuracy by 95%, and provided a unified view of the business for better decision-making.",
      image: "/projectW/image (5).png",
      redirectTo: "/services",
    },
    {
      title: "AI-Powered Automation for Healthcare",
      challenge:
        "A healthcare provider needed to automate patient data entry and appointment scheduling to reduce administrative workload and minimize errors.",
      solution:
        "We implemented an AI-powered process automation solution using Microsoft Power Platform to automate data capture and streamline scheduling.",
      outcome:
        "Saved over 40 hours per week in administrative tasks, reduced data entry errors by 99%, and improved patient satisfaction with faster scheduling.",
      image: "/projectW/image (7).png",
      redirectTo: "/services",
    },
  ];

  const nextSlide = () => {
    if (currentIndex < projects.length - 1) {
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
      <div
        className="4xl:!sticky !top-44 h-full min-w-fit overflow-x-hidden"
        data-aos="fade-right"
      >
        <h4 className="uppercase text-[#6622DC] font-bold">our work</h4>
        <Heading className="mt-7">Innovation at Work</Heading>
        <Body className={"max-w-lg mt-4"}>
          Every project we undertake is a blend of creativity, technology, and
          strategy. We build solutions that drive growth, enhance efficiency,
          and create lasting impact. Explore our work and see innovation in
          action.
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
              currentIndex === projects.length - 1
                ? "cursor-not-allowed opacity-50"
                : ""
            }`}
            disabled={currentIndex === projects.length - 1}
          >
            <ArrowRight color="white" size={32} />
          </button>
        </div>
      </div>

      <div className="flex gap-10 relative overflow-x-hidden">
        {/* SLIDER ANIMATION */}

        {/* Render ProjectCards multiple times */}
        {projects.map((item, index) => (
          <motion.div
            key={index}
            className="w-[28rem]"
            animate={{ x: -(currentIndex * 488) + "px" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <ProjectCards
              title={item?.title}
              challenge={item?.challenge}
              solution={item?.solution}
              outcome={item?.outcome}
              image={item?.image}
              redirectTo={item?.redirectTo}
            />
          </motion.div>
        ))}
      </div>
    </Container>
  );
};
