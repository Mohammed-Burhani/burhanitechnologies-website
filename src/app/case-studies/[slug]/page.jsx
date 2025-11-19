import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import { notFound } from "next/navigation";
import { GoalChallengeOutcome } from "@/components/CaseStudies/Sections/GoalChallengeOutcome";
import { ProcessesSection } from "@/components/CaseStudies/Sections/ProcessesSection";
import { Testimonials } from "@/components/Home/Sections/Testimonials";
import { CTA2 } from "@/components/Home/Sections/CTA2";
import Container from "@/components/constants/Container";
import { LargeHeading } from "@/components/textComponents/LargeHeading";
import { Body } from "@/components/textComponents/Body";
import Image from "next/image";

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

  const caseStudy = await client.fetch(query, { slug });
  return caseStudy;
}

export async function generateMetadata({ params }) {
  const caseStudy = await getCaseStudy(params.slug);

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
  const caseStudy = await getCaseStudy(params.slug);

  if (!caseStudy) {
    notFound();
  }

  return (
    <>
      {/* Banner Section */}
      <div className="bg-white pt-32">
        <Container className="relative overflow-hidden">
          {caseStudy.bannerImage && (
            <div className="relative h-[32rem] w-full rounded-lg overflow-hidden">
              <Image
                src={urlForImage(caseStudy.bannerImage)}
                alt={caseStudy.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12">
                {caseStudy.industry && (
                  <span className="text-sm text-gray-300 font-semibold uppercase tracking-wide mb-2 block">
                    {caseStudy.industry}
                  </span>
                )}
                <LargeHeading className="font-inter font-bold text-white mb-4">
                  {caseStudy.title}
                </LargeHeading>
                {caseStudy.client && (
                  <Body className="text-gray-200">
                    Client: {caseStudy.client}
                  </Body>
                )}
              </div>
            </div>
          )}

          {!caseStudy.bannerImage && (
            <div className="py-20 text-center">
              {caseStudy.industry && (
                <span className="text-sm text-[#6F36D2] font-semibold uppercase tracking-wide mb-2 block">
                  {caseStudy.industry}
                </span>
              )}
              <LargeHeading className="font-inter font-bold text-gray-900 mb-4">
                {caseStudy.title}
              </LargeHeading>
              {caseStudy.client && (
                <Body className="text-gray-600">
                  Client: {caseStudy.client}
                </Body>
              )}
            </div>
          )}
        </Container>
      </div>

      {/* Goal, Challenge, Outcome Section */}
      <GoalChallengeOutcome
        goal={caseStudy.goal}
        challenge={caseStudy.challenge}
        outcome={caseStudy.outcome}
      />

      {/* Processes Section with Scrollspy */}
      <ProcessesSection processes={caseStudy.processes} />

      {/* Testimonials Section */}
      <Testimonials />

      <CTA2 />
    </>
  );
}
