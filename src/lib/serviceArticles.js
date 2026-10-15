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
