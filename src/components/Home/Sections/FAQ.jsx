"use client";

import Container from "@/components/constants/Container";
import FAQItem from "@/components/ApprovedContent/FaqItem";

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


export const FAQ = () => {
return (
    <section data-reveal className="relative overflow-hidden bg-white py-5 sm:py-6">
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
              defaultOpen={index === 0}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export { faqData };
