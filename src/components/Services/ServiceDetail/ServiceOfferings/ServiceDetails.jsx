import { Body } from "@/components/textComponents/Body";

export const ServiceDetails = ({ service }) => {
  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 min-h-[400px]">
      <div className="transition-opacity duration-500">
        <h3 className="text-white text-2xl font-bold mb-4">
          {service.title}
        </h3>
        <Body className="text-gray-200 mb-6 leading-relaxed">
          {service.description}
        </Body>
        {service.tags && service.tags.length > 0 && (
          <div className="flex flex-wrap gap-3 mb-6">
            {service.tags.map((tag, idx) => (
              <span 
                key={idx}
                className="bg-[#6F36D2] text-white px-4 py-2 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        <button className="text-white font-semibold hover:underline flex items-center gap-2 group">
          Learn more
          <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
        </button>
      </div>
    </div>
  );
};
