"use client";

import Link from "next/link";
import Container from "@/components/constants/Container";
import {
  ArrowUpRight,
  CloudArrowUp,
  Code,
  Database,
  FlowArrow,
  PaintBrush,
} from "@phosphor-icons/react";

const practices = [
  {
    icon: Code,
    heading: "Custom Software Development",
    href: "/services/application-development",
    body: "Our engineers develop custom applications around your business workflows, records and integrations. We use AI to expedite development, while our team makes the design decisions, builds the system and tests it with the people who will use it.",
    links: [
      {
        label: "Web Application Development",
        href: "/services/web-application-development",
      },
      {
        label: "Mobile App Development",
        href: "/services/mobile-application-development",
      },
      {
        label: "Cross-Platform Enterprise Apps",
        href: "/services/cross-platform-enterprise-applications",
      },
      {
        label: "Web & CMS Development",
        href: "/services/cms-based-website-development",
      },
    ],
    caseStudy: {
      tag: "Manufacturing & Warehousing",
      title: "Inventory Management: Optimizing Manufacturing and Warehousing",
      href: "/case-studies/inventory-management-optimizing-manufacturing-and-warehousing",
    },
  },
  {
    icon: Database,
    heading: "ERP Implementation",
    href: "/services/erp-implementation",
    body: "Bring sales, stock, production and dispatch into one custom ERP. We build around your departmental workflows and connect the systems you retain, with a first module and wider rollout planned around your data and team.",
    links: [
      {
        label: "Line of Business Applications",
        href: "/services/line-of-business-lob-applications",
      },
      { label: "Integration Services", href: "/services/integration-services" },
      {
        label: "Data Analysis & Reporting",
        href: "/services/data-analysis-and-reporting",
      },
    ],
    caseStudy: {
      tag: "Apparel Manufacturing & Distribution",
      title: "ERP Solution for a Global Apparel Company",
      href: "/case-studies/erp-solution-for-a-global-apparel-company",
    },
  },
  {
    icon: FlowArrow,
    heading: "Business Process Automation",
    href: "/services/business-process-automation-solutions",
    body: "Our engineers build automation systems that reduce repeated document handling, data entry and approval chasing. We connect AI-enabled capture, business rules, integrations and human review around the process your organisation needs to complete.",
    links: [
      {
        label: "Robotic Process Automation",
        href: "/services/robotic-process-automation-rpa",
      },
      { label: "Workflow Automation", href: "/services/workflow-automation" },
      {
        label: "Custom Automation Tools",
        href: "/services/custom-automation-tools",
      },
      { label: "Process Automation", href: "/services/process-automation" },
    ],
    caseStudy: {
      tag: "Finance",
      title: "Digitalizing the End-to-End Loan Lifecycle",
      href: "/case-studies/digitalizing-the-end-to-end-loan-lifecycle",
    },
  },
  {
    icon: CloudArrowUp,
    heading: "Cloud Solutions",
    href: "/services/cloud-solutions",
    body: "Plan, migrate and operate your applications on Azure, AWS, Google Cloud or a hybrid environment. We align infrastructure with your workload, data location, recovery requirements and the costs of running the system.",
    links: [
      { label: "DevOps & Maintenance", href: "/services/devops-and-maintenance" },
      { label: "Integration Services", href: "/services/integration-services" },
    ],
    caseStudy: {
      tag: "Healthcare (United States)",
      title: "AI-Powered Healthcare CRM & Monitoring",
      href: "/case-studies/ai-powered-healthcare-crm-and-monitoring",
    },
  },
  {
    icon: PaintBrush,
    heading: "UI/UX Design",
    href: "/services/ux-ui-design",
    body: "Give users a clear way to complete their work. We turn business workflows into user journeys, prototypes and interfaces, then review them with the people who will use the software.",
    links: [],
    caseStudy: {
      tag: "Healthcare",
      title: "AI-Powered Digital Healthcare Assistance",
      href: "/case-studies/ai-powered-digital-healthcare-assistance",
    },
  },
];

const WhatWeBuildServices = () => {
  return (
    <section className="relative overflow-hidden border-t border-white/5 bg-[#0B0B10] py-16 sxl:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-1/3 h-[420px] w-[420px] rounded-full bg-[#6F36D2]/[0.1] blur-[140px]"
      />

      <Container className="relative">
        <h2 className="text-2xl font-semibold leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl">
          What we build
        </h2>

        {/* Practice rows: copy on the left, the client system it produced on the
           right, so each service carries its own proof instead of a separate
           case-study block further down the page */}
        <div className="mt-10 border-t border-white/10 lg:mt-14">
          {practices.map((practice) => {
            const Icon = practice.icon;
            return (
              <div
                key={practice.heading}
                className="grid grid-cols-1 gap-8 border-b border-white/10 py-10 lg:grid-cols-[1.25fr_0.75fr] lg:gap-12 lg:py-14"
              >
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#6F36D2]/30 bg-[#6F36D2]/[0.12]">
                      <Icon size={20} weight="bold" className="text-[#B79CE8]" />
                    </div>
                    <h3 className="text-lg font-semibold text-white sm:text-xl">
                      <Link
                        href={practice.href}
                        className="group inline-flex items-center gap-1.5 transition-colors duration-200 hover:text-[#B79CE8]"
                      >
                        {practice.heading}
                        <ArrowUpRight
                          size={16}
                          weight="bold"
                          className="text-zinc-500 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        />
                      </Link>
                    </h3>
                  </div>

                  <p className="max-w-2xl text-sm leading-relaxed text-zinc-400 sm:text-base">
                    {practice.body}
                  </p>

                  {practice.links.length > 0 && (
                    <ul className="mt-1 flex flex-wrap gap-2.5">
                      {practice.links.map((link) => (
                        <li key={link.label}>
                          <Link
                            href={link.href}
                            className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-2 text-sm font-medium text-zinc-300 transition-colors duration-200 hover:border-[#6F36D2]/40 hover:bg-[#6F36D2]/[0.1] hover:text-white"
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <Link
                  href={practice.caseStudy.href}
                  className="group flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#6F36D2]/40 hover:bg-white/[0.05]"
                >
                  <span className="font-inter text-smallText font-medium uppercase tracking-wide text-[#B79CE8]">
                    {practice.caseStudy.tag}
                  </span>
                  <p className="text-base font-semibold leading-snug text-white sm:text-lg">
                    {practice.caseStudy.title}
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
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default WhatWeBuildServices;
