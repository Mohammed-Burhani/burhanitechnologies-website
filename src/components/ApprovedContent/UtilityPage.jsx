import Link from "next/link";
import {
  ApprovedBody,
  ApprovedHero,
  ApprovedPageSchema,
  ApprovedProcess,
  ApprovedRelated,
  ApprovedSection,
  approvedMetadata,
} from "./ApprovedPage";

export function utilityMetadata(page, pathname) {
  const metadata = approvedMetadata(page, pathname);
  if (page.noindex) {
    metadata.robots = {
      index: false,
      follow: true,
      googleBot: { index: false, follow: true },
    };
  }
  return metadata;
}

export default function UtilityPage({ page, pathname, schemaType = "WebPage" }) {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: page.navLabel || page.title, href: pathname },
  ];

  return <main id="main">
    <ApprovedPageSchema page={page} pathname={pathname} breadcrumbs={breadcrumbs} type={schemaType} />
    <ApprovedHero {...page} breadcrumbs={breadcrumbs} />
    {page.body && <ApprovedSection narrow>
      {page.reviewNote && <aside aria-label="Draft review status" className="mb-10 rounded-xl border border-[#B79CE8] bg-[#F7F5FB] p-6 font-inter text-base leading-relaxed text-zinc-800">
        <p className="font-semibold">Working draft for review</p>
        <p className="mt-2">{page.reviewNote}</p>
      </aside>}
      <ApprovedBody blocks={page.body} />
    </ApprovedSection>}
    {page.sections?.map(section => <ApprovedSection key={section.heading}>
      <h2 className="font-inter text-2xl font-semibold leading-tight tracking-tight text-zinc-900 sm:text-3xl">{section.heading}</h2>
      {section.cards && <div className="mt-9 grid gap-6 md:grid-cols-2">
        {section.cards.map(card => <div key={card.title} className="rounded-2xl border border-zinc-200 p-6">
          <h3 className="font-inter text-lg font-semibold leading-snug text-zinc-900">{card.title}</h3>
          <p className="mt-4 font-inter text-base leading-relaxed text-zinc-600">{card.body}</p>
        </div>)}
      </div>}
      {section.links && <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {section.links.map(link => <li key={link.href}>
          <Link href={link.href} className="block rounded-xl border border-zinc-200 px-5 py-4 font-inter font-medium text-[#5C27BB] transition-colors hover:border-[#6F36D2] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#6F36D2]">{link.label}</Link>
        </li>)}
      </ul>}
    </ApprovedSection>)}
    {page.process && <ApprovedProcess heading={page.processHeading} steps={page.process} />}
    {page.related && <ApprovedRelated heading={page.relatedHeading} cards={page.related} />}
  </main>;
}
