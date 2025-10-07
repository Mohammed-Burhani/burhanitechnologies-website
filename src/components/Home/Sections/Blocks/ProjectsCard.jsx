import { Body } from "@/components/textComponents/Body";
import React from "react";
import { ArrowLeft, ArrowRight, ArrowUp } from "iconsax-react";
import Link from "next/link";
import Image from "next/image";

export const ProjectCards = ({
  title,
  challenge,
  solution,
  outcome,
  image,
  redirectTo,
}) => {
  return (
    <div className="w-[28rem]" data-aos="fade-left">
      <div className="relative">
        <Image
          src={image}
          width={500}
          height={500}
          alt=""
          className={`object-cover no-repeat object-center rounded-[3rem] w-[28rem] h-[28rem]`}
        />
        <div className="bg-white p-5 absolute -right-5 -top-5 rounded-full">
          <div className="bg-orange-600 p-3 rounded-full">
            <Link href={redirectTo}>
              <ArrowRight color="white" size={32} />
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-7">
        <h3 className="text-3xl capitalize font-bold font-inter my-2">
          {title}
        </h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-lg">Challenge</h4>
            <Body className={"text-wrap text-justify"}>{challenge}</Body>
          </div>
          <div>
            <h4 className="font-semibold text-lg">Solution</h4>
            <Body className={"text-wrap text-justify"}>{solution}</Body>
          </div>
          <div>
            <h4 className="font-semibold text-lg">Outcome</h4>
            <Body className={"text-wrap text-justify"}>{outcome}</Body>
          </div>
        </div>
      </div>
    </div>
  );
};
