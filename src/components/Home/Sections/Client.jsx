import Container from "@/components/constants/Container";
import { SecondaryHeading } from "@/components/textComponents/SecondaryHeading";
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

export const Client = () => {
  return (
    <div className="flex gap-8">
      <Container className="flex flex-wrap 4xl:flex-nowrap justify-between items-center border-t border-[#C2C2C2]/20 overflow-hidden">
        <SecondaryHeading
          data-aos="fade-right"
          className="max-w-lg 4xl:!text-4xl text-white text-center sm:text-start"
        >
          <span className="block whitespace-nowrap">Driving Success</span>
          <span className="block whitespace-nowrap">for Leading Companies</span>
          <span className="block whitespace-nowrap">
            Through Smart Technology.
          </span>
        </SecondaryHeading>
      </Container>

      {/* <div
        className="grid grid-cols-2 gap-7 2xl:flex 2xl:gap-4 justify-center items-center mt-7 4xl:justify-end"
        data-aos="fade-left"
        > */}
      <Marquee className="">
        <Image
          alt="Technology Stack - Programming Languages and Frameworks"
          width={500}
          height={500}
          src={"/TechIcon/1.png"}
          className="bg-white object-contain w-64 h-20 p-4 rounded-xl mr-4"
        />
        <Image
          alt="Technology Stack - Programming Languages and Frameworks"
          width={500}
          height={500}
          src={"/TechIcon/2.png"}
          className="bg-white object-contain w-64 h-20 p-4 rounded-xl mr-4"
        />
        <Image
          alt="Technology Stack - Programming Languages and Frameworks"
          width={500}
          height={500}
          src={"/TechIcon/3.png"}
          className="bg-white object-contain w-64 h-20 p-4 rounded-xl mr-4"
        />
        <Image
          alt="Technology Stack - Programming Languages and Frameworks"
          width={500}
          height={500}
          src={"/TechIcon/4.png"}
          className="bg-white object-contain w-64 h-20 p-4 rounded-xl mr-4"
        />
        <Image
          alt="Technology Stack - Programming Languages and Frameworks"
          width={500}
          height={500}
          src={"/TechIcon/5.png"}
          className="bg-white object-contain w-64 h-20 p-4 rounded-xl mr-4"
        />
        {/* </div> */}
      </Marquee>
    </div>
  );
};
