"use client";

import Link from "next/link";
import Container from "@/components/constants/Container";
import {
  ArrowRight,
  ArrowUpRight,
  Browser,
  CloudArrowUp,
  Code,
  Database,
  DeviceMobile,
  FlowArrow,
  PaintBrush,
} from "@phosphor-icons/react";

const services = [
  {
    icon: Code,
    heading: "Custom Software Development",
    body: "Our engineers develop custom applications around your business workflows, records and integrations. We use AI to expedite development, while our team makes the design decisions, builds the system and tests it with the people who will use it.",
    linkLabel: "Explore Custom Software Development",
    href: "/services/application-development",
  },
  {
    icon: Database,
    heading: "ERP Implementation",
    body: "Bring sales, stock, production and dispatch into one custom ERP. We build around your departmental workflows and connect the systems you retain, with a first module and wider rollout planned around your data and team.",
    linkLabel: "Explore ERP Implementation",
    href: "/services/erp-implementation",
  },
  {
    icon: FlowArrow,
    heading: "Business Process Automation",
    body: "Our engineers build automation systems that reduce repeated document handling, data entry and approval chasing. We connect AI-enabled capture, business rules, integrations and human review around the process your organisation needs to complete.",
    linkLabel: "Explore Business Process Automation",
    href: "/services/business-process-automation-solutions",
  },
  {
    icon: CloudArrowUp,
    heading: "Cloud Solutions",
    body: "Plan, migrate and operate your applications on Azure, AWS, Google Cloud or a hybrid environment. We align infrastructure with your workload, data location, recovery requirements and the costs of running the system.",
    linkLabel: "Explore Cloud Solutions",
    href: "/services/cloud-solutions",
  },
  {
    icon: PaintBrush,
    heading: "UI/UX Design",
    body: "Give users a clear way to complete their work. We turn business workflows into user journeys, prototypes and interfaces, then review them with the people who will use the software.",
    linkLabel: "Explore UI/UX Design",
    href: "/services/ux-ui-design",
  },
  {
    icon: Browser,
    heading: "Web Application Development",
    body: "Bring orders, requests, approvals and operational records into a browser application. We connect the workflow, permissions and business systems, with AI-assisted development and working reviews to shape the first release.",
    linkLabel: "Explore Web Application Development",
    href: "/services/web-application-development",
  },
  {
    icon: DeviceMobile,
    heading: "Mobile App Development",
    body: "Give field teams and customers a practical way to work from their phones. We build native and cross-platform apps with the capture, offline and device features the task requires, connected to the systems behind it.",
    linkLabel: "Explore Mobile App Development",
    href: "/services/mobile-application-development",
  },
];

const WhatWeBuild = () => {
  return (
    <section className="bg-white py-16 sxl:py-24">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <h2 className="text-2xl font-semibold leading-tight tracking-tight text-zinc-900 sm:text-3xl lg:text-4xl">
            What we build
          </h2>
          <Link
            href="/services"
            className="group inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-[#6F36D2] transition-colors duration-200 hover:text-[#4f2496] sm:text-base"
          >
            All software development services
            <ArrowRight
              size={16}
              weight="bold"
              className="transition-transform duration-200 group-hover:translate-x-0.5"
            />
          </Link>
        </div>

        {/* Directory list: seven services scan better as rows than as forced
           card rows with an orphaned last item */}
        <div className="mt-10 border-t border-zinc-200 lg:mt-14">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.heading}
                href={service.href}
                className="group flex flex-col gap-4 border-b border-zinc-200 py-7 transition-colors duration-200 hover:bg-zinc-50/80 sm:flex-row sm:items-center sm:gap-8 lg:py-8"
              >
                <span className="font-inter text-smallText w-10 shrink-0 text-zinc-300 transition-colors duration-200 group-hover:text-[#6F36D2] sm:text-base">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-zinc-200 bg-zinc-50 transition-colors duration-200 group-hover:border-[#6F36D2]/30 group-hover:bg-[#6F36D2]/[0.06]">
                  <Icon
                    size={20}
                    weight="bold"
                    className="text-zinc-500 transition-colors duration-200 group-hover:text-[#6F36D2]"
                  />
                </div>

                <div className="flex flex-1 flex-col gap-1.5 sm:max-w-2xl">
                  <h3 className="text-lg font-semibold text-zinc-900 sm:text-xl">
                    {service.heading}
                  </h3>
                  <p className="text-sm leading-relaxed text-zinc-500 sm:text-base">
                    {service.body}
                  </p>
                </div>

                <span className="hidden shrink-0 items-center gap-1.5 self-center text-sm font-medium text-zinc-400 transition-colors duration-200 group-hover:text-[#6F36D2] sm:flex">
                  {service.linkLabel.replace("Explore ", "")}
                  <ArrowUpRight
                    size={16}
                    weight="bold"
                    className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </span>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default WhatWeBuild;