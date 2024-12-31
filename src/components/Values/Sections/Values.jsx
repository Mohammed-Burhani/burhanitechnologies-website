import Container from "@/components/constants/Container";
import { Body } from "@/components/textComponents/Body";
import { Heading } from "@/components/textComponents/Heading";
import { LargeCaption } from "@/components/textComponents/LargeCaption";
import React from "react";

const ValuesSection = () => {
  return (
    <Container className="bg-white">
      <div className="">
        <Heading className="">Our Values</Heading>

        <Body className="">Here's what sets us apart from others...</Body>
      </div>

      <dl className="mt-6 flex flex-wrap 2xl:flex-nowrap gap-4 items-center justify-center">
        <ValueCard
          title="Excellence"
          desc="We strive for excellence in everything we do. Our focus on quality ensures that we deliver the best solutions for your business needs."
        />

        <ValueCard
          title="Innovation"
          desc="We prioritize creativity and innovation, delivering unique solutions to keep your business ahead."
        />

        <ValueCard
          title="Collaboration"
          desc="Working as a team is key to our success. We collaborate with our clients and coworkers to reach common goals and deliver results."
        />
      </dl>
    </Container>
  );
};

export default ValuesSection;

const ValueCard = ({ title, desc }) => {
  return (
    <div className="flex flex-col rounded-lg bg-[#FBF7FF] border border-[#9933FF] group hover:bg-[#9933FF] hover:border-[#391C6C] p-4 min-h-40 w-full">
      <LargeCaption className=" group-hover:text-white">
        {title}
      </LargeCaption>

      <Body className="group-hover:text-white">{desc}</Body>
    </div>
  );
};
