// Shared by the visible accordion and the FAQ schema on
// /services/business-process-automation-solutions. Plain module (no
// "use client") so the server page can read the array directly.
export const businessProcessAutomationFaqs = [
  {
    question: "Which processes are worth automating first?",
    answer:
      "The ones that are high volume, rule-based and currently handled by more than one person in slightly different ways. Automating a process nobody agrees on the rules for just locks in the disagreement faster. We identify the right candidate during mapping rather than starting from a wish list.",
  },
  {
    question:
      "How is business process automation different from robotic process automation?",
    answer:
      "Business process automation is the wider discipline, covering document capture, routing rules and execution together. Robotic process automation is one technique inside it, a bot operating a legacy system's screen the way a person would. Many implementations end up using both, layered rather than chosen between.",
  },
  {
    question: "What happens when the automation hits a case it cannot process?",
    answer:
      "It stops and routes the case to a person instead of guessing. Every automation we build has an exception path defined during mapping, because the cases a bot cannot handle are usually the ones that mattered enough to check by hand in the first place.",
  },
  {
    question: "Is there an audit trail for what the automation does?",
    answer:
      "Yes. Every action a bot or workflow rule takes is logged against the case it touched, including what data moved and when. That log is what compliance and finance teams usually ask for first, and it exists from the first automated step rather than being added afterward.",
  },
  {
    question: "Can the automation read documents like invoices and forms?",
    answer:
      "Yes, using OCR to read the document and NLP to place the data in the right fields, including handwritten or inconsistently formatted forms within reason. The output goes into your existing system rather than a separate database nobody else checks.",
  },
];
