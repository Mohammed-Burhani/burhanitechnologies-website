"use client";

import Link from "next/link";
import Container from "@/components/constants/Container";
import { ArrowUpRight } from "@phosphor-icons/react";

const caseStudies = [
  {
    tag: "Apparel Manufacturing & Distribution",
    heading: "ERP Solution for a Global Apparel Company",
    body: "How a global apparel manufacturer unified sales, stock, production and dispatch inside one custom ERP system.",
    href: "/case-studies/erp-solution-for-a-global-apparel-company",
  },
  {
    tag: "Manufacturing & Warehousing",
    heading: "Inventory Management: Optimizing Manufacturing and Warehousing",
    body: "A manufacturing and warehousing business replaced manual stock checks with barcode scanning and one live dashboard.",
    href: "/case-studies/inventory-management-optimizing-manufacturing-and-warehousing",
  },
  {
    tag: "Finance",
    heading: "Digitalizing the End-to-End Loan Lifecycle",
    body: "A finance organisation serving public borrowers moved loan applications, tracking and risk scoring onto a mobile app and admin CRM.",
    href: "/case-studies/digitalizing-the-end-to-end-loan-lifecycle",
  },
  {
    tag: "Healthcare (United States)",
    heading: "AI-Powered Healthcare CRM & Monitoring",
    body: "A US healthcare provider tracks patient vitals remotely, with AI flagging the readings a clinician needs to see.",
    href: "/case-studies/ai-powered-healthcare-crm-and-monitoring",
  },
  {
    tag: "Healthcare",
    heading: "AI-Powered Digital Healthcare Assistance",
    body: "A digital health provider now answers routine patient questions with a chatbot trained on its own medical knowledge.",
    href: "/case-studies/ai-powered-digital-healthcare-assistance",
  },
  {
    tag: "Events & Exhibition Management",
    heading: "Visitor Attendance & Engagement Tracking System",
    body: "An exhibitions organizer maps visitor attendance and product interest in real time with a mobile app and PWA CRM.",
    href: "/case-studies/visitor-attendance-and-engagement-tracking-system",
  },
];

const CaseStudiesShowcase = () => {
  return (
    <section className="relative overflow-hidden border-t border-white/5 bg-[#0B0B10] py-16 lg:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-0 h-[380px] w-[380px] rounded-full bg-[#6F36D2]/[0.1] blur-[130px]"
      />

      <Container className="relative">
        <h2 className="max-w-2xl text-2xl font-semibold leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl">
          Six systems, and what each one replaced
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3 lg:gap-6">
          {caseStudies.map((study) => (
            <Link
              key={study.href}
              href={study.href}
              className="group flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#6F36D2]/40 hover:bg-white/[0.04]"
            >
              <span className="font-inter text-smallText font-medium uppercase tracking-wide text-[#B79CE8]">
                {study.tag}
              </span>
              <h3 className="text-lg font-semibold text-white transition-colors duration-200 group-hover:text-[#B79CE8]">
                {study.heading}
              </h3>
              <p className="text-sm leading-relaxed text-zinc-400">
                {study.body}
              </p>
              <span className="mt-auto inline-flex w-fit items-center gap-1.5 pt-2 text-sm font-medium text-zinc-400 transition-colors duration-200 group-hover:text-[#B79CE8]">
                Read the case study
                <ArrowUpRight
                  size={14}
                  weight="bold"
                  className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default CaseStudiesShowcase;
