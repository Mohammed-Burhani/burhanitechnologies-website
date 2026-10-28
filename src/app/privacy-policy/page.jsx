import UtilityPage, { utilityMetadata } from "@/components/ApprovedContent/UtilityPage";
import { privacyPage } from "@/content/utilityPages";

export const metadata = utilityMetadata(privacyPage, "/privacy-policy");

export default function Page() {
  return <UtilityPage page={privacyPage} pathname="/privacy-policy" />;
}
