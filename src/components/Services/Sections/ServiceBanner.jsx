import Container from "@/components/constants/Container";
import { Heading } from "@/components/textComponents/Heading";
import { Body } from "@/components/textComponents/Body";
import React from "react";

const Banner = ({ title, subtext }) => {
  return (
    <div className="bg-[url(/Banner/Banner_SVG.svg)] bg-cover h-[32rem] w-full bg-center flex flex-col justify-center overflow-hidden border-b border-gray-800">
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

      <Container className="flex flex-col justify-center items-center gap-4 4xl:pt-36 text-center">
        <Heading className="text-white" data-aos="fade-right">
          {title}
        </Heading>
        <Body className={"text-gray-300 max-w-screen-md"}>{subtext}</Body>
      </Container>
    </div>
  );
};

export default Banner;
