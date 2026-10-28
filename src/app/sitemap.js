import { getPublishedSitemapContent } from "@/lib/blogDiscovery";
import { servicePages } from "@/content/servicePages";
import { caseStudyPages } from "@/content/caseStudyPages";

export const dynamic = "force-dynamic";

const baseUrl = "https://burhanitechnologies.com";

// Static pages have no reliable content-modification timestamp; omit lastmod.
const staticRoutes = [
  ["", "daily", 1],
  ["/about", "monthly", 0.8],
  ["/services", "weekly", 0.9],
  ["/services/application-development", "monthly", 0.8],
  ["/services/business-process-automation-solutions", "monthly", 0.8],
  ["/services/cloud-solutions", "monthly", 0.8],
  ["/services/erp-implementation", "monthly", 0.8],
  ["/services/rapid-application-development", "monthly", 0.8],
  ["/leadership", "monthly", 0.7],
  ["/values", "monthly", 0.7],
  ["/why-choose-us", "monthly", 0.7],
  ["/contact", "monthly", 0.7],
  ["/book-a-consultation", "monthly", 0.7],
  ["/authors/aliasgar-ghadiyali", "monthly", 0.6],
  ["/authors/shivann-kannan", "monthly", 0.6],
  ["/blog", "daily", 0.9],
  ["/case-studies", "weekly", 0.8],
  ["/industries", "monthly", 0.8],
  ["/industries/healthcare", "monthly", 0.7],
  ["/industries/manufacturing", "monthly", 0.7],
  ["/industries/finance", "monthly", 0.7],
  ["/industries/events", "monthly", 0.7],
  ["/knowledge-base", "weekly", 0.8],
  ["/knowledge-base/how-long-does-a-custom-software-project-take", "monthly", 0.6],
  ["/knowledge-base/how-we-handle-your-data-during-a-build", "monthly", 0.6],
  ["/knowledge-base/what-happens-after-your-system-goes-live", "monthly", 0.6],
  ["/knowledge-base/what-you-need-ready-before-a-discovery-call", "monthly", 0.6],
];

function contentDate(document) {
  const value = document._updatedAt || document.publishedAt;
  if (!value) return {};

  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? {} : { lastModified: date };
}

export default async function sitemap() {
  const { services, blogs, caseStudies } = await getPublishedSitemapContent();
  const staticPages = staticRoutes.map(([path, changeFrequency, priority]) => ({
    url: `${baseUrl}${path}`,
    changeFrequency,
    priority,
  }));
  const approvedServices = servicePages.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    changeFrequency: "monthly",
    priority: 0.8,
  }));
  const approvedCaseStudies = Object.values(caseStudyPages).map((caseStudy) => ({
    url: `${baseUrl}${caseStudy.pathname}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const contentPages = [
    ...services.map((service) => ({
      url: `${baseUrl}/services/${service.slug.current}`,
      ...contentDate(service),
      changeFrequency: "weekly",
      priority: 0.8,
    })),
    ...blogs.map((blog) => ({
      url: `${baseUrl}/blog/${blog.slug.current}`,
      ...contentDate(blog),
      changeFrequency: "monthly",
      priority: 0.7,
    })),
    ...caseStudies.map((caseStudy) => ({
      url: `${baseUrl}/case-studies/${caseStudy.slug.current}`,
      ...contentDate(caseStudy),
      changeFrequency: "monthly",
      priority: 0.7,
    })),
  ];

  // Some named service routes also have CMS documents; list their URL only once.
  return [
    ...new Map(
      [...contentPages, ...staticPages, ...approvedServices, ...approvedCaseStudies].map((page) => [page.url, page])
    ).values(),
  ];
}
