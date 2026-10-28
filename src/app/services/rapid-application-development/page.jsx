import { rapidApplicationDevelopmentPage as page } from "@/content/approvedPages";
import ServicePage, { approvedMetadata } from "@/components/ApprovedContent/ServicePage";

export const metadata = approvedMetadata(page, "/services/rapid-application-development");

export default function RapidApplicationDevelopmentPage() {
  return <ServicePage page={page} showRelatedArticles={false} />;
}
