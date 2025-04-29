"use client";
import Container from "@/components/constants/Container";
import React from "react";
import { PrimaryButton } from "../Blocks/PrimaryButton";
import Image from "next/image";
import { LargeHeading } from "@/components/textComponents/LargeHeading";
import { useRouter } from "next/navigation";

export const CTA = () => {
  const router = useRouter()
  return (
    <Container className="h-full w-full relative bg-[#2B1343]">
      <div className="flex justify-center items-center">
        <Image
          alt="Burhani Technologies"
          src={"/Logos/hollow-logo.svg"}
          width={500}
          height={500}
          className="!absolute h-full top-0 w-fit object-contain no-repeat !z-0 scale-90"
        />
      </div>

      <div className="z-50 flex flex-col justify-center items-center">
        <LargeHeading className="text-center z-50" data-aos="fade-down">
          <span className="block text-gray-300">
            Unlock 3X Growth with Burhani Technologies:
          </span>
          <span className="block text-white">
            Your Partner in Creative Technology Solutions
          </span>
          <span className="block text-gray-300">
            with 14 Years of Expert Experience!
          </span>
        </LargeHeading>

        <PrimaryButton
          className="p-4 bg-[#f75201] px-5 py-2.5 text-lg font-medium text-white shadow flex gap-4 items-center !w-1/4 mt-7 z-50"
          title={"About Us"}
          data-aos="fade-up"
          onClick={() => router.push("/leadership")}
        />
      </div>
    </Container>
  );
};
