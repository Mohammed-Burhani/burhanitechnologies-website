import Container from "@/components/constants/Container";
import { Body } from "@/components/textComponents/Body";
import { PortableText } from "next-sanity";
import { components } from "@/utils/components";

export const ServiceIntro = ({ content }) => {
  // Only show if content exists in Sanity
  if (!content || content.length === 0) {
    return null;
  }

  return (
    <Container className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4" data-aos="fade-up">
        <div className="prose prose-lg prose-gray max-w-none [&>p]:text-gray-700 [&>p]:text-lg [&>p]:md:text-xl [&>p]:leading-relaxed [&>p]:mb-6 [&>h1]:text-gray-900 [&>h1]:text-3xl [&>h1]:md:text-4xl [&>h1]:font-bold [&>h1]:mb-4 [&>h2]:text-gray-900 [&>h2]:text-2xl [&>h2]:md:text-3xl [&>h2]:font-bold [&>h2]:mb-4 [&>h3]:text-gray-900 [&>h3]:text-xl [&>h3]:md:text-2xl [&>h3]:font-semibold [&>h3]:mb-3 [&>ul]:text-gray-700 [&>ul]:mb-4 [&>ol]:text-gray-700 [&>ol]:mb-4">
          <PortableText value={content} components={components} />
        </div>
      </div>
    </Container>
  );
};
