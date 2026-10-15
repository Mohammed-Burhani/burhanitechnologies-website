import Link from "next/link";
import Container from "@/components/constants/Container";
import { defaultCta } from "@/content/approvedPages";

const siteUrl = "https://burhanitechnologies.com";
const headingClass = "font-inter text-2xl font-semibold leading-tight tracking-tight sm:text-3xl";
const paragraphClass = "font-inter text-base leading-relaxed";
const linkClass = "rounded-sm underline decoration-[#6F36D2]/40 underline-offset-4 transition-colors hover:text-[#6F36D2] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#6F36D2]";
const buttonClass = "inline-flex items-center justify-center rounded-xl bg-[#6F36D2] px-6 py-3.5 font-inter font-medium text-white transition-colors hover:bg-[#5C27BB] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B79CE8]";

export function approvedMetadata(page, pathname, type = "website") {
  const canonical = siteUrl + pathname;
  return {
    title: { absolute: page.metaTitle },
    description: page.metaDescription,
    alternates: { canonical },
    robots: { index: true, follow: true },
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      url: canonical,
      siteName: "Burhani Technologies",
      type,
    },
    twitter: {
      card: "summary",
      title: page.metaTitle,
      description: page.metaDescription,
    },
  };
}

export function ApprovedPageSchema({ page, pathname, breadcrumbs, type = "Service", schemaName, serviceType, audience }) {
  const url = siteUrl + pathname;
  const organization = { "@type": "Organization", name: "Burhani Technologies", url: siteUrl };
  const graph = [
    {
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbs.map((crumb, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: crumb.label,
        item: siteUrl + crumb.href,
      })),
    },
    {
      "@type": type,
      ...(type === "Article" ? { headline: page.title, author: organization, publisher: organization, mainEntityOfPage: url } : { name: schemaName || page.navLabel || page.title }),
      description: page.metaDescription,
      url,
      ...(type === "Service" && { provider: organization }),
      ...(serviceType && { serviceType }),
      ...(audience && { audience: { "@type": "BusinessAudience", audienceType: audience } }),
    },
  ];

  if (page.faq?.length) {
    graph.push({
      "@type": "FAQPage",
      mainEntity: page.faq.map(({ q, a }) => ({
        "@type": "Question",
        name: q,
        acceptedAnswer: { "@type": "Answer", text: a },
      })),
    });
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@graph": graph }).replace(/</g, "\\u003c") }}
    />
  );
}

export function ApprovedHero({ eyebrow, title, lede, breadcrumbs, primaryLabel, secondary, stats = [] }) {
  return (
    <section className="relative overflow-hidden bg-[#0B0B10] pt-16 lg:pt-[72px]">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(640px_circle_at_50%_0%,rgba(111,54,210,0.35),transparent_62%)]" />
      <Container className="relative z-10 py-16 sm:py-20 lg:py-24">
        <div className="max-w-4xl">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex flex-wrap items-center gap-x-3 gap-y-2 font-inter text-sm text-zinc-400">
              {breadcrumbs.map((crumb, index) => (
                <li key={crumb.href} className="flex items-center gap-3">
                  {index > 0 && <span aria-hidden="true">/</span>}
                  {index === breadcrumbs.length - 1 ? <span aria-current="page" className="text-zinc-200">{crumb.label}</span> : <Link href={crumb.href} className="rounded-sm hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B79CE8]">{crumb.label}</Link>}
                </li>
              ))}
            </ol>
          </nav>
          <p className="font-inter text-xs font-medium uppercase tracking-[0.18em] text-[#B79CE8]">{eyebrow}</p>
          <h1 className="mt-6 font-inter text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">{title}</h1>
          {lede && <p className="mt-6 max-w-3xl font-inter text-lg leading-relaxed text-zinc-300">{lede}</p>}
          {stats.length > 0 && <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 font-inter text-sm text-[#D4C2F3]">{stats.map(stat => <li key={stat}>{stat}</li>)}</ul>}
          {(primaryLabel || secondary) && <div className="mt-9 flex flex-wrap items-center gap-5">
            {primaryLabel && <Link href="/contact" className={buttonClass}>{primaryLabel}</Link>}
            {secondary && <Link href={secondary.href} className="rounded-sm font-inter font-medium text-[#D4C2F3] underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B79CE8]">{secondary.label}</Link>}
          </div>}
        </div>
      </Container>
    </section>
  );
}

export function ApprovedSection({ children, className = "bg-white", narrow = false }) {
  return <section className={className}><Container>{narrow ? <div className="mx-auto max-w-4xl">{children}</div> : children}</Container></section>;
}

function InlineContent({ parts }) {
  return parts.map((part, index) => typeof part === "string" ? part : <Link key={index} href={part.href} className={linkClass}>{part.label}</Link>);
}

export function ApprovedBody({ blocks }) {
  return <div className="space-y-6 text-zinc-700">
    {blocks.map((block, index) => {
      if (block.type === "heading") return <h2 key={index} className={`${headingClass} !mt-12 first:!mt-0 text-zinc-900`}>{block.text}</h2>;
      if (block.type === "list") return <ul key={index} className={`${paragraphClass} list-disc space-y-4 pl-6`}>{block.items.map((parts, itemIndex) => <li key={itemIndex}><InlineContent parts={parts} /></li>)}</ul>;
      return <p key={index} className={paragraphClass}><InlineContent parts={block.parts} /></p>;
    })}
  </div>;
}

export function ApprovedProblems({ heading, items }) {
  return <ApprovedSection>
    <h2 className={`${headingClass} max-w-3xl text-zinc-900`}>{heading}</h2>
    <div className="mt-10 grid gap-6 md:grid-cols-3">
      {items.map(item => <div key={item.q} className="rounded-2xl border border-zinc-200 p-6 shadow-sm">
        <h3 className="font-inter text-lg font-semibold leading-snug text-zinc-900">{item.q}</h3>
        <p className={`${paragraphClass} mt-4 text-zinc-600`}>{item.a}</p>
      </div>)}
    </div>
  </ApprovedSection>;
}

export function ApprovedApproach({ heading, body, scope }) {
  return <ApprovedSection className="bg-[#15111E] text-white">
    <div className="grid gap-7 lg:grid-cols-2 lg:gap-14">
      <h2 className={headingClass}>{heading}</h2>
      <p className={`${paragraphClass} text-zinc-300`}>{body}</p>
    </div>
    <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {scope.map(item => <div key={item.title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
        <h3 className="font-inter text-lg font-semibold">{item.title}</h3>
        <p className={`${paragraphClass} mt-3 text-zinc-300`}>{item.body}</p>
      </div>)}
    </div>
  </ApprovedSection>;
}

export function ApprovedRelated({ heading, cards }) {
  return <ApprovedSection className="bg-[#F7F5FB]">
    <h2 className={`${headingClass} text-zinc-900`}>{heading}</h2>
    <div className="mt-9 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {cards.map(card => <Link key={card.href} href={card.href} className="group flex flex-col rounded-2xl border border-zinc-200 bg-white p-6 transition-colors hover:border-[#6F36D2]/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#6F36D2]">
        <h3 className="font-inter text-lg font-semibold text-zinc-900 group-hover:text-[#6F36D2]">{card.title}</h3>
        {card.description && <p className={`${paragraphClass} mt-3 flex-1 text-zinc-600`}>{card.description}</p>}
        <span className="mt-5 font-inter text-sm font-medium text-[#6F36D2]">{card.label || "View service"}</span>
      </Link>)}
    </div>
  </ApprovedSection>;
}

export function ApprovedProcess({ heading, steps }) {
  return <ApprovedSection>
    <h2 className={`${headingClass} max-w-3xl text-zinc-900`}>{heading}</h2>
    <ol className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {steps.map(step => <li key={step.n} className="rounded-2xl border border-zinc-200 p-6">
        <span className="font-inter text-sm font-semibold text-[#6F36D2]">{step.n}</span>
        <h3 className="mt-3 font-inter text-lg font-semibold text-zinc-900">{step.title}</h3>
        <p className={`${paragraphClass} mt-3 text-zinc-600`}>{step.body}</p>
      </li>)}
    </ol>
  </ApprovedSection>;
}

export function ApprovedFaq({ heading, items }) {
  return <ApprovedSection className="bg-[#F7F5FB]" narrow>
    <h2 className={`${headingClass} text-zinc-900`}>{heading}</h2>
    <div className="mt-9 space-y-4">
      {items.map((item, index) => <details key={item.q} open={index === 0} className="rounded-2xl border border-zinc-200 bg-white p-6">
        <summary className="cursor-pointer rounded-sm font-inter text-lg font-semibold leading-snug text-zinc-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#6F36D2]">{item.q}</summary>
        <p className={`${paragraphClass} mt-4 text-zinc-600`}>{item.a}</p>
      </details>)}
    </div>
  </ApprovedSection>;
}

export function ApprovedCta({ heading = defaultCta.heading, body = defaultCta.body, primaryLabel = defaultCta.primaryLabel }) {
  return <ApprovedSection className="bg-[#15111E]" narrow>
    <div className="text-center">
      <h2 className={`${headingClass} text-white`}>{heading}</h2>
      <p className={`${paragraphClass} mx-auto mt-6 max-w-2xl text-zinc-300`}>{body}</p>
      <div className="mt-9 flex flex-wrap justify-center gap-4">
        <Link href={defaultCta.primaryHref} className={buttonClass}>{primaryLabel}</Link>
        <a href={defaultCta.whatsappHref} rel="noopener" className="inline-flex items-center justify-center rounded-xl bg-[#167A45] px-6 py-3.5 font-inter font-medium text-white transition-colors hover:bg-[#126339] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">{defaultCta.whatsappLabel}</a>
      </div>
    </div>
  </ApprovedSection>;
}
