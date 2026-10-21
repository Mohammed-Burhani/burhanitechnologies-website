import TechnologyMarquee from "@/components/TechnologyMarquee";
import { serviceDelivery } from "@/content/serviceDelivery";

const groups = ["Cloud and infrastructure", "DevOps", "Integration"];

export default function TechStack() {
  return <TechnologyMarquee technologies={groups.flatMap(group => serviceDelivery.techStack[group])} />;
}
