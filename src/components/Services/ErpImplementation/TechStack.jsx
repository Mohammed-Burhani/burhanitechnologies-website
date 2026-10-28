import TechnologyMarquee from "@/components/TechnologyMarquee";
import { serviceDelivery } from "@/content/serviceDelivery";

const groups = ["Languages and frameworks", "Cloud and infrastructure", "Data and reporting", "Integration"];

export default function TechStack() {
  return <TechnologyMarquee technologies={groups.flatMap(group => serviceDelivery.techStack[group])} />;
}
