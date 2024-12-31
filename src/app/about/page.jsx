import Banner from "@/components/About/Sections/Banner";
import Culture from "@/components/About/Sections/Culture";
import Features from "@/components/About/Sections/Features";
import OurTeam from "@/components/About/Sections/OurTeam";
import { Testimonials } from "@/components/Home/Sections/Testimonials";
import React from "react";

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
