import { servicePages } from "@/content/servicePages";
import RelatedBlogs from "@/components/Services/RelatedBlogs";
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
import { generateServiceSchema, generateBreadcrumbSchema, generateFAQSchema } from "@/utils/schema";

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
    card: "summary",
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

const approvedService = servicePages.find(page => page.slug === "erp-implementation");
const serviceSchema = generateServiceSchema({ title: approvedService.navLabel, slug: approvedService.slug, description: approvedService.metaDescription });

const faqSchema = generateFAQSchema(erpImplementationFaqs);

const ErpImplementationPage = () => {
  return (
    <main id="main">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema).replace(/</g, "\\u003c") }} />
      <script
        id="erp-implementation-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c") }}
      />
      <script
        id="erp-implementation-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c") }}
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
        <RelatedBlogs serviceSlug="erp-implementation" />
        <CTA />
      </div>
    </main>
  );
};

export default ErpImplementationPage;
