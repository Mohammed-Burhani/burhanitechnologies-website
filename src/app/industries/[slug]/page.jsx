import Link from "next/link";
import { notFound } from "next/navigation";
import { deliveryProcess, industryPages } from "@/content/approvedPages";
import { approvedMetadata, ApprovedPageSchema, ApprovedHero, ApprovedSection, ApprovedProblems, ApprovedApproach, ApprovedRelated, ApprovedProcess, ApprovedBody, ApprovedFaq, ApprovedCta } from "@/components/ApprovedContent/ApprovedPage";

export const dynamicParams = false;

export function generateStaticParams() {
  return industryPages.map(({ slug }) => ({ slug }));
}

async function getIndustry(params) {
  const { slug } = await params;
  const page = industryPages.find(entry => entry.slug === slug);
  if (!page) notFound();
  return page;
}

export async function generateMetadata({ params }) {
  const page = await getIndustry(params);
  return approvedMetadata(page, `/industries/${page.slug}`);
}

export default async function IndustryPage({ params }) {
  const page = await getIndustry(params);
  const pathname = `/industries/${page.slug}`;
  const breadcrumbs = [{ label: "Home", href: "/" }, { label: "Industries", href: "/industries" }, { label: page.navLabel, href: pathname }];

  return <main id="main">
    <ApprovedPageSchema page={page} pathname={pathname} breadcrumbs={breadcrumbs} schemaName={`${page.navLabel} software development`} audience={page.navLabel} />
    <ApprovedHero eyebrow="Industry" title={page.title} lede={page.lede} breadcrumbs={breadcrumbs} primaryLabel="Book a free consultation" secondary={{ label: "See the delivered system", href: page.caseStudy.href }} />
    <ApprovedProblems heading={page.editorial.problems} items={page.problems} />
    <ApprovedApproach heading={page.editorial.approach} body={page.approach} scope={page.scope} />
    <ApprovedSection>
      <p className="font-inter text-xs font-medium uppercase tracking-[0.18em] text-[#6F36D2]">Delivered in this sector</p>
      <h2 className="mt-4 max-w-4xl font-inter text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl">{page.caseStudy.title}</h2>
      <dl className="mt-9 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {page.caseStudy.facts.map(fact => <div key={fact.label} className="rounded-2xl border border-zinc-200 p-5">
          <dt className="font-inter text-sm text-zinc-500">{fact.label}</dt>
          <dd className="mt-3 font-inter text-base font-medium leading-relaxed text-zinc-900">{fact.value}</dd>
        </div>)}
      </dl>
      <Link href={page.caseStudy.href} className="mt-8 inline-flex rounded-xl bg-[#6F36D2] px-6 py-3.5 font-inter font-medium text-white hover:bg-[#5C27BB] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#6F36D2]">Read the case study</Link>
    </ApprovedSection>
    <ApprovedRelated heading={page.editorial.related} cards={page.relatedServices} />
    <ApprovedProcess heading="From workflow planning to release and support" steps={deliveryProcess} />
    <ApprovedSection className="bg-[#F7F5FB]" narrow><ApprovedBody blocks={page.body} /></ApprovedSection>
    <ApprovedFaq heading={`Questions about ${page.navLabel.toLowerCase()} software`} items={page.faq} />
    <ApprovedCta heading={page.editorial.ctaHeading} body={page.editorial.ctaBody} primaryLabel="Discuss your requirements" />
  </main>;
}
