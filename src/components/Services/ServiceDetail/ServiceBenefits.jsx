import Container from "@/components/constants/Container";
import { Body } from "@/components/textComponents/Body";
import { Heading } from "@/components/textComponents/Heading";
import { PortableText } from "next-sanity";
import { components } from "@/utils/components";
import { PortableBody } from "@/components/textComponents/PortableBody";

export const ServiceBenefits = ({ title, description }) => {
  if (!title && !description) return null;

  return (
    <Container className="bg-white">
      <div className="max-w-5xl mx-auto" data-aos="fade-up">
        {title && (
          <Heading className="text-center mb-8">{title}</Heading>
        )}
        
        {description && (
          <PortableBody className="text-lg text-gray-700 leading-relaxed">
            <PortableText value={description} components={components} />
          </PortableBody>
        )}
      </div>
    </Container>
  );
};
