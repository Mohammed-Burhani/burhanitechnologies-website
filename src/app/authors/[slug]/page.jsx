import { notFound } from "next/navigation";
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

  return <>
    <ApprovedPageSchema page={author} pathname={pathname} breadcrumbs={breadcrumbs} type="WebPage" />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(person).replace(/</g, "\\u003c") }} />
    <ApprovedHero title={author.title} eyebrow={author.role} lede={author.bio} breadcrumbs={breadcrumbs} />
    <ApprovedSection>
      <h2 className="font-inter text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl">Articles by {author.title.split(" ")[0]}</h2>
      <p className="mt-6 font-inter text-base leading-relaxed text-zinc-600">No articles published yet.</p>
    </ApprovedSection>
    <ApprovedCta />
  </>;
}
