"use client";

import Container from "@/components/constants/Container";
import { CaretDown } from "@phosphor-icons/react";
import { useState } from "react";

import { servicesFaqs } from "./servicesFaqData";

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-white/10">
      <button
        type="button"
        className="flex w-full items-center justify-between gap-4 py-6 text-left transition-colors duration-200 hover:text-[#B79CE8]"
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <h3 className="text-base font-semibold text-white sm:text-lg">
          {question}
        </h3>
        <CaretDown
          size={18}
          weight="bold"
          className={`shrink-0 text-[#B79CE8] transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && (
        <div className="pb-6 pr-8">
          <p className="text-sm leading-relaxed text-zinc-400 sm:text-base">
            {answer}
          </p>
        </div>
      )}
    </div>
  );
};

const ChoosingWhereToStart = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative overflow-hidden border-t border-white/5 bg-[#0B0B10] py-16 sxl:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-10 h-[380px] w-[380px] rounded-full bg-[#6F36D2]/[0.1] blur-[130px]"
      />

      {/* Sticky heading rail on desktop, accordion carries the interactive
         content on the right, distinct from the centered layouts elsewhere */}
      <Container className="relative">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <h2 className="text-2xl font-semibold leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl">
              Choosing where to start
            </h2>
          </div>

          <div>
            {servicesFaqs.map((faq, index) => (
              <FAQItem
                key={faq.question}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onClick={() => toggleFAQ(index)}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ChoosingWhereToStart;
