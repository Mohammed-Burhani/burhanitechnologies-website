import { createElement } from "react";
import Link from "next/link";
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

function ApprovedElement({ node }) {
  if (typeof node === "string") return node;
  const children = node.children.map((child, index) => <ApprovedElement key={index} node={child} />);
  if (node.tag === "a") {
    const { href, ...attrs } = node.attrs;
    if (href?.startsWith("/") && !href.startsWith("//")) return <Link href={href} {...attrs}>{children}</Link>;
    return <a href={href} {...attrs} rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}>{children}</a>;
  }
  if (!allowedTags.has(node.tag)) return <>{children}</>;
  return createElement(node.tag, node.attrs, node.tag === "br" ? undefined : children);
}

export default function CompanyPage({ page, schemaType = "WebPage" }) {
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
    />
    {page.sections.map((section, index) => <ApprovedSection key={index} className={section.className}>
      {section.children.map((node, nodeIndex) => <ApprovedElement key={nodeIndex} node={node} />)}
    </ApprovedSection>)}
  </main>;
}
