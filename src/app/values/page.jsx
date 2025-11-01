import Success from "@/components/constants/Success";
import { Testimonials } from "@/components/Home/Sections/Testimonials";
import { Banner } from "@/components/Values/Sections/Banner";
import { Client } from "@/components/Values/Sections/Client";
import { Expertise } from "@/components/Values/Sections/Expertise";
import ValuesSection from "@/components/Values/Sections/Values";
import WorkWithUs from "@/components/Values/Sections/WorkWithUs";
import React from "react";

export const metadata = {
  title: "Our Values & Mission | Burhani Technologies - Client-First Approach",
  description:
    "Discover the core values that guide Burhani Technologies: Innovation, Quality, Client Success, and Excellence in Software Development & Business Automation.",
  keywords: [
    "company values",
    "mission vision",
    "technology company culture",
    "innovation",
    "client success",
  ],
  openGraph: {
    title: "Our Values & Mission | Burhani Technologies",
    description:
      "Discover the core values that guide Burhani Technologies: Innovation, Quality, Client Success, and Excellence.",
    url: "https://burhanitechnologies.com/values",
  },
  alternates: {
    canonical: "https://burhanitechnologies.com/values",
  },
};

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
