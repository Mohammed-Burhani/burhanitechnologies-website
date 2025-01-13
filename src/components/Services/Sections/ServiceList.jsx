import React from "react";
import { Heading } from "@/components/textComponents/Heading";
import { Body } from "@/components/textComponents/Body";
import Container from "@/components/constants/Container";
import { LargeCaption } from "@/components/textComponents/LargeCaption";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const ServiceList = () => {
  const serviceItems = [
    {
      question: "Mobile Application Development",
      answer:
        "We design and develop high-performance mobile applications tailored to meet your business needs, ensuring seamless user experience across all devices.",
    },
    {
      question: "Web Application Development",
      answer:
        "Our team builds robust, scalable, and secure web applications, providing innovative solutions for various industries.",
    },
    {
      question: "CMS-Based Website Development",
      answer:
        "We specialize in CMS-based website development, enabling you to manage your content effortlessly with platforms like WordPress and Drupal.",
    },
    {
      question: "Cross-Platform Enterprise Applications",
      answer:
        "Our cross-platform enterprise applications streamline your business operations, offering efficiency and compatibility across devices.",
    },
    {
      question: "Line of Business (LOB) Applications",
      answer:
        "We develop Line of Business (LOB) applications to cater to your organization's specific operational requirements and drive productivity.",
    },
    {
      question: "Workflow Automation",
      answer:
        "Automate repetitive tasks and optimize workflows to increase efficiency and reduce operational costs.",
    },
    {
      question: "Business Process Automation Solutions",
      answer:
        "Our BPA solutions are designed to improve the overall efficiency of your business processes by leveraging cutting-edge technologies.",
    },
    {
      question: "Custom Automation Tools",
      answer:
        "We create custom automation tools tailored to your unique business needs, saving time and increasing productivity.",
    },
    {
      question: "Robotic Process Automation (RPA)",
      answer:
        "Implement RPA to automate mundane tasks, enabling your team to focus on strategic business activities.",
    },
    {
      question: "Integration Services",
      answer:
        "Our integration services ensure seamless connectivity between different systems and applications, enhancing operational efficiency.",
    },
  ];

  return (
    <Container className="flex justify-between bg-white gap-24">
      <div className="4xl:!sticky !top-44 h-full mb-7 2xl:mb-0 min-w-fit">
        <h4
          className="uppercase text-[#6622DC] font-extrabold"
          data-aos="fade-right"
        >
          Our Services
        </h4>

        <Heading data-aos="fade-right" className="mt-7">
          Comprehensive Solutions
        </Heading>
        <Body className="max-w-2xl mt-4" data-aos="fade-right">
          Explore a wide range of services tailored to meet your unique business
          requirements. From development to automation, we've got you covered.
        </Body>

        <ServiceForm />
      </div>

      <div className="w-full overflow-x-hidden">
        {serviceItems.map((item, index) => (
          <ServiceItem
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

export default ServiceList;

const ServiceItem = ({ question, answer, isOpen }) => {
  return (
    <details
      className="group border-s-4 border-[#6622DC] bg-[#E3CAFF]/50 p-6 [&_summary::-webkit-details-marker]:hidden"
      open={isOpen}
      data-aos="fade-left"
    >
      <summary className="flex cursor-pointer items-center justify-between gap-1.5">
        <LargeCaption className="text-lg font-medium text-gray-900">
          {question}
        </LargeCaption>

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

const ServiceForm = () => {
  return (
    <Card className="w-[500px] mt-7 bg-[#6622DC]">
      <CardHeader>
        <CardTitle>
          <LargeCaption className={"text-white"}>
            Request Free Consultation.
          </LargeCaption>
        </CardTitle>
        {/* <CardDescription>
          <Body className={"text-gray-300 !text-xl"}>
            Request for free consultation
          </Body>
        </CardDescription> */}
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label className="text-white" htmlFor="email">
                Email
              </Label>
              <Input
                className="text-white placeholder:text-gray-300"
                id="email"
                placeholder="Email"
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label className="text-white" htmlFor="phone">
                Phone Number
              </Label>
              <Input
                className="text-white placeholder:text-gray-300"
                id="phone"
                placeholder="Enter your phone number"
              />
            </div>
          </div>
        </form>
        <CardFooter className="flex justify-between p-0 mt-4">
          <Button variant="outline" className="bg-transparent text-white">Cancel</Button>
          <Button className="bg-white text-[#6622DC]">Submit</Button>
        </CardFooter>
      </CardContent>
    </Card>
  );
};
