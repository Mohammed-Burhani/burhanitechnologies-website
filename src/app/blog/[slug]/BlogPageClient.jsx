"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Container from "@/components/constants/Container";
import { PortableText } from "next-sanity";
import { urlForImage } from "@/sanity/lib/image";
import { motion, useScroll, useSpring } from "framer-motion";
import {
  Article,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Check,
  LinkedinLogo,
  LinkSimple,
  ListBullets,
  Sparkle,
  Tag,
  TwitterLogo,
} from "@phosphor-icons/react";
import { formatPublicationDate } from "@/lib/publicationDate";
import { getArticleServiceLinks } from "@/lib/serviceArticles";
import { ArticleWorksheet } from "@/components/Blog/ArticleWorksheet";
import { getArticleArtwork } from "@/lib/articleArtwork";
import AiSummary from "@/components/Blog/BlogAISummary";

// Local PortableText renderers, scoped to the article body only. This
// project has no @tailwindcss/typography plugin installed, so the `prose`
// utility classes previously used here compiled to nothing: every block
// rendered as a bare, unstyled tag and Tailwind's preflight reset stripped
// the browser's default paragraph margin, collapsing every line break the
// team added in Sanity into a single dense run of text. These renderers
// apply real, explicit spacing instead of depending on a plugin that isn't
// there, and add a `types.image` renderer, which was previously entirely
// missing, so in-body images stop silently disappearing.
const headingId = (value) => `h-${value._key}`;

const blogPortableTextComponents = {
  block: {
    h1: ({ children, value }) => (
      <h2
        id={headingId(value)}
        className="mb-4 mt-12 scroll-mt-8 text-2xl font-semibold tracking-tight text-zinc-900 first:mt-0 sm:text-3xl"
      >
        {children}
      </h2>
    ),
    h2: ({ children, value }) => (
      <h2
        id={headingId(value)}
        className="mb-4 mt-12 scroll-mt-8 text-2xl font-semibold tracking-tight text-zinc-900 first:mt-0 sm:text-3xl"
      >
        {children}
      </h2>
    ),
    h3: ({ children, value }) => (
      <h3
        id={headingId(value)}
        className="mb-3 mt-10 scroll-mt-8 text-xl font-semibold tracking-tight text-zinc-900 sm:text-2xl"
      >
        {children}
      </h3>
    ),
    h4: ({ children, value }) => (
      <h4
        id={headingId(value)}
        className="mb-2 mt-8 scroll-mt-8 text-lg font-semibold text-zinc-900"
      >
        {children}
      </h4>
    ),
    normal: ({ children }) => (
      <p className="mb-6 text-base leading-relaxed text-zinc-600 last:mb-0 sm:text-lg">
        {children}
      </p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="my-8 rounded-r-xl border-l-2 border-[#6F36D2] bg-[#6F36D2]/5 py-4 pl-6 pr-4 text-lg italic leading-relaxed text-zinc-700">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="mb-6 flex flex-col gap-2 pl-1 last:mb-0">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="mb-6 flex flex-col gap-2 pl-1 last:mb-0">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => (
      <li className="ml-6 list-disc pl-1 text-base leading-relaxed text-zinc-600 marker:text-[#6F36D2] sm:text-lg">
        {children}
      </li>
    ),
    number: ({ children }) => (
      <li className="ml-6 list-decimal pl-1 text-base leading-relaxed text-zinc-600 marker:font-medium marker:text-[#6F36D2] sm:text-lg">
        {children}
      </li>
    ),
  },
  marks: {
    em: ({ children }) => <em className="italic">{children}</em>,
    strong: ({ children }) => (
      <strong className="font-semibold text-zinc-900">{children}</strong>
    ),
    link: ({ value, children }) => {
      const target = (value?.href || "").startsWith("http")
        ? "_blank"
        : undefined;
      return (
        <a
          href={value?.href}
          target={target}
          rel={target === "_blank" ? "noopener noreferrer" : undefined}
          className="font-medium text-[#6F36D2] underline decoration-[#6F36D2]/30 underline-offset-2 transition-colors duration-200 hover:text-[#4f2496] hover:decoration-[#4f2496]"
        >
          {children}
        </a>
      );
    },
  },
  types: {
    articleNumberedList: ({ value }) => (
      <ol role="list" className="mb-6 flex list-none flex-col gap-4 last:mb-0">
        {value.items.map((item) => (
          <li key={item._key} className="rounded-xl border border-zinc-200 bg-zinc-50 p-5 [&_p]:!m-0">
            <PortableText value={[item]} components={blogPortableTextComponents} />
          </li>
        ))}
      </ol>
    ),
    articleWorksheet: ({ value }) => <ArticleWorksheet value={value} components={blogPortableTextComponents} />,
    image: ({ value }) => {
      const imgUrl = value && urlForImage(value);
      if (!imgUrl) return null;
      return (
        <figure className="my-10">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-zinc-200">
            <Image
              src={imgUrl}
              alt={value.alt || "Illustration for this article"}
              fill
              sizes="(max-width: 1024px) 100vw, 66vw"
              className="object-cover"
            />
          </div>
          {value.caption && (
            <figcaption className="mt-3 text-center text-sm text-zinc-500">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
  },
};

const getBlockText = (block) =>
  (block.children || []).map((span) => span.text || "").join("");

// This article's non-interactive benefit and process labels were underlined
// in the CMS. Present them as labels so they do not resemble links.
const azurePortableTextComponents = {
  ...blogPortableTextComponents,
  marks: {
    ...blogPortableTextComponents.marks,
    underline: ({ children }) => (
      <strong className="font-semibold text-zinc-900">{children}</strong>
    ),
  },
};

const ReadingProgressBar = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="fixed inset-x-0 top-16 z-40 h-[2px] bg-zinc-100 lg:top-[72px]">
      <motion.div
        style={{ scaleX }}
        className="h-full w-full origin-left bg-[#6F36D2]"
      />
    </div>
  );
};

const ArticleContents = ({ items, activeHeading }) => (
  <nav aria-label="Article sections" className="flex max-h-[60vh] flex-col gap-1 overflow-y-auto overscroll-contain">
    {items.map((item) => {
      const isActive = activeHeading === `h-${item.key}`;
      return <a
        key={item.key}
        href={`#h-${item.key}`}
        aria-current={isActive ? "location" : undefined}
        className={`flex min-h-11 shrink-0 items-center rounded-lg px-3 py-2 text-sm !leading-snug transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[#6F36D2] ${item.depth ? "ml-3" : ""} ${isActive ? "bg-[#6F36D2]/10 font-medium text-[#6F36D2]" : "text-zinc-600 hover:text-zinc-900"}`}
      >{item.text}</a>;
    })}
  </nav>
);

const BlogPageClient = ({ blogDetails, relatedBlogs = [] }) => {
  const [activeHeading, setActiveHeading] = useState(null);
  const [copied, setCopied] = useState(false);
  const articleComponents = blogDetails?.slug?.current === "custom-software-development-with-devops-on-azure-cloud"
    ? azurePortableTextComponents : blogPortableTextComponents;
  const { articleBody, titleAnchor } = useMemo(
    () => {
      const body = blogDetails?.body;
      const first = body?.[0];
      // The hero supplies an exact repeated first title and retains its anchor.
      // Keep differing introductions and any annotated or non-text content.
      const repeatsTitle = first?._type === "block" &&
        ["h1", "h2"].includes(first.style) && !first.listItem &&
        !(first.markDefs || []).length && first.children?.every((span) => span._type === "span") &&
        getBlockText(first).trim() === blogDetails?.title?.trim();
      return {
        articleBody: repeatsTitle ? body.slice(1) : body,
        titleAnchor: repeatsTitle ? headingId(first) : undefined,
      };
    },
    [blogDetails],
  );
  const tableOfContents = useMemo(() => {
    if (!articleBody) return [];
    return articleBody
      .flatMap((block) => block._type === "articleWorksheet" ? block.rows.map((row) => row.heading) : [block])
      .filter(
        (block) =>
          block._type === "block" && (block.style === "h2" || block.style === "h3")
      )
      .map((block) => ({
        key: block._key,
        depth: block.style === "h3" ? 1 : 0,
        text: getBlockText(block),
      }))
      .filter((item) => item.text.trim().length > 0);
  }, [articleBody]);

  useEffect(() => {
    if (!tableOfContents.length) return undefined;
    const headings = tableOfContents.map((item) =>
      document.getElementById(`h-${item.key}`)
    ).filter(Boolean);
    const updateCurrentHeading = () => {
      const padding = parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) || 0;
      const margin = headings[0] ? parseFloat(getComputedStyle(headings[0]).scrollMarginTop) || 0 : 0;
      // Use document order and the anchor landing position. Observer entry
      // batches can contain several rows and do not define reading order.
      const current = [...headings].reverse().find((heading) =>
        heading.getBoundingClientRect().top <= padding + margin + 1
      );
      setActiveHeading(current?.id || null);
    };
    const handleHashChange = () => {
      const target = headings.find((heading) => `#${heading.id}` === window.location.hash);
      if (target) setActiveHeading(target.id);
      else updateCurrentHeading();
    };
    let scrollFrame = null;
    const handleScroll = () => {
      if (scrollFrame !== null) return;
      scrollFrame = window.requestAnimationFrame(() => {
        scrollFrame = null;
        updateCurrentHeading();
      });
    };
    const observer = new IntersectionObserver(updateCurrentHeading,
      { rootMargin: "-112px 0px -70% 0px" });
    headings.forEach((heading) => observer.observe(heading));
    updateCurrentHeading();
    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    // Large jumps can leave every observed heading outside the observer band.
    // Recalculate from the settled scroll position once per animation frame.
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      observer.disconnect();
      window.removeEventListener("hashchange", handleHashChange);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      if (scrollFrame !== null) window.cancelAnimationFrame(scrollFrame);
    };
  }, [tableOfContents]);

  const handleShare = (platform) => {
    if (typeof window === "undefined") return;
    const shareUrl = window.location.href;

    if (platform === "copy") {
      navigator.clipboard?.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      return;
    }

    const targets = {
      twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(
        shareUrl
      )}&text=${encodeURIComponent(blogDetails?.title || "")}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
        shareUrl
      )}`,
    };

    window.open(targets[platform], "_blank", "noopener,noreferrer");
  };

  if (!blogDetails) {
    return (
      <Container className="bg-white py-24">
        <div className="text-center">
          <h2 className="mb-4 text-2xl font-semibold text-zinc-900">
            Blog post not found
          </h2>
          <Link
            href="/blog"
            className="inline-flex items-center justify-center gap-2 font-medium text-[#6F36D2] hover:underline"
          >
            <ArrowLeft size={18} weight="bold" />
            Back to Blog
          </Link>
        </div>
      </Container>
    );
  }

  const publishedLabel = formatPublicationDate(blogDetails.publishedAt);
  const serviceLinks = getArticleServiceLinks(blogDetails.slug?.current);
  const mainArtwork = getArticleArtwork(blogDetails);

  return (
    <main className="bg-white">
      <ReadingProgressBar />

      {/* Editorial hero with the article's complete supporting artwork. */}
      <section className="relative overflow-hidden bg-[#0B0B10] pb-10 pt-16 sm:pb-12 lg:pt-[72px]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 right-[-10%] h-[560px] w-[560px] rounded-full bg-[#6F36D2] opacity-[0.18] blur-[140px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.5]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(111,54,210,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(111,54,210,0.12) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            maskImage:
              "radial-gradient(ellipse 70% 60% at 15% 20%, black 30%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 70% 60% at 15% 20%, black 30%, transparent 100%)",
          }}
        />

        <Container className="relative z-10 !py-8 lg:!py-12">
          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <nav
              aria-label="Breadcrumb"
              className="mb-5 flex flex-wrap items-center gap-1.5 text-sm text-zinc-400"
            >
              <Link
                href="/"
                className="transition-colors duration-200 hover:text-white"
              >
                Home
              </Link>
              <span aria-hidden="true" className="text-zinc-700">
                /
              </span>
              <Link
                href="/blog"
                className="transition-colors duration-200 hover:text-white"
              >
                Blog
              </Link>
              <span aria-hidden="true" className="text-zinc-700">
                /
              </span>
              <span
                className="max-w-[220px] truncate text-[#B79CE8] sm:max-w-xs"
                title={blogDetails.title}
              >
                {blogDetails.title}
              </span>
            </nav>

            <div className="grid grid-cols-1 items-stretch gap-8 xl:grid-cols-[1.1fr_0.9fr] xl:gap-10">
              {/* Left: message */}
              <div className="flex flex-col justify-center gap-4">
                {blogDetails.categories?.filter(Boolean).length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {blogDetails.categories.filter(Boolean).map((category) => (
                      <Link
                        key={category._id}
                        href={`/blog/category/${category.slug}`}
                        className="rounded-full border border-[#6F36D2]/30 bg-[#6F36D2]/10 px-3 py-1 font-inter text-smallText font-medium text-[#B79CE8] transition-colors duration-200 hover:border-[#6F36D2]/60"
                      >
                        {category.title}
                      </Link>
                    ))}
                  </div>
                )}

                <h1 id={titleAnchor} className="max-w-2xl scroll-mt-8 text-3xl font-bold !leading-normal tracking-tight text-white sm:text-4xl lg:text-[2.75rem] xl:text-[3.25rem]">
                  {blogDetails.title}
                </h1>

                {blogDetails.excerpt && (
                  <p className="max-w-xl text-sm leading-relaxed text-zinc-400 sm:text-base">
                    {blogDetails.excerpt}
                  </p>
                )}

                {blogDetails.author?.name && (
                  <div className="mt-2 flex items-center gap-3">
                    {blogDetails.author.image ? (
                      <Image
                        src={urlForImage(blogDetails.author.image)}
                        alt={blogDetails.author.name}
                        width={36}
                        height={36}
                        className="h-9 w-9 rounded-full object-cover"
                      />
                    ) : (
                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-sm font-semibold text-white">
                        {blogDetails.author.name.charAt(0)}
                      </span>
                    )}
                    <div className="flex flex-col">
                      <span className="text-sm font-semibold text-white">
                        {blogDetails.author.name}
                      </span>
                      <span className="text-xs text-zinc-400">
                        {publishedLabel}
                        {publishedLabel && blogDetails.readTime && " · "}
                        {blogDetails.readTime &&
                          `${blogDetails.readTime} min read`}
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* Keep diagram labels visible without cropping or tinting. */}
              <div className="relative hidden aspect-video w-full self-center overflow-hidden rounded-2xl border border-white/10 bg-[#14111D] lg:block" style={mainArtwork?.aspectRatio ? { aspectRatio: mainArtwork.aspectRatio } : undefined}>
                {mainArtwork ? (
                  <>
                    <Image
                      src={mainArtwork.src}
                      alt={mainArtwork.alt}
                      fill
                      sizes="(min-width: 1280px) 40vw, (min-width: 1024px) calc(100vw - 80px), 100vw"
                      className="object-contain"
                      priority
                    />
                  </>
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-[#6F36D2]/10">
                    <span className="text-5xl font-semibold text-[#B79CE8]">
                      {blogDetails.title.charAt(0)}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Body + sidebar */}
      <Container className="py-14 sm:py-20">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-14">
          <div className="lg:col-span-2">
            {tableOfContents.length > 1 && <details className="mb-10 rounded-2xl border border-zinc-200 bg-zinc-50 p-5 lg:hidden">
              <summary className="min-h-11 cursor-pointer rounded-sm py-2 text-sm font-semibold text-zinc-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#6F36D2]">
                <span className="inline-flex items-center gap-2 align-middle"><ListBullets size={16} weight="bold" aria-hidden="true" />On this page</span>
              </summary>
              <div className="mt-3"><ArticleContents items={tableOfContents} activeHeading={activeHeading} /></div>
            </details>}
            {/* The main image already appears in the hero visual on lg+
               screens; on mobile, where that visual is hidden, it runs here
               instead so the image is never lost, and never duplicated. */}
            {mainArtwork && (
              <div className="relative mb-10 aspect-[16/9] w-full overflow-hidden rounded-2xl border border-zinc-200 lg:hidden" style={mainArtwork.aspectRatio ? { aspectRatio: mainArtwork.aspectRatio } : undefined}>
                <Image
                  src={mainArtwork.src}
                  alt={mainArtwork.alt}
                  fill
                  sizes="100vw"
                  className="object-contain"
                  priority
                />
              </div>
            )}

            <AiSummary
              postId={blogDetails._id}
              title={blogDetails.title}
              body={blogDetails.body}
              categories={blogDetails.categories}
              relatedBlogs={relatedBlogs}
            />
            <article className="font-inter max-w-none">
              {blogDetails.body ? (
                <PortableText
                  value={articleBody}
                  components={articleComponents}
                />
              ) : (
                <p className="text-zinc-500">No content available.</p>
              )}
            </article>

            {blogDetails.tags?.length > 0 && (
              <div className="mt-12 border-t border-zinc-200 pt-8">
                <h3 className="mb-4 flex items-center gap-2 text-sm font-semibold text-zinc-900">
                  <Tag size={16} weight="bold" />
                  Related topics
                </h3>
                <div className="flex flex-wrap gap-2">
                  {blogDetails.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-zinc-200 px-3 py-1.5 text-sm text-zinc-600"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 flex flex-col gap-6">
              {/* Table of contents, built from the article's own h2/h3
                 blocks. Skipped entirely when the article is short. */}
              {tableOfContents.length > 1 && (
                <div className="hidden rounded-2xl border border-zinc-200 p-6 lg:block">
                  <span className="mb-4 flex items-center gap-2 text-sm font-semibold text-zinc-900">
                    <ListBullets size={16} weight="bold" />
                    On this page
                  </span>
                  <ArticleContents items={tableOfContents} activeHeading={activeHeading} />
                </div>
              )}

              {/* Publication card */}
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0B0B10] p-6">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#6F36D2]/20 blur-3xl"
                />
                <div className="relative">
                  <span className="text-lg font-semibold tracking-tight text-white">
                    Burhani Technologies
                  </span>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                    Notes from our engineers on building business software:
                    ERP, automation and applications that hold up in
                    production.
                  </p>
                  <div className="mt-5 flex items-center gap-2">
                    <a
                      href="https://www.linkedin.com/company/burhani-technologies"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Burhani Technologies on LinkedIn"
                      className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-zinc-400 transition-colors duration-200 hover:border-[#6F36D2]/50 hover:text-[#B79CE8]"
                    >
                      <LinkedinLogo size={16} weight="bold" />
                    </a>
                    <a
                      href="https://x.com/burhanitech"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Burhani Technologies on X"
                      className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-zinc-400 transition-colors duration-200 hover:border-[#6F36D2]/50 hover:text-[#B79CE8]"
                    >
                      <TwitterLogo size={16} weight="bold" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Author card */}
              {blogDetails.author?.name && (
                <div className="rounded-2xl border border-zinc-200 p-6">
                  <span className="font-inter text-smallText font-semibold uppercase tracking-wider text-[#6F36D2]">
                    Author
                  </span>
                  <div className="mt-3 flex items-center gap-3">
                    {blogDetails.author.image ? (
                      <Image
                        src={urlForImage(blogDetails.author.image)}
                        alt={blogDetails.author.name}
                        width={48}
                        height={48}
                        className="h-12 w-12 rounded-full object-cover"
                      />
                    ) : (
                      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#6F36D2]/10 text-lg font-semibold text-[#6F36D2]">
                        {blogDetails.author.name.charAt(0)}
                      </span>
                    )}
                    <div>
                      <p className="font-semibold text-zinc-900">
                        {blogDetails.author.name}
                      </p>
                      {blogDetails.author.role && (
                        <p className="text-sm text-zinc-500">
                          {blogDetails.author.role}
                        </p>
                      )}
                    </div>
                  </div>
                  {blogDetails.author.bio && (
                    <p className="mt-4 line-clamp-3 text-sm leading-relaxed text-zinc-500">
                      {blogDetails.author.bio}
                    </p>
                  )}
                  {typeof blogDetails.author.articleCount === "number" && (
                    <span className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-zinc-200 px-3 py-1 text-xs font-medium text-zinc-500">
                      <Article size={14} weight="bold" />
                      {blogDetails.author.articleCount}{" "}
                      {blogDetails.author.articleCount === 1
                        ? "article"
                        : "articles"}
                    </span>
                  )}
                </div>
              )}

              <div className="rounded-2xl border border-zinc-200 p-6">
                <p className="mb-4 text-sm font-semibold text-zinc-900">
                  Share this article
                </p>
                <div className="flex gap-2">
                  <button
                    type="button"
                    aria-label="Share on X"
                    onClick={() => handleShare("twitter")}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 text-zinc-500 transition-colors duration-200 hover:border-[#6F36D2]/40 hover:text-[#6F36D2]"
                  >
                    <TwitterLogo size={18} weight="bold" />
                  </button>
                  <button
                    type="button"
                    aria-label="Share on LinkedIn"
                    onClick={() => handleShare("linkedin")}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 text-zinc-500 transition-colors duration-200 hover:border-[#6F36D2]/40 hover:text-[#6F36D2]"
                  >
                    <LinkedinLogo size={18} weight="bold" />
                  </button>
                  <button
                    type="button"
                    aria-label="Copy link"
                    onClick={() => handleShare("copy")}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 text-zinc-500 transition-colors duration-200 hover:border-[#6F36D2]/40 hover:text-[#6F36D2]"
                  >
                    {copied ? (
                      <Check size={18} weight="bold" className="text-[#6F36D2]" />
                    ) : (
                      <LinkSimple size={18} weight="bold" />
                    )}
                  </button>
                </div>
              </div>

              {/* Sidebar CTA */}
              <div className="rounded-2xl bg-[#0B0B10] p-6">
                <h2 className="text-lg font-semibold text-white">
                  Have a similar problem?
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                  Talk to our engineers about what it would take to build this
                  for your business.
                </p>
                <Link
                  href="/contact"
                  className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#6F36D2] px-5 py-3 text-sm font-medium text-white shadow-[0_1px_0_rgba(255,255,255,0.08)_inset] transition-transform duration-200 hover:bg-[#7C43E0] active:scale-[0.98]"
                >
                  Book a free consultation
                  <ArrowUpRight size={16} weight="bold" />
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </Container>

      {/* Related posts: eyebrow + heading + ghost view-all, duotone image
         treatment and floating category pill, matching the site's dark
         card language established across the homepage sections */}
      {relatedBlogs.length > 0 && (
        <section className="relative overflow-hidden border-t border-white/5 bg-[#0B0B10] py-10 sm:py-14">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-32 top-0 h-[380px] w-[380px] rounded-full bg-[#6F36D2]/[0.1] blur-[130px]"
          />
          <Container className="relative !py-10 sm:!py-14 xl:!py-14">
            <div className="mx-auto max-w-6xl">
              <div className="mb-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
                <div>
                  <span className="mb-2 flex items-center gap-2 font-inter text-smallText font-semibold uppercase tracking-widest text-[#B79CE8]">
                    <BookOpen size={14} weight="bold" />
                    Keep reading
                  </span>
                  <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                    Related Blogs
                  </h2>
                </div>
                {/* Ghost button: text + icon only, no fill or border */}
                <Link
                  href="/blog"
                  className="group inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-[#B79CE8] transition-colors duration-200 hover:text-white"
                >
                  View all posts
                  <ArrowRight
                    size={16}
                    weight="bold"
                    className="transition-transform duration-200 group-hover:translate-x-0.5"
                  />
                </Link>
              </div>

              <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                {relatedBlogs.map((blog) => (
                  <RelatedBlogCard key={blog._id} blog={blog} />
                ))}
              </div>
            </div>
          </Container>
        </section>
      )}

      {serviceLinks.length > 0 && (
        <section aria-labelledby="related-services-heading" className="border-b border-zinc-200 bg-zinc-50 py-10">
          <Container>
            <h2 id="related-services-heading" className="text-xl font-semibold text-zinc-900">Explore services related to this guide</h2>
            <ul className="mt-5 flex flex-wrap gap-3">
              {serviceLinks.map((service) => (
                <li key={service.href}>
                  <Link href={service.href} className="inline-flex items-center gap-2 rounded-lg border border-[#6F36D2]/30 px-4 py-3 font-medium text-[#6330be] transition-colors hover:bg-[#6F36D2]/10">
                    {service.label}<ArrowUpRight size={18} aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        </section>
      )}

      {/* Closing CTA, deliberately light: Related Blogs directly above is
         dark, and back-to-back dark sections at the very end of the page
         read as heavy. This mirrors the homepage's own alternating dark/
         light rhythm rather than stacking two dark sections in a row. */}
      <section className="relative overflow-hidden bg-white py-16 sm:py-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(111,54,210,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(111,54,210,0.08) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            maskImage:
              "radial-gradient(ellipse 60% 70% at 50% 50%, black 30%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 60% 70% at 50% 50%, black 30%, transparent 100%)",
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#6F36D2]/[0.08] blur-[130px]"
        />

        <Container className="relative">
          <div className="mx-auto flex max-w-2xl flex-col items-center gap-5 rounded-2xl border border-zinc-200 bg-white px-6 py-14 text-center shadow-sm sm:px-14">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#6F36D2]/20 bg-[#6F36D2]/[0.05] px-3 py-1 font-inter text-smallText font-medium text-[#6F36D2]">
              <Sparkle size={14} weight="bold" />
              Let&apos;s talk
            </span>

            <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl">
              Ready to build something like this?
            </h2>
            <p className="max-w-xl text-sm leading-relaxed text-zinc-500 sm:text-base">
              Tell us what your team is dealing with and we&apos;ll map out
              what a working system would look like.
            </p>
            <Link
              href="/contact"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-[#6F36D2] px-6 py-3.5 text-sm font-medium text-white shadow-[0_1px_0_rgba(255,255,255,0.08)_inset] transition-transform duration-200 hover:bg-[#7C43E0] active:scale-[0.98] sm:text-base"
            >
              Book a free consultation
              <ArrowUpRight size={16} weight="bold" />
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
};

export default BlogPageClient;

const RelatedBlogCard = ({ blog }) => {
  const artwork = getArticleArtwork(blog);
  const publishedLabel = formatPublicationDate(blog.publishedAt, "short");

  return (
    <Link
      href={`/blog/${blog.slug.current}`}
      className="group block overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] transition-all duration-300 hover:-translate-y-1 hover:border-[#6F36D2]/40 hover:bg-white/[0.04]"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-900">
        {artwork ? (
          <>
            <Image
              src={artwork.src}
              alt={artwork.alt}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className={artwork.preserveFrame ? "object-contain" : "object-cover transition-transform duration-300 group-hover:scale-105"}
            />
            {/* Purple duotone wash, brand's own version of the reference's
               tinted-photo treatment */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B10] via-[#2A1657]/50 to-[#6F36D2]/20 mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B10]/90 via-transparent to-transparent" />
          </>
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-[#6F36D2]/10">
            <span className="text-3xl font-semibold text-[#B79CE8]">
              {blog.title.charAt(0)}
            </span>
          </div>
        )}

        {blog.category?.title && (
          <span className="absolute left-3 top-3 rounded-full bg-[#0B0B10]/80 px-3 py-1 font-inter text-smallText font-medium uppercase tracking-wide text-zinc-300 backdrop-blur-sm">
            {blog.category.title}
          </span>
        )}
      </div>

      <div className="p-6">
        <h3 className="line-clamp-none text-lg font-semibold text-white transition-colors duration-200 group-hover:text-[#B79CE8] sm:line-clamp-2">
          {blog.title}
        </h3>
        {blog.excerpt && (
          <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-zinc-400">
            {blog.excerpt}
          </p>
        )}

        <div className="mt-5 flex items-center justify-between gap-3 border-t border-white/5 pt-4">
          {blog.author?.name ? (
            <div className="flex min-w-0 items-center gap-2">
              {blog.author.image ? (
                <Image
                  src={urlForImage(blog.author.image)}
                  alt={blog.author.name}
                  width={28}
                  height={28}
                  className="h-7 w-7 shrink-0 rounded-full object-cover"
                />
              ) : (
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#6F36D2]/15 text-xs font-semibold text-[#B79CE8]">
                  {blog.author.name.charAt(0)}
                </span>
              )}
              <span className="truncate text-sm text-zinc-300">
                {blog.author.name}
              </span>
            </div>
          ) : (
            <span />
          )}
          {publishedLabel && (
            <span className="shrink-0 text-xs text-zinc-400">
              {publishedLabel}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
};
