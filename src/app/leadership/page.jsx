import OurTeam from "@/components/About/Sections/OurTeam";
import Success from "@/components/constants/Success";
import { Banner } from "@/components/Leadership/Sections/Banner";
import FAQ from "@/components/Leadership/Sections/FAQ";
import React from "react";

export const metadata = {
  title: "Leadership Team | Burhani Technologies - Software Development Experts",
  description:
    "Meet the experienced leadership team driving innovation at Burhani Technologies. Experts in software development, ERP systems, AI automation, and cloud solutions.",
  keywords: [
    "technology leadership",
    "software development team",
    "IT consultants Chennai",
    "tech leadership",
    "software experts",
  ],
  openGraph: {
    title: "Leadership Team | Burhani Technologies",
    description:
      "Meet the experienced leadership team driving innovation at Burhani Technologies.",
    url: "https://burhanitechnologies.com/leadership",
  },
};

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
