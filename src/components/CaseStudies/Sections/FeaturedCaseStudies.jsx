import Container from "@/components/constants/Container";
import { Body } from "@/components/textComponents/Body";
import { LargeHeading } from "@/components/textComponents/LargeHeading";
import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";

async function getFeaturedCaseStudies() {
  const query = `*[_type == "caseStudy" && featured == true] | order(publishedAt desc) [0...3] {
    _id,
    title,
    slug,
    client,
    industry,
    excerpt,
    bannerImage
  }`;

  const caseStudies = await client.fetch(query);
  return caseStudies;
}

export const FeaturedCaseStudies = async () => {
  const caseStudies = await getFeaturedCaseStudies();

  if (caseStudies.length === 0) return null;

  return (
    <Container className="bg-gray-50 py-20">
      <div className="text-center mb-12">
        <h4
          className="uppercase text-[#6F36D2] font-extrabold mb-4"
          data-aos="fade-down"
        >
          Success Stories
        </h4>
        <LargeHeading
          data-aos="fade-down"
          className="max-w-4xl mx-auto text-center"
        >
          Featured Case Studies
        </LargeHeading>
        <Body
          className="max-w-2xl mx-auto text-center mt-4 text-gray-600"
          data-aos="fade-down"
        >
          Discover how we've helped businesses achieve their goals through innovative solutions.
        </Body>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {caseStudies.map((caseStudy, index) => (
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

      <div className="text-center mt-12" data-aos="fade-up">
        <Link
          href="/case-studies"
          className="inline-block px-8 py-3 bg-[#6F36D2] text-white font-semibold rounded-lg hover:bg-[#5a2ba8] transition-colors"
        >
          View All Case Studies
        </Link>
      </div>
    </Container>
  );
};
