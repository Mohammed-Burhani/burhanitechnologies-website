"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Container from "@/components/constants/Container";
import { client } from "@/sanity/lib/client";
import { PortableText } from "next-sanity";
import { components } from "@/utils/components";
import { Heading } from "@/components/textComponents/Heading";
import { urlForImage } from "@/sanity/lib/image";
import { PortableBody } from "@/components/textComponents/PortableBody";
import { Calendar, Clock, User, ArrowLeft, ArrowRight } from "iconsax-react";
import { format } from "date-fns";

const BlogPageClient = ({ slug }) => {
  const [blogDetails, setBlogDetails] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch single blog post
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await client.fetch(
          `*[_type == "blog" && slug.current == $slug] [0]{
            _id,
            title,
            slug,
            excerpt,
            body,
            mainImage,
            author,
            publishedAt,
            readTime,
            categories,
            tags
          }`,
          { slug }
        );
        setBlogDetails(result);
      } catch (error) {
        console.error("Error fetching blog:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [slug]);

  // Fetch related blogs
  useEffect(() => {
    if (blogDetails?.categories) {
      const fetchRelated = async () => {
        try {
          const result = await client.fetch(
            `*[_type == "blog" && slug.current != $slug && count((categories[])[@ in $categories]) > 0] [0...3]{
              _id,
              title,
              slug,
              excerpt,
              mainImage,
              publishedAt,
              readTime
            }`,
            { slug, categories: blogDetails.categories }
          );
          setRelatedBlogs(result);
        } catch (error) {
          console.error("Error fetching related blogs:", error);
        }
      };

      fetchRelated();
    }
  }, [blogDetails, slug]);

  if (loading) {
    return (
      <Container className="bg-white py-16">
        <div className="max-w-4xl mx-auto">
          <div className="animate-pulse">
            <div className="h-96 bg-gray-200 rounded-lg mb-8" />
            <div className="h-8 bg-gray-200 rounded w-3/4 mb-4" />
            <div className="h-4 bg-gray-200 rounded w-1/2 mb-8" />
            <div className="space-y-3">
              <div className="h-4 bg-gray-200 rounded" />
              <div className="h-4 bg-gray-200 rounded" />
              <div className="h-4 bg-gray-200 rounded w-5/6" />
            </div>
          </div>
        </div>
      </Container>
    );
  }

  if (!blogDetails) {
    return (
      <Container className="bg-white py-16">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Blog post not found
          </h2>
          <Link
            href="/blog"
            className="text-[#6622DC] hover:underline flex items-center justify-center gap-2"
          >
            <ArrowLeft size={20} />
            Back to Blog
          </Link>
        </div>
      </Container>
    );
  }

  return (
    <div className="bg-white">
      {/* Hero Section with Centered Content */}
      <div className="relative bg-gradient-to-br from-[#180030] via-[#391C6C] to-[#6622DC] text-white py-20 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-300 rounded-full blur-3xl" />
        </div>
        
        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors"
            >
              <ArrowLeft size={20} />
              <span>Back to Blog</span>
            </Link>

            {/* Categories */}
            {blogDetails.categories && blogDetails.categories.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-6 justify-center">
                {blogDetails.categories.map((category, index) => (
                  <span
                    key={index}
                    className="bg-white/20 backdrop-blur-sm text-white px-4 py-1.5 rounded-full text-sm font-medium"
                  >
                    {category}
                  </span>
                ))}
              </div>
            )}

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {blogDetails.title}
            </h1>

            {blogDetails.excerpt && (
              <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
                {blogDetails.excerpt}
              </p>
            )}

            {/* Meta Information */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-gray-200">
              {blogDetails.author && (
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <User size={20} />
                  </div>
                  <span className="font-medium">{blogDetails.author}</span>
                </div>
              )}
              {blogDetails.publishedAt && (
                <div className="flex items-center gap-2">
                  <Calendar size={18} />
                  <span>
                    {format(new Date(blogDetails.publishedAt), "MMMM dd, yyyy")}
                  </span>
                </div>
              )}
              {blogDetails.readTime && (
                <div className="flex items-center gap-2">
                  <Clock size={18} />
                  <span>{blogDetails.readTime} min read</span>
                </div>
              )}
            </div>
          </div>
        </Container>
      </div>

      {/* Main Content with Sidebar Layout */}
      <Container className="py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content Area */}
            <div className="lg:col-span-2">
              {/* Featured Image with Modern Styling */}
              {blogDetails.mainImage && (
                <div className="relative mb-12 group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300" />
                  <Image
                    src={urlForImage(blogDetails.mainImage)}
                    alt={blogDetails.title}
                    width={1200}
                    height={600}
                    className="relative w-full h-auto rounded-2xl shadow-2xl"
                  />
                </div>
              )}

              {/* Blog Content with Better Typography */}
              <article className="prose prose-lg max-w-none prose-headings:text-[#180030] prose-headings:font-bold prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-[#6622DC] prose-a:no-underline hover:prose-a:underline prose-strong:text-[#391C6C] prose-img:rounded-xl prose-img:shadow-lg">
                {blogDetails.body ? (
                  <PortableBody>
                    <PortableText
                      value={blogDetails.body}
                      components={components}
                    />
                  </PortableBody>
                ) : (
                  <p className="text-gray-600">No content available.</p>
                )}
              </article>

              {/* Tags */}
              {blogDetails.tags && blogDetails.tags.length > 0 && (
                <div className="mt-12 pt-8 border-t-2 border-gray-200">
                  <h3 className="text-xl font-bold text-[#180030] mb-4">Related Topics</h3>
                  <div className="flex flex-wrap gap-3">
                    {blogDetails.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-gradient-to-r from-purple-100 to-indigo-100 text-[#391C6C] px-4 py-2 rounded-full text-sm font-medium hover:from-purple-200 hover:to-indigo-200 transition-all cursor-pointer"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-8">
                {/* Author Card */}
                {blogDetails.author && (
                  <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-6 border border-purple-100">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-[#6622DC] to-[#391C6C] rounded-full flex items-center justify-center text-white text-2xl font-bold">
                        {blogDetails.author.charAt(0)}
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 mb-1">Written by</p>
                        <h4 className="font-bold text-[#180030] text-lg">{blogDetails.author}</h4>
                      </div>
                    </div>
                  </div>
                )}

                {/* Share Section */}
                <div className="bg-white rounded-2xl p-6 border-2 border-gray-200 shadow-sm">
                  <h4 className="font-bold text-[#180030] text-lg mb-4">Share this article</h4>
                  <div className="flex gap-3">
                    <button className="flex-1 bg-[#6622DC] hover:bg-[#391C6C] text-white py-2 px-4 rounded-lg transition-colors text-sm font-medium">
                      Share
                    </button>
                  </div>
                </div>

                {/* Table of Contents Placeholder */}
                <div className="bg-gradient-to-br from-[#180030] to-[#391C6C] rounded-2xl p-6 text-white">
                  <h4 className="font-bold text-lg mb-3">Quick Info</h4>
                  <div className="space-y-3 text-sm">
                    {blogDetails.readTime && (
                      <div className="flex items-center gap-2">
                        <Clock size={16} />
                        <span>{blogDetails.readTime} minutes read</span>
                      </div>
                    )}
                    {blogDetails.publishedAt && (
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        <span>{format(new Date(blogDetails.publishedAt), "MMM dd, yyyy")}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Related Blogs */}
      {relatedBlogs.length > 0 && (
        <Container className="bg-gray-50 py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-[#180030] mb-8">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedBlogs.map((blog) => (
                <RelatedBlogCard key={blog._id} blog={blog} />
              ))}
            </div>
          </div>
        </Container>
      )}
    </div>
  );
};

export default BlogPageClient;

const RelatedBlogCard = ({ blog }) => {
  return (
    <Link
      href={`/blog/${blog.slug.current}`}
      className="group block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
    >
      {blog.mainImage ? (
        <Image
          src={urlForImage(blog.mainImage)}
          alt={blog.title}
          width={400}
          height={250}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
      ) : (
        <div className="w-full h-48 bg-gradient-to-br from-purple-400 to-indigo-600 flex items-center justify-center">
          <span className="text-white text-3xl font-bold">
            {blog.title.charAt(0)}
          </span>
        </div>
      )}

      <div className="p-6">
        <h3 className="font-bold text-lg text-[#180030] mb-2 group-hover:text-[#6622DC] transition-colors line-clamp-2">
          {blog.title}
        </h3>

        {blog.excerpt && (
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {blog.excerpt}
          </p>
        )}

        <div className="flex items-center justify-between text-sm text-gray-500">
          {blog.publishedAt && (
            <span>{format(new Date(blog.publishedAt), "MMM dd, yyyy")}</span>
          )}
          {blog.readTime && <span>{blog.readTime} min</span>}
        </div>

        <div className="mt-4 flex items-center text-[#6622DC] font-semibold">
          <span>Read More</span>
          <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
};
