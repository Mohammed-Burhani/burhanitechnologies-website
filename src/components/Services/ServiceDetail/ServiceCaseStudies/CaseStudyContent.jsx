import { Body } from "@/components/textComponents/Body";
import Link from "next/link";

export const CaseStudyContent = ({ study }) => {
  return (
    <div className="bg-gradient-to-br from-purple-100 to-purple-50 rounded-2xl p-8 transition-all duration-700 ease-in-out">
      <div className="flex gap-2 mb-4">
        {study.industry && (
          <span className="bg-[#6F36D2] text-white px-4 py-1 rounded-full text-sm">
            {study.industry}
          </span>
        )}
      </div>
      
      <h3 className="text-[#180030] text-2xl md:text-3xl font-bold mb-4">
        {study.title}
      </h3>
      
      <Body className="text-gray-700 mb-4">
        {study.excerpt || study.goal}
      </Body>

      <Body className="text-[#6F36D2] font-semibold mb-6">
        Reduced the order fulfillment lead time by 70% and got visibility of inventory levels across 200+ fulfillment partners having 5000+ product SKUs.
      </Body>

      <Link
        href={`/case-studies/${study.slug.current}`}
        className="inline-flex items-center text-[#6F36D2] font-semibold hover:underline group"
      >
        Read More 
        <span className="ml-2 group-hover:translate-x-2 transition-transform duration-300">→</span>
      </Link>
    </div>
  );
};
