import CompanyPage from "@/components/ApprovedContent/CompanyPage";
import { approvedMetadata } from "@/components/ApprovedContent/ApprovedPage";
import { companyPages } from "@/content/companyPages";
import { conceptImages } from "@/content/conceptImages";

const page = companyPages["about"];

export const metadata = approvedMetadata(page, page.pathname);

export default function Page() {
  return <CompanyPage page={page} schemaType="AboutPage" media={conceptImages.planning} />;
}
