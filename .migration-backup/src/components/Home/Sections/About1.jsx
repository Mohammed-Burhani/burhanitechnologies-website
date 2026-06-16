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
      <div className="z-50 flex flex-col justify-center items-center">
        <h2
          className="font-inter font-bold text-5xl text-white text-center leading-snug"
          data-aos="fade-down"
        >
          <span className="block">
            We Are Your Trusted Technology Partners.
          </span>
          <span className="block">
            Empowering Organizations with Cutting-Edge
          </span>
          <span className="block">Technology Expertise</span>
        </h2>

        <Body
          className={"mt-4 max-w-5xl text-gray-300 !font-light text-center"}
          data-aos="fade-up"
        >
          Explore how our passion for technology, 14+ years of experience, and
          dedication to service set us apart in the industry. We are passionate
          about what we do. Our commitment to excellence drives us to go above
          and beyond, delivering the best results for our clients.
        </Body>

        <PrimaryButton
          className="p-4 bg-[#f75201] px-5 py-2.5 text-lg font-medium text-white shadow flex gap-4 items-center !w-1/4 mt-7"
          title={"Learn More"}
          data-aos="fade-up"
          onClick={() => router.push("/values")}
        />
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