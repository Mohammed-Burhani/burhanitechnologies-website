"use client"
import Container from "@/components/constants/Container";
import { Body } from "@/components/textComponents/Body";
import React from "react";
import { PrimaryButton } from "../Blocks/PrimaryButton";
import { Heading } from "@/components/textComponents/Heading";
import Image from "next/image";
import { useRouter } from "next/navigation";

export const About1 = () => {
  const router = useRouter();
  return (
    <Container className="bg-[#2B1343] h-full w-full relative overflow-hidden">
      <Image
        alt="Burhani Technologies"
        src={"/Logos/hollow-logo.svg"}
        width={500}
        height={500}
        className="!absolute -left-40 top-0 h-full w-fit mx-auto object-contain no-repeat scale-125 opacity-20"
      />
      <div className="z-50 flex flex-col justify-center items-center text-center">
        <Heading
          className="font-inter font-bold text-5xl text-white"
          data-aos="fade-down"
        >
          Your Trusted Technology Partner
        </Heading>

        <Body
          className={"mt-4 max-w-5xl text-gray-300 !font-light text-center"}
          data-aos="fade-up"
        >
          Burhani Technologies delivers custom software solutions and enterprise
          automation to CTOs, operations leaders, and project managers across
          healthcare, manufacturing, automotive, and construction sectors. Based
          in Chennai with partnerships across Pune, Bangalore, UAE, US, and
          Australia, we've helped 200+ enterprises modernize their operations
          with cloud platforms, Power Platform automation, and bespoke ERP
          systems.
        </Body>

        <div
          className="flex flex-wrap justify-center gap-8 mt-8"
          data-aos="fade-up"
        >
          <div className="text-center">
            <p className="text-white text-lg font-semibold">
              Microsoft Partner
            </p>
          </div>
          <div className="text-center">
            <p className="text-white text-lg font-semibold">Azure Certified</p>
          </div>
          <div className="text-center">
            <p className="text-white text-lg font-semibold">200+ Clients</p>
          </div>
          <div className="text-center">
            <p className="text-white text-lg font-semibold">
              14+ Years of Experience
            </p>
          </div>
        </div>
      </div>
      <Image
        alt="Burhani Technologies"
        src={"/Logos/hollow-logo.svg"}
        width={500}
        height={500}
        className="hidden 2xl:flex !absolute 4xl:-right-40 7xl:-right-56 top-0 h-full w-fit mx-auto object-contain no-repeat scale-125 opacity-20 "
      />
    </Container>
  );
};
