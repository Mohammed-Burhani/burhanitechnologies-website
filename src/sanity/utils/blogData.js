import { cache } from "react";
import { client } from "../lib/client";

const BLOG_QUERY = `*[_type == "blog" && slug.current == $slug][0]{
  _id,
  _updatedAt,
  title,
  slug,
  excerpt,
  body,
  mainImage { asset, alt, caption },
  "author": author->{ name, image, role, bio, "articleCount": count(*[_type == "blog" && references(^._id)]) },
  publishedAt,
  readTime,
  "categories": categories[]->{ _id, title, "slug": slug.current }[defined(_id)],
  tags
}`;

const RELATED_FIELDS = `{
  _id,
  title,
  slug,
  excerpt,
  mainImage { asset, alt, caption },
  "author": author->{ name, image },
  "category": categories[0]->{ title },
  publishedAt,
  readTime
}`;

// Share one published CMS snapshot between the page, metadata and JSON-LD.
export const getBlog = cache((slug) =>
  client.fetch(BLOG_QUERY, { slug }, { next: { revalidate: 60 } })
);

export async function getRelatedBlogs(blog) {
  const slug = blog.slug.current;
  const categoryIds = (blog.categories || [])
    .filter((category) => category?._id)
    .map((category) => category._id);
  let related = categoryIds.length
    ? await client.fetch(
        `*[_type == "blog" && defined(slug.current) && slug.current != $slug &&
          count((categories[]->_id)[@ in $categoryIds]) > 0]
          | order(publishedAt desc)[0...3]${RELATED_FIELDS}`,
        { slug, categoryIds },
        { next: { revalidate: 60 } }
      )
    : [];

  if (!related?.length) {
    related = await client.fetch(
      `*[_type == "blog" && defined(slug.current) && slug.current != $slug]
        | order(publishedAt desc)[0...3]${RELATED_FIELDS}`,
      { slug },
      { next: { revalidate: 60 } }
    );
  }

  return (related || []).filter((post) => post?.slug?.current);
}
