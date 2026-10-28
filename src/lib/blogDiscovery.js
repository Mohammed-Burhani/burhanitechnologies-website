import { client } from "@/sanity/lib/client";
import { formatPublicationDate } from "@/lib/publicationDate";

// Discovery must follow CMS publication without depending on a new site build.
const publishedClient = client.withConfig({
  useCdn: false,
  perspective: "published",
});

const CARD_QUERY = `*[_type == "blog" && defined(slug.current) && slug.current != ""]
  | order(publishedAt desc, _createdAt desc) {
    _id,
    title,
    slug,
    excerpt,
    mainImage { asset, alt, caption },
    author->{ name, image },
    publishedAt,
    readTime,
    categories[]->{ title },
    featured
  }`;

export async function getPublishedBlogCards() {
  const blogs = await publishedClient.fetch(CARD_QUERY, {}, { cache: "no-store" });

  return blogs.map((blog) => ({
    ...blog,
    // One server-formatted value prevents browser timezone hydration differences.
    publishedDateLabel: formatPublicationDate(blog.publishedAt, "short"),
    author: typeof blog.author?.name === "string" ? blog.author : null,
  }));
}

export async function getPublishedSitemapContent() {
  return publishedClient.fetch(
    `{
      "services": *[_type == "services" && defined(slug.current) && slug.current != ""] {
        slug, _updatedAt
      },
      "blogs": *[_type == "blog" && defined(slug.current) && slug.current != ""] {
        slug, _updatedAt, publishedAt
      },
      "caseStudies": *[_type == "caseStudy" && defined(slug.current) && slug.current != ""] {
        slug, _updatedAt, publishedAt
      }
    }`,
    {},
    { cache: "no-store" }
  );
}
