"use client";

import Container from "@/components/constants/Container";
import { CaretDown } from "@phosphor-icons/react";
import { useState } from "react";

const faqData = [
  {
    question: "How long does a project take?",
    answer:
      "The schedule depends on the first workflow, data readiness, integrations and review requirements. We agree a dated plan after discovery, with an early working version for your team to assess before the wider rollout.",
  },
  {
    question: "Do you work with the systems we already run?",
    answer:
      "Yes. We integrate with Tally, SAP, Salesforce and in-house software, and connecting systems that were never designed to talk to each other is a large part of what we do. Where a system cannot be modified, we automate at the interface layer instead.",
  },
  {
    question: "What does a project cost?",
    answer:
      "Projects typically run between USD 7,500 and USD 15,000 or above, depending on scope. We quote a fixed price after a discovery phase and bill against milestones, so the figure stays where it started once the scope is agreed.",
  },
  {
    question: "Which cloud platforms do you work on?",
    answer:
      "We work with Microsoft Azure, AWS, Google Cloud and hybrid setups. Platform choices follow your existing systems, workload, access requirements and operating costs.",
  },
  {
    question: "Which industries do you build for?",
    answer:
      "We have delivered systems in healthcare, apparel manufacturing, warehousing, lending, and events and exhibition management. Sector experience matters because compliance rules and floor-level constraints differ, and those constraints usually shape the build more than the technology does.",
  },
  {
    question: "Where is Burhani Technologies located?",
    answer:
      "Our office is at 1st Floor, Vanguard House, #48 Moore Street, Parry’s Corner, George Town, Chennai 600001. We are open Monday to Friday 09:00 to 18:00 and Saturday 09:00 to 13:00 IST, and we deliver for clients in India, the US, the UAE and Australia.",
  },
  {
    question: "Do you build custom ERP, or implement an existing product?",
    answer:
      "We build custom ERP. Where a packaged product fits your process, we will tell you so on the call. We compare the workflows, integrations, licensing and long-term maintenance before recommending a custom build.",
  },
];

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-zinc-200">
      <button
        type="button"
        className="flex w-full items-center justify-between gap-4 py-6 text-left transition-colors duration-200 hover:text-[#6F36D2]"
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <h3 className="text-base font-semibold text-zinc-900 sm:text-lg">
          {question}
        </h3>
        <CaretDown
          size={18}
          weight="bold"
          className={`shrink-0 text-[#6F36D2] transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && (
        <div className="pb-6 pr-8">
          <p className="text-sm leading-relaxed text-zinc-500 sm:text-base">
            {answer}
          </p>
        </div>
      )}
    </div>
  );
};

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative overflow-hidden bg-white py-16 sxl:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-10 h-[380px] w-[380px] rounded-full bg-[#6F36D2]/[0.07] blur-[120px]"
      />

      <Container className="relative">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-semibold leading-tight tracking-tight text-zinc-900 sm:text-3xl lg:text-4xl">
            Planning a project with Burhani
          </h2>
        </div>

        <div className="mt-10 lg:mt-14">
          {faqData.map((faq, index) => (
            <FAQItem
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => toggleFAQ(index)}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export { faqData };
