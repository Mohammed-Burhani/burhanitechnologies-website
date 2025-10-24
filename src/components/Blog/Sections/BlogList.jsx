"use client";
import React, { useEffect, useState } from "react";
import Container from "@/components/constants/Container";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "iconsax-react";
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
            mainImage,
            author,
            publishedAt,
            readTime,
            categories,
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
      <Container className="bg-white py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="animate-pulse">
              <div className="bg-gray-200 h-64 rounded-lg mb-4" />
              <div className="h-4 bg-gray-200 rounded w-3/4 mb-2" />
              <div className="h-4 bg-gray-200 rounded w-1/2" />
            </div>
          ))}
        </div>
      </Container>
    );
  }

  const featuredBlogs = blogs.filter((blog) => blog.featured);
  const regularBlogs = blogs.filter((blog) => !blog.featured);

  return (
    <Container className="bg-white py-16">
      {/* Featured Blogs */}
      {featuredBlogs.length > 0 && (
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-[#180030] mb-8">
            Featured Articles
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredBlogs.map((blog) => (
              <BlogCard key={blog._id} blog={blog} featured />
            ))}
          </div>
        </div>
      )}

      {/* All Blogs */}
      <div>
        <h2 className="text-3xl font-bold text-[#180030] mb-8">
          Latest Articles
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularBlogs.map((blog) => (
            <BlogCard key={blog._id} blog={blog} />
          ))}
        </div>
      </div>

      {blogs.length === 0 && (
        <div className="text-center py-16">
          <p className="text-gray-500 text-lg">No blog posts available yet.</p>
        </div>
      )}
    </Container>
  );
};

export default BlogList;

const BlogCard = ({ blog, featured = false }) => {
  return (
    <Link
      href={`/blog/${blog.slug.current}`}
      className={`group block ${
        featured ? "lg:col-span-1" : ""
      } hover:shadow-2xl transition-shadow duration-300 rounded-lg overflow-hidden border border-gray-200`}
    >
      <div className="relative overflow-hidden">
        {blog.mainImage ? (
          <Image
            src={urlForImage(blog.mainImage)}
            alt={blog.title}
            width={800}
            height={featured ? 500 : 400}
            className={`w-full ${
              featured ? "h-80" : "h-64"
            } object-cover group-hover:scale-105 transition-transform duration-300`}
          />
        ) : (
          <div
            className={`w-full ${
              featured ? "h-80" : "h-64"
            } bg-gradient-to-br from-purple-400 to-indigo-600 flex items-center justify-center`}
          >
            <span className="text-white text-4xl font-bold">
              {blog.title.charAt(0)}
            </span>
          </div>
        )}
        {featured && (
          <div className="absolute top-4 left-4 bg-[#6622DC] text-white px-3 py-1 rounded-full text-sm font-semibold">
            Featured
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

        <h3
          className={`font-bold text-[#180030] mb-3 group-hover:text-[#6622DC] transition-colors ${
            featured ? "text-2xl" : "text-xl"
          } line-clamp-2`}
        >
          {blog.title}
        </h3>

        {blog.excerpt && (
          <p className="text-gray-600 mb-4 line-clamp-3">{blog.excerpt}</p>
        )}

        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center gap-4">
            {blog.publishedAt && (
              <div className="flex items-center gap-1">
                <Calendar size={16} />
                <span>{format(new Date(blog.publishedAt), "MMM dd, yyyy")}</span>
              </div>
            )}
            {blog.readTime && (
              <div className="flex items-center gap-1">
                <Clock size={16} />
                <span>{blog.readTime} min</span>
              </div>
            )}
          </div>
        </div>

        {blog.author && (
          <div className="mt-4 pt-4 border-t border-gray-200">
            <p className="text-sm text-gray-600">By {blog.author}</p>
          </div>
        )}

        <div className="mt-4 flex items-center text-[#6622DC] font-semibold group-hover:gap-2 transition-all">
          <span>Read More</span>
          <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
};
