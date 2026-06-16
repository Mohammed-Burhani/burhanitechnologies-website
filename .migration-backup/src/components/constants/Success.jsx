import React from "react";
import Container from "./Container";
import { Heading } from "../textComponents/Heading";
import { Body } from "../textComponents/Body";
import { PrimaryButton } from "../Home/Blocks/PrimaryButton";
import { LargeHeading } from "../textComponents/LargeHeading";

const Success = () => {
  return (
    <div className="relative">
      <div className="flex absolute inset-0">
        <ColorCard color={"bg-[#E3C8FF]"} />
        <ColorCard color={"bg-[#D3A7FF]"} />
        <ColorCard color={"bg-[#BD7AFF]"} />
        <ColorCard color={"bg-[#AD5AFF]"} />
        <ColorCard color={"bg-[#9933FF]"} />
        <ColorCard color={"bg-[#8000FF]"} />
      </div>
      <Container
        className={"flex flex-col justify-center items-center gap-4 h-[42rem]"}
      >
        <LargeHeading className={"text-white text-center uppercase max-w-xl"}>
          Your success is our priority
        </LargeHeading>
        <Body className={"text-white text-center max-w-2xl"}>
          Need support with your projects? Connect with us today to find
          effective solutions for your business challenges.
        </Body>
        <PrimaryButton
          className="!rounded-lg p-4 bg-white px-5 py-2.5 text-lg font-medium !text-black shadow flex gap-4 items-center w-fit"
          title={"Get in touch"}
        />
      </Container>
    </div>
  );
};

export default Success;

const ColorCard = ({ color }) => {
  return <div className={`w-full h-full -z-10 ${color ? color : ""}`} />;
};
