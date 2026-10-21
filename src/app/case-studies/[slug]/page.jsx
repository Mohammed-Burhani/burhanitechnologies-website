import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import { notFound } from "next/navigation";
import { generateCaseStudyMetadata } from "@/utils/metadata";
import { generateBreadcrumbSchema } from "@/utils/schema";

import CaseStudyHero from "@/components/CaseStudies/Detail/CaseStudyHero";
import GoalChallengeOutcomeCards from "@/components/CaseStudies/Detail/GoalChallengeOutcomeCards";
import ProcessesSectionRevised from "@/components/CaseStudies/Detail/ProcessesSectionRevised";
import CaseStudyCTA from "@/components/CaseStudies/Detail/CaseStudyCTA";
import TestimonialsRevised from "@/components/Home/Sections/TestimonialsRevised";
import ApprovedCaseStudyPage from "@/components/ApprovedContent/CaseStudyPage";
import { approvedMetadata } from "@/components/ApprovedContent/ApprovedPage";
import { caseStudyPages } from "@/content/caseStudyPages";

export const revalidate = 0;
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
  return Object.keys(caseStudyPages).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const approvedPage = Object.hasOwn(caseStudyPages, resolvedParams.slug) ? caseStudyPages[resolvedParams.slug] : null;
  if (approvedPage) return approvedMetadata(approvedPage, approvedPage.pathname, "article");
  const caseStudy = await getCaseStudy(resolvedParams.slug);

  if (!caseStudy) {
    notFound();
  }

  return generateCaseStudyMetadata(caseStudy, urlForImage(caseStudy.bannerImage));
}

export default async function CaseStudyPage({ params }) {
  const resolvedParams = await params;
  const approvedPage = Object.hasOwn(caseStudyPages, resolvedParams.slug) ? caseStudyPages[resolvedParams.slug] : null;
  if (approvedPage) return <ApprovedCaseStudyPage page={approvedPage} />;
  const caseStudy = await getCaseStudy(resolvedParams.slug);

  if (!caseStudy) {
    notFound();
  }

  const bannerImage = caseStudy.bannerImage
    ? urlForImage(caseStudy.bannerImage)
    : null;

  const canonical = `https://burhanitechnologies.com/case-studies/${caseStudy.slug.current}`;
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://burhanitechnologies.com" },
    { name: "Case Studies", url: "https://burhanitechnologies.com/case-studies" },
    { name: caseStudy.title.trim(), url: canonical },
  ]);

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
      <script
        id="case-study-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c"),
        }}
      />
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
