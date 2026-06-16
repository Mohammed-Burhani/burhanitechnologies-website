"use client";
import React, { useState } from "react";
import { Body } from "@/components/textComponents/Body";
import Container from "@/components/constants/Container";
import { ChevronDown, ChevronUp } from "lucide-react";

const ServiceFAQ = ({ faqs, serviceName }) => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <Container className="bg-gray-50">
      <div className="mx-auto">
        <h2 className="text-center text-[#6622DC] font-extrabold uppercase mb-2">
          FAQ
        </h2>
        <h2 className="font-inter text-captionLarge xl:text-mdcaptionLarge 4xl:text-lgcaptionLarge 7xl:mdtext-captionLarge leading-snug font-bold text-center mb-4">
          Frequently Asked Questions About {serviceName}
        </h2>
        <Body className="text-center mb-10 max-w-2xl mx-auto">
          Get answers to common questions about our {serviceName} services
        </Body>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 flex justify-between items-center text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-lg text-[#180030]">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-[#6622DC] flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <Body className="text-gray-700 leading-relaxed">
                    {faq.answer}
                  </Body>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default ServiceFAQ;
