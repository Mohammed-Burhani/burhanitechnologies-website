import Banner from "@/components/Home/Banner";
import { About1 } from "@/components/Home/Sections/About1";
import { Client } from "@/components/Home/Sections/Client";
import { CTA } from "@/components/Home/Sections/CTA";
import { CTA2 } from "@/components/Home/Sections/CTA2";
import { LatestProjects } from "@/components/Home/Sections/LatestProjects";
import { Testimonials } from "@/components/Home/Sections/Testimonials";
import { WhoAreWe } from "@/components/Home/Sections/WhoAreWe";
import { FAQ } from "@/components/Home/Sections/FAQ";
import Script from "next/script";
import { generateFAQSchema } from "@/utils/schema";
import { Differentiators } from "@/components/Home/Sections/differentiators";

// FAQ data for schema markup
const homepageFAQs = [
  {
    question: "What's your typical project timeline?",
    answer:
      "Our Agile approach delivers initial working versions in 4-6 weeks, with full implementations ranging from 15-90 days depending on complexity and integration requirements.",
  },
  {
    question: "Do you work with existing systems or only build new ones?",
    answer:
      "Both. We specialize in integrating custom solutions with your existing ERP, CRM, and legacy systems—whether it's Tally, SAP, Salesforce, or proprietary software.",
  },
  {
    question: "What's your pricing model for enterprise projects?",
    answer:
      "Our projects typically range from USD 7,500 to USD 15,000+ based on scope. We provide transparent fixed-price quotes after a discovery phase, with flexible payment milestones.",
  },
  {
    question: "What cloud platforms do you work with?",
    answer:
      "We're certified in Azure cloud services and Microsoft Power Platform, and also work with AWS, Google Cloud, and hybrid cloud architectures based on your needs.",
  },
  {
    question: "What industries do you serve?",
    answer:
      "Healthcare startups, manufacturing, automotive, construction, and finance/operations teams needing custom software, ERP systems, or process automation.",
  },
];

export const metadata = {
  metadataBase: new URL("https://burhanitechnologies.com"),
  title: "Burhani Technologies | Custom Software Development & Enterprise Automation",
  description:
    "Leading software development company in Chennai specializing in Custom ERP Implementation, AI/ML Automation, DevOps/Azure, and Business Process Automation. 14+ years of expertise serving healthcare, manufacturing, and enterprise clients globally.",
  keywords: [
    "custom software development Chennai",
    "ERP implementation",
    "business process automation",
    "AI automation solutions",
    "DevOps services Chennai",
    "Azure cloud services",
    "software development company",
    "RPA solutions",
    "workflow automation",
    "enterprise software development",
    "Microsoft Power Platform",
    "custom ERP systems",
  ],
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
    title: "Burhani Technologies | Custom Software Development & Enterprise Automation",
    description:
      "Leading software development company in Chennai with 14+ years of expertise in Custom ERP, AI/ML Automation, DevOps/Azure, and Business Process Automation.",
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
    title: "Burhani Technologies | Custom Software Development",
    description:
      "Leading software development company specializing in Custom ERP, AI/ML Automation, and Business Process Automation.",
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
        <Client />
        <About1 />
        <WhoAreWe />
        <CTA />
        <Differentiators />
        <LatestProjects />
        <Testimonials />
        <FAQ />
        <CTA2 />
      </div>
    </>
  );
}