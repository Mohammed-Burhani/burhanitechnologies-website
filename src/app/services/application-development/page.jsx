import Script from "next/script";
import Hero from "@/components/Services/ApplicationDevelopment/Hero";
import WhySwitch from "@/components/Services/ApplicationDevelopment/WhySwitch";
import WorkflowApplications from "@/components/Services/ApplicationDevelopment/WorkflowApplications";
import DeepDive from "@/components/Services/ApplicationDevelopment/DeepDive";
import ComparisonTable from "@/components/Services/ApplicationDevelopment/ComparisonTable";
import ChooseRightApplication from "@/components/Services/ApplicationDevelopment/ChooseRightApplication";
import ProcessSteps from "@/components/Services/ApplicationDevelopment/ProcessSteps";
import TechStack from "@/components/Services/ApplicationDevelopment/TechStack";
import CaseStudyFeature from "@/components/Services/ApplicationDevelopment/CaseStudyFeature";
import FAQ from "@/components/Services/ApplicationDevelopment/FAQ";
import { applicationDevelopmentFaqs } from "@/components/Services/ApplicationDevelopment/faqData";
import CTA from "@/components/Services/ApplicationDevelopment/CTA";
import { generateBreadcrumbSchema, generateFAQSchema } from "@/utils/schema";

export const metadata = {
  title: "Custom Software Development Services | Burhani",
  description:
    "Burhani engineers develop custom software around your workflows, using AI assistance to expedite delivery, with design, integration and testing.",
  openGraph: {
    type: "website",
    url: "https://burhanitechnologies.com/services/application-development",
    siteName: "Burhani Technologies",
    title: "Custom Software Development Services | Burhani",
    description:
      "Burhani engineers develop custom software around your workflows, using AI assistance to expedite delivery, with design, integration and testing.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Software Development Services | Burhani",
    description:
      "Burhani engineers develop custom software around your workflows, using AI assistance to expedite delivery, with design, integration and testing.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://burhanitechnologies.com/services/application-development",
  },
};

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", url: "https://burhanitechnologies.com" },
  { name: "Services", url: "https://burhanitechnologies.com/services" },
  {
    name: "Custom Software Development",
    url: "https://burhanitechnologies.com/services/application-development",
  },
]);

const faqSchema = generateFAQSchema(applicationDevelopmentFaqs);

const ApplicationDevelopmentPage = () => {
  return (
    <>
      <Script
        id="application-development-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        strategy="beforeInteractive"
      />
      <Script
        id="application-development-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        strategy="beforeInteractive"
      />

      <div>
        <Hero />
        <WhySwitch />
        <WorkflowApplications />
        <DeepDive />
        <ComparisonTable />
        <ChooseRightApplication />
        <ProcessSteps />
        <TechStack />
        <CaseStudyFeature />
        <FAQ />
        <CTA />
      </div>
    </>
  );
};

export default ApplicationDevelopmentPage;
