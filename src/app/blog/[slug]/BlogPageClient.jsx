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
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#180030] to-[#391C6C] text-white py-16">
        <Container>
          <div className="max-w-4xl mx-auto">
            <Link
              href="/blog"
              className="text-white/80 hover:text-white flex items-center gap-2 mb-6 transition-colors"
            >
              <ArrowLeft size={20} />
              Back to Blog
            </Link>

            {/* Categories */}
            {blogDetails.categories && blogDetails.categories.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {blogDetails.categories.map((category, index) => (
                  <span
                    key={index}
                    className="bg-white/20 text-white px-3 py-1 rounded-full text-sm"
                  >
                    {category}
                  </span>
                ))}
              </div>
            )}

            <Heading className="text-white mb-6">{blogDetails.title}</Heading>

            {blogDetails.excerpt && (
              <p className="text-xl text-gray-200 mb-6">
                {blogDetails.excerpt}
              </p>
            )}

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-6 text-gray-200">
              {blogDetails.author && (
                <div className="flex items-center gap-2">
                  <User size={20} />
                  <span>{blogDetails.author}</span>
                </div>
              )}
              {blogDetails.publishedAt && (
                <div className="flex items-center gap-2">
                  <Calendar size={20} />
                  <span>
                    {format(new Date(blogDetails.publishedAt), "MMMM dd, yyyy")}
                  </span>
                </div>
              )}
              {blogDetails.readTime && (
                <div className="flex items-center gap-2">
                  <Clock size={20} />
                  <span>{blogDetails.readTime} min read</span>
                </div>
              )}
            </div>
          </div>
        </Container>
      </div>

      {/* Main Content */}
      <Container className="py-16">
        <div className="max-w-4xl mx-auto">
          {/* Featured Image */}
          {blogDetails.mainImage && (
            <Image
              src={urlForImage(blogDetails.mainImage)}
              alt={blogDetails.title}
              width={1200}
              height={600}
              className="w-full h-auto rounded-2xl mb-12 shadow-lg"
            />
          )}

          {/* Blog Content */}
          <article className="prose prose-lg max-w-none">
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
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {blogDetails.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-gray-200 transition-colors"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          )}
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
