import KnowledgeBaseHeroRevised from "@/components/KnowledgeBase/KnowledgeBaseHeroRevised";
import KnowledgeBaseArticlesGrid from "@/components/KnowledgeBase/KnowledgeBaseArticlesGrid";
import KnowledgeBaseCTA from "@/components/KnowledgeBase/KnowledgeBaseCTA";

export const metadata = {
  title: "Knowledge Base | How We Work | Burhani Technologies",
  description:
    "Practical answers on how a custom software project runs with us: what to prepare, how your data is handled, and what happens after go-live.",
  alternates: {
    canonical: "https://burhanitechnologies.com/knowledge-base",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function KnowledgeBasePage() {
  return (
    <main id="main">
      <KnowledgeBaseHeroRevised />
      <KnowledgeBaseArticlesGrid />
      <KnowledgeBaseCTA />
    </main>
  );
}
