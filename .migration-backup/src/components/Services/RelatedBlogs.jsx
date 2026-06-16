"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Container from "@/components/constants/Container";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import { Calendar, Clock, ArrowRight } from "iconsax-react";
import { format } from "date-fns";

const RelatedBlogs = ({ serviceTitle }) => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        // Fetch blogs that might be related to the service
        // You can customize the query based on your needs
        const result = await client.fetch(
          `*[_type == "blog"] | order(publishedAt desc) [0...3]{
            _id,
            title,
            slug,
            excerpt,
            mainImage,
            author,
            publishedAt,
            readTime,
            categories
          }`
        );
        setBlogs(result);
      } catch (error) {
        console.error("Error fetching related blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [serviceTitle]);

  if (loading) {
    return (
      <Container className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-inter text-captionLarge xl:text-mdcaptionLarge 4xl:text-lgcaptionLarge 7xl:mdtext-captionLarge leading-snug font-bold text-[#180030] mb-8">Related Blog Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="animate-pulse">
                <div className="bg-gray-200 h-48 rounded-lg mb-4" />
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-2" />
                <div className="h-4 bg-gray-200 rounded w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </Container>
    );
  }

  if (blogs.length === 0) {
    return null;
  }

  return (
    <Container className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-inter text-captionLarge xl:text-mdcaptionLarge 4xl:text-lgcaptionLarge 7xl:mdtext-captionLarge leading-snug font-bold text-[#180030]">Related Blog Posts</h2>
          <Link
            href="/blog"
            className="text-[#6622DC] hover:underline flex items-center gap-2 font-semibold"
          >
            View All Blogs
            <ArrowRight size={20} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
  return (
    <Link
      href={`/blog/${blog.slug.current}`}
      className="group block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
    >
      <div className="relative overflow-hidden">
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
      </div>

      <div className="p-6">
        {/* Categories */}
        {blog.categories && blog.categories.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-3">
            {blog.categories.slice(0, 2).map((category, index) => (
              <span
                key={index}
                className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded"
              >
                {category}
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
                  {format(new Date(blog.publishedAt), "MMM dd, yyyy")}
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

        <div className="flex items-center text-[#6622DC] font-semibold text-sm">
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
