import { Body } from "@/components/textComponents/Body";

export const ContentCard = ({ children }) => {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
      <Body className="text-lg text-gray-700 leading-relaxed">
        {children}
      </Body>
    </div>
  );
};
