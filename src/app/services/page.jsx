import Script from "next/script";
import ServicesHero from "@/components/Services/Hub/ServicesHero";
import ChooseTheWork from "@/components/Services/Hub/ChooseTheWork";
import WhatWeBuildServices from "@/components/Services/Hub/WhatWeBuildServices";
import ServicesAtAGlance from "@/components/Services/Hub/ServicesAtAGlance";
import ChoosingWhereToStart from "@/components/Services/Hub/ChoosingWhereToStart";
import { servicesFaqs } from "@/components/Services/Hub/servicesFaqData";
import DiscussFirstScope from "@/components/Services/Hub/DiscussFirstScope";
import PlanYourProject from "@/components/Home/Sections/plan-your-project";
import { generateBreadcrumbSchema, generateFAQSchema } from "@/utils/schema";

export const metadata = {
  title: "Software Development Services | Burhani Technologies",
  description:
    "Custom software, ERP, automation, cloud and design services. AI-assisted development and connected business workflows, with scope agreed around your needs.",
  openGraph: {
    type: "website",
    url: "https://burhanitechnologies.com/services",
    siteName: "Burhani Technologies",
    title: "Software Development Services | Burhani Technologies",
    description:
      "Custom software, ERP, automation, cloud and design services. AI-assisted development and connected business workflows, with scope agreed around your needs.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Software Development Services | Burhani Technologies",
    description:
      "Custom software, ERP, automation, cloud and design services. AI-assisted development and connected business workflows, with scope agreed around your needs.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://burhanitechnologies.com/services",
  },
};

// Structured data stays aligned with the visible copy on this page
const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", url: "https://burhanitechnologies.com" },
  { name: "Services", url: "https://burhanitechnologies.com/services" },
]);

const faqSchema = generateFAQSchema(servicesFaqs);

const ServicesPage = () => {
  return (
    <>
      <Script
        id="services-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        strategy="beforeInteractive"
      />
      <Script
        id="services-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        strategy="beforeInteractive"
      />

      <div>
        <ServicesHero />
        <ChooseTheWork />
        <WhatWeBuildServices />
        <ServicesAtAGlance />
        <ChoosingWhereToStart />
        <DiscussFirstScope />
        <PlanYourProject />
      </div>
    </>
  );
};

export default ServicesPage;
