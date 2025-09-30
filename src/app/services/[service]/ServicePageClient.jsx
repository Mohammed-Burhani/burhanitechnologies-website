"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Container from "@/components/constants/Container";
import { client } from "@/sanity/lib/client";
import Banner from "@/components/Services/Sections/ServiceBanner";
import { PortableText } from "next-sanity";
import { components } from "@/utils/components";
import { Body } from "@/components/textComponents/Body";
import { Heading } from "@/components/textComponents/Heading";
import { urlForImage } from "@/sanity/lib/image";
import { PortableBody } from "@/components/textComponents/PortableBody";
import { ArrowRight } from "iconsax-react";
import ServiceFAQ from "@/components/Services/ServiceFAQ";
import { getServiceFAQs } from "@/utils/serviceFAQs";

const ServicePageClient = ({ service }) => {
  const [serviceDetails, setServiceDetails] = useState([]);
  const [services, setServices] = useState([]);
  const faqs = getServiceFAQs(service);

  // Search Single Service
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await client.fetch(
          `*[_type == "services" && slug.current == $slug] [0]`,
          { slug: service }
        );
        setServiceDetails(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [service]);

  // Search All Products
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await client.fetch(`*[_type == "services"][0...6]`);
        setServices(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Banner title={serviceDetails?.title} desc={serviceDetails?.body} />

      {serviceDetails && (
        <Container className="bg-white text-black">
          <section className="">
            <div className="container px-6 py-10 mx-auto">
              <div className="lg:flex lg:-mx-6">
                <div className="lg:w-3/4 lg:px-6">
                  {serviceDetails.serviceImage ? (
                    <Image
                      className="object-cover object-center w-full h-80 xl:h-[28rem] rounded-3xl bg-no-repeat bg-white"
                      width={500}
                      height={500}
                      alt={serviceDetails?.title}
                      src={urlForImage(serviceDetails.serviceImage)}
                    />
                  ) : (
                    <div className="w-full h-80 xl:h-[28rem] rounded-xl bg-gray-200 animate-pulse">
                      {/* Loading {serviceDetails.title} Image */}
                    </div>
                  )}

                  <div>
                    <Heading className="max-w-screen-lg mt-4 text-[#180030]">
                      {serviceDetails.title}
                    </Heading>

                    {serviceDetails.body ? (
                      <PortableBody>
                        <PortableText
                          value={serviceDetails.body}
                          components={components}
                        />
                      </PortableBody>
                    ) : (
                      <>
                        <div className="w-full h-3 bg-gray-200 animate-pulse my-3 rounded-sm" />
                        <div className="w-full h-3 bg-gray-200 animate-pulse my-3 rounded-sm" />
                        <div className="w-full h-3 bg-gray-200 animate-pulse my-3 rounded-sm" />
                        <div className="w-full h-3 bg-gray-200 animate-pulse my-3 rounded-sm" />
                      </>
                    )}
                  </div>

                  <Heading className="max-w-screen-lg text-[#180030] mt-20">
                    {serviceDetails.benefitTitle}
                  </Heading>

                  {serviceDetails.benefitDescription && (
                    <PortableBody className={"text-justify"}>
                      <PortableText
                        value={serviceDetails.benefitDescription}
                        components={components}
                      />
                    </PortableBody>
                  )}
                </div>

                <div className="mt-8 lg:w-1/4 lg:mt-0 lg:px-6">
                  <h3 className="text-[#180030] capitalize text-xl font-semibold">
                    Explore Our Services...
                  </h3>
                  {serviceDetails.serviceImage ? (
                    services.map((item, index) => {
                      return (
                        <div key={index} className="my-5">
                          <Link
                            href={"/services/" + item.slug.current}
                            className="flex gap-2 items-center justify-between bg-indigo-200 group hover:bg-indigo-800 p-4 transition-all duration-500 ease-linear"
                          >
                            <div className="block font-medium text-black group-hover:text-white text-xl line-clamp-2 transition-all duration-500 ease-in-out">
                              {item.title}
                            </div>

                            <ArrowRight
                              size={28}
                              className="stroke-black group-hover:stroke-white transition-all duration-500 ease-in-out"
                            />
                          </Link>
                        </div>
                      );
                    })
                  ) : (
                    <div className="flex gap-3 items-center">
                      <div className="min-w-[5rem] h-20 rounded-xl animate-pulse bg-gray-200"></div>

                      <div className="">
                        <span className="w-full h-3 bg-gray-300 animate-pulse block" />
                        <span className="w-full h-3 bg-gray-300 animate-pulse block" />
                        <span className="w-full h-3 bg-gray-300 animate-pulse block" />
                      </div>
                    </div>
                  )}

                  <hr className="my-6 border-gray-200 dark:border-gray-700" />

                  <div className="relative w-96 h-96">
                    <div className="absolute inset-0 bg-[#15223d]/80 w-full h-full" />
                    <div className="absolute inset-0 w-full h-full flex flex-col justify-center items-center p-4 gap-2">
                      <h6 className="text-white font-bold text-3xl">
                        Need any help?
                      </h6>
                      <p className="text-white text-center max-w-xs font-medium">
                        We are here to help our customer any time. You can call
                        on 24/7 To Answer Your Question.
                      </p>

                      <p className="text-white text-center max-w-xs font-medium mt-2 text-lg">
                        Call us at :-
                      </p>
                      <a
                        href="tel:+917299002152"
                        className="text-white text-center max-w-xs font-medium text-xl bg-indigo-600 p-2 rounded px-4"
                      >
                        +91 72990 02152
                      </a>
                    </div>
                    <Image
                      src={"/Banner/ServiceDetailFormBanner.png"}
                      alt="Services"
                      width={500}
                      height={500}
                      className="w-96 h-96 object-cover object-center"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Container>
      )}

      {/* FAQ Section */}
      {faqs.length > 0 && (
        <ServiceFAQ faqs={faqs} serviceName={serviceDetails?.title || service} />
      )}
    </div>
  );
};

export default ServicePageClient;
