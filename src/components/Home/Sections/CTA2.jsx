import Container from "@/components/constants/Container";
import { Body } from "@/components/textComponents/Body";
import React from "react";
import Image from "next/image";
import { LargeHeading } from "@/components/textComponents/LargeHeading";
import { ArrowRight } from "iconsax-react";

export const CTA2 = () => {
  return (
    <Container className="bg-[#030108] h-full w-full relative overflow-hidden flex flex-col justify-center items-center">
      <div className="w-[700px] h-[700px] blur-[350px] rounded-full bg-[#8000ff] absolute" />

      <div className="z-10">
        <Image
          alt="Burhani Technologies"
          src={"/Logos/hollow-logo.svg"}
          width={500}
          height={500}
          className="!absolute -left-40 top-32 h-fit w-fit mx-auto object-contain no-repeat scale-125 opacity-20"
        />
        <div className="z-50 flex flex-col justify-center items-center">
          <LargeHeading className="font-inter font-bold text-5xl text-white text-center max-w-2xl">
            Let's Build Something Different
          </LargeHeading>
          <Body
            className={"mt-4 max-w-4xl text-gray-300 !font-light text-center"}
          >
            Take the first step towards a brighter future and supercharge your
            business with cutting-edge technologies, expert guidance, and
            unparalleled support.
          </Body>

          <button className="rounded-2xl p-4 bg-[#6F36D2] px-5 7xl:px-7 7xl:p-5 py-2.5 text-sm font-medium text-white shadow flex gap-4 items-center w-max mt-7">
            <Body>Get In Touch</Body>

            <ArrowRight color="#fff" size={24} className="rotate-45" />
          </button>
        </div>

        <Image
          alt="Burhani Technologies"
          src={"/Logos/hollow-logo.svg"}
          width={500}
          height={500}
          className="!absolute 4xl:-right-40 7xl:-right-56 top-0 h-fit w-fit mx-auto object-contain no-repeat scale-125 opacity-20 "
        />
      </div>

      <div className="flex mt-96">
        <div className="flex absolute -bottom-5 -left-20">
          <Image
            alt="Application Development"
            src={"/Dummies/Dummy2.png"}
            width={500}
            height={500}
            className="w-[28rem] h-72 -rotate-12"
          />
          <Image
            alt="Application Development"
            src={"/Dummies/Dummy2.png"}
            width={500}
            height={500}
            className="w-[28rem] h-72 rotate-12"
          />
          <Image
            alt="Application Development"
            src={"/Dummies/Dummy2.png"}
            width={500}
            height={500}
            className="w-[28rem] h-72 -rotate-12"
          />
          <Image
            alt="Application Development"
            src={"/Dummies/Dummy2.png"}
            width={500}
            height={500}
            className="w-[28rem] h-72 rotate-12"
          />
          <Image
            alt="Application Development"
            src={"/Dummies/Dummy2.png"}
            width={500}
            height={500}
            className="w-[28rem] h-72 -rotate-12"
          />
        </div>
      </div>
    </Container>
  );
};
