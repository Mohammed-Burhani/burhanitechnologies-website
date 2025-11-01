import { CTA2 } from "@/components/Home/Sections/CTA2";
import { Testimonials } from "@/components/Home/Sections/Testimonials";
import { Banner } from "@/components/Blog/Sections/Banner";
import BlogList from "@/components/Blog/Sections/BlogList";
import React from "react";

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

const Blog = () => {
  return (
    <div>
      <Banner />
      <BlogList />
      <Testimonials />
      <CTA2 />
    </div>
  );
};

export default Blog;
