"use client";
import React, { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { ServiceHero } from "@/components/Services/ServiceDetail/ServiceHero";
import { ServiceIntro } from "@/components/Services/ServiceDetail/ServiceIntro";
import { ServiceOfferings } from "@/components/Services/ServiceDetail/ServiceOfferings";
import { ServiceCredibility } from "@/components/Services/ServiceDetail/ServiceCredibility";
import { ServiceSocialProof } from "@/components/Services/ServiceDetail/ServiceSocialProof";
import { ServiceCaseStudies } from "@/components/Services/ServiceDetail/ServiceCaseStudies";
import { ServiceProcess } from "@/components/Services/ServiceDetail/ServiceProcess";
import { ServiceProcesses } from "@/components/Services/ServiceDetail/ServiceProcesses";
import RelatedBlogs from "@/components/Services/RelatedBlogs";

const ServicePageClient = ({ service }) => {
  const [serviceDetails, setServiceDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await client.fetch(
          `*[_type == "services" && slug.current == $slug] [0]{
            title,
            body,
            heroDescription,
            introText,
            offerings,
            capabilities,
            processTitle,
            processHighlights,
            processContent,
            developmentProcesses,
            benefitTitle,
            benefitDescription
          }`,
          { slug: service }
        );
        setServiceDetails(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [service]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-[#8000FF]"></div>
      </div>
    );
  }

  if (!serviceDetails) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <p className="text-2xl text-gray-600">Service not found</p>
      </div>
    );
  }

  return (
    <div>
      {/* 1. Hero Section with H1 */}
      <ServiceHero 
        title={serviceDetails.title}
        description={serviceDetails.heroDescription || serviceDetails.benefitTitle || "Transform your business with our cutting-edge solutions"}
      />

      {/* 2. Intro Text */}
      <ServiceIntro content={serviceDetails.introText} />

      {/* 3. Services Section */}
      <ServiceOfferings offerings={serviceDetails.offerings} />

      {/* 4. Credibility */}
      <ServiceCredibility capabilities={serviceDetails.capabilities} />

      {/* 5. Social Proof - Trusted by section */}
      <ServiceSocialProof />

      {/* 6. Case Studies */}
      <ServiceCaseStudies />

      {/* 7. Process / Why */}
      {/* <ServiceProcess 
        title={serviceDetails.processTitle}
        highlights={serviceDetails.processHighlights}
        content={serviceDetails.processContent}
      /> */}

      {/* 7b. Processes - Development Process */}
      <ServiceProcesses processes={serviceDetails.developmentProcesses} />

      {/* 8. Blog Posts */}
      <RelatedBlogs serviceTitle={serviceDetails.title} />

      {/* 9. CTA - Already in parent page.jsx */}
    </div>
  );
};

export default ServicePageClient;
