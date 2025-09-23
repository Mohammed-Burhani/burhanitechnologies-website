"use client";
import React, { useEffect, useState } from "react";
import { Heading } from "@/components/textComponents/Heading";
import { Body } from "@/components/textComponents/Body";
import Container from "@/components/constants/Container";
import { LargeCaption } from "@/components/textComponents/LargeCaption";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { SmallCaption } from "@/components/textComponents/SmallCaption";
import { client } from "@/sanity/lib/client";
import { PortableText } from "next-sanity";
import { components } from "@/utils/components";
import { PortableSmallBody } from "@/components/textComponents/PortableSmallBody";
import Link from "next/link";
import { slugify } from "@/utils/slugify";
import { ArrowRight } from "iconsax-react";
import { urlForImage } from "@/sanity/lib/image";

const ServiceList = () => {
  // const serviceItems = [
  //   {
  //     question: "Mobile Application Development",
  //     answer:
  //       "We design and develop high-performance mobile applications tailored to meet your business needs, ensuring seamless user experience across all devices.",
  //   },
  //   {
  //     question: "Web Application Development",
  //     answer:
  //       "Our team builds robust, scalable, and secure web applications, providing innovative solutions for various industries.",
  //   },
  //   {
  //     question: "CMS-Based Website Development",
  //     answer:
  //       "We specialize in CMS-based website development, enabling you to manage your content effortlessly with platforms like WordPress and Drupal.",
  //   },
  //   {
  //     question: "Cross-Platform Enterprise Applications",
  //     answer:
  //       "Our cross-platform enterprise applications streamline your business operations, offering efficiency and compatibility across devices.",
  //   },
  //   {
  //     question: "Line of Business (LOB) Applications",
  //     answer:
  //       "We develop Line of Business (LOB) applications to cater to your organization's specific operational requirements and drive productivity.",
  //   },
  //   {
  //     question: "Workflow Automation",
  //     answer:
  //       "Automate repetitive tasks and optimize workflows to increase efficiency and reduce operational costs.",
  //   },
  //   {
  //     question: "Business Process Automation Solutions",
  //     answer:
  //       "Our BPA solutions are designed to improve the overall efficiency of your business processes by leveraging cutting-edge technologies.",
  //   },
  //   {
  //     question: "Custom Automation Tools",
  //     answer:
  //       "We create custom automation tools tailored to your unique business needs, saving time and increasing productivity.",
  //   },
  //   {
  //     question: "Robotic Process Automation (RPA)",
  //     answer:
  //       "Implement RPA to automate mundane tasks, enabling your team to focus on strategic business activities.",
  //   },
  //   {
  //     question: "Integration Services",
  //     answer:
  //       "Our integration services ensure seamless connectivity between different systems and applications, enhancing operational efficiency.",
  //   },
  // ];

  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await client.fetch(`*[_type == "services"]`);
        setServices(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Container className="flex flex-col items-center bg-white gap-10">
      {/* <div className="4xl:!sticky !top-44 h-full mb-7 2xl:mb-0 min-w-fit"> */}
      <div className="mb-7 2xl:mb-0 min-w-fit">
        <h4
          className="uppercase text-center text-[#6622DC] font-extrabold"
          data-aos="fade-right"
        >
          Our Services
        </h4>

        <Heading data-aos="fade-right" className="mt-2 text-center">
          Comprehensive Solutions
        </Heading>
        <Body className="max-w-2xl mt-2 text-center" data-aos="fade-right">
          Explore a wide range of services tailored to meet your unique business
          requirements. From development to automation, we've got you covered.
        </Body>

        {/* <ServiceForm /> */}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 items-center gap-7 gap-y-10">
        {services.map((item, index) => (
          <ServiceItem
            key={index}
            question={item.title}
            answer={item.body}
            isOpen={index === 0} // Keep the first item open by default
            isReversed={Math.floor(index / 2) % 2 !== 0} // Reverse every 3rd and 4th item
            serviceIcon={item?.serviceIcon}
            serviceImage={item?.serviceImage}
          />
        ))}
      </div>
    </Container>
  );
};

export default ServiceList;

const ServiceItem = ({
  question,
  answer,
  serviceIcon,
  isReversed,
  serviceImage,
}) => {
  return (
    <div
      className={`flex items-center gap-7 ${isReversed ? "flex-row-reverse" : ""}`}
    >
      <div className="bg-[#E3C8FF] p-7 w-96 h-80 flex flex-col justify-center">
        <Image
          alt={question}
          src={
            serviceIcon ? urlForImage(serviceIcon) : "/projectW/image (2).png"
          }
          width={500}
          height={500}
          className="w-20 h-20 rounded-full mb-4"
        />

        <SmallCaption className="font-medium text-gray-900">
          {question}
        </SmallCaption>

        <PortableSmallBody className="mt-4 leading-relaxed text-gray-700 max-w-4xl line-clamp-2">
          <PortableText value={answer} components={components} />
        </PortableSmallBody>

        <Link
          href={"/services/" + slugify(question)}
          className="mt-7 text-[#391C6C] flex gap-2 items-center"
        >
          <span>Find Out More</span>
          <ArrowRight color="#391C6C" size={20} />
        </Link>
      </div>

      <Image
        width={500}
        height={500}
        alt={question}
        src={urlForImage(serviceImage)}
        className="w-[28rem] h-80 object-cover object-center"
      />
    </div>
  );
};

// const ServiceForm = () => {
//   return (
//     <Card className="w-[500px] mt-7 bg-[#6622DC]">
//       <CardHeader>
//         <CardTitle>
//           <LargeCaption className={"text-white"}>
//             Request Free Consultation
//           </LargeCaption>
//         </CardTitle>
//         {/* <CardDescription>
//           <Body className={"text-gray-300 !text-xl"}>
//             Request for free consultation
//           </Body>
//         </CardDescription> */}
//       </CardHeader>
//       <CardContent>
//         <form>
//           <div className="grid w-full items-center gap-4">
//             <div className="flex flex-col space-y-1.5">
//               <Label className="text-white" htmlFor="email">
//                 Email
//               </Label>
//               <Input
//                 className="text-white placeholder:text-gray-300"
//                 id="email"
//                 placeholder="Email"
//               />
//             </div>
//             <div className="flex flex-col space-y-1.5">
//               <Label className="text-white" htmlFor="phone">
//                 Phone Number
//               </Label>
//               <Input
//                 className="text-white placeholder:text-gray-300"
//                 id="phone"
//                 placeholder="Enter your phone number"
//               />
//             </div>
//           </div>
//         </form>
//         <CardFooter className="flex justify-between p-0 mt-4">
//           <Button variant="outline" className="bg-transparent text-white">
//             Cancel
//           </Button>
//           <Button className="bg-white text-[#6622DC]">Submit</Button>
//         </CardFooter>
//       </CardContent>
//     </Card>
//   );
// };
