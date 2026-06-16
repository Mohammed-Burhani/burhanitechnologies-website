import Image from "next/image";

export const CompanyLogo = ({ name, logo, index }) => {
  return (
    <div
      className="bg-white/10 backdrop-blur-sm rounded-lg p-6 flex items-center justify-center hover:bg-white/20 transition-all duration-300 min-h-[120px]"
      data-aos="fade-up"
      data-aos-delay={index * 50}
    >
      {logo ? (
        <Image
          src={logo}
          alt={name}
          width={120}
          height={60}
          className="object-contain filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity"
        />
      ) : (
        <div className="text-white text-center font-semibold text-lg">
          {name}
        </div>
      )}
    </div>
  );
};
