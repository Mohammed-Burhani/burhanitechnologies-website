import Banner from "@/components/About/Sections/Banner";
import Culture from "@/components/About/Sections/Culture";
import Features from "@/components/About/Sections/Features";
import OurTeam from "@/components/About/Sections/OurTeam";
import { Testimonials } from "@/components/Home/Sections/Testimonials";
import React from "react";

export const metadata = {
  title: "About Burhani Technologies | Software Development Experts Chennai",
  description:
    "Learn about Burhani Technologies - Chennai's trusted partner for custom software development, ERP implementation, and business automation. Serving Healthcare, Finance, Manufacturing & Construction industries.",
  keywords: [
    "software development company Chennai",
    "IT services Chennai",
    "custom software solutions",
    "ERP consultants",
    "business automation experts",
  ],
  openGraph: {
    title: "About Burhani Technologies | Software Development Experts",
    description:
      "Learn about Burhani Technologies - Chennai's trusted partner for custom software development, ERP implementation, and business automation.",
    url: "https://burhanitechnologies.com/about",
  },
  alternates: {
    canonical: "https://burhanitechnologies.com/about",
  },
};

const About = () => {
  return (
    <div>
      <Banner />
      <Culture />
      <Features />
      <OurTeam />
      <Testimonials />
    </div>
  );
};

export default About;
