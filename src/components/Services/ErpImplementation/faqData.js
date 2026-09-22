// Shared by the visible accordion and the FAQ schema on
// /services/erp-implementation. Plain module (no "use client") so the
// server page can read the array directly.
export const erpImplementationFaqs = [
  {
    question: "How long does an ERP implementation take?",
    answer:
      "The schedule depends on modules, data migration, integrations and user acceptance. We agree a first release and dated rollout plan after discovery, including the dependencies each team needs to resolve.",
  },
  {
    question: "Can you connect our ERP to Tally?",
    answer:
      "Yes. Tally, SAP, Salesforce and in-house systems are all systems we integrate with. Where accounting stays in Tally, we keep it there and sync the transactions rather than asking finance to relearn a new ledger during an already busy change.",
  },
  {
    question: "Do we have to replace everything at once?",
    answer:
      "No. We deliver in stages, usually starting with the department where the pain is loudest and the data is cleanest. Each stage goes live on its own, which keeps the business running and gives you a decision point before the next module starts.",
  },
  {
    question: "What happens to our existing data?",
    answer:
      "It gets mapped, cleaned and migrated during the build, and we agree the cleaning rules with you rather than applying our own. Historical records that cannot be reconciled are kept in a read-only archive rather than being quietly dropped.",
  },
  {
    question: "Who trains our team?",
    answer:
      "We do, on the system your team will use, once it is running. Training happens against your real data and your real workflow, because a demo dataset teaches people a process they will never repeat once they are back on the floor.",
  },
  {
    question: "What happens after go-live?",
    answer:
      "The team that built the system handles updates, integrations and support calls. There is a support retainer with an agreed response window, and the people answering already know the codebase because they wrote it.",
  },
];
