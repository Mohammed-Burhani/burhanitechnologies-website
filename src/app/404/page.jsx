import { notFound } from "next/navigation";
import { notFoundPage } from "@/content/utilityPages";
import { utilityMetadata } from "@/components/ApprovedContent/UtilityPage";

export const metadata = utilityMetadata(notFoundPage, "/404");

export default function Page() {
  notFound();
}
