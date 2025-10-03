import Container from "@/components/constants/Container";
import { PrimaryButton } from "@/components/Home/Blocks/PrimaryButton";
import { WhoWeAreCard } from "@/components/Home/Sections/Blocks/WhoWeAreCard";
import { Body } from "@/components/textComponents/Body";
import { SecondaryHeading } from "@/components/textComponents/SecondaryHeading";
import React from "react";

export const Services = () => {
  const leftSection = [
    {
      title: "Application Development",
      desc: "We create custom applications tailored to your business needs, ensuring they are user-friendly and effective.",
      icon: "/icons/AppDev.svg",
    },
    {
      title: "Process Automation",
      desc: "Our automation solutions simplify repetitive tasks, saving time and reducing errors, so you can focus on what matters.",
      icon: "/icons/AppDev.svg",
    },
    {
      title: "Cloud Solutions",
      desc: "We provide secure cloud services that enhance collaboration and accessibility, allowing your team to work from anywhere.",
      icon: "/icons/AppDev.svg",
    },
  ];

  const rightSection = [
    {
      title: "DevOps and Maintenance",
      desc: "Our DevOps services ensure smooth deployment and ongoing maintenance, helping you maintain high performance and reliability.",
      icon: "/icons/AppDev.svg",
    },
    {
      title: "Data Analysis and Reporting",
      desc: "We turn your data into clear insights, enabling informed decisions that drive business success and improve performance.",
      icon: "/icons/AppDev.svg",
    },
    {
      title: "UX/UI Design",
      desc: "Our design services create intuitive interfaces that enhance user experience, making your applications easy to use and visually appealing.",
      icon: "/icons/AppDev.svg",
    },
  ];
  return (
    <Container
      className={
        "bg-white flex justify-between flex-wrap 2xl:flex-nowrap overflow-hidden"
      }
    >
      <div className="4xl:!sticky !top-44 h-full mb-7 2xl:mb-0">
        <h4 className="uppercase text-[#6622DC] font-extrabold">Services</h4>

        <SecondaryHeading className="mt-7">
          Tailored IT Solutions with a Competitive Edge
        </SecondaryHeading>
        <Body className={"max-w-lg mt-4"}>
          Our expertise in IT consulting sets us apart, enabling us to deliver
          customized solutions and valuable insights. This distinctive advantage
          helps our clients stay ahead of the competition and achieve their
          goals effectively.
        </Body>
        <PrimaryButton title={"Get In Touch"} className={"mt-4"} />
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
