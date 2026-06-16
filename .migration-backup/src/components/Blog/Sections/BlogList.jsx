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
      } relative bg-white rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border border-gray-100`}
    >
      {/* Gradient Border Effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300 blur" />
      
      <div className="relative bg-white rounded-2xl overflow-hidden">
        <div className="relative overflow-hidden">
          {blog.mainImage ? (
            <Image
              src={urlForImage(blog.mainImage)}
              alt={blog.title}
              width={800}
              height={featured ? 500 : 400}
              className={`w-full ${
                featured ? "h-80" : "h-64"
              } object-cover group-hover:scale-110 transition-transform duration-500`}
            />
          ) : (
            <div
              className={`w-full ${
                featured ? "h-80" : "h-64"
              } bg-gradient-to-br from-[#6622DC] via-[#391C6C] to-[#180030] flex items-center justify-center`}
            >
              <span className="text-white text-5xl font-bold">
                {blog.title.charAt(0)}
              </span>
            </div>
          )}
          
          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {featured && (
            <div className="absolute top-4 left-4 bg-gradient-to-r from-[#6622DC] to-[#391C6C] text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
              ⭐ Featured
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
                  className="text-xs bg-gradient-to-r from-purple-100 to-indigo-100 text-[#391C6C] px-3 py-1 rounded-full font-medium"
                >
                  {category}
                </span>
              ))}
            </div>
          )}

          <h3
            className={`font-bold text-[#180030] mb-3 group-hover:text-[#6622DC] transition-colors ${
              featured ? "text-2xl" : "text-xl"
            } line-clamp-2 leading-tight`}
          >
            {blog.title}
          </h3>

          {blog.excerpt && (
            <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">{blog.excerpt}</p>
          )}

          <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
            <div className="flex items-center gap-4">
              {blog.publishedAt && (
                <div className="flex items-center gap-1.5">
                  <Calendar size={16} className="text-[#6622DC]" />
                  <span className="font-medium">{format(new Date(blog.publishedAt), "MMM dd, yyyy")}</span>
                </div>
              )}
              {blog.readTime && (
                <div className="flex items-center gap-1.5">
                  <Clock size={16} className="text-[#6622DC]" />
                  <span className="font-medium">{blog.readTime} min</span>
                </div>
              )}
            </div>
          </div>

          {blog.author && (
            <div className="flex items-center gap-3 mb-4 pb-4 border-b border-gray-100">
              <div className="w-10 h-10 bg-gradient-to-br from-[#6622DC] to-[#391C6C] rounded-full flex items-center justify-center text-white font-bold text-sm">
                {blog.author.charAt(0)}
              </div>
              <div>
                <p className="text-xs text-gray-500">Written by</p>
                <p className="text-sm font-semibold text-gray-700">{blog.author}</p>
              </div>
            </div>
          )}

          <div className="flex items-center justify-between">
            <span className="text-[#6622DC] font-bold text-sm group-hover:text-[#391C6C] transition-colors">
              Read Article
            </span>
            <div className="w-8 h-8 bg-[#6622DC] group-hover:bg-[#391C6C] rounded-full flex items-center justify-center transition-all">
              <ArrowRight size={16} className="text-white group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
