import Container from "@/components/constants/Container";
import { Body } from "@/components/textComponents/Body";
import { Heading } from "@/components/textComponents/Heading";
import React from "react";
import { PrimaryButton } from "../Blocks/PrimaryButton";
import { WhoWeAreCard } from "./Blocks/WhoWeAreCard";

export const WhoAreWe = () => {
  return (
    <Container
      className={
        "bg-white flex justify-between flex-wrap 2xl:flex-nowrap overflow-hidden"
      }
    >
      <div className="4xl:!sticky !top-44 h-full mb-7 2xl:mb-0">
        <h4 className="uppercase text-[#6622DC] font-extrabold">Who we are</h4>

        <Heading className="mt-7">How we help you.</Heading>
        <Body className={"max-w-lg mt-4"}>
          At Burhani Technologies, we offer a range of services designed to help
          businesses 3X their growth. Our highly experienced team can help you
          achieve business goals and make profit. 
        </Body>
        <PrimaryButton title={"Learn More"} className={"mt-4"} />
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
