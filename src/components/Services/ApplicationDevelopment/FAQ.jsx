"use client";

import Container from "@/components/constants/Container";
import { CaretDown } from "@phosphor-icons/react";
import { useState } from "react";
import { applicationDevelopmentFaqs } from "./faqData";

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

const FAQ = () => {
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
            Questions about Custom Software Development
          </h2>
        </div>

        <div className="mt-10 lg:mt-14">
          {applicationDevelopmentFaqs.map((faq, index) => (
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

export default FAQ;
