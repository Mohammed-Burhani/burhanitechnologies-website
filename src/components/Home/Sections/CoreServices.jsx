"use client"
import Container from "@/components/constants/Container";
import { Body } from "@/components/textComponents/Body";
import { Heading } from "@/components/textComponents/Heading";
import React from "react";
import { PrimaryButton } from "../Blocks/PrimaryButton";
import { WhoWeAreCard } from "./Blocks/WhoWeAreCard";
import Link from "next/link";

export const CoreServices = () => {
  const services = [
    {
      title: "End-to-End Custom Software Development with Azure DevOps",
      desc: "Full-stack applications with CI/CD pipelines, containerization, and cloud-native architecture across Azure, AWS, or your preferred platform.",
      icon: "/icons/AppDev.svg",
      link: "/services/custom-software-development",
    },
    {
      title: "AI-Powered Business Process Automation with Microsoft Power Platform",
      desc: "Intelligent automation using Power Automate, Power Apps, and AI Builder to eliminate manual tasks and improve accuracy.",
      icon: "/icons/icon2.svg",
      link: "/services/business-process-automation",
    },
    {
      title: "Custom ERP Implementation & Integration",
      desc: "Tailored ERP systems designed for your workflows, integrated seamlessly with existing tools - no rigid templates.",
      icon: "/icons/icon3.svg",
      link: "/services/custom-erp-implementation",
    },
    {
      title: "UX/CX Engineering",
      desc: "User-centered design and customer experience optimization that drives adoption and business outcomes.",
      icon: "/icons/icon6.svg",
      link: "/services/ux-cx-engineering",
    },
    {
      title: "Business Process Automation & RPA",
      desc: "Robotic process automation and workflow solutions for finance, operations, and compliance teams.",
      icon: "/icons/icon5.svg",
      link: "/services/rpa",
    },
  ];

  return (
    <Container
      className={
        "bg-white flex justify-between flex-wrap 2xl:flex-nowrap overflow-hidden"
      }
    >
      <div
        className="4xl:!sticky !top-44 h-full mb-7 2xl:mb-0"
        data-aos="fade-right"
      >
        <h4 className="uppercase text-[#6622DC] font-extrabold">
          Core Services
        </h4>

        <Heading className="mt-7">
          Building Solutions to Reduce Costs and Accelerate Growth
        </Heading>
        <Body className={"max-w-lg mt-4"}>
          We specialize in building enterprise-grade digital solutions that
          reduce operational costs and accelerate time-to-market.
        </Body>
      </div>

      <div className="flex flex-wrap 4xl:flex-nowrap gap-10 relative">
        <div className="w-[500px] h-[500px] blur-[400px] rounded-full bg-[#8000ff]/30 2xl:bg-[#8000ff] absolute left-0 2xl:left-64 top-72 mx-auto" />

        <div className="flex flex-col gap-4 z-10">
          {services.slice(0, 3).map((item, i) => (
            <Link href={item.link} key={i}>
              <WhoWeAreCard
                title={item?.title}
                desc={item?.desc}
                icon={item?.icon}
              />
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-4 4xl:mt-32 z-10">
          {services.slice(3).map((item, i) => (
            <Link href={item.link} key={i}>
              <WhoWeAreCard
                title={item?.title}
                desc={item?.desc}
                icon={item?.icon}
              />
            </Link>
          ))}
        </div>
      </div>
    </Container>
  );
};
