import { Banner } from "@/components/Blog/Sections/Banner";
import BlogList from "@/components/Blog/Sections/BlogList";
import { getPublishedBlogCards } from "@/lib/blogDiscovery";
import React from "react";
import { approvedMetadata } from "@/components/ApprovedContent/ApprovedPage";

export const dynamic = "force-dynamic";

export const metadata = approvedMetadata({
  metaTitle: "Blog | Custom Software, ERP and Automation | Burhani",
  metaDescription: "Practitioner writing on ERP, business process automation, cloud and product design, from the team at Burhani Technologies.",
}, "/blog");

const Blog = async () => {
  const blogs = await getPublishedBlogCards();

  return (
    <main id="main">
      <Banner />
      <BlogList blogs={blogs} />
      {/* <Testimonials />
      <CTA2 /> */}
    </main>
  );
};

export default Blog;
