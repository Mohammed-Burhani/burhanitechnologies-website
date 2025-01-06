import { Body } from "@/components/textComponents/Body";
import Image from "next/image";
import React from "react";
import { ArrowRight } from "iconsax-react";

export const WhoWeAreCard = () => {
  return (
    <div className="bg-white rounded-2xl shadow-2xl" data-aos="fade-left">
      <div className="flex flex-col gap-2 p-4">
        <div className="p-2 rounded-xl bg-[#E3C8FF] flex justify-center items-center w-fit">
          <Image
            alt="Application Development"
            src={"/icons/AppDev.svg"}
            width={500}
            height={500}
            className="w-14 h-14"
          />
        </div>
        <h3 className="text-2xl capitalize font-bold font-inter mt-4">
          Application Development
        </h3>
        <Body className={"max-w-xs 7xl:max-w-lg"}>
          We create custom applications tailored to your business needs,
          ensuring they are user-friendly and effective.
        </Body>
      </div>

      <button className="bg-[#6F36D2] p-4 text-white w-full rounded-b-2xl flex justify-between items-center gap-2 mt-4">
        <Body>Learn More</Body>
        <ArrowRight color="white" size={28} className="rotate-45" />
      </button>
    </div>
  );
};
