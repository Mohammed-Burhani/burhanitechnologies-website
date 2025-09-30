import Success from "@/components/constants/Success";
import { LatestProjects } from "@/components/Home/Sections/LatestProjects";
import { Expertise } from "@/components/Values/Sections/Expertise";
import { Banner } from "@/components/WhyChooseUs/Sections/Banner";
import { Features } from "@/components/WhyChooseUs/Sections/Features";
import { Services } from "@/components/WhyChooseUs/Sections/Services";
import Statistics from "@/components/WhyChooseUs/Sections/Statistics";
import React from "react";

export const metadata = {
  title: "Why Choose Burhani Technologies | Proven Software Development Partner",
  description:
    "Choose Burhani Technologies for proven expertise in Custom ERP, AI Automation, and DevOps. We deliver measurable results with 90-day post-launch support and industry-specific solutions.",
  keywords: [
    "best software development company",
    "ERP implementation partner",
    "trusted IT services Chennai",
    "reliable software partner",
    "proven technology solutions",
  ],
  openGraph: {
    title: "Why Choose Burhani Technologies | Proven Software Development Partner",
    description:
      "Choose Burhani Technologies for proven expertise in Custom ERP, AI Automation, and DevOps. We deliver measurable results.",
    url: "https://burhanitechnologies.com/why-choose-us",
  },
};

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
