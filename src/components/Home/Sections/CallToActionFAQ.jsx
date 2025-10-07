"use client";
import React from "react";
import Container from "@/components/constants/Container";
import { Heading } from "@/components/textComponents/Heading";
import { Body } from "@/components/textComponents/Body";
import { PrimaryButton } from "../Blocks/PrimaryButton";
import { Accordion } from "./Blocks/Accordion";
import { useRouter } from "next/navigation";

export const CallToActionFAQ = () => {
  const router = useRouter();

  const faqs = [
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

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <Container className="bg-white py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="text-center">
        <Heading className="text-4xl font-bold text-gray-800">
          Ready to Build Your Solution?
        </Heading>
        <Body className="mt-4 max-w-2xl mx-auto text-gray-600">
          Let's discuss how we can help you achieve your business goals with a
          custom-tailored technology solution.
        </Body>
        <PrimaryButton
          className="mt-8"
          title="Get a Free Consultation"
          onClick={() => router.push("/contact")}
        />
      </div>

      <div className="mt-16 max-w-4xl mx-auto">
        <Heading className="text-3xl font-bold text-center text-gray-800">
          Frequently Asked Questions
        </Heading>
        <div className="mt-8">
          {faqs.map((faq, index) => (
            <Accordion
              key={index}
              title={faq.question}
              content={faq.answer}
            />
          ))}
        </div>
      </div>
    </Container>
  );
};