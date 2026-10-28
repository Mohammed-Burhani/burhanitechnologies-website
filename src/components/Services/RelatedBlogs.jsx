import React from "react";
import Link from "next/link";
import Image from "next/image";
import Container from "@/components/constants/Container";
import { client } from "@/sanity/lib/client";
import { getArticleArtwork } from "@/lib/articleArtwork";
import { Calendar, Clock, ArrowRight } from "iconsax-react";
import { formatPublicationDate } from "@/lib/publicationDate";
import { getServiceArticleSlugs } from "@/lib/serviceArticles";

async function getRelatedBlogs(serviceSlug) {
  const slugs = getServiceArticleSlugs(serviceSlug);
  const query = `*[_type == "blog" && !(_id in path("drafts.**")) && defined(slug.current)
    && slug.current in $slugs]{
    _id,
    title,
    slug,
    excerpt,
    mainImage {
      asset,
      alt,
      caption
    },
    author->{name},
    publishedAt,
    readTime,
    categories[]->{title}
  }`;

  if (!slugs.length) return [];
  const blogs = await client.fetch(query, { slugs }, { next: { revalidate: 60 } });
  return slugs.map((slug) => blogs.find((blog) => blog.slug?.current === slug)).filter(Boolean);
}

const RelatedBlogs = async ({ serviceSlug }) => {
  const blogs = await getRelatedBlogs(serviceSlug);

  if (blogs.length === 0) {
    return null;
  }

  return (
    <Container className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8 flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
          <h2 className="font-inter text-captionLarge xl:text-mdcaptionLarge 4xl:text-lgcaptionLarge 7xl:mdtext-captionLarge leading-snug font-bold text-[#180030]">Related Blog Posts</h2>
          <Link
            href="/blog"
            className="inline-flex min-h-11 shrink-0 items-center gap-2 whitespace-nowrap font-semibold text-[#6622DC] hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#6F36D2]"
          >
            View All Blogs
            <ArrowRight size={20} />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <BlogCard key={blog._id} blog={blog} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default RelatedBlogs;

const BlogCard = ({ blog }) => {
  const artwork = getArticleArtwork(blog);
  return (
    <Link
      href={`/blog/${blog.slug.current}`}
      className="group flex h-full flex-col overflow-hidden rounded-lg bg-white shadow-md transition-shadow duration-300 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#6F36D2]"
    >
      <div className="relative shrink-0 overflow-hidden">
        {artwork ? (
          <Image
            src={artwork.src}
            alt={artwork.alt}
            width={400}
            height={250}
            className={`w-full h-48 ${artwork.preserveFrame ? "object-contain" : "object-cover group-hover:scale-105 transition-transform duration-300"}`}
          />
        ) : (
          <div className="w-full h-48 bg-gradient-to-br from-purple-400 to-indigo-600 flex items-center justify-center">
            <span className="text-white text-3xl font-bold">
              {blog.title.charAt(0)}
            </span>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        {/* Categories */}
        {blog.categories && blog.categories.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-3">
            {blog.categories.slice(0, 2).map((category, index) => (
              <span
                key={index}
                className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded"
              >
                {category.title}
              </span>
            ))}
          </div>
        )}

        <h3 className="font-bold text-lg text-[#180030] mb-2 group-hover:text-[#6622DC] transition-colors line-clamp-2">
          {blog.title}
        </h3>

        {blog.excerpt && (
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {blog.excerpt}
          </p>
        )}

        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <div className="flex items-center gap-3">
            {blog.publishedAt && (
              <div className="flex items-center gap-1">
                <Calendar size={14} />
                <span className="text-xs">
                  {formatPublicationDate(blog.publishedAt, "short")}
                </span>
              </div>
            )}
            {blog.readTime && (
              <div className="flex items-center gap-1">
                <Clock size={14} />
                <span className="text-xs">{blog.readTime} min</span>
              </div>
            )}
          </div>
        </div>

        <div className="mt-auto flex items-center text-sm font-semibold text-[#6622DC]">
          <span>Read Article</span>
          <ArrowRight
            size={16}
            className="ml-1 group-hover:translate-x-1 transition-transform"
          />
        </div>
      </div>
    </Link>
  );
};
