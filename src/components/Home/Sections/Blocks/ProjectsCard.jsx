import { Body } from "@/components/textComponents/Body";
import Image from "next/image";
import React from "react";
import { ArrowLeft, ArrowRight } from "iconsax-react";

export const ProjectCards = () => {
  return (
    <div className="w-[28rem]">
      <div className="relative">
        <div className="bg-white p-5 absolute -right-5 -top-5 rounded-full">
          <div className="bg-[#6622DC] p-3 rounded-full">
            <ArrowLeft color="white" size={32} />
          </div>
        </div>

        <div className="bg-[url(/Dummies/project.png)] object-cover bg-no-repeat bg-center rounded-[3rem] w-[28rem] h-[28rem]"></div>

        <div className="bg-white p-5 absolute -left-5 -bottom-5 rounded-full">
          <div className="bg-[#6622DC] p-3 rounded-full">
            <ArrowLeft color="white" size={32} />
          </div>
        </div>
      </div>

      <div className="mt-7">
        <h3 className="text-3xl capitalize font-bold font-inter my-2">
          Application Development
        </h3>
        <Body className={"7xl:max-w-md text-wrap text-justify"}>
          We create custom applications tailored to your business needs,
          ensuring they are user-friendly and effective.
        </Body>
      </div>
    </div>
  );
};
