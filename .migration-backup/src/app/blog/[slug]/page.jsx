import React from "react";
import Script from "next/script";
import { client } from "@/sanity/lib/client";
import { CTA2 } from "@/components/Home/Sections/CTA2";
import BlogPageClient from "./BlogPageClient";

// Generate metadata for SEO
export async function generateMetadata({ params }) {
  const { slug } = await params;

  // Fetch blog details from Sanity
  const blogData = await client.fetch(
    `*[_type == "blog" && slug.current == $slug] [0]{ 
      title, 
      excerpt, 
      author,
      mainImage,
      publishedAt
    }`,
    { slug }
  );

  if (blogData) {
    return {
      title: `${blogData.title} | Burhani Technologies Blog`,
      description: blogData.excerpt || blogData.title,
      keywords: [
        "software development",
        "tech blog",
        "programming",
        "automation",
        blogData.title,
      ],
      openGraph: {
        title: blogData.title,
        description: blogData.excerpt || blogData.title,
        url: `https://burhanitechnologies.com/blog/${slug}`,
        type: "article",
        publishedTime: blogData.publishedAt,
        authors: [blogData.author],
      },
      alternates: {
        canonical: `https://burhanitechnologies.com/blog/${slug}`,
      },
    };
  }

  return {
    title: "Blog Post | Burhani Technologies",
    description: "Read our latest blog post on software development and technology.",
    alternates: {
      canonical: `https://burhanitechnologies.com/blog/${slug}`,
    },
  };
}

// Generate static params for all blogs (optional, for static generation)
export async function generateStaticParams() {
  const blogs = await client.fetch(`*[_type == "blog"]{ slug }`);

  return blogs.map((blog) => ({
    slug: blog.slug.current,
  }));
}

const BlogPost = async ({ params }) => {
  const { slug } = await params;

  // Fetch blog data for schema markup
  const blogData = await client.fetch(
    `*[_type == "blog" && slug.current == $slug] [0]{ 
      title, 
      slug, 
      excerpt,
      author,
      publishedAt,
      mainImage
    }`,
    { slug }
  );

  // Generate Article Schema
  const articleSchema = blogData
    ? {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: blogData.title,
        description: blogData.excerpt,
        author: {
          "@type": "Person",
          name: blogData.author || "Burhani Technologies",
        },
        datePublished: blogData.publishedAt,
        publisher: {
          "@type": "Organization",
          name: "Burhani Technologies",
          logo: {
            "@type": "ImageObject",
            url: "https://burhanitechnologies.com/logo.png",
          },
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `https://burhanitechnologies.com/blog/${slug}`,
        },
      }
    : null;

  // Generate Breadcrumb Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://burhanitechnologies.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://burhanitechnologies.com/blog",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: blogData?.title || "Blog Post",
        item: `https://burhanitechnologies.com/blog/${slug}`,
      },
    ],
  };

  return (
    <>
      {/* Article Schema */}
      {articleSchema && (
        <Script
          id="article-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(articleSchema),
          }}
          strategy="beforeInteractive"
        />
      )}

      {/* Breadcrumb Schema */}
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
        strategy="beforeInteractive"
      />

      <BlogPageClient slug={slug} />

      <CTA2 />
    </>
  );
};

export default BlogPost;
