import Banner from "@/components/Home/Banner";
import { About1 } from "@/components/Home/Sections/About1";
import { Client } from "@/components/Home/Sections/Client";
import { CTA } from "@/components/Home/Sections/CTA";
import { CTA2 } from "@/components/Home/Sections/CTA2";
import { LatestProjects } from "@/components/Home/Sections/LatestProjects";
import { Testimonials } from "@/components/Home/Sections/Testimonials";
import { WhoAreWe } from "@/components/Home/Sections/WhoAreWe";

export default function Home() {
  return (
    <div className="">
      <Banner />
      <Client />
      <About1 />
      <WhoAreWe />
      <CTA />
      <LatestProjects />
      <Testimonials />
      <CTA2 />
    </div>
  );
}
