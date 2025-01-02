import React from "react";
import Container from "../../constants/Container";
import { Heading } from "../../textComponents/Heading";
import { Body } from "@/components/textComponents/Body";
import Image from "next/image";

const Banner = () => {
  return (
    <div className={"bg-white"}>
      <div className="relative flex flex-wrap 2xl:flex-nowrap 2xl:h-[40rem] items-center">
        <Container className="w-full 2xl:w-1/2 2xl:!pb-0 pt-28 2xl:pt-0">
          <h4 className="uppercase text-[#6622DC] font-extrabold">About Us</h4>

          <Heading className="mt-4 max-w-3xl">Why Choose Us ?</Heading>
          <Body className={"max-w-2xl"}>
            We provide IT services like strategic planning, cybersecurity, cloud
            computing, and custom software development to drive growth and
            innovation.
          </Body>
        </Container>

        <div className="relative w-full h-96 lg:h-full 2xl:!w-1/2">
          <Image
            alt="Banner"
            width={500}
            height={500}
            src={"/Banner/chooseUs.webp"}
            className="absolute inset-0 h-full w-full object-cover 2xl:pt-24"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
