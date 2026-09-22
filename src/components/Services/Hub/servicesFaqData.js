// Shared by the visible accordion and the FAQ schema on /services.
// Plain module (no "use client") so the server page can read the array.
export const servicesFaqs = [
  {
    question:
      "How do I know whether I need a new system or a fix to the one we have?",
    answer:
      "Look at where the workarounds live. If your team has built spreadsheets, side files or WhatsApp groups to compensate for the system, the workaround has become the process and a rebuild usually pays back. If the system is sound and only one step is painful, automation of that step is cheaper.",
  },
  {
    question: "What is the smallest sensible project to start with?",
    answer:
      "Start with one department and one complete workflow. That gives your team a working system to assess before more modules are added. We agree the first release and its review criteria during discovery.",
  },
  {
    question: "Do you take over software somebody else built?",
    answer:
      "Yes, and it is common. We start with a read of the codebase and the data model, then give you an honest view on whether extending it costs less than replacing it. Sometimes the answer is that the existing system is fine and only the integration around it needs work.",
  },
  {
    question: "Who owns the code you write for us?",
    answer:
      "You do. The code, the data and the documentation belong to the client at the end of the engagement. This matters more than it sounds, because it decides whether you can change supplier later without rebuilding from nothing.",
  },
  {
    question: "How much of our time will this take?",
    answer:
      "Discovery needs input from the people who run the process and the people who will review the system. We agree their involvement and review cadence during scoping.",
  },
  {
    question: "Can you work with our in-house IT team?",
    answer:
      "Yes. We agree responsibilities for the application, infrastructure, access and releases with your team during scoping. Named owners and a clear handover process make the division of work manageable.",
  },
];
