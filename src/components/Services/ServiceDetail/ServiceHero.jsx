"use client";
import Container from "@/components/constants/Container";
import { Body } from "@/components/textComponents/Body";
import { LargeHeading } from "@/components/textComponents/LargeHeading";
import Image from "next/image";
import { ContactModal } from "@/components/constants/ContactModal";

export const ServiceHero = ({ title, description }) => {
  return (
    <div className="bg-white pt-32">
      <Container className="bg-gradient-to-br from-[#180030] via-[#6F36D2] to-[#8000FF] min-h-[40rem] w-full relative overflow-hidden">
        <div className="absolute inset-0 bg-[#000] w-full h-full opacity-20" />
        <Image
          alt="Burhani Technologies"
          src={"/Logos/hollow-logo.svg"}
          width={500}
          height={500}
          className="!absolute -left-20 top-0 h-full w-fit mx-auto object-contain no-repeat scale-125 opacity-10"
        />

        <div className="flex flex-col justify-center items-center h-full py-20 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <LargeHeading 
              className="font-inter font-bold text-5xl md:text-6xl lg:text-7xl text-white mb-6"
              data-aos="fade-up"
            >
              {title}
            </LargeHeading>

            <Body
              className="mt-6 max-w-3xl mx-auto text-gray-200 text-lg md:text-xl !font-light"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              {description}
            </Body>

            <div className="mt-10" data-aos="fade-up" data-aos-delay="200">
              <ContactModal />
            </div>
          </div>
        </div>

        <Image
          alt="Burhani Technologies"
          src={"/Logos/hollow-logo.svg"}
          width={500}
          height={500}
          className="hidden 2xl:flex !absolute 4xl:-right-40 7xl:-right-56 top-0 h-full w-fit mx-auto object-contain no-repeat scale-125 opacity-10"
        />
      </Container>
    </div>
  );
};
