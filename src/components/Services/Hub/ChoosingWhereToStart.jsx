"use client";

import Container from "@/components/constants/Container";
import FAQItem from "@/components/ApprovedContent/FaqItem";

import { servicesFaqs } from "./servicesFaqData";


const ChoosingWhereToStart = () => {
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
                defaultOpen={index === 0}
                dark
                />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ChoosingWhereToStart;
