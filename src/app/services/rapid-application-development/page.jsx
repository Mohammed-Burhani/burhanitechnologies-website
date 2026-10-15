import { rapidApplicationDevelopmentPage as page } from "@/content/approvedPages";
import { approvedMetadata, ApprovedPageSchema, ApprovedHero, ApprovedSection, ApprovedProblems, ApprovedApproach, ApprovedBody, ApprovedRelated, ApprovedProcess, ApprovedFaq, ApprovedCta } from "@/components/ApprovedContent/ApprovedPage";

const pathname = "/services/rapid-application-development";
export const metadata = approvedMetadata(page, pathname);

export default function RapidApplicationDevelopmentPage() {
  const breadcrumbs = [{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: page.parent.title, href: page.parent.href }, { label: page.navLabel, href: pathname }];

  return <main id="main">
    <ApprovedPageSchema page={page} pathname={pathname} breadcrumbs={breadcrumbs} serviceType={page.schemaServiceType} />
    <ApprovedHero eyebrow={page.parent.title} title={page.title} lede={page.lede} breadcrumbs={breadcrumbs} primaryLabel={page.primaryCtaLabel} secondary={{ label: "See all services", href: "/services" }} stats={page.heroStats} />
    <ApprovedProblems heading={page.editorial.problems} items={page.problems} />
    <ApprovedApproach heading={page.editorial.approach} body={page.approach} scope={page.scope} />
    <ApprovedSection className="bg-[#F7F5FB]" narrow><ApprovedBody blocks={page.body} /></ApprovedSection>
    <ApprovedSection>
      <h2 className="max-w-4xl font-inter text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl">{page.decision.heading}</h2>
      <p className="mt-5 max-w-3xl font-inter text-base leading-relaxed text-zinc-600">{page.decision.intro}</p>
      <div role="region" aria-label={page.decision.heading} tabIndex={0} className="mt-9 overflow-x-auto rounded-2xl border border-zinc-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#6F36D2]">
        <table className="w-full min-w-[640px] border-collapse text-left font-inter text-base">
          <caption className="sr-only">{page.decision.heading}</caption>
          <thead className="bg-[#15111E] text-white"><tr>
            <th scope="col" className="p-4 font-semibold">Decision</th>
            <th scope="col" className="p-4 font-semibold">{page.decision.packagedLabel}</th>
            <th scope="col" className="p-4 font-semibold">{page.decision.customLabel}</th>
          </tr></thead>
          <tbody>{page.decision.rows.map(row => <tr key={row.factor} className="border-b border-zinc-200 last:border-0">
            <th scope="row" className="p-4 align-top font-semibold text-zinc-900">{row.factor}</th>
            <td className="p-4 align-top leading-relaxed text-zinc-600">{row.packaged}</td>
            <td className="p-4 align-top leading-relaxed text-zinc-600">{row.custom}</td>
          </tr>)}</tbody>
        </table>
      </div>
    </ApprovedSection>
    <ApprovedRelated heading={page.editorial.related} cards={page.relatedServices} />
    <ApprovedProcess heading={page.editorial.process} steps={page.process} />
    <ApprovedSection>
      <h2 className="font-inter text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl">How we can work together</h2>
      <p className="mt-5 max-w-3xl font-inter text-base leading-relaxed text-zinc-600">{page.engagementIntro}</p>
    </ApprovedSection>
    <ApprovedFaq heading={`Questions about ${page.navLabel}`} items={page.faq} />
    <ApprovedCta heading={page.editorial.ctaHeading} body={page.editorial.ctaBody} primaryLabel="Discuss your requirements" />
  </main>;
}
