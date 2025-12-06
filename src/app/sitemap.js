import { client } from "@/sanity/lib/client";

export default async function sitemap() {
  const baseUrl = "https://burhanitechnologies.com";

  // Fetch all services from Sanity
  const services = await client.fetch(`*[_type == "services"]{ 
    slug, 
    _updatedAt 
  }`);

  // Fetch all blogs from Sanity
  const blogs = await client.fetch(`*[_type == "blog"]{ 
    slug, 
    _updatedAt,
    publishedAt
  }`);

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/leadership`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/values`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/why-choose-us`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/knowledge-base`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];

  // Dynamic service pages
  const servicePages = services.map((service) => ({
    url: `${baseUrl}/services/${service.slug.current}`,
    lastModified: new Date(service._updatedAt),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  // Dynamic blog pages
  const blogPages = blogs.map((blog) => ({
    url: `${baseUrl}/blog/${blog.slug.current}`,
    lastModified: new Date(blog._updatedAt || blog.publishedAt),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticPages, ...servicePages, ...blogPages];
}
