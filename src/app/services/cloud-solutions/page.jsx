import { servicePages } from "@/content/servicePages";
import RelatedBlogs from "@/components/Services/RelatedBlogs";
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
import { generateServiceSchema, generateBreadcrumbSchema, generateFAQSchema } from "@/utils/schema";

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
    card: "summary",
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

const approvedService = servicePages.find(page => page.slug === "cloud-solutions");
const serviceSchema = generateServiceSchema({ title: approvedService.navLabel, slug: approvedService.slug, description: approvedService.metaDescription });

const faqSchema = generateFAQSchema(cloudSolutionsFaqs);

const CloudSolutionsPage = () => {
  return (
    <main id="main">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema).replace(/</g, "\\u003c") }} />
      <script
        id="cloud-solutions-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c") }}
      />
      <script
        id="cloud-solutions-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c") }}
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
        <RelatedBlogs serviceSlug="cloud-solutions" />
        <CTA />
      </div>
    </main>
  );
};

export default CloudSolutionsPage;
