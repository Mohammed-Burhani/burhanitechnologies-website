import UtilityPage, { utilityMetadata } from "@/components/ApprovedContent/UtilityPage";
import { thankYouPage } from "@/content/utilityPages";

export const metadata = utilityMetadata(thankYouPage, "/thank-you");

export default function Page() {
  return <UtilityPage page={thankYouPage} pathname="/thank-you" />;
}
