import Container from "@/components/constants/Container";
import { Heading } from "@/components/textComponents/Heading";
import { HighlightCard } from "./HighlightCard";
import { ContentCard } from "./ContentCard";
import { PortableText } from "next-sanity";
import { components } from "@/utils/components";

export const ServiceProcess = ({ title, highlights, content }) => {
  // Only show if at least title or content exists
  if (!title && (!content || content.length === 0)) {
    return null;
  }

  const hasHighlights = highlights && highlights.length > 0;
  const hasContent = content && content.length > 0;

  return (
    <Container className="bg-gradient-to-b from-white to-gray-50 py-20">
      {title && (
        <div className="mb-12" data-aos="fade-up">
          <Heading className="text-[#180030] text-4xl md:text-5xl mb-8 leading-tight">
            {title}
          </Heading>
        </div>
      )}

      {/* Highlight Cards */}
      {hasHighlights && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12" data-aos="fade-up">
          {highlights.map((item, index) => (
            <HighlightCard key={index} {...item} index={index} />
          ))}
        </div>
      )}

      {/* Content Sections */}
      {hasContent && (
        <div className="space-y-8" data-aos="fade-up">
          <ContentCard>
            <div className="prose prose-lg max-w-none [&>p]:text-gray-700 [&>p]:text-lg [&>p]:leading-relaxed">
              <PortableText value={content} components={components} />
            </div>
          </ContentCard>
        </div>
      )}
    </Container>
  );
};
