import { Body } from "@/components/textComponents/Body";

export const HighlightCard = ({ icon, text, index }) => {
  return (
    <div
      className="bg-gradient-to-br from-purple-100 to-purple-50 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105"
      data-aos="fade-up"
      data-aos-delay={index * 100}
    >
      <div className="text-4xl mb-3">{icon}</div>
      <Body className="text-[#6F36D2] font-semibold text-sm">
        {text}
      </Body>
    </div>
  );
};
