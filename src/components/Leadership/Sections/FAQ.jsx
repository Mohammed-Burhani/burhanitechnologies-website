import React from "react";
import { Heading } from "@/components/textComponents/Heading";
import { Body } from "@/components/textComponents/Body";
import Container from "@/components/constants/Container";
import { LargeCaption } from "@/components/textComponents/LargeCaption";

const FAQ = () => {
  // Define an array of FAQ items
  const faqItems = [
    {
      question: "What services does Burhani Technologies offer??",
      answer:
        "We offer a wide range of IT solutions, including software development, IT consulting, infrastructure optimization, cloud services, and customized technology solutions tailored to your business needs. ",
    },
    {
      question: "How long does it take to complete a project?",
      answer:
        "Project timelines vary based on complexity and scope. After an initial consultation, we provide a clear timeline and ensure timely delivery without compromising quality.",
    },
    {
      question: "Do you offer support after project completion?",
      answer:
        "Yes, we provide ongoing support and maintenance to ensure the continued success of your solutions. Our team is always available to assist with any updates or issues.",
    },
    {
      question: "How do I get started with Burhani Technologies?",
      answer:
        "You can contact us via email, phone, or our website. We’ll schedule an initial consultation to understand your needs and provide a tailored solution for your business.",
    },
    // Add more items as needed
  ];  

  return (
    <Container className="flex flex-wrap justify-between items-center bg-white gap-24">
      <div className="4xl:!sticky !top-44 h-full mb-7 2xl:mb-0 min-w-fit">
        <h4 className="uppercase text-[#6622DC] font-extrabold">FAQs</h4>

        <Heading className="mt-7">Frequently Asked Questions</Heading>
        <Body className={"max-w-2xl mt-4"}>
          Find answers to the most common questions about our services, helping
          you make informed decisions with ease.
        </Body>
      </div>

      {/* Render FAQ items dynamically using the FAQItem component */}
      <div className="w-full">
        {faqItems.map((item, index) => (
          <FAQItem
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={index === 0} // Keep the first item open by default
          />
        ))}
      </div>
    </Container>
  );
};

export default FAQ;

const FAQItem = ({ question, answer, isOpen }) => {
  return (
    <details
      className="group border-s-4 border-[#6622DC] bg-[#6622DC]/10 p-6 [&_summary::-webkit-details-marker]:hidden"
      open={isOpen}
    >
      <summary className="flex cursor-pointer items-center justify-between gap-1.5">
        <LargeCaption className="text-lg font-medium text-gray-900">{question}</LargeCaption>

        <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </summary>

      <Body className="mt-4 leading-relaxed text-gray-700 max-w-4xl">
        {answer}
      </Body>
    </details>
  );
};
