import Container from "@/components/constants/Container";
import { SecondaryHeading } from "@/components/textComponents/SecondaryHeading";
import Image from "next/image";
import React from "react";

export const Client = () => {
  return (
    <Container className="flex flex-wrap 4xl:flex-nowrap justify-between items-center bg-[#8000FF]">
      <SecondaryHeading className="max-w-lg 4xl:!text-4xl text-white text-center sm:text-start">
        <span className="block whitespace-nowrap">Driving Success</span>
        <span className="block whitespace-nowrap">for Leading Companies</span>
        <span className="block whitespace-nowrap">
          Through Smart Technology.
        </span>
      </SecondaryHeading>

      <div className="grid grid-cols-2 gap-7 2xl:flex 2xl:gap-4 flex-wrap justify-center items-center mt-7 4xl:justify-end">
        <Image
          alt="Burhani Technologies"
          width={500}
          height={500}
          src={"/BT-Logo.svg"}
          className="w-64 h-16"
        />
        <Image
          alt="Burhani Technologies"
          width={500}
          height={500}
          src={"/BT-Logo.svg"}
          className="w-64 h-16"
        />
        <Image
          alt="Burhani Technologies"
          width={500}
          height={500}
          src={"/BT-Logo.svg"}
          className="w-64 h-16"
        />
        <Image
          alt="Burhani Technologies"
          width={500}
          height={500}
          src={"/BT-Logo.svg"}
          className="w-64 h-16"
        />
      </div>
    </Container>
  );
};
