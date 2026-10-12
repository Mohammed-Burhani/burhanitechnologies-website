import CaseStudiesHero from "@/components/CaseStudies/Listing/CaseStudiesHero";
import CaseStudyBrowser from "@/components/CaseStudies/Listing/CaseStudyBrowser";
import CaseStudiesCTA from "@/components/CaseStudies/Listing/CaseStudiesCTA";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";

export const metadata = {
  title: "Case Studies | Burhani Technologies",
  description:
    "Explore our success stories and discover how we've helped businesses transform their operations with innovative technology solutions.",
  alternates: {
    canonical: "https://burhanitechnologies.com/case-studies",
  },
};

export const revalidate = 0; // Always fetch fresh data

async function getCaseStudies() {
  const query = `*[_type == "caseStudy"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    client,
    industry,
    excerpt,
    bannerImage,
    publishedAt,
    featured
  }`;

  const caseStudies = await client.fetch(query, {}, {
    cache: 'no-store' // Don't cache, always fetch fresh
  });
  return caseStudies;
}

export default async function CaseStudiesPage() {
  const caseStudies = await getCaseStudies();

  // Resolve everything the client-side filter needs into plain, serialisable
  // values here, so no Sanity image objects cross the server/client boundary.
  const studies = caseStudies
    .filter((caseStudy) => caseStudy.slug?.current)
    .map((caseStudy) => ({
      id: caseStudy._id,
      slug: caseStudy.slug.current,
      title: caseStudy.title?.trim() ?? "",
      client: caseStudy.client?.trim() ?? "",
      industry: caseStudy.industry?.trim() || null,
      excerpt: caseStudy.excerpt?.trim() || null,
      image: urlForImage(caseStudy.bannerImage),
      featured: Boolean(caseStudy.featured),
    }));

  const heroImages = studies
    .map((study) => study.image)
    .filter(Boolean)
    .slice(0, 3);

  return (
    <main id="main">
      <CaseStudiesHero images={heroImages} />
      <CaseStudyBrowser studies={studies} />
      <CaseStudiesCTA images={studies.map((study) => study.image).filter(Boolean)} />
    </main>
  );
}
