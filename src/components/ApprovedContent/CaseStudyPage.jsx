import CompanyPage from "./CompanyPage";
import { caseStudyImages } from "@/content/caseStudyImages";

export default function CaseStudyPage({ page }) {
  const slug = page.pathname.split("/").pop();
  return <CompanyPage page={page} schemaType="Article" media={caseStudyImages[slug]} />;
}
