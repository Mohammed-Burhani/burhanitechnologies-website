import { industryIndex, industryPages } from "@/content/approvedPages";
import { approvedMetadata, ApprovedPageSchema, ApprovedHero, ApprovedRelated, ApprovedCta } from "@/components/ApprovedContent/ApprovedPage";

export const metadata = approvedMetadata(industryIndex, "/industries");

export default function IndustriesPage() {
  const breadcrumbs = [{ label: "Home", href: "/" }, { label: "Industries", href: "/industries" }];

  return <main id="main">
    <ApprovedPageSchema page={industryIndex} pathname="/industries" breadcrumbs={breadcrumbs} type="CollectionPage" />
    <ApprovedHero eyebrow="Industries" title={industryIndex.title} lede={industryIndex.lede} breadcrumbs={breadcrumbs} />
    <ApprovedRelated
      heading="Industries"
      cards={industryPages.map(page => ({
        href: `/industries/${page.slug}`,
        title: page.navLabel,
        description: page.lede,
        label: `${page.navLabel} software development`,
      }))}
    />
    <ApprovedCta />
  </main>;
}
