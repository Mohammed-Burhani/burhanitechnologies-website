"use client";
import Container from "@/components/constants/Container";
import { Body } from "@/components/textComponents/Body";
import { Heading } from "@/components/textComponents/Heading";
import React, { useState } from "react";

const faqData = [
  {
    question: "What's your typical project timeline?",
    answer:
      "Our Agile approach delivers initial working versions in 4-6 weeks, with full implementations ranging from 15-90 days depending on complexity and integration requirements.",
  },
  {
    question: "Do you work with existing systems or only build new ones?",
    answer:
      "Both. We specialize in integrating custom solutions with your existing ERP, CRM, and legacy systems—whether it's Tally, SAP, Salesforce, or proprietary software.",
  },
  {
    question: "What's your pricing model for enterprise projects?",
    answer:
      "Our projects typically range from USD 7,500 to USD 15,000+ based on scope. We provide transparent fixed-price quotes after a discovery phase, with flexible payment milestones.",
  },
  {
    question: "What cloud platforms do you work with?",
    answer:
      "We're certified in Azure cloud services and Microsoft Power Platform, and also work with AWS, Google Cloud, and hybrid cloud architectures based on your needs.",
  },
  {
    question: "What industries do you serve?",
    answer:
      "Healthcare startups, manufacturing, automotive, construction, and finance/operations teams needing custom software, ERP systems, or process automation.",
  },
];

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-700">
      <button
        className="w-full py-6 px-4 flex justify-between items-center text-left hover:bg-gray-900/30 transition-colors"
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <h3 className="font-inter text-lg 4xl:text-xl text-white font-semibold pr-4">
          {question}
        </h3>
        <span className="text-2xl text-[#6F36D2] flex-shrink-0">
          {isOpen ? "−" : "+"}
        </span>
      </button>
      {isOpen && (
        <div className="px-4 pb-6">
          <Body className="text-gray-300">{answer}</Body>
        </div>
      )}
    </div>
  );
};

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Container className="bg-[#0a0014] h-full w-full relative overflow-hidden">
      <div className="w-[500px] h-[500px] blur-[200px] rounded-full bg-[#6F36D2]/20 absolute top-0 left-1/2 -translate-x-1/2" />

      <div className="z-10 relative">
        <div className="text-center mb-12" data-aos="fade-down">
          <h2 className="uppercase text-[#6622DC] font-extrabold text-sm mb-4 tracking-wider">
            FAQ
          </h2>
          <Heading className="text-white">Frequently Asked Questions</Heading>
          <Body className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Find answers to common questions about our services, processes, and
            approach to custom software development.
          </Body>
        </div>

        <div className="mx-auto" data-aos="fade-up">
          {faqData.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => toggleFAQ(index)}
            />
          ))}
        </div>
      </div>
    </Container>
  );
};

export { faqData };