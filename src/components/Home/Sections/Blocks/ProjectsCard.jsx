import { Body } from "@/components/textComponents/Body";
import React from "react";
import { ArrowLeft, ArrowRight, ArrowUp } from "iconsax-react";
import Link from "next/link";
import Image from "next/image";

export const ProjectCards = ({
  title,
  desc,
  image,
  redirectTo,
  redirectTo2,
}) => {
  return (
    <div className="w-[28rem]" data-aos="fade-left">
      <div className="relative">
        <div className="bg-white p-5 absolute -right-5 -top-5 rounded-full">
          <div className="bg-orange-600 p-3 rounded-full">
            <Link href={redirectTo}>
              <ArrowRight color="white" size={32} />
            </Link>
          </div>
        </div>

        <Image
          src={image}
          width={500}
          height={500}
          alt=""
          className={`object-cover no-repeat object-center rounded-[3rem] w-[28rem] h-[28rem]`}
        />

        <div className="bg-white p-5 absolute -left-5 -bottom-5 rounded-full">
          <div className="bg-[#6622DC] p-3 rounded-full">
            <a href={redirectTo2} target="_blank" rel="noreferrer">
              <ArrowUp color="white" size={32} className="rotate-45" />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-7">
        <h3 className="text-3xl capitalize font-bold font-inter my-2">
          {title}
        </h3>
        <Body className={"7xl:max-w-md text-wrap text-justify line-clamp-5"}>
          {desc}
        </Body>
      </div>
    </div>
  );
};
