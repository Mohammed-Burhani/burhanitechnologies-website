import Link from "next/link";
import { servicePages } from "@/content/servicePages";
import { serviceDelivery } from "@/content/serviceDelivery";
import RelatedBlogs from "@/components/Services/RelatedBlogs";
import TechnologyMarquee from "@/components/TechnologyMarquee";
import { approvedMetadata, ApprovedPageSchema, ApprovedSection, ApprovedRelated, ApprovedFaq, ApprovedCta } from "./ApprovedPage";
import { ServiceIntro, ServiceSectionNav, ServiceProblems, ServiceScope, ServiceDetails, ServiceDelivery, ServiceProject } from "./ServiceExperience";
import styles from "./ServiceExperience.module.css";

export { approvedMetadata };

export default function ServicePage({ page, showRelatedArticles = true }) {
  const pathname = `/services/${page.slug}`;
  const parent = typeof page.parent === "object" ? { navLabel: page.parent.title, slug: page.parent.href.split("/").pop() } : servicePages.find(entry => entry.slug === page.parent);
  const related = page.children?.length
    ? servicePages.filter(entry => page.children.includes(entry.slug))
    : (parent?.children || []).map(slug => servicePages.find(entry => entry.slug === slug)).filter(entry => entry && entry.slug !== page.slug);
  const breadcrumbs = [{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, ...(parent ? [{ label: parent.navLabel, href: `/services/${parent.slug}` }] : []), { label: page.navLabel, href: pathname }];
  const stack = Object.entries(serviceDelivery.techStack).filter(([group]) => page.stackGroups?.includes(group));
  const relatedCards = page.relatedServices || related.map(entry => ({ href: `/services/${entry.slug}`, title: entry.navLabel, description: entry.lede.split(/(?<=[.!?])\s+/)[0] }));

  return <main id="main" className="approved-page">
    <ApprovedPageSchema page={page} pathname={pathname} breadcrumbs={breadcrumbs} serviceType={page.schemaServiceType} />
    <ServiceIntro page={page} parentLabel={parent?.navLabel} breadcrumbs={breadcrumbs} />
    <ServiceSectionNav hasProject={Boolean(page.caseStudy)} />
    <ServiceProblems heading={page.editorial.problems} items={page.problems} />
    <ServiceScope page={page} />
    <ServiceDetails blocks={page.body} />
    {page.decision && <div data-reveal><ApprovedSection>
      <h2 className="max-w-4xl text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl">{page.decision.heading}</h2>
      <p className="mt-5 max-w-3xl leading-relaxed text-zinc-600">{page.decision.intro}</p>
      <div role="region" aria-label={page.decision.heading} tabIndex={0} className="mt-9 overflow-x-auto rounded-2xl border border-zinc-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#6F36D2]">
        <table className="w-full min-w-[640px] border-collapse text-left">
          <caption className="sr-only">{page.decision.heading}</caption>
          <thead className="bg-[#15111E] text-white"><tr><th scope="col" className="p-4">Decision</th><th scope="col" className="p-4">{page.decision.packagedLabel}</th><th scope="col" className="p-4">{page.decision.customLabel}</th></tr></thead>
          <tbody>{page.decision.rows.map(row => <tr key={row.factor} className="border-b border-zinc-200 last:border-0"><th scope="row" className="p-4 align-top font-semibold">{row.factor}</th><td className="p-4 align-top leading-relaxed text-zinc-600">{row.packaged}</td><td className="p-4 align-top leading-relaxed text-zinc-600">{row.custom}</td></tr>)}</tbody>
        </table>
      </div>
    </ApprovedSection></div>}
    {relatedCards.length > 0 && <div data-reveal><ApprovedRelated heading={page.editorial.related} cards={relatedCards} /></div>}
    <ServiceDelivery heading={page.editorial.process} steps={page.process || serviceDelivery.process} slug={page.slug} />
    {stack.length > 0 && <TechnologyMarquee technologies={stack.flatMap(([, tools]) => tools)} intro="Tools selected around the requirements of your project." />}
    {page.caseStudy && <ServiceProject page={page} />}
    {(page.tier === "child" || page.engagementIntro) && <section className={`${styles.supportSection} ${styles.tinted}`} data-reveal><div className={styles.container}>
      <h2>How we can work together</h2>
      <p className={styles.supportIntro}>{page.engagementIntro || "Projects here typically run between USD 7,500 and USD 15,000 or above, depending on scope. We quote a fixed price after discovery and bill against milestones."}</p>
      {page.showEngagementModels && <dl className={styles.engagementGrid}>{serviceDelivery.engagementModels.map(model => <div key={model.name}><dt>{model.name}</dt><dd><p>Fits when: {model.fit}</p><p>Billing: {model.billing}</p></dd></div>)}</dl>}
    </div></section>}
    <div id="service-questions" className={styles.anchorSection} data-reveal><ApprovedFaq heading={`Questions about ${page.navLabel}`} items={page.faq} /></div>
    {showRelatedArticles && <div data-reveal><RelatedBlogs serviceSlug={page.slug} serviceTitle={page.navLabel} /></div>}
    <div data-reveal><ApprovedCta heading={page.editorial.ctaHeading} body={page.editorial.ctaBody} primaryLabel="Discuss your requirements" /></div>
  </main>;
}
