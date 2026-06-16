import Container from "@/components/constants/Container";
import React from "react";
import Image from "next/image";
import { LargeHeading } from "@/components/textComponents/LargeHeading";
import { Body } from "@/components/textComponents/Body";

export const Expertise = () => {
  return (
    <Container className="h-full w-full relative bg-[#2B1343] overflow-hidden">
      <div className="flex justify-center items-center">
        <Image
          alt="Burhani Technologies"
          src={"/Logos/hollow-logo.svg"}
          width={500}
          height={500}
          className="!absolute h-full top-0 w-fit object-contain no-repeat !z-0 scale-125 opacity-35"
        />
      </div>

      <div className="z-50 flex flex-col justify-center items-center">
        <h4 className="uppercase text-gray-300 font-extrabold">Expertise</h4>
        <LargeHeading className="text-center z-50 text-white">
          Building Expertise
        </LargeHeading>
        <Body className={"text-white max-w-7xl text-center"}>
          In our early years, we focused on building a strong foundation of
          expertise. Our dedicated team worked tirelessly to stay ahead of
          emerging technologies, mastering IT strategy, software development,
          infrastructure optimization, and more. This commitment to growth and
          innovation set the stage for the exceptional solutions we deliver
          today.
        </Body>
      </div>
    </Container>
  );
};
