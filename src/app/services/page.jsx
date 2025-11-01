import { CTA2 } from "@/components/Home/Sections/CTA2";
import { LatestProjects } from "@/components/Home/Sections/LatestProjects";
import { Testimonials } from "@/components/Home/Sections/Testimonials";
import { Banner } from "@/components/Services/Sections/Banner";
import ServiceList from "@/components/Services/Sections/ServiceList";
import React from "react";

export const metadata = {
  title: "Software Development Services | ERP, AI Automation, DevOps | Burhani Technologies",
  description:
    "Comprehensive software development services: Custom ERP Implementation, AI/ML Automation, DevOps & Azure, Mobile/Web Apps, RPA, and Business Process Automation. Chennai-based, serving clients globally.",
  keywords: [
    "software development services",
    "custom ERP development",
    "AI automation services",
    "DevOps consulting",
    "business automation solutions",
    "RPA services",
    "mobile app development",
    "web application development",
  ],
  openGraph: {
    title: "Software Development Services | Burhani Technologies",
    description:
      "Comprehensive software development services: Custom ERP, AI/ML Automation, DevOps & Azure, Mobile/Web Apps, and Business Process Automation.",
    url: "https://burhanitechnologies.com/services",
  },
  alternates: {
    canonical: "https://burhanitechnologies.com/services",
  },
};

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
