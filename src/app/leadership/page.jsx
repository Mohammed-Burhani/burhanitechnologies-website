import OurTeam from "@/components/About/Sections/OurTeam";
import Success from "@/components/constants/Success";
import { Banner } from "@/components/Leadership/Sections/Banner";
import FAQ from "@/components/Leadership/Sections/FAQ";
import React from "react";

const Leadership = () => {
  return (
    <div>
      <Banner />
      <OurTeam />
      <FAQ />
      <Success />
    </div>
  );
};

export default Leadership;
