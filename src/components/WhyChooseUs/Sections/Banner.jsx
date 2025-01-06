import Container from "@/components/constants/Container";
import { Body } from "@/components/textComponents/Body";
import React from "react";
import { Heading } from "@/components/textComponents/Heading";
import Image from "next/image";
import { LargeHeading } from "@/components/textComponents/LargeHeading";

export const Banner = () => {
  return (
    <div className="bg-white pt-32">
      <Container className="bg-[url(/Banner/chooseUs.png)] h-[32rem] w-full relative overflow-hidden bg-cover bg-center">
        <div className="absolute inset-0 bg-[#000] w-full h-full opacity-50" />
        <Image
          alt="Burhani Technologies"
          src={"/Logos/hollow-logo.svg"}
          width={500}
          height={500}
          className="!absolute -left-20 top-0 h-full w-fit mx-auto object-contain no-repeat scale-125 opacity-40"
        />

        <div className="flex flex-col justify-center items-center h-full">
          <div className="absolute inset-0 bg-[#8000FF] w-96 h-full opacity-20 mx-auto" />
          <h4 className="uppercase text-gray-300 font-extrabold text-center z-10">
            About Us
          </h4>

          <LargeHeading className="font-inter font-bold text-5xl text-white text-center z-10">
            Why Choose Us ?
          </LargeHeading>

          <Body
            className={
              "mt-4 max-w-5xl text-gray-300 !font-light text-center z-10"
            }
          >
            We provide IT services like strategic planning, cybersecurity, cloud
            computing, and custom software development to drive growth and
            innovation.
          </Body>
        </div>
        <Image
          alt="Burhani Technologies"
          src={"/Logos/hollow-logo.svg"}
          width={500}
          height={500}
          className="hidden 2xl:flex !absolute 4xl:-right-40 7xl:-right-56 top-0 h-full w-fit mx-auto object-contain no-repeat scale-125 opacity-40"
        />
      </Container>
    </div>
  );
};
