import CompanyPage from "@/components/ApprovedContent/CompanyPage";
import { approvedMetadata } from "@/components/ApprovedContent/ApprovedPage";
import { companyPages } from "@/content/companyPages";

const page = companyPages["values"];

export const metadata = approvedMetadata(page, page.pathname);

export default function Page() {
  return <CompanyPage page={page} schemaType="WebPage" />;
}
