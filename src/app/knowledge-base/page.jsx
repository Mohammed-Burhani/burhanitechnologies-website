import { KnowledgeBaseHero } from "@/components/KnowledgeBase/KnowledgeBaseHero";
import { KnowledgeBaseContent } from "@/components/KnowledgeBase/KnowledgeBaseContent";
import { CTA2 } from "@/components/Home/Sections/CTA2";
import { client } from "@/sanity/lib/client";
import { generateFAQSchema } from "@/utils/schema";
import Script from "next/script";

export const metadata = {
  title: "Knowledge Base | Burhani Technologies",
  description:
    "Find answers to common questions and learn how to get the most out of our services. Browse our comprehensive FAQ and help center.",
  keywords: [
    "FAQ",
    "help center",
    "knowledge base",
    "support",
    "documentation",
    "how to",
    "getting started",
  ],
};

export const revalidate = 0;

async function getFAQData() {
  const query = `{
    "categories": *[_type == "faqCategory"] | order(order asc) {
      _id,
      title,
      slug,
      icon,
      order,
      description
    },
    "faqs": *[_type == "faq"] | order(order asc) {
      _id,
      question,
      answer,
      "category": category->{
        _id,
        title,
        slug
      },
      order,
      featured,
      publishedAt
    }
  }`;

  const data = await client.fetch(query, {}, { cache: "no-store" });
  return data;
}

export default async function KnowledgeBasePage() {
  const { categories, faqs } = await getFAQData();

  // Generate FAQ schema for SEO
  const faqSchema = generateFAQSchema(
    faqs.map((faq) => ({
      question: faq.question,
      answer: faq.answer,
    }))
  );

  return (
    <>
      {/* FAQ Schema for SEO */}
      <Script
        id="knowledge-base-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
        strategy="beforeInteractive"
      />

      <KnowledgeBaseHero />
      <KnowledgeBaseContent categories={categories} faqs={faqs} />
      <CTA2 />
    </>
  );
}
