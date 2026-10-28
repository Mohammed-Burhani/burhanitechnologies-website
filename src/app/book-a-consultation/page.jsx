import UtilityPage, { utilityMetadata } from "@/components/ApprovedContent/UtilityPage";
import { consultationPage } from "@/content/utilityPages";

export const metadata = utilityMetadata(consultationPage, "/book-a-consultation");

export default function Page() {
  return <UtilityPage page={consultationPage} pathname="/book-a-consultation" />;
}
