import Container from "@/components/constants/Container";
import { PrimaryButton } from "@/components/Home/Blocks/PrimaryButton";
import { WhoWeAreCard } from "@/components/Home/Sections/Blocks/WhoWeAreCard";
import { Body } from "@/components/textComponents/Body";
import { Heading } from "@/components/textComponents/Heading";
import React from "react";

export const Services = () => {
  return (
    <Container
      className={
        "bg-white flex justify-between flex-wrap 2xl:flex-nowrap overflow-hidden"
      }
    >
      <div className="4xl:!sticky !top-44 h-full mb-7 2xl:mb-0">
        <h4 className="uppercase text-[#6622DC] font-extrabold">Services</h4>

        <Heading className="mt-7">
          Tailored IT Solutions with a Competitive Edge
        </Heading>
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
          <WhoWeAreCard />
          <WhoWeAreCard />
          <WhoWeAreCard />
        </div>

        <div className="flex flex-col gap-4 4xl:mt-32 z-10">
          <WhoWeAreCard />
          <WhoWeAreCard />
          <WhoWeAreCard />
        </div>
      </div>
    </Container>
  );
};
