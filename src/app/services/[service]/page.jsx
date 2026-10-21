import { servicePages } from "@/content/servicePages";
import ServicePage, { approvedMetadata } from "@/components/ApprovedContent/ServicePage";
import CmsServicePage, { generateMetadata as generateCmsMetadata } from "@/components/Services/CmsServicePage";

export const revalidate = 0;
export const dynamicParams = true;

export function generateStaticParams() {
  return servicePages.map(({ slug }) => ({ service: slug }));
}

export async function generateMetadata({ params }) {
  const { service } = await params;
  const page = servicePages.find(entry => entry.slug === service);
  return page ? approvedMetadata(page, `/services/${service}`) : generateCmsMetadata({ params });
}

export default async function Service({ params }) {
  const { service } = await params;
  const page = servicePages.find(entry => entry.slug === service);
  return page ? <ServicePage page={page} /> : <CmsServicePage params={params} />;
}
