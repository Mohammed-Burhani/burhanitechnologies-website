import Container from "@/components/constants/Container";
import { Body } from "@/components/textComponents/Body";
import { SecondaryHeading } from "@/components/textComponents/SecondaryHeading";
import { ArrowRight } from "iconsax-react";
import Image from "next/image";
import React from "react";

const WorkWithUs = () => {
  return (
    <Container className={"bg-white"}>
      <div className="flex justify-between gap-4 flex-wrap 2xl:flex-nowrap">
        <div className="">
          <h4 className="uppercase text-[#6622DC] font-extrabold">Join Us</h4>

          <SecondaryHeading className="mt-4 max-w-3xl">Why work with us ?</SecondaryHeading>

          <div className="relative flex scale-75 2xl:scale-100 -translate-x-14 2xl:-translate-x-0 w-[28rem] h-[28rem] 2xl:mt-7">
            <Image
              alt="Banner"
              width={500}
              height={500}
              src="/Dummies/Dummy.webp"
              className="w-[28rem] h-[28rem] object-cover !z-50"
            />
            <div className="w-80 2xl:w-96 h-[26rem] bg-[#9933FF] absolute -bottom-5 -left-5 z-0" />
          </div>
        </div>

        <div className="flex flex-col gap-14">
          <Points
            title={"Expert Team Of"}
            h_title={"Skilled Professional"}
            desc="Our skilled team is dedicated to understanding your needs. We work
          closely with you to create customized solutions that help your business
          grow."
          />

          <Points
            title={"Proven Experience in delivering"}
            h_title={"Exceptional Results"}
            desc="With over 14 years in the industry, we have the knowledge to tackle your challenges. Our experience helps us deliver effective solutions that drive results."
          />

          <Points
            title={"Client centric approach, Focused on"}
            h_title={"your success"}
            desc="We put our clients first in everything we do. Our focus on your goals ensures that we provide the best support and solutions for your success."
          />
        </div>
      </div>
    </Container>
  );
};

export default WorkWithUs;

const Points = ({ title, h_title, desc }) => {
  return (
    <div className="">
      <div className="flex gap-2 items-center">
        <ArrowRight color="black" size={40} variant="Broken" />
        <SecondaryHeading className="max-w-3xl capitalize leading-none">
          {title} <span className="text-[#6622DC]">{h_title}</span>
        </SecondaryHeading>
      </div>
      <Body className={"max-w-4xl leading-none mt-4"}>{desc}</Body>
    </div>
  );
};
