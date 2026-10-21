import Link from "next/link";
import { servicePages } from "@/content/servicePages";
import { serviceDelivery } from "@/content/serviceDelivery";
import RelatedBlogs from "@/components/Services/RelatedBlogs";
import { approvedMetadata, ApprovedPageSchema, ApprovedHero, ApprovedSection, ApprovedProblems, ApprovedApproach, ApprovedBody, ApprovedRelated, ApprovedProcess, ApprovedFaq, ApprovedCta } from "./ApprovedPage";

export { approvedMetadata };

export default function ServicePage({ page }) {
  const pathname = `/services/${page.slug}`;
  const parent = servicePages.find(entry => entry.slug === page.parent);
  const related = page.children?.length
    ? servicePages.filter(entry => page.children.includes(entry.slug))
    : (parent?.children || []).map(slug => servicePages.find(entry => entry.slug === slug)).filter(entry => entry && entry.slug !== page.slug);
  const breadcrumbs = [{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, ...(parent ? [{ label: parent.navLabel, href: `/services/${parent.slug}` }] : []), { label: page.navLabel, href: pathname }];
  const stack = Object.entries(serviceDelivery.techStack).filter(([group]) => page.stackGroups?.includes(group));

  return <main id="main" className="approved-page">
    <ApprovedPageSchema page={page} pathname={pathname} breadcrumbs={breadcrumbs} serviceType={page.schemaServiceType} />
    <ApprovedHero eyebrow={parent?.navLabel || "Service"} title={page.title} lede={page.lede} breadcrumbs={breadcrumbs} primaryLabel={page.primaryCtaLabel || "Book a free consultation"} secondary={page.caseStudy ? { label: "Read the client project", href: `/case-studies/${page.caseStudy}` } : { label: "See all services", href: "/services" }} stats={page.heroStats || []} />
    <ApprovedProblems heading={page.editorial.problems} items={page.problems} />
    <ApprovedApproach heading={page.editorial.approach} body={page.approach} scope={page.scope} />
    <ApprovedSection className="bg-[#F7F5FB]" narrow><ApprovedBody blocks={page.body} /></ApprovedSection>
    {page.decision && <ApprovedSection>
      <h2 className="max-w-4xl text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl">{page.decision.heading}</h2>
      <p className="mt-5 max-w-3xl leading-relaxed text-zinc-600">{page.decision.intro}</p>
      <div role="region" aria-label={page.decision.heading} tabIndex={0} className="mt-9 overflow-x-auto rounded-2xl border border-zinc-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#6F36D2]">
        <table className="w-full min-w-[640px] border-collapse text-left">
          <caption className="sr-only">{page.decision.heading}</caption>
          <thead className="bg-[#15111E] text-white"><tr><th scope="col" className="p-4">Decision</th><th scope="col" className="p-4">{page.decision.packagedLabel}</th><th scope="col" className="p-4">{page.decision.customLabel}</th></tr></thead>
          <tbody>{page.decision.rows.map(row => <tr key={row.factor} className="border-b border-zinc-200 last:border-0"><th scope="row" className="p-4 align-top font-semibold">{row.factor}</th><td className="p-4 align-top leading-relaxed text-zinc-600">{row.packaged}</td><td className="p-4 align-top leading-relaxed text-zinc-600">{row.custom}</td></tr>)}</tbody>
        </table>
      </div>
    </ApprovedSection>}
    {related.length > 0 && <ApprovedRelated heading={page.editorial.related} cards={related.map(entry => ({ href: `/services/${entry.slug}`, title: entry.navLabel, description: entry.lede.split(/(?<=[.!?])\s+/)[0] }))} />}
    <ApprovedProcess heading={page.editorial.process} steps={page.process || serviceDelivery.process} />
    {stack.length > 0 && <ApprovedSection className="bg-[#F7F5FB]">
      <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Technologies we work with</h2>
      <p className="mt-4 max-w-3xl leading-relaxed text-zinc-600">Grouped by the layer it sits in.</p>
      <dl className="mt-10 grid gap-8 md:grid-cols-2">{stack.map(([group, tools]) => <div key={group} className="border-t border-zinc-300 pt-5"><dt className="font-semibold text-[#6F36D2]">{group}</dt><dd className="mt-4 leading-8 text-zinc-700">{tools.join(" · ")}</dd></div>)}</dl>
    </ApprovedSection>}
    {page.caseStudy && <ApprovedSection>
      <p className="text-sm font-medium text-[#6F36D2]">Client project</p>
      <h2 className="mt-4 max-w-4xl text-2xl font-semibold tracking-tight sm:text-3xl">{page.caseStudyTitle}</h2>
      <dl className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">{page.caseStudyFacts.map(fact => <div key={fact.label} className="border-t border-zinc-200 pt-4"><dt className="text-sm text-zinc-500">{fact.label}</dt><dd className="mt-2 font-medium leading-relaxed">{fact.value}</dd></div>)}</dl>
      <Link href={`/case-studies/${page.caseStudy}`} className="mt-6 inline-flex rounded-lg bg-[#6F36D2] px-6 py-3.5 font-medium text-white hover:bg-[#5C27BB]">Read the case study</Link>
    </ApprovedSection>}
    {page.tier === "child" && <ApprovedSection className="bg-[#F7F5FB]">
      <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">How we can work together</h2>
      <p className="mt-5 max-w-3xl leading-relaxed text-zinc-600">{page.engagementIntro || "Projects here typically run between USD 7,500 and USD 15,000 or above, depending on scope. We quote a fixed price after discovery and bill against milestones."}</p>
      {page.showEngagementModels && <dl className="mt-8 grid gap-8 md:grid-cols-3">{serviceDelivery.engagementModels.map(model => <div key={model.name}><dt className="font-semibold">{model.name}</dt><dd className="mt-3 leading-relaxed text-zinc-600"><p>Fits when: {model.fit}</p><p className="mt-2">Billing: {model.billing}</p></dd></div>)}</dl>}
    </ApprovedSection>}
    <ApprovedFaq heading={`Questions about ${page.navLabel}`} items={page.faq} />
    <RelatedBlogs serviceSlug={page.slug} serviceTitle={page.navLabel} />
    <ApprovedCta heading={page.editorial.ctaHeading} body={page.editorial.ctaBody} primaryLabel="Discuss your requirements" />
  </main>;
}
