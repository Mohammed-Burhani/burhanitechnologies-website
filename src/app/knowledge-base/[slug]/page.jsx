import { notFound } from "next/navigation";
import { knowledgeBasePages } from "@/content/approvedPages";
import { approvedMetadata, ApprovedPageSchema, ApprovedHero, ApprovedSection, ApprovedBody, ApprovedFaq, ApprovedRelated, ApprovedCta } from "@/components/ApprovedContent/ApprovedPage";

export const dynamicParams = false;

export function generateStaticParams() {
  return knowledgeBasePages.map(({ slug }) => ({ slug }));
}

async function getArticle(params) {
  const { slug } = await params;
  const page = knowledgeBasePages.find(entry => entry.slug === slug);
  if (!page) notFound();
  return page;
}

export async function generateMetadata({ params }) {
  const page = await getArticle(params);
  return approvedMetadata(page, `/knowledge-base/${page.slug}`, "article");
}

export default async function KnowledgeBaseArticlePage({ params }) {
  const page = await getArticle(params);
  const pathname = `/knowledge-base/${page.slug}`;
  const breadcrumbs = [{ label: "Home", href: "/" }, { label: "Knowledge Base", href: "/knowledge-base" }, { label: page.category, href: pathname }];

  return <main id="main">
    <ApprovedPageSchema page={page} pathname={pathname} breadcrumbs={breadcrumbs} type="Article" />
    <ApprovedHero eyebrow={page.category} title={page.title} breadcrumbs={breadcrumbs} />
    <ApprovedSection narrow>
      <div className="mb-10 rounded-2xl border-l-4 border-[#6F36D2] bg-[#F3EDF9] p-6 sm:p-8">
        <p className="font-inter text-lg leading-relaxed text-zinc-900">{page.answer}</p>
      </div>
      <ApprovedBody blocks={page.body} />
    </ApprovedSection>
    <ApprovedFaq heading="Related questions" items={page.faq} />
    <ApprovedRelated heading="More from the knowledge base" cards={knowledgeBasePages.filter(entry => entry.slug !== page.slug).map(entry => ({ href: `/knowledge-base/${entry.slug}`, title: entry.title, label: "Read the answer" }))} />
    <ApprovedCta />
  </main>;
}
