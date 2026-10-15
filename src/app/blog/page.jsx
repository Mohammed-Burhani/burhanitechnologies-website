import { Banner } from "@/components/Blog/Sections/Banner";
import BlogList from "@/components/Blog/Sections/BlogList";
import { getPublishedBlogCards } from "@/lib/blogDiscovery";
import React from "react";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Tech Blog | Software Development Insights | Burhani Technologies",
  description:
    "Stay updated with the latest trends in software development, AI automation, DevOps, mobile apps, and business process automation. Expert insights and tutorials from Burhani Technologies.",
  keywords: [
    "software development blog",
    "tech blog",
    "AI automation insights",
    "DevOps tutorials",
    "mobile app development tips",
    "business automation",
    "technology trends",
    "programming tutorials",
  ],
  openGraph: {
    title: "Tech Blog | Burhani Technologies",
    description:
      "Stay updated with the latest trends in software development, AI automation, DevOps, and business process automation.",
    url: "https://burhanitechnologies.com/blog",
  },
  alternates: {
    canonical: "https://burhanitechnologies.com/blog",
  },
};

const Blog = async () => {
  const blogs = await getPublishedBlogCards();

  return (
    <div>
      <Banner />
      <BlogList blogs={blogs} />
      {/* <Testimonials />
      <CTA2 /> */}
    </div>
  );
};

export default Blog;
