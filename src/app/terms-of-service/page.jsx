import UtilityPage, { utilityMetadata } from "@/components/ApprovedContent/UtilityPage";
import { termsPage } from "@/content/utilityPages";

export const metadata = utilityMetadata(termsPage, "/terms-of-service");

export default function Page() {
  return <UtilityPage page={termsPage} pathname="/terms-of-service" />;
}
