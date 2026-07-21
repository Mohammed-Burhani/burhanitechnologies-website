import Container from "@/components/constants/Container";
import { Body } from "@/components/textComponents/Body";
import { Heading } from "@/components/textComponents/Heading";
import { client } from "@/sanity/lib/client";
import { CaseStudyCarousel } from "./CaseStudyCarousel";

async function getCaseStudies() {
  const query = `*[_type == "caseStudy"] | order(publishedAt desc)[0...5] {
    _id,
    title,
    slug,
    client,
    industry,
    excerpt,
    outcome,
    bannerImage,
    goal
  }`;
  
  const caseStudies = await client.fetch(query, {}, {
    cache: 'no-store' // Don't cache, always fetch fresh
  });
  return caseStudies;
}

export const ServiceCaseStudies = async ({ title, description }) => {
  const caseStudies = await getCaseStudies();

  if (caseStudies.length === 0) return null;

  return (
    <Container className="bg-gradient-to-b from-purple-50 to-white py-20">
      {(title || description) && (
        <div className="mb-16" data-aos="fade-up">
          {title && (
            <Heading className="text-[#180030] text-4xl md:text-5xl mb-4">
              {title}
            </Heading>
          )}
          {description && (
            <Body className="text-gray-600 text-lg max-w-4xl">
              {description}
            </Body>
          )}
        </div>
      )}

      <CaseStudyCarousel caseStudies={caseStudies} />
    </Container>
  );
};
