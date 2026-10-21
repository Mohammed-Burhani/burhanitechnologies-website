import Link from "next/link";
import styles from "../HomeDesign.module.css";
import ArrowMark from "../ArrowMark";
import Container from "@/components/constants/Container";

const services = [
  {
    heading: "Custom Software Development",
    body: "Our engineers develop custom applications around your business workflows, records and integrations. We use AI to expedite development, while our team makes the design decisions, builds the system and tests it with the people who will use it.",
    linkLabel: "Explore Custom Software Development",
    href: "/services/application-development",
  },
  {
    heading: "ERP Implementation",
    body: "Bring sales, stock, production and dispatch into one custom ERP. We build around your departmental workflows and connect the systems you retain, with a first module and wider rollout planned around your data and team.",
    linkLabel: "Explore ERP Implementation",
    href: "/services/erp-implementation",
  },
  {
    heading: "Business Process Automation",
    body: "Our engineers build automation systems that reduce repeated document handling, data entry and approval chasing. We connect AI-enabled capture, business rules, integrations and human review around the process your organisation needs to complete.",
    linkLabel: "Explore Business Process Automation",
    href: "/services/business-process-automation-solutions",
  },
  {
    heading: "Cloud Solutions",
    body: "Plan, migrate and operate your applications on Azure, AWS, Google Cloud or a hybrid environment. We align infrastructure with your workload, data location, recovery requirements and the costs of running the system.",
    linkLabel: "Explore Cloud Solutions",
    href: "/services/cloud-solutions",
  },
  {
    heading: "UI/UX Design",
    body: "Give users a clear way to complete their work. We turn business workflows into user journeys, prototypes and interfaces, then review them with the people who will use the software.",
    linkLabel: "Explore UI/UX Design",
    href: "/services/ux-ui-design",
  },
  {
    heading: "Web Application Development",
    body: "Bring orders, requests, approvals and operational records into a browser application. We connect the workflow, permissions and business systems, with AI-assisted development and working reviews to shape the first release.",
    linkLabel: "Explore Web Application Development",
    href: "/services/web-application-development",
  },
  {
    heading: "Mobile App Development",
    body: "Give field teams and customers a practical way to work from their phones. We build native and cross-platform apps with the capture, offline and device features the task requires, connected to the systems behind it.",
    linkLabel: "Explore Mobile App Development",
    href: "/services/mobile-application-development",
  },
];

export default function WhatWeBuild() {
  return <section className="bg-white py-5 sm:py-6">
    <Container>
      <div className="flex flex-wrap items-end justify-between gap-5">
        <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 lg:text-4xl">What we build</h2>
        <Link href="/services" className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-[#6F36D2] hover:underline">All software development services <span aria-hidden="true">→</span></Link>
      </div>
      <div className={styles.directory}>
        {services.map((service, index) => <Link key={service.href} href={service.href} className={styles.serviceRow}>
          <div className={styles.serviceHeading}><span aria-hidden="true">{String(index+1).padStart(2,"0")}</span><h3>{service.heading}</h3></div>
          <div className={styles.serviceDescription}><p>{service.body}</p><span>{service.linkLabel}<ArrowMark /></span></div>
        </Link>)}
      </div>
    </Container>
  </section>;
}
