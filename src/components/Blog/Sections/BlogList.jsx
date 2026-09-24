"use client";
import React, { useEffect, useState } from "react";
import Container from "@/components/constants/Container";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import Link from "next/link";
import {
  ArrowRight,
  CalendarBlank,
  Clock,
  Article,
} from "@phosphor-icons/react";
import { format } from "date-fns";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await client.fetch(
          `*[_type == "blog"] | order(publishedAt desc) {
            _id,
            title,
            slug,
            excerpt,
            mainImage {
              asset,
              alt,
              caption
            },
            author->{name, image},
            publishedAt,
            readTime,
            categories[]->{title},
            featured
          }`
        );
        setBlogs(result);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <section className="border-t border-white/5 bg-[#0B0B10] py-16 lg:py-20">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="animate-pulse">
                <div className="mb-4 aspect-video rounded-2xl bg-white/5" />
                <div className="mb-2 h-4 w-1/3 rounded bg-white/5" />
                <div className="mb-2 h-4 w-3/4 rounded bg-white/5" />
                <div className="h-4 w-1/2 rounded bg-white/5" />
              </div>
            ))}
          </div>
        </Container>
      </section>
    );
  }

  const featuredBlogs = blogs.filter((blog) => blog.featured);
  const regularBlogs = blogs.filter((blog) => !blog.featured);

  if (blogs.length === 0) {
    return (
      <section className="border-t border-white/5 bg-[#0B0B10] py-16 lg:py-20">
        <Container>
          <div className="flex flex-col items-center gap-3 py-16 text-center">
            <Article size={40} weight="light" className="text-zinc-600" />
            <p className="text-base text-zinc-400">
              No articles published yet. Check back soon.
            </p>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section className="border-t border-white/5 bg-[#0B0B10] py-16 lg:py-20">
      <Container>
        {featuredBlogs.length > 0 && (
          <div className="mb-16 lg:mb-20">
            <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Featured articles
            </h2>
            <div className="mt-8 flex flex-col gap-6 lg:mt-10">
              {featuredBlogs.map((blog) => (
                <FeaturedCard key={blog._id} blog={blog} />
              ))}
            </div>
          </div>
        )}

        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            Latest articles
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-10 lg:grid-cols-3">
            {regularBlogs.map((blog) => (
              <BlogCard key={blog._id} blog={blog} />
            ))}
          </div>
          {regularBlogs.length === 0 && featuredBlogs.length > 0 && (
            <p className="mt-8 text-sm text-zinc-500">
              More articles are on the way.
            </p>
          )}
        </div>
      </Container>
    </section>
  );
};

export default BlogList;

const CardMedia = ({ blog, className }) => {
  const image = blog.mainImage && urlForImage(blog.mainImage);

  if (image) {
    return (
      <Image
        src={image}
        alt={blog.mainImage.alt || blog.title}
        width={900}
        height={600}
        className={`h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 ${className}`}
      />
    );
  }

  return (
    <div
      className={`flex h-full w-full items-center justify-center bg-white/[0.03] ${className}`}
    >
      <Article size={40} weight="light" className="text-zinc-700" />
    </div>
  );
};

const CardMeta = ({ blog }) => (
  <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-zinc-500">
    {blog.publishedAt && (
      <span className="inline-flex items-center gap-1.5">
        <CalendarBlank size={14} weight="regular" />
        {format(new Date(blog.publishedAt), "MMM d, yyyy")}
      </span>
    )}
    {blog.readTime && (
      <span className="inline-flex items-center gap-1.5">
        <Clock size={14} weight="regular" />
        {blog.readTime} min read
      </span>
    )}
  </div>
);

const AuthorRow = ({ author }) => {
  if (!author?.name) return null;

  return (
    <div className="flex items-center gap-2.5">
      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#6F36D2]/20 text-xs font-semibold text-[#B79CE8]">
        {author.name.charAt(0)}
      </div>
      <span className="text-sm text-zinc-300">{author.name}</span>
    </div>
  );
};

const FeaturedCard = ({ blog }) => {
  const category = blog.categories?.[0]?.title;

  return (
    <Link
      href={`/blog/${blog.slug.current}`}
      className="group grid grid-cols-1 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] transition-all duration-300 hover:-translate-y-1 hover:border-[#6F36D2]/40 hover:bg-white/[0.04] lg:grid-cols-2"
    >
      <div className="relative aspect-[16/10] overflow-hidden lg:aspect-auto">
        <CardMedia blog={blog} className="absolute inset-0" />
        <span className="absolute left-4 top-4 rounded-full bg-[#6F36D2] px-3 py-1 text-xs font-medium text-white">
          Featured
        </span>
      </div>

      <div className="flex flex-col justify-center gap-4 p-6 lg:p-10">
        {category && (
          <span className="text-xs font-medium uppercase tracking-wide text-[#B79CE8]">
            {category}
          </span>
        )}

        <h3 className="text-xl font-semibold leading-snug text-white transition-colors duration-200 group-hover:text-[#B79CE8] sm:text-2xl">
          {blog.title}
        </h3>

        {blog.excerpt && (
          <p className="line-clamp-3 text-sm leading-relaxed text-zinc-400 sm:text-base">
            {blog.excerpt}
          </p>
        )}

        <CardMeta blog={blog} />

        <div className="flex items-center justify-between border-t border-white/5 pt-4">
          <AuthorRow author={blog.author} />
          <span className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-400 transition-colors duration-200 group-hover:text-[#B79CE8]">
            Read article
            <ArrowRight
              size={14}
              weight="bold"
              className="transition-transform duration-200 group-hover:translate-x-0.5"
            />
          </span>
        </div>
      </div>
    </Link>
  );
};

const BlogCard = ({ blog }) => {
  const category = blog.categories?.[0]?.title;

  return (
    <Link
      href={`/blog/${blog.slug.current}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] transition-all duration-300 hover:-translate-y-1 hover:border-[#6F36D2]/40 hover:bg-white/[0.04]"
    >
      <div className="relative aspect-video overflow-hidden">
        <CardMedia blog={blog} className="absolute inset-0" />
      </div>

      <div className="flex flex-1 flex-col gap-3 p-6">
        {category && (
          <span className="text-xs font-medium uppercase tracking-wide text-[#B79CE8]">
            {category}
          </span>
        )}

        <h3 className="line-clamp-2 text-lg font-semibold leading-snug text-white transition-colors duration-200 group-hover:text-[#B79CE8]">
          {blog.title}
        </h3>

        {blog.excerpt && (
          <p className="line-clamp-2 text-sm leading-relaxed text-zinc-400">
            {blog.excerpt}
          </p>
        )}

        <CardMeta blog={blog} />

        <div className="mt-auto flex items-center justify-between border-t border-white/5 pt-4">
          <AuthorRow author={blog.author} />
          <span className="inline-flex items-center gap-1 text-sm font-medium text-zinc-400 transition-colors duration-200 group-hover:text-[#B79CE8]">
            Read
            <ArrowRight
              size={14}
              weight="bold"
              className="transition-transform duration-200 group-hover:translate-x-0.5"
            />
          </span>
        </div>
      </div>
    </Link>
  );
};
