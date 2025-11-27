import Container from "@/components/constants/Container";
import { Heading } from "@/components/textComponents/Heading";
import { CapabilityCard } from "./CapabilityCard";

export const ServiceCredibility = ({ title, capabilities }) => {
  // Only show if capabilities exist in Sanity
  if (!capabilities || capabilities.length === 0) {
    return null;
  }

  return (
    <Container className="bg-gradient-to-b from-gray-50 to-white py-20">
      {title && (
        <div className="mb-16" data-aos="fade-up">
          <Heading className="text-[#180030] text-4xl md:text-5xl mb-6">
            {title}
          </Heading>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {capabilities.map((capability, index) => (
          <CapabilityCard key={index} capability={capability} index={index} />
        ))}
      </div>
    </Container>
  );
};
