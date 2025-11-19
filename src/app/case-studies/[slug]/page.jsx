import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import { notFound } from "next/navigation";
import { GoalChallengeOutcome } from "@/components/CaseStudies/Sections/GoalChallengeOutcome";
import { MainCaseStudyContent } from "@/components/CaseStudies/Sections/MainCaseStudyContent";
import { CaseStudyTestimonial } from "@/components/CaseStudies/Sections/CaseStudyTestimonial";
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
    mainContent,
    caseStudyImage,
    testimonial,
    technologies,
    projectDuration,
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

      {/* Main Content Section */}
      <MainCaseStudyContent
        title={caseStudy.title}
        content={caseStudy.mainContent}
        image={caseStudy.caseStudyImage}
      />

      {/* Testimonial Section */}
      {caseStudy.testimonial && (
        <CaseStudyTestimonial testimonial={caseStudy.testimonial} />
      )}

      {/* Technologies & Duration */}
      {(caseStudy.technologies?.length > 0 || caseStudy.projectDuration) && (
        <Container className="bg-gray-50 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {caseStudy.technologies?.length > 0 && (
              <div data-aos="fade-right">
                <h3 className="text-2xl font-bold font-inter text-gray-900 mb-6">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-3">
                  {caseStudy.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-white rounded-full text-gray-700 font-medium shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {caseStudy.projectDuration && (
              <div data-aos="fade-left">
                <h3 className="text-2xl font-bold font-inter text-gray-900 mb-6">
                  Project Duration
                </h3>
                <p className="text-xl text-gray-700">{caseStudy.projectDuration}</p>
              </div>
            )}
          </div>
        </Container>
      )}

      <CTA2 />
    </>
  );
}
