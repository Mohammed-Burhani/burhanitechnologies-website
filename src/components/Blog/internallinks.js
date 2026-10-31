// Internal pages the AI summary may link to, built from
// https://burhanitechnologies.com/sitemap.xml
//
// The server ranks this list against each article and offers the AI only the
// most relevant ~15, so the AI can never invent a URL.
// When you add a page or post, add one line here (new blog posts also get
// picked up automatically through the "related posts" prop).
//
// kind: service | industry | case-study | article | guide | page
//   `about` is one plain line used for matching, so write what the page is about.

const make = (kind, base) => (slug, title, about = "") => ({
  url: `${base}/${slug}`,
  title,
  about,
  kind,
});

const service = make("service", "/services");
const industry = make("industry", "/industries");
const study = make("case-study", "/case-studies");
const guide = make("guide", "/knowledge-base");
const post = make("article", "/blog");

export const SITE_PAGES = [
  /* ------------------------------ Services ------------------------------ */
  { url: "/services", title: "All our services", about: "Everything we build: ERP, apps, automation, cloud, data and design", kind: "service" },
  service("erp-implementation", "ERP implementation", "Setting up an ERP that connects accounting, inventory, sales and HR in one system"),
  service("application-development", "Application development", "Custom business software built for how your company works"),
  service("web-application-development", "Web application development", "Custom web apps, portals and dashboards"),
  service("mobile-application-development", "Mobile app development", "iOS and Android apps for customers and staff"),
  service("cross-platform-enterprise-applications", "Cross-platform enterprise apps", "One app that runs on web, iOS and Android"),
  service("line-of-business-lob-applications", "Line-of-business applications", "Custom software for core daily operations"),
  service("rapid-application-development", "Rapid application development", "Building working software quickly in short cycles"),
  service("cms-based-website-development", "CMS website development", "Company websites you can update yourself"),
  service("ux-ui-design", "UX and UI design", "Easy-to-use screens and product design"),
  service("process-automation", "Process automation", "Automating repetitive office tasks"),
  service("business-process-automation-solutions", "Business process automation", "Automating approvals, handoffs and routine business processes"),
  service("workflow-automation", "Workflow automation", "Automating how work moves between people and systems"),
  service("robotic-process-automation-rpa", "Robotic process automation (RPA)", "Software robots that copy data and handle repetitive clicks"),
  service("custom-automation-tools", "Custom automation tools", "Tailor-made tools that remove manual work"),
  service("integration-services", "Integration services", "Connecting your apps, APIs and databases so data flows between them"),
  service("cloud-solutions", "Cloud solutions", "Moving to and running software in the cloud"),
  service("devops-and-maintenance", "DevOps and maintenance", "Keeping software updated, secure and running"),
  service("data-analysis-and-reporting", "Data analysis and reporting", "Dashboards, reports and analytics from your business data"),

  /* ----------------------------- Industries ----------------------------- */
  { url: "/industries", title: "Industries we serve", about: "Software for healthcare, manufacturing, finance and events", kind: "industry" },
  industry("healthcare", "Healthcare software", "Software for clinics, hospitals and patient care"),
  industry("manufacturing", "Manufacturing software", "ERP, inventory and production software for factories"),
  industry("finance", "Finance software", "Software for lending, banking and financial services"),
  industry("events", "Events software", "Software for visitor management, attendance and events"),

  /* ---------------------------- Case studies ---------------------------- */
  { url: "/case-studies", title: "All case studies", about: "Real projects we have delivered for clients", kind: "case-study" },
  study("ai-powered-digital-healthcare-assistance", "AI-powered digital healthcare assistant", "AI assistant for healthcare"),
  study("ai-powered-healthcare-crm-and-monitoring", "AI healthcare CRM and monitoring", "CRM and patient monitoring with AI for healthcare"),
  study("inventory-management-optimizing-manufacturing-and-warehousing", "Inventory management for manufacturing", "Inventory and warehouse system for a manufacturer"),
  study("visitor-attendance-and-engagement-tracking-system", "Visitor attendance and engagement tracking", "Tracking visitors and attendance at events"),
  study("erp-solution-for-a-global-apparel-company", "ERP for a global apparel company", "ERP rollout for a clothing manufacturer"),
  study("digitalizing-the-end-to-end-loan-lifecycle", "Digitizing the loan lifecycle", "Loan application to repayment moved onto one digital system"),

  /* --------------------------- Knowledge base --------------------------- */
  { url: "/knowledge-base", title: "Knowledge base", about: "Answers to common questions about working with us", kind: "guide" },
  guide("how-long-does-a-custom-software-project-take", "How long a custom software project takes", "Typical timelines for building custom software"),
  guide("how-we-handle-your-data-during-a-build", "How we handle your data during a build", "Data security and privacy while software is being built"),
  guide("what-happens-after-your-system-goes-live", "What happens after your system goes live", "Support, training and maintenance after launch"),
  guide("what-you-need-ready-before-a-discovery-call", "What to have ready before a discovery call", "How to prepare for a first project conversation"),

  /* ------------------------------ Key pages ------------------------------ */
  { url: "/book-a-consultation", title: "Book a free consultation", about: "Talk to our engineers about what it would take to build this", kind: "page" },
  { url: "/contact", title: "Contact us", about: "Get in touch with the Burhani Technologies team", kind: "page" },
  { url: "/why-choose-us", title: "Why choose us", about: "How Burhani Technologies works and what makes it different", kind: "page" },
  { url: "/about", title: "About Burhani Technologies", about: "Who we are", kind: "page" },
  { url: "/blog", title: "All articles", about: "Browse every article on the blog", kind: "page" },

  /* ------------------------------ Blog posts ------------------------------ */
  // ERP
  post("erp-implementation-process", "The ERP implementation process, step by step"),
  post("what-is-erp-implementation", "What is ERP implementation?"),
  post("erp-modules", "ERP modules explained"),
  post("erp-vs-crm", "ERP vs CRM: what's the difference?"),
  post("erp-implementation-partner", "How to choose an ERP implementation partner"),
  post("challenges-in-implementing-erp-system", "Common challenges when implementing an ERP"),
  post("erp-software-for-manufacturing-industry", "ERP software for the manufacturing industry"),
  post("erp-implementation-services-for-healthcare-and-finance", "ERP implementation for healthcare and finance"),
  post("erp-software-companies-chennai", "ERP software companies in Chennai"),
  // Inventory and warehouse
  post("inventory-management-system-benefits", "Benefits of an inventory management system"),
  post("inventory-management-techniques", "Inventory management techniques"),
  post("inventory-management-software", "Inventory management software"),
  post("what-is-warehouse-management-system", "What is a warehouse management system?"),
  post("document-management-software", "Document management software"),
  // Automation and AI
  post("what-is-process-automation", "What is process automation?"),
  post("stop-wasting-your-most-valuable-asset-a-guide-to-business-process-automation", "A guide to business process automation"),
  post("business-process-automation-tools", "Business process automation tools"),
  post("what-are-rpa-tools", "What are RPA tools?"),
  post("robotic-process-automation-for-sap", "Robotic process automation for SAP"),
  post("robotic-process-automation-services", "Robotic process automation services"),
  post("ai-workflow-automation", "AI workflow automation"),
  post("how-ai-workflow-automation-is-transforming-modern-businesses-in-2026", "How AI workflow automation is changing business in 2026"),
  // Custom software and development
  post("custom-software-development-cost", "How much does custom software cost?"),
  post("custom-software-vs-off-the-shelf", "Custom software vs off-the-shelf software"),
  post("custom-software-development-company-chennai", "Custom software development company in Chennai"),
  post("software-development-process-stages", "The stages of the software development process"),
  post("agile-software-development-steps", "Agile software development steps"),
  post("types-of-software-maintenance", "Types of software maintenance"),
  post("legacy-modernization", "Legacy system modernization"),
  post("how-to-integrate-apis", "How to integrate APIs"),
  post("hire-dedicated-developers", "Hiring dedicated developers"),
  post("software-development-outsourcing-companies", "Software development outsourcing companies"),
  post("why-businesses-need-line-of-business-applications-built-around-how-they-actually-work", "Why businesses need line-of-business applications"),
  post("healthcare-software-development-company", "Healthcare software development company"),
  // Web, mobile and design
  post("web-development-company-chennai", "Web development company in Chennai"),
  post("ecommerce-website-development-company-chennai", "Ecommerce website development company in Chennai"),
  post("your-website-is-great-but-is-it-actually-helping-you-run-your-business", "Is your website actually helping you run your business?"),
  post("mobile-app-development-company-chennai", "Mobile app development company in Chennai"),
  post("mobile-app-development-cost-india", "Mobile app development cost in India"),
  post("why-your-business-needs-a-strategic-mobile-app", "Why your business needs a strategic mobile app"),
  post("ux-design-process", "The UX design process"),
  post("beyond-pretty-why-strategic-ui-ux-design-is-your-product-s-most-important-feature", "Why strategic UI/UX design matters"),
  // Cloud, DevOps and data
  post("cloud-migration-strategy", "Cloud migration strategy"),
  post("cloud-migration-services", "Cloud migration services"),
  post("on-premise-vs-cloud", "On-premise vs cloud"),
  post("beyond-the-server-room-how-cloud-solutions-power-modern-business-resilience", "How cloud solutions make a business more resilient"),
  post("custom-software-development-with-devops-on-azure-cloud", "Custom software development with DevOps on Azure"),
  post("data-analytics-services", "Data analytics services"),
  post("data-analysis-lifecycle", "The data analysis lifecycle"),
  post("indias-deep-tech-revolution-why-usd3-billion-in-2025-signals-a-bigger-shift", "India's deep tech revolution"),
];