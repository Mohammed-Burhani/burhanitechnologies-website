import { notFound } from "next/navigation";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import { getBlog, getRelatedBlogs } from "@/sanity/utils/blogData";
import BlogPageClient from "./BlogPageClient";

export const revalidate = 60;

const blogUrl = (slug) => `https://burhanitechnologies.com/blog/${slug}`;
const serializeSchema = (schema) => JSON.stringify(schema).replace(/</g, "\\u003c");

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const blog = await getBlog(slug);
  if (!blog) notFound();

  const url = blogUrl(blog.slug.current);
  const description = blog.excerpt || blog.title;
  const image = urlForImage(blog.mainImage);
  const images = image ? [{ url: image, alt: blog.mainImage?.alt || blog.title }] : [];

  return {
    title: `${blog.title} | Burhani Technologies Blog`,
    description,
    openGraph: {
      title: blog.title,
      description,
      url,
      type: "article",
      publishedTime: blog.publishedAt,
      modifiedTime: blog._updatedAt,
      authors: [blog.author?.name].filter(Boolean),
      images,
    },
    twitter: {
      card: image ? "summary_large_image" : "summary",
      title: blog.title,
      description,
      images: image ? [image] : [],
    },
    alternates: { canonical: url },
  };
}

export async function generateStaticParams() {
  const blogs = await client.fetch(
    `*[_type == "blog" && defined(slug.current)]{ "slug": slug.current }`
  );
  return blogs.map(({ slug }) => ({ slug }));
}

export default async function BlogPost({ params }) {
  const { slug } = await params;
  const blog = await getBlog(slug);
  if (!blog) notFound();

  const relatedBlogs = await getRelatedBlogs(blog);
  const url = blogUrl(blog.slug.current);
  const image = urlForImage(blog.mainImage);
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    headline: blog.title,
    description: blog.excerpt || blog.title,
    url,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    ...(blog.author?.name && {
      author: {
        // The current CMS byline identifies an editorial team, not a person.
        "@type": blog.author.name === "Burhani Technologies Team" ? "Organization" : "Person",
        name: blog.author.name,
      },
    }),
    ...(image && { image }),
    ...(blog.publishedAt && { datePublished: blog.publishedAt }),
    ...(blog._updatedAt && { dateModified: blog._updatedAt }),
    publisher: {
      "@type": "Organization",
      name: "Burhani Technologies",
      url: "https://burhanitechnologies.com",
      logo: {
        "@type": "ImageObject",
        url: "https://burhanitechnologies.com/BT-Logo.svg",
      },
    },
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://burhanitechnologies.com" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://burhanitechnologies.com/blog" },
      { "@type": "ListItem", position: 3, name: blog.title, item: url },
    ],
  };

  return (
    <>
      <script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeSchema(articleSchema) }}
      />
      <script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeSchema(breadcrumbSchema) }}
      />
      <BlogPageClient blogDetails={blog} relatedBlogs={relatedBlogs} />
    </>
  );
}
