import React from "react";
import Script from "next/script";
import { client } from "@/sanity/lib/client";
import { generateServiceMetadata } from "@/utils/metadata";
import {
  generateServiceSchema,
  generateBreadcrumbSchema,
  generateFAQSchema,
} from "@/utils/schema";
import { unslugify } from "@/utils/slugify";
import { getServiceFAQs } from "@/utils/serviceFAQs";
import { CTA2 } from "@/components/Home/Sections/CTA2";
import { ServiceHero } from "@/components/Services/ServiceDetail/ServiceHero";
import { ServiceOfferings } from "@/components/Services/ServiceDetail/ServiceOfferings";
import { ServiceCredibility } from "@/components/Services/ServiceDetail/ServiceCredibility";
import { ServiceCaseStudies } from "@/components/Services/ServiceDetail/ServiceCaseStudies";
import { ServiceProcesses } from "@/components/Services/ServiceDetail/ServiceProcesses";
import RelatedBlogs from "@/components/Services/RelatedBlogs";
import { Testimonials } from "@/components/Home/Sections/Testimonials";
import { notFound } from "next/navigation";

export const revalidate = 0; // Always fetch fresh data
export const dynamicParams = true; // Allow dynamic params

// Fetch service details
async function getServiceDetails(slug) {
  const query = `*[_type == "services" && slug.current == $slug][0]{
    _id,
    title,
    body,
    slug,
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
  }`;

  const serviceDetails = await client.fetch(query, { slug }, {
    cache: 'no-store' // Don't cache, always fetch fresh
  });
  return serviceDetails;
}

// Generate metadata for SEO
export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const { service } = resolvedParams;

  // Fetch service details from Sanity
  const serviceData = await getServiceDetails(service);

  // Use predefined metadata or generate from service data
  const metadata = generateServiceMetadata(service);

  if (serviceData) {
    return {
      ...metadata,
      title: metadata.title || `${serviceData.title} | Burhani Technologies`,
      description: metadata.description || serviceData.title,
    };
  }

  return metadata;
}

// Generate static params for all services (optional, for static generation)
export async function generateStaticParams() {
  const services = await client.fetch(`*[_type == "services"]{ slug }`);

  return services.map((service) => ({
    service: service.slug.current,
  }));
}

const Service = async ({ params }) => {
  const resolvedParams = await params;
  const { service } = resolvedParams;

  // Fetch service data
  const serviceDetails = await getServiceDetails(service);

  if (!serviceDetails) {
    notFound();
  }

  // Generate breadcrumb schema
  const breadcrumbs = [
    { name: "Home", url: "https://burhanitechnologies.com" },
    { name: "Services", url: "https://burhanitechnologies.com/services" },
    {
      name: serviceDetails.title || unslugify(service),
      url: `https://burhanitechnologies.com/services/${service}`,
    },
  ];

  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbs);

  // Generate service schema
  const serviceSchema = generateServiceSchema({
    title: serviceDetails.title,
    slug: service,
    description: serviceDetails.title,
  });

  // Generate FAQ schema
  const faqs = getServiceFAQs(service);
  const faqSchema = faqs.length > 0 ? generateFAQSchema(faqs) : null;

  return (
    <>
      {/* Breadcrumb Schema */}
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
        strategy="beforeInteractive"
      />

      {/* Service Schema */}
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
        strategy="beforeInteractive"
      />

      {/* FAQ Schema */}
      {faqSchema && (
        <Script
          id="faq-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
          strategy="beforeInteractive"
        />
      )}

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
      <Testimonials />

      <CTA2 />
    </>
  );
};

export default Service;
