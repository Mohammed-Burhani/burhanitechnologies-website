import Banner from "@/components/Home/Banner";
import { About1 } from "@/components/Home/Sections/About1";
import { CoreServices } from "@/components/Home/Sections/CoreServices";
import { Differentiators } from "@/components/Home/Sections/Differentiators";
import { LatestProjects } from "@/components/Home/Sections/LatestProjects";
import { CallToActionFAQ } from "@/components/Home/Sections/CallToActionFAQ";

export default function Home() {
  return (
    <div className="">
      <Banner />
      <About1 />
      <CoreServices />
      <Differentiators />
      <LatestProjects />
      <CallToActionFAQ />
    </div>
  );
}
