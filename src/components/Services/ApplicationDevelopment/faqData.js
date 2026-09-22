// Shared by the visible accordion and the FAQ schema on
// /services/application-development. Plain module (no "use client") so the
// server page can read the array directly.
export const applicationDevelopmentFaqs = [
  {
    question:
      "How do you decide which technology stack to use for our application?",
    answer:
      "The stack follows the mapping phase rather than the other way round. Once we know your data volumes, your team's existing skills and what the application has to integrate with, we choose from React, Angular, Vue, Node.js, .NET or Java, whichever fits the constraints rather than a default preference.",
  },
  {
    question: "Who owns the source code once the application is delivered?",
    answer:
      "You do. The code, the documentation and the credentials are handed over at delivery, and no licence sits between you and your own system. A support retainer can cover updates afterward, but owning the codebase never depends on keeping that retainer running.",
  },
  {
    question: "How do you handle data security during development?",
    answer:
      "We agree access, environments and data requirements during scoping. Include confidentiality, hosting and retention terms, and confirm the tools allowed to receive client code or records before they are used.",
  },
  {
    question: "What if our business process changes halfway through the build?",
    answer:
      "Staged delivery means a change affects the module in progress rather than everything already shipped. We agree the revised scope and cost before continuing, the same way we would at the start, so a change in direction becomes a decision point rather than a surprise on the invoice.",
  },
  {
    question: "How involved does our team need to be during development?",
    answer:
      "Heavily involved during mapping, lightly involved afterward. The people who run each process need to walk us through it once in real detail. Once a module is being built, we need someone available to answer questions and review working software, not sit in daily meetings.",
  },
];
