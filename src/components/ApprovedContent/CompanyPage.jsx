import { createElement } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ApprovedHero,
  ApprovedPageSchema,
  ApprovedSection,
} from "./ApprovedPage";

const allowedTags = new Set([
  "div", "p", "h2", "h3", "h4", "ul", "ol", "li", "span", "a",
  "dl", "dt", "dd", "address", "strong", "em", "br", "details", "summary",
  "table", "thead", "tbody", "tr", "th", "td", "blockquote", "time",
]);

function ApprovedElement({ node, cardImages }) {
  if (typeof node === "string") return node;
  const children = node.children.map((child, index) => <ApprovedElement key={index} node={child} cardImages={cardImages} />);
  if (node.tag === "details") return <details {...node.attrs} className={`${node.attrs?.className || ""} group/disclosure`}>{children}</details>;
  if (node.tag === "summary") return <summary {...node.attrs} className={`${node.attrs?.className || ""} min-h-11 cursor-pointer rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#6F36D2] [&::-webkit-details-marker]:hidden`}>
    {children}
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="shrink-0 text-[#6F36D2] transition-transform group-open/disclosure:rotate-180 motion-reduce:transition-none"><path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
  </summary>;
  if (node.tag === "a") {
    const { href, ...attrs } = node.attrs;
    const isCaseCard = href?.startsWith("/case-studies/") && node.children.some(child => ["h2", "h3"].includes(child.tag));
    const imageKey = href?.split("/").pop();
    const cardImage = isCaseCard && cardImages && Object.hasOwn(cardImages, imageKey) ? cardImages[imageKey] : null;
    if (href?.startsWith("/") && !href.startsWith("//")) return <Link href={href} {...attrs}>
      {cardImage && <span className="relative mb-5 block aspect-video overflow-hidden rounded-lg bg-[#24212D]">
        <Image src={cardImage.src} alt={cardImage.alt} fill sizes="(min-width: 1280px) 420px, (min-width: 768px) 45vw, 85vw" className="object-cover transition-transform duration-300 group-hover:scale-[1.025] motion-reduce:transform-none motion-reduce:transition-none" />
        <span className="absolute bottom-2 right-2 rounded bg-[#101017]/90 px-2 py-1 text-[10px] text-white">Project illustration</span>
      </span>}
      {children}
    </Link>;
    return <a href={href} {...attrs} rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}>{children}</a>;
  }
  if (!allowedTags.has(node.tag)) return <>{children}</>;
  return createElement(node.tag, node.attrs, node.tag === "br" ? undefined : children);
}

export default function CompanyPage({ page, schemaType = "WebPage", media, cardImages }) {
  return <main id="main" className="approved-page">
    <ApprovedPageSchema page={page} pathname={page.pathname} breadcrumbs={page.breadcrumbs} type={schemaType} />
    {page.extraSchemas?.map((schema, index) => <script
      key={index}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }}
    />)}
    <ApprovedHero
      eyebrow={page.eyebrow}
      title={page.title}
      lede={page.lede}
      breadcrumbs={page.breadcrumbs}
      primaryLabel={page.primaryLabel}
      secondary={page.secondary}
      stats={page.stats}
      media={media}
    />
    {page.sections.map((section, index) => <ApprovedSection key={index} className={section.className}>
      {section.children.map((node, nodeIndex) => <ApprovedElement key={nodeIndex} node={node} cardImages={cardImages} />)}
    </ApprovedSection>)}
  </main>;
}
