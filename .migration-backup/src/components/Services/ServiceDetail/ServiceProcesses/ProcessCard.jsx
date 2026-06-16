import { Body } from "@/components/textComponents/Body";

export const ProcessCard = ({ process, index }) => {
  return (
    <div
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
  );
};
