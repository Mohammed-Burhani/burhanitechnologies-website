import Container from "@/components/constants/Container";
import { Body } from "@/components/textComponents/Body";
import { Heading } from "@/components/textComponents/Heading";

export const ServiceProcess = () => {
  const highlights = [
    {
      icon: "⚡",
      text: "10+ years of experience"
    },
    {
      icon: "👥",
      text: "400+ cloud experts"
    },
    {
      icon: "🏆",
      text: "Fortune500 clients"
    },
    {
      icon: "🎯",
      text: "200+ AWS certified professionals"
    }
  ];

  return (
    <Container className="bg-gradient-to-b from-white to-gray-50 py-20">
      <div className="mb-12" data-aos="fade-up">
        <Heading className="text-[#180030] text-4xl md:text-5xl mb-8 leading-tight">
          Become intrinsically agile and improve time to market with cloud-native solutions
        </Heading>
      </div>

      {/* Highlight Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12" data-aos="fade-up">
        {highlights.map((item, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-purple-100 to-purple-50 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className="text-4xl mb-3">{item.icon}</div>
            <Body className="text-[#6F36D2] font-semibold text-sm">
              {item.text}
            </Body>
          </div>
        ))}
      </div>

      {/* Content Sections */}
      <div className="space-y-8" data-aos="fade-up">
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <Body className="text-lg text-gray-700 leading-relaxed">
            Modern digital experiences require smarter methodologies, better technologies, and innovative approaches to win users' trust and attention. 
            Cloud-native technologies have the potential to deliver sophisticated software solutions with such experiences.
          </Body>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <Body className="text-lg text-gray-700 leading-relaxed">
            However, you need a reliable partner who can oversee the perfect implementation of cloud-native tech to deliver those delightful digital 
            products to your customers. With <span className="text-[#6F36D2] font-semibold">10+ years of experience</span>, <span className="text-[#6F36D2] font-semibold">400+ cloud experts</span> in the ranks, and <span className="text-[#6F36D2] font-semibold">Fortune500 companies</span> as satisfied clients, 
            Burhani Technologies equips you with the right expertise to make the most of cloud-native technologies.
          </Body>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <Body className="text-lg text-gray-700 leading-relaxed">
            Burhani Technologies gives you access to seasoned cloud architects, skilled DevOps experts, cross-functional agile teams, and 200+ certified AWS 
            professionals. Whether it be modernizing an aging software, building a solution from scratch, or modifying infrastructure to keep up with 
            business growth, Burhani Technologies utilizes the best cloud practices and methodologies to fulfill your business goals.
          </Body>
        </div>
      </div>
    </Container>
  );
};
