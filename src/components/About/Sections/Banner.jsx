import React from "react";
import Container from "../../constants/Container";
import { Heading } from "../../textComponents/Heading";

const Banner = () => {
  return (
    <Container className={"bg-white !pt-28 4xl:!pt-40 !pb-32 2xl:!pb-20"}>
      <div className="4xl:!sticky !top-44 h-full mb-7 2xl:mb-0">
        <h4 className="uppercase text-[#6622DC] font-extrabold">About Us</h4>

        <Heading className="mt-4 max-w-3xl">
          Get 3X Growth and Success with Cutting-Edge <span className="text-[#6622DC]">Technology Expertise</span>
        </Heading>
      </div>
    </Container>
  );
};

export default Banner;
