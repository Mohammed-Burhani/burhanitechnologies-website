import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ApprovedCta,
  ApprovedHero,
  ApprovedPageSchema,
  ApprovedSection,
  approvedMetadata,
} from "@/components/ApprovedContent/ApprovedPage";
import { authorPages } from "@/content/utilityPages";

export const dynamicParams = false;

export function generateStaticParams() {
  return authorPages.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const author = authorPages.find(page => page.slug === slug);
  if (!author) notFound();
  return approvedMetadata(author, "/authors/" + slug);
}

export default async function AuthorPage({ params }) {
  const { slug } = await params;
  const author = authorPages.find(page => page.slug === slug);
  if (!author) notFound();

  const pathname = "/authors/" + slug;
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: author.title, href: pathname },
  ];
  const url = "https://burhanitechnologies.com" + pathname;
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": url + "#person",
    name: author.title,
    jobTitle: author.role,
    description: author.bio,
    worksFor: { "@type": "Organization", name: "Burhani Technologies", url: "https://burhanitechnologies.com" },
    url,
  };

  return <main id="main" className="approved-page">
    <ApprovedPageSchema page={author} pathname={pathname} breadcrumbs={breadcrumbs} type="WebPage" />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(person).replace(/</g, "\\u003c") }} />
    <ApprovedHero title={author.title} eyebrow={author.role} lede={author.bio} breadcrumbs={breadcrumbs} />
    <ApprovedSection>
      <h2 className="font-inter text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl">More from Burhani</h2>
      <p className="mt-5 max-w-prose font-inter text-base leading-relaxed text-zinc-600">Explore our latest articles on software development, automation and business systems.</p>
      <Link href="/blog" className="mt-6 inline-flex min-h-11 items-center gap-2 font-medium text-[#6F36D2] underline underline-offset-4">Browse the blog <span aria-hidden="true">→</span></Link>
    </ApprovedSection>
    <ApprovedCta />
  </main>;
}
