import Container from "@/components/constants/Container";
import { Body } from "@/components/textComponents/Body";
import { Heading } from "@/components/textComponents/Heading";

export const ServiceProcesses = () => {
  const processes = [
    {
      title: "Choosing the team",
      description: "We pick a talent pool with the right team, the right expertise, domain knowledge and willingness to adapt and evolve to your project environment.",
      icon: "👥"
    },
    {
      title: "Development methodology planning",
      description: "Choose the suitable methodology that empowers the development process to be conducted at its best. Our team members follow sprint planning and agile techniques.",
      icon: "📋"
    },
    {
      title: "Architecture creation",
      description: "We handle all architecture evolution requirements ranging from UI/UX enhancement, decoupling tightly packed features by migrating to microservices or modularizing the existing architecture.",
      icon: "🏗️"
    },
    {
      title: "Quality assurance",
      description: "Rigorous testing and quality checks ensure your solution meets the highest standards. We implement automated testing and continuous integration practices.",
      icon: "✅"
    },
    {
      title: "Deployment & monitoring",
      description: "Seamless deployment with continuous monitoring and optimization. We ensure your application runs smoothly with 24/7 support and proactive maintenance.",
      icon: "🚀"
    },
    {
      title: "Continuous improvement",
      description: "Regular updates and improvements based on user feedback and performance metrics. We help you stay ahead with the latest technologies and best practices.",
      icon: "🔄"
    }
  ];

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
            <div
              key={index}
              className="bg-gradient-to-br from-purple-100 to-purple-50 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {process.icon}
              </div>
              
              <h3 className="text-[#180030] text-xl font-bold mb-4">
                {process.title}
              </h3>
              
              <Body className="text-gray-700 leading-relaxed">
                {process.description}
              </Body>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};
