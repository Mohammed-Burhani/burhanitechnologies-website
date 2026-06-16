import React from "react";
import Script from "next/script";
import { client } from "@/sanity/lib/client";
import { generateServiceMetadata } from "@/utils/metadata";
import {
  generateServiceSchema,
  generateBreadcrumbSchema,
  generateFAQSchema,
} from "@/utils/schema";
import ServicePageClient from "./ServicePageClient";
import { unslugify } from "@/utils/slugify";
import { getServiceFAQs } from "@/utils/serviceFAQs";
import { LatestProjects } from "@/components/Home/Sections/LatestProjects";
import { Testimonials } from "@/components/Home/Sections/Testimonials";
import { CTA2 } from "@/components/Home/Sections/CTA2";

// Generate metadata for SEO
export async function generateMetadata({ params }) {
  const { service } = await params;

  // Fetch service details from Sanity
  const serviceData = await client.fetch(
    `*[_type == "services" && slug.current == $slug] [0]{ title, body }`,
    { slug: service }
  );

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
  const { service } = await params;

  // Fetch service data for schema markup
  const serviceData = await client.fetch(
    `*[_type == "services" && slug.current == $slug] [0]{ title, slug, body }`,
    { slug: service }
  );

  // Generate breadcrumb schema
  const breadcrumbs = [
    { name: "Home", url: "https://burhanitechnologies.com" },
    { name: "Services", url: "https://burhanitechnologies.com/services" },
    {
      name: serviceData?.title || unslugify(service),
      url: `https://burhanitechnologies.com/services/${service}`,
    },
  ];

  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbs);

  // Generate service schema
  const serviceSchema = serviceData
    ? generateServiceSchema({
        title: serviceData.title,
        slug: service,
        description: serviceData.title,
      })
    : null;

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
      {serviceSchema && (
        <Script
          id="service-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(serviceSchema),
          }}
          strategy="beforeInteractive"
        />
      )}

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

      <ServicePageClient service={service} />
      <CTA2 />
    </>
  );
};

export default Service;
