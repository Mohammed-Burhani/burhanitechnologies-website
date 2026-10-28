import UtilityPage, { utilityMetadata } from "@/components/ApprovedContent/UtilityPage";
import { notFoundPage } from "@/content/utilityPages";

export const metadata = utilityMetadata(notFoundPage, "/404");

export default function NotFound() {
  return <UtilityPage page={notFoundPage} pathname="/404" />;
}
