import { CTA2 } from "@/components/Home/Sections/CTA2";
import { LatestProjects } from "@/components/Home/Sections/LatestProjects";
import { Testimonials } from "@/components/Home/Sections/Testimonials";
import { Banner } from "@/components/Services/Sections/Banner";
import ServiceList from "@/components/Services/Sections/ServiceList";
import React from "react";

const services = () => {
  return (
    <div>
      <Banner />
      <ServiceList />
      <LatestProjects />
      <Testimonials />
      <CTA2 />
    </div>
  );
};

export default services;
