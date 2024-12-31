import { Body } from "@/components/textComponents/Body";
import Image from "next/image";
import React from "react";
import { ArrowRight, Star, Star1 } from "iconsax-react";

export const TestimonialCard = () => {
  return (
    <div className="bg-[#9933FF] rounded-2xl border border-white max-w-md 7xl:!max-w-lg">
      <div className="flex flex-col gap-2 p-4">
        <div className="flex items-center gap-4">
          <Star1 color="white" size={24} variant="Bold" />
          <Star1 color="white" size={24} variant="Bold" />
          <Star1 color="white" size={24} variant="Bold" />
          <Star1 color="white" size={24} variant="Bold" />
          <Star1 color="white" size={24} variant="Bold" />
          <Star1 color="white" size={24} variant="Bold" />
        </div>
        <h3 className="text-2xl capitalize font-bold font-inter mt-4 text-white">
          "Exceptional Service and Support!"
        </h3>
        <Body className={"text-white"}>
          We partnered with Burhani Technologies for our IT infrastructure
          upgrade, and the experience has been fantastic. Their team is
          knowledgeable, responsive, and genuinely invested in our success.
          Highly recommended!
        </Body>

        <h3 className="text-2xl capitalize font-bold font-inter mt-4 text-white">
          John Doe
        </h3>
      </div>
    </div>
  );
};
