import Banner from "@/components/Home/Banner";
import ClientReferences from "@/components/Home/Sections/LatestProjects";
import Script from "next/script";
import { generateFAQSchema } from "@/utils/schema";
import { Differentiators } from "@/components/Home/Sections/differentiators";
import EngineeringApproach from "@/components/Home/Sections/engineering-approach";
import PainPoints from "@/components/Home/Sections/pain-point";
import ConnectedSystems from "@/components/Home/Sections/connected-systems";
import WhatWeBuild from "@/components/Home/Sections/what-we-build";
import AtAGlance from "@/components/Home/Sections/at-a-glance";
import ProcessSteps from "@/components/Home/Sections/process-steps";
import Sectors from "@/components/Home/Sections/sectors";
import CaseStudiesShowcase from "@/components/Home/Sections/case-studies-showcase";
import { FAQ } from "@/components/Home/Sections/FAQ";
import PlanYourProject from "@/components/Home/Sections/plan-your-project";
import VisitOffice from "@/components/Home/Sections/visit-office";

// FAQ data for schema markup, kept in sync with the visible copy in
// components/Home/Sections/FAQ.jsx ("Planning a project with Burhani")
const homepageFAQs = [
  {
    question: "How long does a project take?",
    answer:
      "The schedule depends on the first workflow, data readiness, integrations and review requirements. We agree a dated plan after discovery, with an early working version for your team to assess before the wider rollout.",
  },
  {
    question: "Do you work with the systems we already run?",
    answer:
      "Yes. We integrate with Tally, SAP, Salesforce and in-house software, and connecting systems that were never designed to talk to each other is a large part of what we do. Where a system cannot be modified, we automate at the interface layer instead.",
  },
  {
    question: "What does a project cost?",
    answer:
      "Projects typically run between USD 7,500 and USD 15,000 or above, depending on scope. We quote a fixed price after a discovery phase and bill against milestones, so the figure stays where it started once the scope is agreed.",
  },
  {
    question: "Which cloud platforms do you work on?",
    answer:
      "We work with Microsoft Azure, AWS, Google Cloud and hybrid setups. Platform choices follow your existing systems, workload, access requirements and operating costs.",
  },
  {
    question: "Which industries do you build for?",
    answer:
      "We have delivered systems in healthcare, apparel manufacturing, warehousing, lending, and events and exhibition management. Sector experience matters because compliance rules and floor-level constraints differ, and those constraints usually shape the build more than the technology does.",
  },
  {
    question: "Where is Burhani Technologies located?",
    answer:
      "Our office is at 1st Floor, Vanguard House, #48 Moore Street, Parry’s Corner, George Town, Chennai 600001. We are open Monday to Friday 09:00 to 18:00 and Saturday 09:00 to 13:00 IST, and we deliver for clients in India, the US, the UAE and Australia.",
  },
  {
    question: "Do you build custom ERP, or implement an existing product?",
    answer:
      "We build custom ERP. Where a packaged product fits your process, we will tell you so on the call. We compare the workflows, integrations, licensing and long-term maintenance before recommending a custom build.",
  },
];

export const metadata = {
  metadataBase: new URL("https://burhanitechnologies.com"),
  title: "Custom Software Development Company | Burhani Technologies",
  description:
    "Custom software engineering since 2010. Burhani builds applications, ERP and automation around your operations, with experience across real client projects.",
  authors: [{ name: "Burhani Technologies" }],
  creator: "Burhani Technologies",
  publisher: "Burhani Technologies",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://burhanitechnologies.com",
    siteName: "Burhani Technologies",
    title: "Custom Software Development Company | Burhani Technologies",
    description:
      "Custom software engineering since 2010. Burhani builds applications, ERP and automation around your operations, with experience across real client projects.",
    images: [
      {
        url: "/BT-Logo.svg",
        width: 1200,
        height: 630,
        alt: "Burhani Technologies Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Software Development Company | Burhani Technologies",
    description:
      "Custom software engineering since 2010. Burhani builds applications, ERP and automation around your operations, with experience across real client projects.",
    images: ["/BT-Logo.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "UP_wON5lYN_QqtZzPogE3GooUQ7Clqzy6nIsqoYpCcg",
  },
  alternates: {
    canonical: "https://burhanitechnologies.com",
  },
};

// Generate FAQ schema
const faqSchema = generateFAQSchema(homepageFAQs);

export default function Home() {
  return (
    <>
      {/* FAQ Schema for Homepage */}
      <Script
        id="homepage-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
        strategy="beforeInteractive"
      />

      <div className="">
        <Banner />
        <ClientReferences />
        <EngineeringApproach />
        <PainPoints />
        <ConnectedSystems />
        <WhatWeBuild />
        <AtAGlance />
        <Differentiators />
        <ProcessSteps />
        <Sectors />
        <CaseStudiesShowcase />
        <FAQ />
        <PlanYourProject />
        <VisitOffice />
      </div>
    </>
  );
}
