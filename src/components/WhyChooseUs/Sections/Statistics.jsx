import Container from "@/components/constants/Container";
import { Body } from "@/components/textComponents/Body";
import { SecondaryHeading } from "@/components/textComponents/SecondaryHeading";
import { LargeHeading } from "@/components/textComponents/LargeHeading";
import React from "react";

const Statistics = () => {
  return (
    <Container className={"bg-white"}>
      <div className="flex flex-wrap 2xl:flex-nowrap justify-between items-center gap-7">
        <div className="flex flex-col gap-4">
          <SecondaryHeading className={" max-w-screen-lg"}>
            More Than a Company, A Partner in Innovation
          </SecondaryHeading>
          <Body
            className={"text-[#656565]  max-w-screen-lg"}
          >
            We are architects of innovation and pioneers of technological
            advancement. As a forward-thinking organization, we empower
            businesses to navigate the digital age with confidence, driving
            success and reshaping industries along the way.
          </Body>
        </div>

        <div className="flex flex-col divide-y-2 divide-[#000000]">
          <div className="flex gap-10 py-2">
            <LargeHeading className={""}>14+</LargeHeading>
            <Body className={"text-[#656565] max-w-sm"}>
              Decades of experience in software development
            </Body>
          </div>
          <div className="flex gap-10 py-2">
            <LargeHeading className={""}>300+</LargeHeading>
            <Body className={"text-[#656565] max-w-sm"}>
              Amassed a portfolio of numerous successfully completed projects
            </Body>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Statistics;
