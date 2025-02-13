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
      title: "Drive X",
      desc: "A powerful customer relationship management tool that helps businesses streamline communication, manage leads, and track sales efficiently.",
      image: "/projectW/image (2).png",
      redirectTo: "/projects/bizflow-crm",
      redirectTo2: "https://bizflowcrm.com",
    },
    {
      title: "KAG Tiles",
      desc: "An advanced task management platform designed for teams to collaborate effectively, monitor deadlines, and improve productivity.",
      image: "/projectW/image (3).png",
      redirectTo: "/projects/taskmaster-pro",
      redirectTo2: "https://taskmasterpro.com",
    },
    {
      title: "Lehry Valves",
      desc: "A scalable e-commerce platform for businesses to create online stores with integrated payment gateways and analytics dashboards.",
      image: "/projectW/image (4).png",
      redirectTo: "/projects/shopease",
      redirectTo2: "https://shopease.com",
    },
    {
      title: "Anitha Home Appliances",
      desc: "A modern healthcare app for managing patient records, scheduling appointments, and offering telehealth services.",
      image: "/projectW/image (5).png",
      redirectTo: "/projects/healthsync",
      redirectTo2: "https://healthsyncapp.com",
    },
    {
      title: "Mirakare",
      desc: "A cutting-edge learning management system for educators and organizations to deliver courses, track progress, and engage learners.",
      image: "/projectW/image (7).png",
      redirectTo: "/projects/edusmart-lms",
      redirectTo2: "https://edusmartlms.com",
    },
    {
      title: "RBC",
      desc: "A personal finance and expense tracking application that helps users budget, save, and monitor their financial goals.",
      image: "/projectW/image (8).png",
      redirectTo: "/projects/fintrack",
      redirectTo2: "https://fintrackapp.com",
    },
    {
      title: "Dr. P Banerji Homeopathic Research clinic",
      desc: "A fleet management software designed to help businesses optimize routes, reduce fuel costs, and track vehicle performance.",
      image: "/projectW/image (9).png",
      redirectTo: "/projects/greenfleet",
      redirectTo2: "https://greenfleet.com",
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
        Every project we undertake is a blend of creativity, technology, and strategy. We build solutions that drive growth, enhance efficiency, and create lasting impact. Explore our work and see innovation in action.
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
              desc={item?.desc}
              image={item?.image}
              redirectTo={item?.redirectTo}
              redirectTo2={item?.redirectTo2}
            />
          </motion.div>
        ))}
      </div>
    </Container>
  );
};
