import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import { notFound } from "next/navigation";

import CaseStudyHero from "@/components/CaseStudies/Detail/CaseStudyHero";
import GoalChallengeOutcomeCards from "@/components/CaseStudies/Detail/GoalChallengeOutcomeCards";
import ProcessesSectionRevised from "@/components/CaseStudies/Detail/ProcessesSectionRevised";
import CaseStudyCTA from "@/components/CaseStudies/Detail/CaseStudyCTA";
import TestimonialsRevised from "@/components/Home/Sections/TestimonialsRevised";

export const revalidate = 0; // Always fetch fresh data
export const dynamicParams = true; // Allow dynamic params not in generateStaticParams

async function getCaseStudy(slug) {
  const query = `*[_type == "caseStudy" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    client,
    industry,
    bannerImage,
    excerpt,
    goal,
    challenge,
    outcome,
    processes,
    publishedAt
  }`;

  const caseStudy = await client.fetch(query, { slug }, {
    cache: 'no-store' // Don't cache, always fetch fresh
  });
  return caseStudy;
}

export async function generateStaticParams() {
  // Return empty array to not pre-render any pages at build time
  // All pages will be generated on-demand
  return [];
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const caseStudy = await getCaseStudy(resolvedParams.slug);

  if (!caseStudy) {
    return {
      title: "Case Study Not Found",
    };
  }

  return {
    title: `${caseStudy.title} | Case Study | Burhani Technologies`,
    description: caseStudy.excerpt || caseStudy.goal,
  };
}

export default async function CaseStudyPage({ params }) {
  const resolvedParams = await params;
  const caseStudy = await getCaseStudy(resolvedParams.slug);

  if (!caseStudy) {
    notFound();
  }

  const bannerImage = caseStudy.bannerImage
    ? urlForImage(caseStudy.bannerImage)
    : null;

  // Resolve all images to URLs in server component
  const processesWithResolvedImages = caseStudy.processes?.map((process) => ({
    ...process,
    content: process.content?.map((block) => {
      if (block._type === "image") {
        return {
          ...block,
          url: urlForImage(block),
        };
      }
      return block;
    }),
    images: process.images?.map((image) => urlForImage(image)),
  }));

  return (
    <main id="main">
      <CaseStudyHero
        title={caseStudy.title}
        client={caseStudy.client}
        industry={caseStudy.industry}
        excerpt={caseStudy.excerpt}
        bannerImage={bannerImage}
      />

      <GoalChallengeOutcomeCards
        goal={caseStudy.goal}
        challenge={caseStudy.challenge}
        outcome={caseStudy.outcome}
      />

      <ProcessesSectionRevised processes={processesWithResolvedImages} />

      <TestimonialsRevised />

      <CaseStudyCTA />
    </main>
  );
}
