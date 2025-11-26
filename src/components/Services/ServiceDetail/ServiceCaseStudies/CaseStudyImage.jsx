import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";

export const CaseStudyImage = ({ study }) => {
  return (
    <div className="relative h-96 rounded-2xl overflow-hidden transition-all duration-700 ease-in-out">
      {study.bannerImage ? (
        <Image
          src={urlForImage(study.bannerImage)}
          alt={study.title}
          fill
          className="object-cover transition-transform duration-700 hover:scale-105"
        />
      ) : (
        <div className="w-full h-full bg-gradient-to-br from-[#6F36D2] to-[#8000FF]" />
      )}
    </div>
  );
};
