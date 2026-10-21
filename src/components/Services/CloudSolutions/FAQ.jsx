"use client";

import Container from "@/components/constants/Container";
import FAQItem from "@/components/ApprovedContent/FaqItem";
import { cloudSolutionsFaqs } from "./faqData";


const FAQ = () => {
return (
    <section className="relative overflow-hidden bg-white py-16 sxl:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-10 h-[380px] w-[380px] rounded-full bg-[#6F36D2]/[0.07] blur-[120px]"
      />

      <Container className="relative">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-semibold leading-tight tracking-tight text-zinc-900 sm:text-3xl lg:text-4xl">
            Questions about Cloud Solutions
          </h2>
        </div>

        <div className="mt-10 lg:mt-14">
          {cloudSolutionsFaqs.map((faq, index) => (
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

export default FAQ;
