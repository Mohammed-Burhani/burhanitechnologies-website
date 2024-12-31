import Container from "@/components/constants/Container";
import { Body } from "@/components/textComponents/Body";
import { Heading } from "@/components/textComponents/Heading";
import { LargeHeading } from "@/components/textComponents/LargeHeading";
import Image from "next/image";
import React from "react";

const Features = () => {
  return (
    <Container className={"bg-white flex flex-col gap-20"}>
      <FeaturePoint
        title={"Experience excellence with our expert team"}
        desc={
          "Our strength lies in our experienced team and commitment to excellence. With more than 14 years in the industry, we offer personalized solutions that address your specific needs, ensuring you receive the best service and support available."
        }
      />

      <FeaturePoint
        title={"Customized solutions for your unique needs"}
        desc={
          "At Burhani Technologies, we believe that every business is unique. That's why we offer customized solutions tailored to your specific needs. Whether you require application development, process automation, or cloud services, our expert team works closely with you to create the perfect solution that drives success and growth for your organization."
        }
        reverse
      />

      <FeaturePoint
        title={"Transparent communication and collaboration"}
        desc={
          "We value clear communication and teamwork, and believe that keeping you informed at every step is essential for success. Our open approach fosters collaboration, ensuring your ideas and feedback are heard. At Burhani Technologies, we create effective solutions that meet your needs and help your business thrive."
        }
      />
    </Container>
  );
};

export default Features;

const FeaturePoint = ({ title, desc, image, reverse = false }) => {
  return (
    <>
      {/* POINT 1 */}
      <div
        className={`flex ${
          reverse ? "flex-row-reverse" : "flex-row"
        } flex-wrap-reverse 2xl:flex-nowrap justify-between items-center`}
      >
        <div className="flex flex-col gap-4">
          <LargeHeading className="mt-7 2xl:max-w-2xl 7xl:max-w-4xl  z-10">
            {title}
          </LargeHeading>
          <Body className={"z-10 2xl:max-w-2xl 7xl:max-w-4xl "}>{desc}</Body>
        </div>

        <div className="relative flex justify-center items-center">
          <div className="bg-[#8000FF] blur-[250px] 2xl:blur-[220px] w-72 h-72 absolute z-0 rounded-full" />
          <div className="z-10">
            <Image
              alt="Application Development"
              src={"/About/Features/feature1.webp"}
              width={500}
              height={500}
              className="w-[24rem] h-[32rem]"
            />
          </div>
        </div>
      </div>
    </>
  );
};
