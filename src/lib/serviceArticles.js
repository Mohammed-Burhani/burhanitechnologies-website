// Existing published guides selected for the service workflow they explain.
const serviceArticles = {
  "application-development": ["custom-software-development-cost", "custom-software-vs-off-the-shelf", "software-development-process-stages"],
  "erp-implementation": ["what-is-erp-implementation", "erp-implementation-process", "challenges-in-implementing-erp-system"],
  "business-process-automation-solutions": ["what-is-process-automation", "ai-workflow-automation", "business-process-automation-tools"],
  "cloud-solutions": ["on-premise-vs-cloud", "beyond-the-server-room-how-cloud-solutions-power-modern-business-resilience", "legacy-modernization"],
  "integration-services": ["how-to-integrate-apis", "erp-vs-crm", "ai-workflow-automation"],
  "web-application-development": ["software-development-process-stages", "custom-software-vs-off-the-shelf", "your-website-is-great-but-is-it-actually-helping-you-run-your-business"],
  "data-analysis-and-reporting": ["data-analysis-lifecycle", "data-analytics-services", "inventory-management-system-benefits"],
  "custom-automation-tools": ["business-process-automation-tools", "inventory-management-techniques", "what-is-process-automation"],
  "line-of-business-lob-applications": ["custom-software-vs-off-the-shelf", "custom-software-development-cost", "erp-vs-crm"],
  "mobile-application-development": ["mobile-app-development-cost-india", "why-your-business-needs-a-strategic-mobile-app", "mobile-app-development-company-chennai"],
  "workflow-automation": ["business-process-automation-tools", "ai-workflow-automation", "what-is-process-automation"],
  "cross-platform-enterprise-applications": ["mobile-app-development-cost-india", "software-development-process-stages", "types-of-software-maintenance"],
  "robotic-process-automation-rpa": ["robotic-process-automation-for-sap", "what-are-rpa-tools", "ai-workflow-automation"],
  "devops-and-maintenance": ["types-of-software-maintenance", "legacy-modernization", "software-development-outsourcing-companies"],
  "cms-based-website-development": ["web-development-company-chennai", "your-website-is-great-but-is-it-actually-helping-you-run-your-business", "custom-software-vs-off-the-shelf"],
  "process-automation": ["what-is-process-automation", "inventory-management-system-benefits", "business-process-automation-tools"],
  "ux-ui-design": ["ux-design-process", "beyond-pretty-why-strategic-ui-ux-design-is-your-product-s-most-important-feature", "software-development-process-stages"],
  "rapid-application-development": ["software-development-process-stages", "agile-software-development-steps", "custom-software-development-cost"],
};

export function getServiceArticleSlugs(serviceSlug) {
  return serviceArticles[serviceSlug] || [];
}

const serviceLabels = {
  "application-development": "Custom software development",
  "erp-implementation": "Custom ERP implementation",
  "business-process-automation-solutions": "Business process automation",
  "cloud-solutions": "Cloud solutions",
  "integration-services": "System integration services",
  "web-application-development": "Web application development",
  "data-analysis-and-reporting": "Data analysis and reporting",
  "custom-automation-tools": "Custom automation tools",
  "line-of-business-lob-applications": "Line of business applications",
  "mobile-application-development": "Mobile application development",
  "workflow-automation": "Workflow automation",
  "cross-platform-enterprise-applications": "Cross-platform enterprise applications",
  "robotic-process-automation-rpa": "Robotic process automation",
  "devops-and-maintenance": "DevOps and maintenance",
  "cms-based-website-development": "CMS website development",
  "process-automation": "Process monitoring and automation",
  "ux-ui-design": "UI/UX design",
  "rapid-application-development": "Rapid application development",
};

export function getArticleServiceLinks(articleSlug) {
  const matching = Object.entries(serviceArticles)
    .filter(([, articles]) => articles.includes(articleSlug))
    .map(([serviceSlug]) => serviceSlug);

  if (articleSlug === "what-is-warehouse-management-system") {
    matching.push("erp-implementation", "application-development");
  }

  return [...new Set(matching)].slice(0, 3).map((slug) => ({
    href: `/services/${slug}`,
    label: serviceLabels[slug],
  }));
}
