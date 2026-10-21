import { servicePages } from "@/content/servicePages";
import RelatedBlogs from "@/components/Services/RelatedBlogs";
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
import { generateServiceSchema, generateBreadcrumbSchema, generateFAQSchema } from "@/utils/schema";

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
    card: "summary",
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

const approvedService = servicePages.find(page => page.slug === "application-development");
const serviceSchema = generateServiceSchema({ title: approvedService.navLabel, slug: approvedService.slug, description: approvedService.metaDescription });

const faqSchema = generateFAQSchema(applicationDevelopmentFaqs);

const ApplicationDevelopmentPage = () => {
  return (
    <main id="main">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema).replace(/</g, "\\u003c") }} />
      <script
        id="application-development-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c") }}
      />
      <script
        id="application-development-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c") }}
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
        <RelatedBlogs serviceSlug="application-development" />
        <CTA />
      </div>
    </main>
  );
};

export default ApplicationDevelopmentPage;
