export const ServiceList = ({ services, activeIndex, onServiceClick }) => {
  return (
    <div className="space-y-4">
      {services.map((service, index) => (
        <button
          key={`service-${index}`}
          onClick={() => onServiceClick(index)}
          className={`w-full p-6 rounded-lg cursor-pointer transition-all duration-300 text-left ${
            index === activeIndex 
              ? 'bg-[#6F36D2] shadow-2xl' 
              : 'bg-white/10 hover:bg-white/20'
          }`}
          style={{ opacity: 1, visibility: 'visible' }}
        >
          <h3 className="text-white text-xl font-semibold flex items-center justify-between">
            {service.title}
            <span className={`text-2xl transition-transform duration-300 ${
              index === activeIndex ? 'translate-x-2' : ''
            }`}>→</span>
          </h3>
        </button>
      ))}
    </div>
  );
};
