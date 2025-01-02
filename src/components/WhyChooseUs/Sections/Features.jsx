import Container from "@/components/constants/Container";
import { Heading } from "@/components/textComponents/Heading";
import { LargeCaption } from "@/components/textComponents/LargeCaption";
import Image from "next/image";
import React from "react";

export const Features = () => {
  return (
    <Container className="flex flex-wrap 4xl:flex-nowrap justify-center items-center bg-[#311F43]">
      <div className="flex flex-wrap 2xl:flex-nowrap gap-10">
        <FeaturePoint title={"Experience Expert Team"} url={"/Icons/Trophy-3D.svg"} />
        <FeaturePoint title={"Customized Solutions"} url={"/Icons/Settings-3D.svg"} />
        <FeaturePoint title={"Transparent Communication"} url={"/Icons/Chat-3D.svg"} />
      </div>
    </Container>
  );
};

const FeaturePoint = ({ title, url }) => {
  return (
    <div className="flex gap-4 items-center">
      <Image
        alt="Expert Team"
        width={500}
        height={500}
        src={url}
        className="w-32 h-32 md:w-40 md:h-40"
      />

      <Heading className="text-white !max-w-72">{title}</Heading>
    </div>
  );
};
