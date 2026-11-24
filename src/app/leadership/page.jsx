import CompanyPage from "@/components/ApprovedContent/CompanyPage";
import { approvedMetadata } from "@/components/ApprovedContent/ApprovedPage";
import { companyPages } from "@/content/companyPages";

const page = companyPages["leadership"];

export const metadata = {
  ...approvedMetadata(page, page.pathname),
  robots: { index: false, follow: true },
};

export default function Page() {
  return <CompanyPage page={page} schemaType="WebPage" />;
}
