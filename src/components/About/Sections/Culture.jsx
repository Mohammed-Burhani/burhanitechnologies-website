import Container from "@/components/constants/Container";
import { Body } from "@/components/textComponents/Body";
import { Heading } from "@/components/textComponents/Heading";
import Image from "next/image";
import React from "react";

const Culture = () => {
  return (
    <div className="bg-[#2B1343] relative">
      <Image
        alt="Our Culture"
        src={"/About/CultureBg.webp"}
        width={500}
        height={500}
        className="w-full -top-32 2xl:hidden 2xl:translate-y-0 absolute pointer-events-none select-none z-0"
      />

      <Container
        className={"bg-[#2B1343] flex flex-col !overflow-hidden relative"}
      >
        <Image
          alt="Burhani Technologies"
          src={"/Logos/hollow-logo.svg"}
          width={500}
          height={500}
          className="hidden 2xl:flex !absolute 4xl:-right-40 7xl:-right-56 top-0 h-full w-fit mx-auto object-contain no-repeat scale-125 opacity-20 "
        />

        <h4 className="uppercase text-gray-300 font-extrabold z-10">
          Our Culture
        </h4>

        <div className="">
          <CulturePoints
            title={"Agile & Adaptable"}
            desc={
              "We understand that life is full of twists and turns, and sometimes plans need to be adjusted. That's why we take a dynamic and accommodating approach to provide you with tailored solutions."
            }
          />
          <CulturePoints
            title={"Innovative & Creative"}
            desc={
              "We welcome fresh ideas and creativity, and our environment encourages innovation, helping us create unique solutions that adapt to our client's changing needs."
            }
          />
          <CulturePoints
            title={"Committed & Passionate"}
            desc={
              "We are dedicated to our work and passionate about helping our clients succeed. Our commitment drives us to go above and beyond in everything we do."
            }
          />
        </div>

        <div className="flex mt-80">
          <div className="flex absolute -bottom-5 -left-20">
            <Image
              alt="Application Development"
              src={"/ft/1.png"}
              width={500}
              height={500}
              className="w-[28rem] h-72 -rotate-12"
            />
            <Image
              alt="Application Development"
              src={"/ft/2.png"}
              width={500}
              height={500}
              className="w-[28rem] h-72 rotate-12"
            />
            <Image
              alt="Application Development"
              src={"/ft/3.png"}
              width={500}
              height={500}
              className="w-[28rem] h-72 -rotate-12"
            />
            <Image
              alt="Application Development"
              src={"/ft/4.png"}
              width={500}
              height={500}
              className="w-[28rem] h-72 rotate-12"
            />
            <Image
              alt="Application Development"
              src={"/ft/1.png"}
              width={500}
              height={500}
              className="w-[28rem] h-72 -rotate-12"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Culture;

const CulturePoints = ({ title, desc }) => {
  return (
    <div className="flex flex-col gap-4">
      <Heading className="mt-7 max-w-3xl text-white z-10">{title}</Heading>
      <Body className={"text-white z-10 max-w-5xl"}>{desc}</Body>
    </div>
  );
};
