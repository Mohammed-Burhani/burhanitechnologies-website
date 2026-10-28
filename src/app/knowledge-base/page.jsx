import KnowledgeBaseHeroRevised from "@/components/KnowledgeBase/KnowledgeBaseHeroRevised";
import KnowledgeBaseArticlesGrid from "@/components/KnowledgeBase/KnowledgeBaseArticlesGrid";
import KnowledgeBaseCTA from "@/components/KnowledgeBase/KnowledgeBaseCTA";
import { approvedMetadata } from "@/components/ApprovedContent/ApprovedPage";

export const metadata = approvedMetadata({
  metaTitle: "Knowledge Base | How We Work | Burhani Technologies",
  metaDescription: "Practical answers on how a custom software project runs with us: what to prepare, how your data is handled, and what happens after go-live.",
}, "/knowledge-base");

export default function KnowledgeBasePage() {
  return (
    <main id="main">
      <KnowledgeBaseHeroRevised />
      <KnowledgeBaseArticlesGrid />
      <KnowledgeBaseCTA />
    </main>
  );
}
