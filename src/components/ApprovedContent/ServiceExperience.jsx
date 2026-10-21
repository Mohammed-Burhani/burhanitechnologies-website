import Image from "next/image";
import Link from "next/link";
import { caseStudyImages } from "@/content/caseStudyImages";
import styles from "./ServiceExperience.module.css";

const illustrations = {
  "cms-based-website-development": "application",
  "cross-platform-enterprise-applications": "integration",
  "line-of-business-lob-applications": "erp",
  "integration-services": "integration",
  "rapid-application-development": "discovery",
  "data-analysis-and-reporting": "erp",
  "process-automation": "automation",
  "workflow-automation": "automation",
  "robotic-process-automation-rpa": "automation",
  "custom-automation-tools": "automation",
  "devops-and-maintenance": "devops",
};

export function ServiceIntro({ page, parentLabel, breadcrumbs }) {
  const caseImage = caseStudyImages[page.caseStudy];
  return <section className={styles.hero}>
    <div className={styles.container}>
      <nav aria-label="Breadcrumb" className={styles.breadcrumb}>
        <ol>{breadcrumbs.map((crumb, index) => <li key={crumb.href}>
          {index > 0 && <span aria-hidden="true">/</span>}
          {index === breadcrumbs.length - 1 ? <span aria-current="page">{crumb.label}</span> : <Link href={crumb.href}>{crumb.label}</Link>}
        </li>)}</ol>
      </nav>
      <div className={styles.heroGrid}>
        <div>
          <p className={styles.eyebrow}>{parentLabel || "Service"}</p>
          <h1>{page.title}</h1>
          <p className={styles.lede}>{page.lede}</p>
          <div className={styles.actions}>
            <Link href="/contact" className={styles.button}>{page.primaryCtaLabel || "Book a free consultation"}<span aria-hidden="true">→</span></Link>
            <Link href={page.caseStudy ? `/case-studies/${page.caseStudy}` : "/services"} className={styles.secondary}>{page.caseStudy ? "Read the client project" : "See all services"}</Link>
          </div>
        </div>
        <figure className={styles.heroVisual}>
          <div className={caseImage ? styles.heroPhoto : styles.heroDiagram}>
            <Image
              src={caseImage?.src || `/illustrations/${illustrations[page.slug] || "application"}.svg`}
              alt={caseImage?.alt || `Conceptual process illustration for ${page.navLabel}`}
              fill
              sizes="(min-width: 1440px) 460px, (min-width: 1024px) 38vw, (min-width: 640px) 60vw, calc(100vw - 48px)"
              priority
              className={caseImage ? styles.coverImage : styles.containImage}
            />
          </div>
          <figcaption>{caseImage ? "Project illustration" : "Conceptual workflow illustration"}</figcaption>
        </figure>
      </div>
      {page.heroStats?.length > 0 && <ul className={styles.facts}>{page.heroStats.map(stat => <li key={stat}><span aria-hidden="true">✓</span>{stat}</li>)}</ul>}
    </div>
  </section>;
}

export function ServiceSectionNav({ hasProject }) {
  const links = [["Overview", "service-overview"], ["Scope", "service-scope"], ["In detail", "service-details"], ["Delivery", "service-delivery"], ...(hasProject ? [["Client project", "service-project"]] : []), ["Questions", "service-questions"]];
  return <nav className={styles.sectionNav} aria-label="Service sections"><div className={styles.container}>
    <ul>{links.map(([label, id]) => <li key={id}><a href={`#${id}`}>{label}</a></li>)}</ul>
    <Link href="/contact" className={styles.navCta}>Discuss your requirements <span aria-hidden="true">→</span></Link>
  </div></nav>;
}

export function ServiceProblems({ heading, items }) {
  return <section id="service-overview" className={styles.section} data-reveal>
    <div className={styles.container}>
      <div className={styles.sectionHeading}><p className={styles.kicker}>The starting point</p><h2>{heading}</h2></div>
      <div className={styles.problemGrid}>{items.map((item, index) => <article key={item.q} className={styles.problem}>
        <span className={styles.number} aria-hidden="true">{String(index + 1).padStart(2, "0")}</span><h3>{item.q}</h3><p>{item.a}</p>
      </article>)}</div>
    </div>
  </section>;
}

export function ServiceScope({ page }) {
  return <section id="service-scope" className={`${styles.section} ${styles.tinted}`} data-reveal><div className={`${styles.container} ${styles.scopeGrid}`}>
    <div className={styles.sectionHeading}><p className={styles.kicker}>What the work includes</p><h2>{page.editorial.approach}</h2><p className={styles.intro}>{page.approach}</p><a href="#service-delivery" className={styles.inlineLink}>Explore the delivery process <span aria-hidden="true">↓</span></a></div>
    <div className={styles.disclosures}>{page.scope.map((item, index) => <details key={item.title} name={`scope-${page.slug}`} open={index === 0}>
      <summary><span className={styles.number} aria-hidden="true">{String(index + 1).padStart(2, "0")}</span><span>{item.title}</span><span className={styles.disclosureMark} aria-hidden="true" /></summary>
      <p>{item.body}</p>
    </details>)}</div>
  </div></section>;
}

function InlineParts({ parts }) {
  return parts.map((part, index) => typeof part === "string" ? part : <Link key={index} href={part.href}>{part.label}</Link>);
}

function BodyBlock({ block }) {
  if (block.type === "subheading") return <h3>{block.text}</h3>;
  if (block.type === "list") return <ul>{block.items.map((parts, index) => <li key={index}><InlineParts parts={parts} /></li>)}</ul>;
  return <p><InlineParts parts={block.parts} /></p>;
}

export function ServiceDetails({ blocks }) {
  const groups = [];
  blocks.forEach((block, index) => {
    if (block.type === "heading" || groups.length === 0) groups.push({ heading: block.type === "heading" ? block.text : null, id: `page-detail-${index}`, blocks: [] });
    if (block.type !== "heading") groups[groups.length - 1].blocks.push(block);
  });
  const headings = groups.filter(group => group.heading);
  return <section id="service-details" className={`${styles.section} ${styles.detailsSection}`} data-reveal><div className={styles.container}>
    {headings.length > 1 && <nav className={styles.guideNav} aria-label="In this guide"><p className={styles.kicker}>In this guide</p><ul>{headings.map(group => <li key={group.id}><a href={`#${group.id}`}>{group.heading}</a></li>)}</ul></nav>}
    <div className={styles.articles}>{groups.map((group, index) => <article id={group.id} key={group.id} className={styles.detailArticle}>
      {group.heading && <div className={styles.articleHeading}><span className={styles.number} aria-hidden="true">{String(index + 1).padStart(2, "0")}</span><h2>{group.heading}</h2></div>}
      <div className={styles.articleBody}>{group.blocks.map((block, blockIndex) => <BodyBlock key={blockIndex} block={block} />)}</div>
    </article>)}</div>
  </div></section>;
}

export function ServiceDelivery({ heading, steps, slug }) {
  return <section id="service-delivery" className={`${styles.section} ${styles.tinted}`} data-reveal><div className={`${styles.container} ${styles.deliveryGrid}`}>
    <div className={styles.sectionHeading}><p className={styles.kicker}>From discovery to support</p><h2>{heading}</h2><a href="/contact" className={styles.inlineLink}>Discuss your requirements <span aria-hidden="true">→</span></a></div>
    <ol className={styles.timeline}>{steps.map((step, index) => <li key={step.n}><details name={`delivery-${slug}`} open={index === 0}>
      <summary><span className={styles.stepNumber}>{step.n}</span><span>{step.title}</span><span className={styles.disclosureMark} aria-hidden="true" /></summary>
      <p>{step.body}</p>
    </details></li>)}</ol>
  </div></section>;
}

export function ServiceProject({ page }) {
  const image = caseStudyImages[page.caseStudy];
  return <section id="service-project" className={`${styles.section} ${styles.projectSection}`} data-reveal><div className={`${styles.container} ${styles.projectGrid}`}>
    {image && <figure className={styles.projectVisual}><Image src={image.src} alt={image.alt} fill sizes="(min-width: 1024px) 45vw, calc(100vw - 48px)" loading="lazy" className={styles.coverImage} /><figcaption>Project illustration</figcaption></figure>}
    <div><p className={styles.eyebrow}>Client project</p><h2>{page.caseStudyTitle}</h2><dl className={styles.projectFacts}>{page.caseStudyFacts.map(fact => <div key={fact.label}><dt>{fact.label}</dt><dd>{fact.value}</dd></div>)}</dl><Link href={`/case-studies/${page.caseStudy}`} className={styles.button}>Read the case study <span aria-hidden="true">→</span></Link></div>
  </div></section>;
}
