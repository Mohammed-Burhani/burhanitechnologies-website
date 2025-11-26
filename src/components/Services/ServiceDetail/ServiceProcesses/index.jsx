import Container from "@/components/constants/Container";
import { Body } from "@/components/textComponents/Body";
import { Heading } from "@/components/textComponents/Heading";
import { ProcessCard } from "./ProcessCard";

export const ServiceProcesses = ({ processes }) => {
  // Only show if processes exist in Sanity
  if (!processes || processes.length === 0) {
    return null;
  }

  return (
    <Container className="bg-gradient-to-br from-[#180030] via-[#4a1a7d] to-[#6F36D2] relative overflow-hidden py-20">
      <div className="absolute inset-0 bg-[#000] w-full h-full opacity-30" />
      
      <div className="relative z-10">
        <div className="mb-16" data-aos="fade-up">
          <Heading className="text-white text-4xl md:text-5xl mb-6">
            Software Development Process
          </Heading>
          <Body className="text-gray-200 text-lg max-w-4xl">
            Our proven methodology ensures successful project delivery from start to finish
          </Body>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {processes.map((process, index) => (
            <ProcessCard key={index} process={process} index={index} />
          ))}
        </div>
      </div>
    </Container>
  );
};
