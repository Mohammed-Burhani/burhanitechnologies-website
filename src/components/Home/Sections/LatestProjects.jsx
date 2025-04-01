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
      desc: "For DriveX, a premium vehicle rental service, we built a dynamic and engaging website that simplifies car and bike rentals. The website features a modern design, user-friendly booking system, and seamless browsing experience, making it easier for customers to explore and rent their desired vehicles. Our work ensures DriveX stays ahead in the competitive automotive rental industry.",
      image: "/projectW/image (2).png",
      // redirectTo: "/projects/bizflow-crm",
      redirectTo: "https://www.drivex.in/",
      redirectTo2: "https://www.drivex.in/",
    },
    {
      title: "KAG Tiles",
      desc: "We designed and developed a feature-rich e-commerce platform for KAG Tiles, a leading brand in the tile industry. Our solution includes an intuitive product catalog, seamless navigation, and a secure checkout process, ensuring a smooth shopping experience for customers. With an elegant UI and optimized performance, the website enhances KAG Tiles' online presence and sales potential.",
      image: "/projectW/image (3).png",
      // redirectTo: "/projects/taskmaster-pro",
      redirectTo: "https://www.kagindia.com/",
      redirectTo2: "https://www.kagindia.com/",
    },
    {
      title: "RBC Bearings",
      desc: "We provided a complete digital transformation for RBC Bearings, an industrial leader in high-quality bearings. From designing a professional website to implementing an online business platform, we enabled RBC Bearings to reach a broader audience, showcase their products effectively, and improve customer engagement through an interactive interface.",
      image: "/projectW/image (8).png",
      // redirectTo: "/projects/fintrack",
      redirectTo: "https://rbcbearings.in/",
      redirectTo2: "https://rbcbearings.in/",
    },
    {
      title: "Mirakare",
      desc: "For MIRAKARE, a trusted healthcare brand, we built a strong online presence through a well-structured and engaging website. Our design ensures easy access to their services, improved user experience, and enhanced brand credibility, helping them connect with their clients more efficiently.",
      image: "/projectW/image (7).png",
      // redirectTo: "/projects/edusmart-lms",
      redirectTo: "https://mirakare.com/",
      redirectTo2: "https://mirakare.com/",
    },
    {
      title: "PBHR Homeopathy Hospital",
      desc: "We developed a professional and informative website for PBHR Homeopathy Hospital, ensuring an easy-to-navigate platform for patients seeking homeopathic treatments. The website includes detailed service pages, appointment booking features, and educational content, making it a valuable resource for those looking for holistic healthcare solutions.",
      image: "/projectW/image (9).png",
      // redirectTo: "/projects/greenfleet",
      redirectTo: "https://pbhrc.in/",
      redirectTo2: "https://pbhrc.in/",
    },
    {
      title: "Lehry Valves",
      desc: "For Lehry Valves, we created a high-performance website tailored to showcase their wide range of industrial valve solutions. The website features detailed product descriptions, technical specifications, and a user-friendly design, making it easy for engineers, businesses, and suppliers to explore their offerings and make informed decisions.",
      image: "/projectW/image (4).png",
      // redirectTo: "/projects/shopease",
      redirectTo: "https://lehryvalves.com/",
      redirectTo2: "https://lehryvalves.com/",
    },
    {
      title: "Anitha Industries",
      desc: "We crafted a visually appealing and responsive website for Anitha Home Appliances, an industry leader in home and kitchen solutions. The website highlights their product range, brand story, and key features, ensuring customers get an engaging and informative online shopping experience.",
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
