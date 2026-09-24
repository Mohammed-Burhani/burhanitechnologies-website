// Shared by the visible accordion and the FAQ schema on
// /services/cloud-solutions. Plain module (no "use client") so the server
// page can read the array directly.
export const cloudSolutionsFaqs = [
  {
    question: "Should we choose Azure, AWS or Google Cloud?",
    answer:
      "Choose from your existing systems, skills, service requirements and costs. Azure may fit a business using Microsoft tools, while AWS or Google Cloud may suit other constraints. We assess those requirements during discovery and explain the architecture and ongoing operating costs.",
  },
  {
    question: "Will our systems go down during the migration?",
    answer:
      "The cutover plan defines any expected downtime and the recovery steps. Where suitable, the new environment can run alongside the old one for testing. The approach depends on the application, database and available deployment options, so the migration window is agreed before the move.",
  },
  {
    question: "Can our data stay within a specific country or region?",
    answer:
      "Yes. Azure, AWS and Google Cloud all offer region-specific data centres, and the architecture is set to keep data resident where your compliance requirements or contracts specify. This gets confirmed during the assessment phase, before any migration plan is written.",
  },
  {
    question: "What happens if the cloud provider itself has an outage?",
    answer:
      "The architecture accounts for that risk rather than assuming it away, typically through redundancy across regions or a documented failover plan sized to what the system needs. What that looks like depends on how much downtime your business can tolerate, established upfront.",
  },
  {
    question: "Do we need our own team to manage the environment afterward?",
    answer:
      "No, though you can if you prefer to. A support retainer covers monitoring, updates and the DevOps pipeline after go-live, handled by the people who built the environment rather than a team meeting it for the first time in a support ticket.",
  },
];
