import Script from "next/script";
import Hero from "@/components/Services/BusinessProcessAutomation/Hero";
import ManualProcessing from "@/components/Services/BusinessProcessAutomation/ManualProcessing";
import ConnectCapture from "@/components/Services/BusinessProcessAutomation/ConnectCapture";
import DesignInterpretation from "@/components/Services/BusinessProcessAutomation/DesignInterpretation";
import ComparisonTable from "@/components/Services/BusinessProcessAutomation/ComparisonTable";
import MatchAutomation from "@/components/Services/BusinessProcessAutomation/MatchAutomation";
import ProcessSteps from "@/components/Services/BusinessProcessAutomation/ProcessSteps";
import TechStack from "@/components/Services/BusinessProcessAutomation/TechStack";
import CaseStudyFeature from "@/components/Services/BusinessProcessAutomation/CaseStudyFeature";
import FAQ from "@/components/Services/BusinessProcessAutomation/FAQ";
import { businessProcessAutomationFaqs } from "@/components/Services/BusinessProcessAutomation/faqData";
import CTA from "@/components/Services/BusinessProcessAutomation/CTA";
import { generateBreadcrumbSchema, generateFAQSchema } from "@/utils/schema";

export const metadata = {
  title: "Business Process Automation Services | Burhani",
  description:
    "Burhani engineers build business automation systems with AI-enabled capture, validation, approvals and integration around your workflow.",
  openGraph: {
    type: "website",
    url: "https://burhanitechnologies.com/services/business-process-automation-solutions",
    siteName: "Burhani Technologies",
    title: "Business Process Automation Services | Burhani",
    description:
      "Burhani engineers build business automation systems with AI-enabled capture, validation, approvals and integration around your workflow.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Business Process Automation Services | Burhani",
    description:
      "Burhani engineers build business automation systems with AI-enabled capture, validation, approvals and integration around your workflow.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical:
      "https://burhanitechnologies.com/services/business-process-automation-solutions",
  },
};

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", url: "https://burhanitechnologies.com" },
  { name: "Services", url: "https://burhanitechnologies.com/services" },
  {
    name: "Business Process Automation",
    url: "https://burhanitechnologies.com/services/business-process-automation-solutions",
  },
]);

const faqSchema = generateFAQSchema(businessProcessAutomationFaqs);

const BusinessProcessAutomationPage = () => {
  return (
    <>
      <Script
        id="bpa-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        strategy="beforeInteractive"
      />
      <Script
        id="bpa-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        strategy="beforeInteractive"
      />

      <div>
        <Hero />
        <ManualProcessing />
        <ConnectCapture />
        <DesignInterpretation />
        <ComparisonTable />
        <MatchAutomation />
        <ProcessSteps />
        <TechStack />
        <CaseStudyFeature />
        <FAQ />
        <CTA />
      </div>
    </>
  );
};

export default BusinessProcessAutomationPage;
