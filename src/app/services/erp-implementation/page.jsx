import Script from "next/script";
import Hero from "@/components/Services/ErpImplementation/Hero";
import DifferentRecords from "@/components/Services/ErpImplementation/DifferentRecords";
import OperationalRecord from "@/components/Services/ErpImplementation/OperationalRecord";
import StartWithRecords from "@/components/Services/ErpImplementation/StartWithRecords";
import ComparisonTable from "@/components/Services/ErpImplementation/ComparisonTable";
import ExtendYourErp from "@/components/Services/ErpImplementation/ExtendYourErp";
import ProcessSteps from "@/components/Services/ErpImplementation/ProcessSteps";
import TechStack from "@/components/Services/ErpImplementation/TechStack";
import CaseStudyFeature from "@/components/Services/ErpImplementation/CaseStudyFeature";
import FAQ from "@/components/Services/ErpImplementation/FAQ";
import { erpImplementationFaqs } from "@/components/Services/ErpImplementation/faqData";
import CTA from "@/components/Services/ErpImplementation/CTA";
import { generateBreadcrumbSchema, generateFAQSchema } from "@/utils/schema";

export const metadata = {
  title: "ERP Implementation Services | Burhani",
  description:
    "Custom ERP implementation connecting sales, stock, production and dispatch. Scope the first module, integrations and rollout with Burhani.",
  openGraph: {
    type: "website",
    url: "https://burhanitechnologies.com/services/erp-implementation",
    siteName: "Burhani Technologies",
    title: "ERP Implementation Services | Burhani",
    description:
      "Custom ERP implementation connecting sales, stock, production and dispatch. Scope the first module, integrations and rollout with Burhani.",
  },
  twitter: {
    card: "summary_large_image",
    title: "ERP Implementation Services | Burhani",
    description:
      "Custom ERP implementation connecting sales, stock, production and dispatch. Scope the first module, integrations and rollout with Burhani.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://burhanitechnologies.com/services/erp-implementation",
  },
};

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", url: "https://burhanitechnologies.com" },
  { name: "Services", url: "https://burhanitechnologies.com/services" },
  {
    name: "ERP Implementation",
    url: "https://burhanitechnologies.com/services/erp-implementation",
  },
]);

const faqSchema = generateFAQSchema(erpImplementationFaqs);

const ErpImplementationPage = () => {
  return (
    <>
      <Script
        id="erp-implementation-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        strategy="beforeInteractive"
      />
      <Script
        id="erp-implementation-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        strategy="beforeInteractive"
      />

      <div>
        <Hero />
        <DifferentRecords />
        <OperationalRecord />
        <StartWithRecords />
        <ComparisonTable />
        <ExtendYourErp />
        <ProcessSteps />
        <TechStack />
        <CaseStudyFeature />
        <FAQ />
        <CTA />
      </div>
    </>
  );
};

export default ErpImplementationPage;
