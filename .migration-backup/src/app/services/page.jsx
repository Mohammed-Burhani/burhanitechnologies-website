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

const ServicesStats = () => {
  const stats = [
    { value: "14+", label: "Years of Excellence" },
    { value: "200+", label: "Projects Delivered" },
    { value: "50+", label: "Happy Clients" },
    { value: "24/7", label: "Support Available" },
  ];

  return (
    <div className="bg-gradient-to-br from-[#2B1343] to-[#1a0a2e] py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-gray-300 text-sm md:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const services = () => {
  return (
    <div>
      <Banner />
      <ServicesStats />
      <ServiceList />
      <LatestProjects />
      <Testimonials />
      <CTA2 />
    </div>
  );
};

export default services;
