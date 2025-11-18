"use client";
import React, { useEffect, useState } from "react";
import { Heading } from "@/components/textComponents/Heading";
import { Body } from "@/components/textComponents/Body";
import Container from "@/components/constants/Container";
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
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await client.fetch(`*[_type == "services"]{ title, body, serviceIcon, serviceImage, slug }`);
        setServices(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Container className="flex flex-col items-center bg-white gap-10 !px-10">
      
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

      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 items-center gap-7 gap-y-7">
        {services.map((item, index) => (
          <ServiceItem
            key={index}
            question={item.title}
            answer={item.body}
            slug={item.slug?.current}
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
  slug,
  serviceIcon,
  isReversed,
  serviceImage,
}) => {
  return (
    <div
      className={`flex flex-wrap items-center ${isReversed ? "flex-row-reverse" : ""}`}
    >
      <div className="bg-[#E3C8FF] p-4 w-full h-80 flex flex-col justify-center">
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

        <PortableSmallBody className="mt-2 leading-relaxed text-gray-700 max-w-4xl line-clamp-4">
          <PortableText value={answer} components={components} />
        </PortableSmallBody>

        <Link
          href={"/services/" + (slug || slugify(question))}
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
        className="w-80 xl:w-96 5xl:w-full h-80 object-cover object-center"
      />
    </div>
  );
};