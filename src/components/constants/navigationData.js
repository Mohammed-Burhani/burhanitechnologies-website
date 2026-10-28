// Lightweight navigation labels and destinations; page copy stays on the server.
export const serviceNavigation = [
  {
    label: "Applications",
    description: "Build software around the work.",
    links: [
      ["application-development", "Custom Software Development"],
      ["web-application-development", "Web Application Development"],
      ["mobile-application-development", "Mobile App Development"],
      ["cross-platform-enterprise-applications", "Cross-Platform Enterprise Apps"],
      ["cms-based-website-development", "Web & CMS Development"],
      ["rapid-application-development", "Rapid Application Development"],
      ["ux-ui-design", "UI/UX Design"],
    ],
  },
  {
    label: "ERP & systems",
    description: "Connect teams, records and decisions.",
    links: [
      ["erp-implementation", "ERP Implementation"],
      ["line-of-business-lob-applications", "Line of Business Applications"],
      ["integration-services", "Integration Services"],
      ["data-analysis-and-reporting", "Data Analysis & Reporting"],
    ],
  },
  {
    label: "Automation",
    description: "Keep routine work moving.",
    links: [
      ["business-process-automation-solutions", "Business Process Automation"],
      ["workflow-automation", "Workflow Automation"],
      ["process-automation", "Process Automation"],
      ["robotic-process-automation-rpa", "Robotic Process Automation"],
      ["custom-automation-tools", "Custom Automation Tools"],
    ],
  },
  {
    label: "Cloud & delivery",
    description: "Run, release and maintain your systems.",
    links: [
      ["cloud-solutions", "Cloud Solutions"],
      ["devops-and-maintenance", "DevOps & Maintenance"],
    ],
  },
].map(group => ({
  ...group,
  links: group.links.map(([slug, label]) => ({ href: `/services/${slug}`, label })),
}));

export const companyNavigation = [
  { href: "/about", label: "About Burhani", description: "Our approach to business software" },
  { href: "/why-choose-us", label: "Why work with us", description: "How we approach your requirements" },
  { href: "/leadership", label: "Leadership", description: "Meet the people behind the work" },
  { href: "/values", label: "Our values", description: "The principles behind our decisions" },
];

export const industryNavigation = [
  { href: "/industries/healthcare", label: "Healthcare", description: "Patient, clinic and care workflows" },
  { href: "/industries/manufacturing", label: "Manufacturing", description: "Production, inventory and operations" },
  { href: "/industries/finance", label: "Finance", description: "Lending, records and approvals" },
  { href: "/industries/events", label: "Events", description: "Visitor and event operations" },
];

export const primaryNavigation = [
  { href: "/case-studies", label: "Case Studies" },
  { href: "/blog", label: "Blog" },
  { href: "/knowledge-base", label: "Knowledge Base" },
];
