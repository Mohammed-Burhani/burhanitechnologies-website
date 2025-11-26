import Container from "@/components/constants/Container";
import { Body } from "@/components/textComponents/Body";
import { Heading } from "@/components/textComponents/Heading";
import Image from "next/image";

export const ServiceSocialProof = () => {
  const companies = [
    { name: "Cisco", logo: "/Logos/cisco.png" },
    { name: "Twilio", logo: "/Logos/twilio.png" },
    { name: "VMware", logo: "/Logos/vmware.png" },
    { name: "Try2", logo: "/Logos/try2.png" },
    { name: "Bank of America", logo: "/Logos/boa.png" },
    { name: "American Express", logo: "/Logos/amex.png" },
    { name: "Mitsubishi", logo: "/Logos/mitsubishi.png" },
    { name: "Renesas", logo: "/Logos/renesas.png" },
    { name: "Fujifilm", logo: "/Logos/fujifilm.png" },
    { name: "Glovis", logo: "/Logos/glovis.png" },
    { name: "Red Bull", logo: "/Logos/redbull.png" },
    { name: "Cameo", logo: "/Logos/cameo.png" }
  ];

  const testimonials = [
    {
      text: "The cloud migration was a great success. Very satisfactory, seamless and smooth. What was really impressive part about Burhani Technologies is their dynamic and well-versed team. Anytime there was a concern, we were able to communicate and have it rectified immediately.",
      author: "President",
      company: "Trusted Community Services Organization",
      avatar: "/team/avatar1.jpg"
    },
    {
      text: "Unlike many firms, they work with a sense of ownership and extension of our team. Their ranging technical capabilities and reliability gave us the confidence to trust them with critical aspects of our product.",
      author: "Head of Engineering",
      company: "Leading Utility & Wellness Platform",
      avatar: "/team/avatar2.jpg"
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
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 flex items-center justify-center hover:bg-white/20 transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 50}
            >
              <div className="text-white text-center font-semibold">
                {company.name}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Carousel */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <Body className="text-white text-lg mb-6 leading-relaxed">
                "{testimonial.text}"
              </Body>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#6F36D2] to-[#8000FF] rounded-full flex items-center justify-center text-white font-bold">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <p className="text-white font-semibold">{testimonial.author}</p>
                  <p className="text-gray-300 text-sm">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};
