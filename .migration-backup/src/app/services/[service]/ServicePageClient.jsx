"use client";
import React, { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { ServiceHero } from "@/components/Services/ServiceDetail/ServiceHero";
import { ServiceOfferings } from "@/components/Services/ServiceDetail/ServiceOfferings";
import { ServiceCredibility } from "@/components/Services/ServiceDetail/ServiceCredibility";
import { ServiceSocialProof } from "@/components/Services/ServiceDetail/ServiceSocialProof";
import { ServiceCaseStudies } from "@/components/Services/ServiceDetail/ServiceCaseStudies";
import { ServiceProcesses } from "@/components/Services/ServiceDetail/ServiceProcesses";
import RelatedBlogs from "@/components/Services/RelatedBlogs";
import { Testimonials } from "@/components/Home/Sections/Testimonials";

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
            offeringsTitle,
            offeringsDescription,
            offerings,
            capabilitiesTitle,
            capabilities,
            socialProofTitle,
            caseStudiesTitle,
            caseStudiesDescription,
            processesTitle,
            processesDescription,
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
        description={
          serviceDetails.heroDescription ||
          serviceDetails.benefitTitle ||
          "Transform your business with our cutting-edge solutions"
        }
      />

      {/* 3. Credibility */}
      <ServiceCredibility
        title={serviceDetails.capabilitiesTitle}
        capabilities={serviceDetails.capabilities}
      />

      {/* 2. Services Section */}
      <ServiceOfferings
        title={serviceDetails.offeringsTitle}
        description={serviceDetails.offeringsDescription}
        offerings={serviceDetails.offerings}
      />

      {/* 5. Case Studies */}
      <ServiceCaseStudies
        title={serviceDetails.caseStudiesTitle}
        description={serviceDetails.caseStudiesDescription}
      />

      {/* 6. Processes - Development Process */}
      <ServiceProcesses
        title={serviceDetails.processesTitle}
        description={serviceDetails.processesDescription}
        processes={serviceDetails.developmentProcesses}
      />

      {/* 7. Blog Posts */}
      <RelatedBlogs serviceTitle={serviceDetails.title} />
      
      {/* 4. Social Proof - Trusted by section */}
      {/* <ServiceSocialProof title={serviceDetails.socialProofTitle} /> */}
      <Testimonials />

      {/* 8. CTA - Already in parent page.jsx */}
    </div>
  );
};

export default ServicePageClient;
