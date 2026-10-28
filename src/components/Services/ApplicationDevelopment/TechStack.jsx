import TechnologyMarquee from "@/components/TechnologyMarquee";
import { serviceDelivery } from "@/content/serviceDelivery";

const groups = ["Languages and frameworks", "Cloud and infrastructure", "Integration", "Content and design"];

export default function TechStack() {
  return <TechnologyMarquee technologies={groups.flatMap(group => serviceDelivery.techStack[group])} />;
}
