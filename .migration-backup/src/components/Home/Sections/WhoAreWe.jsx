"use client"
import Container from "@/components/constants/Container";
import { Body } from "@/components/textComponents/Body";
import { Heading } from "@/components/textComponents/Heading";
import React from "react";
import { PrimaryButton } from "../Blocks/PrimaryButton";
import { WhoWeAreCard } from "./Blocks/WhoWeAreCard";
import { useRouter } from "next/navigation";

export const WhoAreWe = () => {
  const router = useRouter()
  const leftSection = [
    {
      title: "Application Development",
      desc: "We create custom applications tailored to your business needs, ensuring they are user-friendly and effective.",
      icon: "/icons/AppDev.svg",
    },
    {
      title: "Process Automation",
      desc: "Our automation solutions simplify repetitive tasks, saving time and reducing errors, so you can focus on what matters.",
      icon: "/icons/icon2.svg",
    },
    {
      title: "Cloud Solutions",
      desc: "We provide secure cloud services that enhance collaboration and accessibility, allowing your team to work from anywhere.",
      icon: "/icons/icon3.svg",
    },
  ];

  const rightSection = [
    {
      title: "DevOps and Maintenance",
      desc: "Our DevOps services ensure smooth deployment and ongoing maintenance, helping you maintain high performance and reliability.",
      icon: "/icons/icon6.svg",
    },
    {
      title: "Data Analysis and Reporting",
      desc: "We turn your data into clear insights, enabling informed decisions that drive business success and improve performance.",
      icon: "/icons/icon5.svg",
    },
    {
      title: "UX UI Design",
      desc: "Our design services create intuitive interfaces that enhance user experience, making your applications easy to use and visually appealing.",
      icon: "/icons/icon6.svg",
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
        <h2 className="uppercase text-[#6622DC] font-extrabold text-sm tracking-wider">Who we are</h2>

        <Heading className="mt-7"> Innovate | Scale | Succeed</Heading>
        <Body className={"max-w-lg mt-4"}>
          We deliver cutting-edge solutions to streamline operations, boost
          market presence, and drive profitability. Our expert team helps
          businesses scale efficiently with technology-driven strategies.
          Partner with us to achieve sustainable growth.
        </Body>
        <PrimaryButton
          title={"Learn More"}
          className={"mt-4"}
          onClick={() => router.push("/services")}
        />
      </div>

      <div className="flex flex-wrap 4xl:flex-nowrap gap-10 relative">
        <div className="w-[500px] h-[500px] blur-[400px] rounded-full bg-[#8000ff]/30 2xl:bg-[#8000ff] absolute left-0 2xl:left-64 top-72 mx-auto" />

        <div className="flex flex-col gap-4 z-10">
          {leftSection.map((item, i) => {
            return (
              <WhoWeAreCard
                key={i}
                title={item?.title}
                desc={item?.desc}
                icon={item?.icon}
              />
            );
          })}
        </div>

        <div className="flex flex-col gap-4 4xl:mt-32 z-10">
          {rightSection.map((item, i) => {
            return (
              <WhoWeAreCard
                key={i}
                title={item?.title}
                desc={item?.desc}
                icon={item?.icon}
              />
            );
          })}
        </div>
      </div>
    </Container>
  );
};