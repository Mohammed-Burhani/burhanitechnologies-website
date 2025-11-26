import Container from "@/components/constants/Container";
import { Body } from "@/components/textComponents/Body";
import { Heading } from "@/components/textComponents/Heading";

export const ServiceCredibility = () => {
  const capabilities = [
    {
      title: "Azure partnership & recognition",
      description: "We are a recognized Azure Solutions Partner for 'Digital and App Innovation', 'Data & AI', and 'Infrastructure', excelling in Generative AI on Azure, migration, modernization, data science, ML, analytics, and Azure managed services."
    },
    {
      title: "400+ certified engineers",
      description: "Our team boasts 75+ Azure-certified engineers, 250+ Microsoft developers, and 100+ AWS-certified engineers—solution architects, data engineers, DevOps engineers, and more—meticulously aligned with your cloud requirements."
    },
    {
      title: "End-to-end cloud experience",
      description: "From migration and infrastructure management to MACH development and PaaS implementation, we have broad experience to guide every phase of your cloud journey with the best practices and strategies."
    },
    {
      title: "Advanced cloud practices",
      description: "We employ cutting-edge cloud practices centered on automation, serverless computing, containerization, and microservices to ensure your cloud infrastructure is agile, resilient, and resource-efficient."
    },
    {
      title: "Broad DevOps proficiency",
      description: "Our vast expertise in application development equips us with a strong foundation in DevOps best practices and extensive experience across a wide range of technology stacks."
    },
    {
      title: "Governance & security at scale",
      description: "We design and manage your cloud environment to prioritize scalability, governance, and security, ensuring it can handle growing workloads while maintaining compliance and protecting your data."
    }
  ];

  return (
    <Container className="bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="mb-16" data-aos="fade-up">
        <Heading className="text-[#180030] text-4xl md:text-5xl mb-6">
          Enabling speed, reliability, and security with cloud
        </Heading>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {capabilities.map((capability, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-purple-100 to-purple-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <h3 className="text-[#6F36D2] text-xl font-bold mb-4">
              {capability.title}
            </h3>
            <Body className="text-gray-700 leading-relaxed">
              {capability.description}
            </Body>
          </div>
        ))}
      </div>
    </Container>
  );
};
