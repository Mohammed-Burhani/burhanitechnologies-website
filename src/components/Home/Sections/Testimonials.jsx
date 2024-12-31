import Container from "@/components/constants/Container";
import { Body } from "@/components/textComponents/Body";
import { LargeHeading } from "@/components/textComponents/LargeHeading";
import Marquee from "react-fast-marquee";
import { TestimonialCard } from "./Blocks/TestimonialCard";

export const Testimonials = () => {
  return (
    <Container className={"bg-[#8000FF] flex flex-col overflow-hidden !px-0"}>
      <div className="flex flex-col justify-center items-center w-full mb-14 px-7 sm:px-10 4xl:px-20">
        <h4 className="uppercase text-gray-300 font-extrabold">Testimonials</h4>

        <LargeHeading className="max-w-5xl 4xl:max-w-7xl text-center mt-7 text-white">
          Trusted by more than 1000+ company’s around the world
        </LargeHeading>
        <Body className={"max-w-2xl 4xl:max-w-4xl text-center mt-4 text-gray-200"}>
          We are more than just a business; we are a community driven by our
          passion for serving our customers with excellence. Our success is
          intertwined with the success of each individual and company we proudly
          call our customers.
        </Body>
      </div>

      <Marquee className="flex-1 w-full" direction="right" speed={70}>
        <div className="flex gap-10 mr-10">
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
        </div>
      </Marquee>
    </Container>
  );
};
