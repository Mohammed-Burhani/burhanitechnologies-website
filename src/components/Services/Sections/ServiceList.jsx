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
    <Container className="flex flex-col items-center bg-white gap-16 relative overflow-hidden">
      {/* Background decoration */}
      <div className="w-[600px] h-[600px] blur-[300px] rounded-full bg-[#8000ff]/10 absolute -left-40 top-20" />
      <div className="w-[600px] h-[600px] blur-[300px] rounded-full bg-[#6622DC]/10 absolute -right-40 bottom-20" />
      
      <div className="mb-7 2xl:mb-0 min-w-fit z-10">
        <h4
          className="uppercase text-center text-[#6622DC] font-extrabold tracking-wider text-sm"
          data-aos="fade-down"
        >
          Our Services
        </h4>

        <Heading data-aos="fade-down" className="mt-4 text-center">
          Comprehensive Solutions
        </Heading>
        <Body className="max-w-2xl mt-4 text-center text-gray-600" data-aos="fade-up">
          Explore a wide range of services tailored to meet your unique business
          requirements. From development to automation, we've got you covered.
        </Body>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full z-10">
        {services.map((item, index) => (
          <ServiceCard
            key={index}
            title={item.title}
            body={item.body}
            slug={item.slug?.current}
            serviceIcon={item?.serviceIcon}
            serviceImage={item?.serviceImage}
            index={index}
          />
        ))}
      </div>
    </Container>
  );
};

export default ServiceList;

const ServiceCard = ({
  title,
  body,
  slug,
  serviceIcon,
  serviceImage,
  index,
}) => {
  return (
    <Link
      href={"/services/" + (slug || slugify(title))}
      className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col"
      data-aos="fade-up"
      data-aos-delay={index * 100}
    >
      {/* Image Section */}
      <div className="relative h-56 overflow-hidden bg-gradient-to-br from-[#E3C8FF] to-[#F5E6FF]">
        <Image
          width={500}
          height={500}
          alt={title}
          src={serviceImage ? urlForImage(serviceImage) : "/projectW/image (2).png"}
          className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
        />
        
        {/* Icon overlay */}
        <div className="absolute bottom-4 left-4 bg-white rounded-full p-3 shadow-lg">
          <Image
            alt={title}
            src={serviceIcon ? urlForImage(serviceIcon) : "/projectW/image (2).png"}
            width={40}
            height={40}
            className="w-10 h-10"
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col flex-grow">
        <SmallCaption className="font-semibold text-gray-900 mb-3 group-hover:text-[#6622DC] transition-colors">
          {title}
        </SmallCaption>

        <PortableSmallBody className="leading-relaxed text-gray-600 line-clamp-3 flex-grow">
          <PortableText value={body} components={components} />
        </PortableSmallBody>

        {/* CTA */}
        <div className="mt-6 flex items-center gap-2 text-[#6622DC] font-medium group-hover:gap-4 transition-all">
          <span>Learn More</span>
          <ArrowRight color="#6622DC" size={20} className="group-hover:translate-x-1 transition-transform" />
        </div>
      </div>

      {/* Hover effect border */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#6622DC] rounded-2xl transition-colors pointer-events-none" />
    </Link>
  );
};