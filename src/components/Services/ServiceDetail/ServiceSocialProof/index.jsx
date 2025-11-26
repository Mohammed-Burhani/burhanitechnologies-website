import Container from "@/components/constants/Container";
import { Heading } from "@/components/textComponents/Heading";
import { CompanyLogo } from "./CompanyLogo";
import { TestimonialCard } from "./TestimonialCard";

export const ServiceSocialProof = () => {
  // Using placeholder company names - you can add actual logos later
  const companies = [
    { name: "Microsoft", logo: null },
    { name: "Amazon", logo: null },
    { name: "Google", logo: null },
    { name: "IBM", logo: null },
    { name: "Oracle", logo: null },
    { name: "SAP", logo: null },
    { name: "Salesforce", logo: null },
    { name: "Adobe", logo: null },
    { name: "Intel", logo: null },
    { name: "Cisco", logo: null },
    { name: "Dell", logo: null },
    { name: "HP", logo: null }
  ];

  const testimonials = [
    {
      text: "The cloud migration was a great success. Very satisfactory, seamless and smooth. What was really impressive part about Burhani Technologies is their dynamic and well-versed team. Anytime there was a concern, we were able to communicate and have it rectified immediately.",
      author: "John Smith",
      company: "Trusted Community Services Organization"
    },
    {
      text: "Unlike many firms, they work with a sense of ownership and extension of our team. Their ranging technical capabilities and reliability gave us the confidence to trust them with critical aspects of our product.",
      author: "Sarah Johnson",
      company: "Leading Utility & Wellness Platform"
    }
  ];

  return (
    <Container className="bg-gradient-to-br from-[#180030] via-[#4a1a7d] to-[#6F36D2] relative overflow-hidden py-20">
      <div className="absolute inset-0 bg-[#000] w-full h-full opacity-30" />
      
      <div className="relative z-10">
        <div className="mb-16" data-aos="fade-up">
          <Heading className="text-white text-4xl md:text-5xl mb-6 text-center">
            Trusted by the World's Leading Companies
          </Heading>
        </div>

        {/* Company Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
          {companies.map((company, index) => (
            <CompanyLogo key={index} {...company} index={index} />
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} index={index} />
          ))}
        </div>
      </div>
    </Container>
  );
};
