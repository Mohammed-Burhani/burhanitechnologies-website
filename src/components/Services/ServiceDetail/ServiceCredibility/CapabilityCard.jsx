import { Body } from "@/components/textComponents/Body";

export const CapabilityCard = ({ capability, index }) => {
  return (
    <div
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
  );
};
