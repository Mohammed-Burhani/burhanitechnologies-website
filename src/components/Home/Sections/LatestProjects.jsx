"use client";
import { useState } from "react";
import Container from "@/components/constants/Container";
import { Body } from "@/components/textComponents/Body";
import { Heading } from "@/components/textComponents/Heading";
import { ArrowRight, ExternalDrive } from "iconsax-react";
import Link from "next/link";
import Image from "next/image";

export const LatestProjects = () => {
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      title: "Drive X",
      desc: "We built a dynamic website for DriveX, featuring easy booking, seamless browsing, and a modern rental experience.",
      image: "/projectW/image (2).png",
      category: "Web Development",
      redirectTo: "https://www.drivex.in/",
    },
    {
      title: "KAG Tiles",
      desc: "We built a user-friendly e-commerce platform for KAG Tiles, ensuring seamless shopping for their premium tile collection.",
      image: "/projectW/image (3).png",
      category: "E-Commerce",
      redirectTo: "https://www.kagindia.com/",
    },
    {
      title: "RBC Bearings",
      desc: "We developed a CMS-based website for RBC Bearings, providing a strong digital presence for their industrial product offerings.",
      image: "/projectW/image (8).png",
      category: "CMS Development",
      redirectTo: "https://rbcbearings.in/",
    },
    {
      title: "Mirakare",
      desc: "MiraKare is an advanced healthcare platform for managing vitals, journaling activities, scheduling appointments, and tracking patient records.",
      image: "/projectW/image (7).png",
      category: "Healthcare",
      redirectTo: "https://mirakare.com/",
    },
    {
      title: "PBHR Homeopathy Hospital",
      desc: "We digitized patient records for PBHR Homeopathy Hospital, making homeopathic healthcare services more accessible and efficiently managed online.",
      image: "/projectW/image (9).png",
      category: "Healthcare",
      redirectTo: "https://pbhrc.in/",
    },
    {
      title: "Lehry Valves",
      desc: "We developed a supply chain and CRM software solution for Lehry Valves, optimizing their business operations and efficiency.",
      image: "/projectW/image (4).png",
      category: "ERP & CRM",
      redirectTo: "https://lehryvalves.com/",
    },
    {
      title: "Anitha Industries",
      desc: "We implemented and customized ZipERP software for Anitha Industries, streamlining retail, factory, and production management operations.",
      image: "/projectW/image (5).png",
      category: "ERP & CRM",
      redirectTo: "https://anithahomeappliances.com/",
    },
  ];

  const displayedProjects = showAll ? projects : projects.slice(0, 6);

  return (
    <Container className="bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="w-[500px] h-[500px] blur-[250px] rounded-full bg-[#6622DC]/10 absolute -right-32 top-0" />
      
      {/* Header Section */}
      <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-down">
        <h4 className="uppercase text-[#6622DC] font-extrabold tracking-wider text-sm mb-4">
          Our Work
        </h4>
        <Heading className="mb-4">Innovation at Work</Heading>
        <Body className="text-gray-600">
          Every project we undertake is a blend of creativity, technology, and
          strategy. We build solutions that drive growth, enhance efficiency,
          and create lasting impact.
        </Body>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {displayedProjects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>

      {/* View All Button */}
      {!showAll && projects.length > 6 && (
        <div className="text-center" data-aos="fade-up">
          <button
            onClick={() => setShowAll(true)}
            className="inline-flex items-center gap-3 bg-[#6622DC] hover:bg-[#7c3ae8] text-white px-8 py-4 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            <span>View All Projects</span>
            <ArrowRight size={20} />
          </button>
        </div>
      )}
    </Container>
  );
};

const ProjectCard = ({ project, index }) => {
  return (
    <div
      className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500"
      data-aos="fade-up"
      data-aos-delay={index * 100}
    >
      {/* Image Container */}
      <div className="relative h-72 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
        <Image
          src={project.image}
          width={500}
          height={500}
          alt={project.title}
          className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
        />
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full">
          <span className="text-xs font-semibold text-[#6622DC]">
            {project.category}
          </span>
        </div>

        {/* Overlay with CTA */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
          <a
            href={project.redirectTo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white text-[#6622DC] px-6 py-3 rounded-full font-medium hover:bg-[#6622DC] hover:text-white transition-all duration-300 transform translate-y-4 group-hover:translate-y-0"
          >
            <span>Visit Site</span>
            <ExternalDrive size={18} />
          </a>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#6622DC] transition-colors">
          {project.title}
        </h3>
        <Body className="text-gray-600 line-clamp-3">{project.desc}</Body>
      </div>

      {/* Bottom accent line */}
      <div className="h-1 bg-gradient-to-r from-[#6622DC] to-[#8000FF] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
    </div>
  );
};
