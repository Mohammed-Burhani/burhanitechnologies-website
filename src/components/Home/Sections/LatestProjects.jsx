"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Container from "@/components/constants/Container";
import { Body } from "@/components/textComponents/Body";
import { Heading } from "@/components/textComponents/Heading";
import { ArrowLeft, ArrowRight } from "iconsax-react";
import { ProjectCards } from "./Blocks/ProjectsCard";
import { SmallCaption } from "@/components/textComponents/SmallCaption";

export const LatestProjects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      title: "Drive X",
      desc: "We built a dynamic website for DriveX, featuring easy booking, seamless browsing, and a modern rental experience.",
      image: "/projectW/image (2).png",
      // redirectTo: "/projects/bizflow-crm",
      redirectTo: "https://www.drivex.in/",
      redirectTo2: "https://www.drivex.in/",
    },
    {
      title: "KAG Tiles",
      desc: "We built a user-friendly e-commerce platform for KAG Tiles, ensuring seamless shopping for their premium tile collection.",
      image: "/projectW/image (3).png",
      // redirectTo: "/projects/taskmaster-pro",
      redirectTo: "https://www.kagindia.com/",
      redirectTo2: "https://www.kagindia.com/",
    },
    {
      title: "RBC Bearings",
      desc: "We developed a CMS-based website for RBC Bearings, providing a strong digital presence for their industrial product offerings.",
      image: "/projectW/image (8).png",
      // redirectTo: "/projects/fintrack",
      redirectTo: "https://rbcbearings.in/",
      redirectTo2: "https://rbcbearings.in/",
    },
    {
      title: "Mirakare",
      desc: "MiraKare is an advanced healthcare platform for managing vitals, journaling activities, scheduling appointments, and tracking patient records.",
      image: "/projectW/image (7).png",
      // redirectTo: "/projects/edusmart-lms",
      redirectTo: "https://mirakare.com/",
      redirectTo2: "https://mirakare.com/",
    },
    {
      title: "PBHR Homeopathy Hospital",
      desc: "We digitized patient records for PBHR Homeopathy Hospital, making homeopathic healthcare services more accessible and efficiently managed online.",
      image: "/projectW/image (9).png",
      // redirectTo: "/projects/greenfleet",
      redirectTo: "https://pbhrc.in/",
      redirectTo2: "https://pbhrc.in/",
    },
    {
      title: "Lehry Valves",
      desc: "We developed a supply chain and CRM software solution for Lehry Valves, optimizing their business operations and efficiency.",
      image: "/projectW/image (4).png",
      // redirectTo: "/projects/shopease",
      redirectTo: "https://lehryvalves.com/",
      redirectTo2: "https://lehryvalves.com/",
    },
    {
      title: "Anitha Industries",
      desc: "We implemented and customized ZipERP software for Anitha Industries, streamlining retail, factory, and production management operations.",
      image: "/projectW/image (5).png",
      // redirectTo: "/projects/healthsync",
      redirectTo: "https://anithahomeappliances.com/",
      redirectTo2: "https://anithahomeappliances.com/",
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
        <SmallCaption className="!text-captionLarge xl:!text-mdcaptionLarge 4xl:!text-lgcaptionLarge 7xl:!mdtext-captionLarge !leading-snug mt-2">Innovation at Work</SmallCaption>
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
