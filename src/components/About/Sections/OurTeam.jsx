import Container from "@/components/constants/Container";
import { Body } from "@/components/textComponents/Body";
import { LargeCaption } from "@/components/textComponents/LargeCaption";
import { LargeHeading } from "@/components/textComponents/LargeHeading";
import Image from "next/image";
import React from "react";

const OurTeam = () => {
  return (
    <Container className={"bg-white"}>
      <h4 className="uppercase text-[#6622DC] font-extrabold">Team</h4>
      <div className="flex flex-wrap 2xl:flex-nowrap gap-4 justify-between items-center">
        <LargeHeading>Our Experts</LargeHeading>

        <Body className={"max-w-4xl"}>
          Our success is a result of teamwork and building upon our technical
          expertise and creative style providing a full-service solution to our
          clients.
        </Body>
      </div>

      <div className="flex flex-wrap gap-7 mt-7">
        <div className="flex flex-col">
          <Image
            alt="Team"
            src={"/About/Team/team1.png"}
            width={500}
            height={500}
            className="w-96 4xl:w-80 h-full mb-4"
          />
    
          <LargeCaption>Alan Cooper</LargeCaption>
          <Body>Data Analyst</Body>
        </div>
        <div className="flex flex-col">
          <Image
            alt="Team"
            src={"/About/Team/team1.png"}
            width={500}
            height={500}
            className="w-96 4xl:w-80 h-full mb-4"
          />

          <LargeCaption>Alan Cooper</LargeCaption>
          <Body>Data Analyst</Body>
        </div>  
        <div className="flex flex-col">
          <Image
            alt="Team"
            src={"/About/Team/team1.png"}
            width={500}
            height={500}
            className="w-96 4xl:w-80 h-full mb-4"
          />

          <LargeCaption>Alan Cooper</LargeCaption>
          <Body>Data Analyst</Body>
        </div>
        <div className="flex flex-col">
          <Image
            alt="Team"
            src={"/About/Team/team1.png"}
            width={500}
            height={500}
            className="w-96 4xl:w-80 h-full mb-4"
          />

          <LargeCaption>Alan Cooper</LargeCaption>
          <Body>Data Analyst</Body>
        </div>
        <div className="flex flex-col">
          <Image
            alt="Team"
            src={"/About/Team/team1.png"}
            width={500}
            height={500}
            className="w-96 4xl:w-80 h-full mb-4"
          />

          <LargeCaption>Alan Cooper</LargeCaption>
          <Body>Data Analyst</Body>
        </div>
      </div>
    </Container>
  );
};

export default OurTeam;
