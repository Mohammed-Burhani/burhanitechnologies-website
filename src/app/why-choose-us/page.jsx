import Success from "@/components/constants/Success";
import { LatestProjects } from "@/components/Home/Sections/LatestProjects";
import { Testimonials } from "@/components/Home/Sections/Testimonials";
import { Client } from "@/components/Values/Sections/Client";
import { Expertise } from "@/components/Values/Sections/Expertise";
import ValuesSection from "@/components/Values/Sections/Values";
import WorkWithUs from "@/components/Values/Sections/WorkWithUs";
import Banner from "@/components/WhyChooseUs/Sections/Banner";
import { Features } from "@/components/WhyChooseUs/Sections/Features";
import { Services } from "@/components/WhyChooseUs/Sections/Services";
import Statistics from "@/components/WhyChooseUs/Sections/Statistics";
import React from "react";

const WhyChooseUs = () => {
  return (
    <div>
      <Banner />
      <Features />
      <Statistics />
      <Expertise />
      <Services />
      <LatestProjects />
      <Success />
    </div>
  );
};

export default WhyChooseUs;
