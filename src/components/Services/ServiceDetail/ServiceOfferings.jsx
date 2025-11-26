"use client";
import { useState } from "react";
import Container from "@/components/constants/Container";
import { Body } from "@/components/textComponents/Body";
import { Heading } from "@/components/textComponents/Heading";

export const ServiceOfferings = () => {
  const services = [
    {
      title: "Cloud advisory services",
      description: "Maximize ROI on your cloud investments with our best-in-class cloud advisory services. Our in-depth analysis and expert evaluations help identify and address bottlenecks in cloud environments, discover scaling opportunities, eliminate over-expenditures, and more.",
      tags: ["Cloud readiness assessment", "Cloud optimization", "Cloud infrastructure management"]
    },
    {
      title: "Architecture reviews",
      description: "Get comprehensive architecture reviews to ensure your cloud infrastructure is optimized for performance, security, and cost-efficiency. Our experts analyze your system design and provide actionable recommendations.",
      tags: ["System design analysis", "Performance optimization", "Security assessment"]
    },
    {
      title: "Migration and modernization",
      description: "Seamlessly migrate your applications to the cloud and modernize legacy systems with minimal disruption to your business operations. We handle the entire migration lifecycle from planning to execution.",
      tags: ["Cloud migration", "Legacy modernization", "Zero-downtime deployment"]
    },
    {
      title: "DevOps engineering",
      description: "Implement robust DevOps practices to accelerate development cycles, improve collaboration, and ensure reliable deployments. Our DevOps experts streamline your CI/CD pipelines and automate infrastructure management.",
      tags: ["CI/CD automation", "Infrastructure as Code", "Continuous monitoring"]
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Container className="bg-gradient-to-br from-[#180030] via-[#4a1a7d] to-[#6F36D2] relative overflow-hidden py-20">
      <div className="absolute inset-0 bg-[#000] w-full h-full opacity-30" />
      
      <div className="relative z-10">
        <div className="mb-16" data-aos="fade-up">
          <Heading className="text-white text-4xl md:text-5xl mb-6">
            Our cloud native services
          </Heading>
          <Body className="text-gray-200 text-lg max-w-4xl">
            Choose our cloud-native capabilities and DevOps practices to solve complex business challenges, support your growing 
            business, and deliver customer-centric solutions. Burhani Technologies offers a range of cloud-native services to help navigate your 
            way to business objectives.
          </Body>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left side - Service list */}
          <div className="space-y-4">
            {services.map((service, index) => (
              <div
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`p-6 rounded-lg cursor-pointer transition-all duration-500 ${
                  index === activeIndex 
                    ? 'bg-[#6F36D2] scale-105 shadow-2xl' 
                    : 'bg-white/10 hover:bg-white/20'
                }`}
              >
                <h3 className="text-white text-xl font-semibold flex items-center justify-between">
                  {service.title}
                  <span className={`text-2xl transition-transform duration-500 ${
                    index === activeIndex ? 'translate-x-2' : ''
                  }`}>→</span>
                </h3>
              </div>
            ))}
          </div>

          {/* Right side - Active service details */}
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 relative overflow-hidden">
            <div 
              key={activeIndex}
              className="animate-fadeIn"
            >
              <h3 className="text-white text-2xl font-bold mb-4">
                {services[activeIndex].title}
              </h3>
              <Body className="text-gray-200 mb-6 leading-relaxed">
                {services[activeIndex].description}
              </Body>
              {services[activeIndex].tags.length > 0 && (
                <div className="flex flex-wrap gap-3 mb-6">
                  {services[activeIndex].tags.map((tag, idx) => (
                    <span 
                      key={idx}
                      className="bg-[#6F36D2] text-white px-4 py-2 rounded-full text-sm animate-fadeIn"
                      style={{ animationDelay: `${idx * 100}ms` }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
              <button className="text-white font-semibold hover:underline flex items-center gap-2 group">
                Learn more
                <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
