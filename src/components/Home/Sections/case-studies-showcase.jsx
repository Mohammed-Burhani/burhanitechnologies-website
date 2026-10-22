import Link from "next/link";
import Image from "next/image";
import { caseStudyImages } from "@/content/caseStudyImages";
import Container from "@/components/constants/Container";
import styles from "../HomeDesign.module.css";
import ArrowMark from "../ArrowMark";

const caseStudies = [
  {
    tag: "Apparel Manufacturing & Distribution",
    heading: "ERP Solution for a Global Apparel Company",
    body: "How a global apparel manufacturer unified sales, stock, production and dispatch inside one custom ERP system.",
    href: "/case-studies/erp-solution-for-a-global-apparel-company",
    image: caseStudyImages["erp-solution-for-a-global-apparel-company"],
  },
  {
    tag: "Manufacturing & Warehousing",
    heading: "Inventory Management: Optimizing Manufacturing and Warehousing",
    body: "A manufacturing and warehousing business replaced manual stock checks with barcode scanning and one live dashboard.",
    href: "/case-studies/inventory-management-optimizing-manufacturing-and-warehousing",
    image: caseStudyImages["inventory-management-optimizing-manufacturing-and-warehousing"],
  },
  {
    tag: "Finance",
    heading: "Digitalizing the End-to-End Loan Lifecycle",
    body: "A finance organisation serving public borrowers moved loan applications, tracking and risk scoring onto a mobile app and admin CRM.",
    href: "/case-studies/digitalizing-the-end-to-end-loan-lifecycle",
    image: caseStudyImages["digitalizing-the-end-to-end-loan-lifecycle"],
  },
  {
    tag: "Healthcare (United States)",
    heading: "AI-Powered Healthcare CRM & Monitoring",
    body: "A US healthcare provider tracks patient vitals remotely, with AI flagging the readings a clinician needs to see.",
    href: "/case-studies/ai-powered-healthcare-crm-and-monitoring",
    image: caseStudyImages["ai-powered-healthcare-crm-and-monitoring"],
  },
  {
    tag: "Healthcare",
    heading: "AI-Powered Digital Healthcare Assistance",
    body: "A digital health provider now answers routine patient questions with a chatbot trained on its own medical knowledge.",
    href: "/case-studies/ai-powered-digital-healthcare-assistance",
    image: caseStudyImages["ai-powered-digital-healthcare-assistance"],
  },
  {
    tag: "Events & Exhibition Management",
    heading: "Visitor Attendance & Engagement Tracking System",
    body: "An exhibitions organizer maps visitor attendance and product interest in real time with a mobile app and PWA CRM.",
    href: "/case-studies/visitor-attendance-and-engagement-tracking-system",
    image: caseStudyImages["visitor-attendance-and-engagement-tracking-system"],
  },
];

export default function CaseStudiesShowcase() {
  return <section id="client-projects" data-reveal className="border-t border-white/5 bg-[#101017] py-5 text-white sm:py-6">
    <Container>
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div><p className="text-xs font-medium tracking-wide text-[#B79CE8]">Client projects</p><h2 className="mt-4 max-w-2xl text-3xl font-semibold leading-tight tracking-tight lg:text-4xl">Six systems, and what each one replaced</h2></div>
        <Link href="/case-studies" className="inline-flex min-h-11 items-center gap-2 text-sm text-[#D4C2F3] hover:underline">All case studies <span aria-hidden="true">→</span></Link>
      </div>
      <div className={styles.caseGrid}>
        {caseStudies.map(study => <Link key={study.href} href={study.href} className={styles.caseLink}>
          <span className={styles.caseMedia}>
            <Image src={study.image.src} alt={study.image.alt} fill sizes="(min-width: 1560px) 700px, (min-width: 768px) calc((100vw - 160px) / 2), calc(100vw - 56px)" className={styles.caseImage} />
            <span className={styles.caseImageLabel}>Project illustration</span>
          </span>
          <span className={styles.caseLabel}>{study.tag}</span>
          <h3>{study.heading}</h3><p>{study.body}</p>
          <span className={styles.caseAction}>Read the case study <ArrowMark /></span>
        </Link>)}
      </div>
    </Container>
  </section>;
}
