import Success from "@/components/constants/Success";
import { Testimonials } from "@/components/Home/Sections/Testimonials";
import { Banner } from "@/components/Values/Sections/Banner";
import { Client } from "@/components/Values/Sections/Client";
import { Expertise } from "@/components/Values/Sections/Expertise";
import ValuesSection from "@/components/Values/Sections/Values";
import WorkWithUs from "@/components/Values/Sections/WorkWithUs";
import React from "react";

const Values = () => {
  return (
    <div>
      <Banner />
      <Client />
      <WorkWithUs />
      <Expertise />
      <ValuesSection />
      <Testimonials />
      <Success />
    </div>
  );
};

export default Values;
