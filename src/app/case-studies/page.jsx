import CompanyPage from "@/components/ApprovedContent/CompanyPage";
import { approvedMetadata } from "@/components/ApprovedContent/ApprovedPage";
import { caseStudyHub, caseStudyPages } from "@/content/caseStudyPages";
import { caseStudyImages } from "@/content/caseStudyImages";
import { client } from "@/sanity/lib/client";

export const dynamic = "force-dynamic";

const description = "Delivered systems across healthcare, manufacturing, finance and events. What each client started with, what we built, and what changed.";
export const metadata = approvedMetadata({
  ...caseStudyHub,
  metaDescription: description,
}, "/case-studies");

const publishedClient = client.withConfig({ useCdn: false, perspective: "published" });
const query = `*[_type == "caseStudy" && !(_id in path("drafts.**")) && defined(slug.current) && slug.current != ""]
  | order(publishedAt desc, _createdAt desc) { title, slug, industry, excerpt }`;

function additionalCaseStudies(studies) {
  const seen = new Set(Object.keys(caseStudyPages));
  return studies.filter(study => {
    const slug = study.slug?.current;
    if (!slug || !study.title?.trim() || seen.has(slug)) return false;
    seen.add(slug);
    return true;
  });
}

function additionalSection(studies) {
  return {
    className: "bg-[#F7F5FB]",
    children: [
      { tag: "h2", attrs: { className: "font-inter text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl" }, children: ["More client projects"] },
      { tag: "div", attrs: { className: "mt-9 grid gap-7 md:grid-cols-2 xl:grid-cols-3" }, children: studies.map(study => ({
        tag: "a",
        attrs: { href: `/case-studies/${study.slug.current}`, className: "flex flex-col rounded-2xl border border-zinc-200 bg-white p-6 transition-colors hover:border-[#6F36D2] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#6F36D2]" },
        children: [
          ...(study.industry?.trim() ? [{ tag: "p", attrs: { className: "text-sm font-medium text-[#6F36D2]" }, children: [study.industry.trim()] }] : []),
          { tag: "h3", attrs: { className: "mt-3 font-inter text-xl font-semibold leading-snug text-zinc-900" }, children: [study.title.trim()] },
          ...(study.excerpt?.trim() ? [{ tag: "p", attrs: { className: "mt-4 leading-relaxed text-zinc-600" }, children: [study.excerpt.trim()] }] : []),
          { tag: "span", attrs: { className: "mt-6 font-medium text-[#6F36D2]" }, children: ["Read the case study"] },
        ],
      })) },
    ],
  };
}

export default async function CaseStudiesPage() {
  const studies = additionalCaseStudies(await publishedClient.fetch(query, {}, { cache: "no-store" }));
  const page = studies.length ? {
    ...caseStudyHub,
    metaDescription: description,
    title: "Systems built around real business workflows",
    lede: "Explore projects across healthcare, manufacturing, finance and events. Each describes the client's challenge, the system we built and how the work changed.",
    stats: ["6 featured systems", "4 featured sectors", "Clients in India and the United States"],
    sections: [caseStudyHub.sections[0], additionalSection(studies), ...caseStudyHub.sections.slice(1)],
  } : caseStudyHub;
  return <CompanyPage page={page} schemaType="CollectionPage" cardImages={caseStudyImages} />;
}
