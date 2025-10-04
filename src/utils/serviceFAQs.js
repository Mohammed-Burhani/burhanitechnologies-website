// FAQ data for each service page
export const serviceFAQs = {
  "integration-services": [
    {
      question: "What is system integration and why is it important?",
      answer: "System integration connects different software systems to work seamlessly together, reducing manual work, errors, and providing unified data for better decision-making.",
    },
    {
      question: "Which systems can Burhani integrate?",
      answer: "We integrate CRMs, ERPs, payment systems, inventory tools, and other legacy or cloud-based applications.",
    },
    {
      question: "How long does an integration project typically take?",
      answer: "Simple integrations can be completed in a few weeks, while complex multi-system projects may take 1–2 months depending on scope.",
    },
    {
      question: "Will the integration disrupt my current business operations?",
      answer: "No, we follow a phased approach with testing and staging environments to ensure minimal disruption.",
    },
    {
      question: "Do you provide custom connectors?",
      answer: "Yes, we develop custom connectors and middleware to ensure systems communicate effectively if off-the-shelf solutions are insufficient.",
    },
    {
      question: "How do you ensure data security during integration?",
      answer: "We use encrypted data transfer, secure APIs, and adhere to industry-standard security protocols throughout the integration process.",
    },
    {
      question: "Can integrations be updated or modified later?",
      answer: "Absolutely, we build scalable integrations that can be updated or enhanced as your business needs evolve.",
    },
  ],

  "cloud-solutions": [
    {
      question: "What is the benefit of moving to the cloud?",
      answer: "Cloud adoption reduces infrastructure costs, improves scalability, enhances collaboration, and ensures business continuity through disaster recovery.",
    },
    {
      question: "Which cloud platforms do you support?",
      answer: "We work with AWS, Azure, Google Cloud, and hybrid cloud environments tailored to your needs.",
    },
    {
      question: "How do you handle data migration to the cloud?",
      answer: "We audit existing systems, plan the migration strategy, and execute the transfer securely with minimal downtime.",
    },
    {
      question: "Is cloud security guaranteed?",
      answer: "We implement strong security measures, including encryption, access controls, monitoring, and compliance with industry standards.",
    },
    {
      question: "Can cloud solutions be scaled as my business grows?",
      answer: "Yes, our cloud architecture is designed for elasticity, allowing resources to scale automatically based on demand.",
    },
    {
      question: "How long does a cloud migration take?",
      answer: "Small migrations can take a few weeks, while larger or complex setups may take several months depending on the existing infrastructure.",
    },
    {
      question: "Do you offer ongoing support after migration?",
      answer: "Yes, we provide continuous monitoring, maintenance, optimization, and support to ensure your cloud systems perform reliably.",
    },
  ],

  "web-application-development": [
    {
      question: "What types of web applications can you develop?",
      answer: "We build portals, dashboards, e-commerce platforms, SaaS solutions, and custom applications tailored to your business.",
    },
    {
      question: "What technologies are used for web application development?",
      answer: "We use modern technologies such as React, Angular, Node.js, Python, .NET, and other suitable frameworks based on project requirements.",
    },
    {
      question: "How long does it take to develop a web application?",
      answer: "Simple web applications can take 2–3 months, while complex enterprise-grade applications may require several months.",
    },
    {
      question: "Will my web application be mobile-friendly?",
      answer: "Yes, all web applications are designed to be responsive across devices including desktops, tablets, and mobile phones.",
    },
    {
      question: "Can you integrate third-party services into my web application?",
      answer: "Yes, we integrate payment gateways, CRM systems, analytics tools, and other services as required.",
    },
    {
      question: "How do you ensure security in web applications?",
      answer: "We follow best practices including secure coding, encryption, regular security audits, and compliance with industry standards.",
    },
    {
      question: "Do you provide maintenance and updates post-launch?",
      answer: "Yes, we offer ongoing support, updates, and performance optimization to ensure your application stays reliable and secure.",
    },
  ],

  // ... (similar structure for Data Analysis, Automation Tools, LOB Apps, Mobile Apps, Workflow Automation, RPA, DevOps, CMS Websites, Application Development, Process Automation, UX/UI Design)
};

// Get FAQs for a specific service
export function getServiceFAQs(serviceSlug) {
  return serviceFAQs[serviceSlug] || [];
}
