import { CaseStudyBanner } from "@/components/CaseStudies/CaseStudyBanner";
import { CTA2 } from "@/components/Home/Sections/CTA2";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import Container from "@/components/constants/Container";
import { Body } from "@/components/textComponents/Body";
import { LargeHeading } from "@/components/textComponents/LargeHeading";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Case Studies | Burhani Technologies",
  description:
    "Explore our success stories and discover how we've helped businesses transform their operations with innovative technology solutions.",
};

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
    next: { revalidate: 60 } // Revalidate every 60 seconds
  });
  return caseStudies;
}

export default async function CaseStudiesPage() {
  const caseStudies = await getCaseStudies();

  return (
    <>
      <CaseStudyBanner />

      <Container className="bg-white py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies
            .filter((caseStudy) => caseStudy.slug?.current)
            .map((caseStudy, index) => (
              <Link
                key={caseStudy._id}
                href={`/case-studies/${caseStudy.slug.current}`}
                className="group"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                  {caseStudy.bannerImage && (
                    <div className="relative h-64 w-full overflow-hidden">
                      <Image
                        src={urlForImage(caseStudy.bannerImage)}
                        alt={caseStudy.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  )}

                  <div className="p-6 flex-1 flex flex-col">
                    {caseStudy.industry && (
                      <span className="text-sm text-[#6F36D2] font-semibold uppercase tracking-wide mb-2">
                        {caseStudy.industry}
                      </span>
                    )}

                    <h3 className="text-2xl font-bold font-inter text-gray-900 mb-3 group-hover:text-[#6F36D2] transition-colors">
                      {caseStudy.title}
                    </h3>

                    {caseStudy.client && (
                      <p className="text-sm text-gray-600 mb-3">
                        Client: {caseStudy.client}
                      </p>
                    )}

                    {caseStudy.excerpt && (
                      <Body className="text-gray-700 mb-4 flex-1">
                        {caseStudy.excerpt}
                      </Body>
                    )}

                    <span className="text-[#6F36D2] font-semibold group-hover:underline">
                      Read Case Study →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
        </div>

        {caseStudies.length === 0 && (
          <div className="text-center py-20">
            <LargeHeading className="text-gray-900 mb-4">
              No Case Studies Yet
            </LargeHeading>
            <Body className="text-gray-600">
              Check back soon for our latest success stories.
            </Body>
          </div>
        )}
      </Container>

      <CTA2 />
    </>
  );
}
