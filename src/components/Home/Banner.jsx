"use client"
import { ArrowRight } from "iconsax-react";
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";
import { PrimaryButton } from "./Blocks/PrimaryButton";
import { Body } from "../textComponents/Body";
import Container from "../constants/Container";
import { LargeHeading } from "../textComponents/LargeHeading";
import { useRouter } from "next/navigation";

const Banner = () => {
  const router = useRouter();
  return (
    <div className="bg-[url(/Banner/Banner_SVG.svg)] bg-cover h-screen w-full bg-center flex flex-col justify-center overflow-hidden">
      <div className="absolute top-0 mx-auto w-full h-full flex justify-center items-center overflow-hidden">
        {["#AD5AFF"].map((color, index) => (
          <div
            key={index}
            className="w-[500px] h-[500px] blur-[150px] rounded-full animate-[expand_5s_infinite] -z-10"
            style={{
              backgroundColor: `${color}40`,
              animationDelay: `${index * 1.5}s`,
            }}
          />
        ))}
      </div>

      <Container className="flex flex-col gap-10 4xl:pt-36">
        <LargeHeading
          className="text-subTitle text-white"
          data-aos="fade-right"
        >
          <span className="block">Driving Growth</span>
          <span className="block">Through Customized</span>
          <span className="block">Technology Solutions</span>
        </LargeHeading>

        <div className="flex flex-wrap md:flex-nowrap justify-between 4xl:pl-4 gap-7">
          <div className="flex items-center" data-aos="fade-up">
            <button className="btn">
              <div className="scroll"> </div>
            </button>

            <p className="rotate-90 font-inter text-gray-400 italic text-xs !tracking-widest">
              SCROLL
            </p>
            {/* <p>
              <span className="block">Scroll down</span>
              <span className="block">to see more</span>
            </p> */}
          </div>

          <div className="flex flex-col gap-4 2xl:!gap-10" data-aos="fade-left">
            <Body className="max-w-xs 4xl:max-w-sm 7xl:max-w-lg text-justify text-white">
              Specializing in Application Development and Process Automation for
              Seamless Operations.
            </Body>
            <PrimaryButton
              className="rounded-lg p-4 bg-[#6F36D2] px-5 py-2.5 text-lg font-medium text-white shadow flex gap-4 items-center w-fit"
              title={"Explore Our Services Now"}
              onClick={() => router.push('/services')}
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
