import Script from "next/script";
import Hero from "@/components/Services/CloudSolutions/Hero";
import ChangingDemand from "@/components/Services/CloudSolutions/ChangingDemand";
import PlanTheMove from "@/components/Services/CloudSolutions/PlanTheMove";
import ChooseMigrationPath from "@/components/Services/CloudSolutions/ChooseMigrationPath";
import ComparisonTable from "@/components/Services/CloudSolutions/ComparisonTable";
import ConnectAndMaintain from "@/components/Services/CloudSolutions/ConnectAndMaintain";
import ProcessSteps from "@/components/Services/CloudSolutions/ProcessSteps";
import TechStack from "@/components/Services/CloudSolutions/TechStack";
import CaseStudyFeature from "@/components/Services/CloudSolutions/CaseStudyFeature";
import FAQ from "@/components/Services/CloudSolutions/FAQ";
import { cloudSolutionsFaqs } from "@/components/Services/CloudSolutions/faqData";
import CTA from "@/components/Services/CloudSolutions/CTA";
import { generateBreadcrumbSchema, generateFAQSchema } from "@/utils/schema";

export const metadata = {
  title: "Azure Cloud Services and Migration | Burhani",
  description:
    "Cloud architecture and migration across Azure, AWS and Google Cloud. Plan capacity, connections, recovery and the support your applications need.",
  openGraph: {
    type: "website",
    url: "https://burhanitechnologies.com/services/cloud-solutions",
    siteName: "Burhani Technologies",
    title: "Azure Cloud Services and Migration | Burhani",
    description:
      "Cloud architecture and migration across Azure, AWS and Google Cloud. Plan capacity, connections, recovery and the support your applications need.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Azure Cloud Services and Migration | Burhani",
    description:
      "Cloud architecture and migration across Azure, AWS and Google Cloud. Plan capacity, connections, recovery and the support your applications need.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://burhanitechnologies.com/services/cloud-solutions",
  },
};

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", url: "https://burhanitechnologies.com" },
  { name: "Services", url: "https://burhanitechnologies.com/services" },
  {
    name: "Cloud Solutions",
    url: "https://burhanitechnologies.com/services/cloud-solutions",
  },
]);

const faqSchema = generateFAQSchema(cloudSolutionsFaqs);

const CloudSolutionsPage = () => {
  return (
    <>
      <Script
        id="cloud-solutions-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        strategy="beforeInteractive"
      />
      <Script
        id="cloud-solutions-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        strategy="beforeInteractive"
      />

      <div>
        <Hero />
        <ChangingDemand />
        <PlanTheMove />
        <ChooseMigrationPath />
        <ComparisonTable />
        <ConnectAndMaintain />
        <ProcessSteps />
        <TechStack />
        <CaseStudyFeature />
        <FAQ />
        <CTA />
      </div>
    </>
  );
};

export default CloudSolutionsPage;
