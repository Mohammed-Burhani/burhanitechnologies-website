import { articleImages } from "@/content/articleImages";
import { urlForImage } from "@/sanity/lib/image";

export function getArticleArtwork(blog) {
  const slug = blog?.slug?.current;
  if (Object.hasOwn(articleImages, slug)) return articleImages[slug];
  const src = blog?.mainImage && urlForImage(blog.mainImage);
  return src ? { src, alt: blog.mainImage.alt || blog.title } : null;
}
