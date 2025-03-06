import Container from "@/components/constants/Container";
import { Heading } from "@/components/textComponents/Heading";
import { PortableBody } from "@/components/textComponents/PortableBody";
import { components } from "@/utils/components";
import { PortableText } from "next-sanity";
import React from "react";

const Banner = ({ title, desc }) => {
  return (
    <div className="bg-[url(/Banner/Banner_SVG.svg)] bg-cover h-[48rem] w-full bg-center flex flex-col justify-center overflow-hidden border-b border-gray-800">
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

      <Container className="flex flex-col justify-center items-center gap-4 4xl:pt-36">
        <Heading className="text-white text-center" data-aos="fade-right">
          {title}
        </Heading>
        <PortableBody className={"text-gray-300 max-w-screen-sm text-center"}>
          <PortableText value={desc} components={components} />
        </PortableBody>
      </Container>
    </div>
  );
};

export default Banner;
