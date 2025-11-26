"use client";
import { useEffect, useState } from "react";
import Container from "@/components/constants/Container";
import { Body } from "@/components/textComponents/Body";
import { Heading } from "@/components/textComponents/Heading";
import { client } from "@/sanity/lib/client";
import Link from "next/link";
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";

export const ServiceCaseStudies = () => {
  const [caseStudies, setCaseStudies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const fetchCaseStudies = async () => {
      try {
        const query = `*[_type == "caseStudy"] | order(publishedAt desc)[0...5] {
          _id,
          title,
          slug,
          client,
          industry,
          excerpt,
          bannerImage,
          goal
        }`;
        
        const data = await client.fetch(query);
        setCaseStudies(data);
      } catch (error) {
        console.error("Error fetching case studies:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCaseStudies();
  }, []);

  // Auto-advance carousel
  useEffect(() => {
    if (caseStudies.length === 0) return;

    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % caseStudies.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [caseStudies.length]);

  if (loading || caseStudies.length === 0) return null;

  const activeStudy = caseStudies[activeIndex];

  return (
    <Container className="bg-gradient-to-b from-purple-50 to-white py-20">
      <div className="mb-16" data-aos="fade-up">
        <Heading className="text-[#180030] text-4xl md:text-5xl mb-4">
          Case Studies
        </Heading>
        <Body className="text-gray-600 text-lg max-w-4xl">
          Discover the many ways in which our clients have embraced the benefits of the Burhani Technologies way of engineering.
        </Body>
      </div>

      {/* Case Study Carousel */}
      <div className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left side - Content */}
          <div 
            key={`content-${activeIndex}`}
            className="bg-gradient-to-br from-purple-100 to-purple-50 rounded-2xl p-8 animate-fadeIn"
          >
            <div className="flex gap-2 mb-4">
              {activeStudy.industry && (
                <span className="bg-[#6F36D2] text-white px-4 py-1 rounded-full text-sm">
                  {activeStudy.industry}
                </span>
              )}
            </div>
            
            <h3 className="text-[#180030] text-2xl md:text-3xl font-bold mb-4">
              {activeStudy.title}
            </h3>
            
            <Body className="text-gray-700 mb-4">
              {activeStudy.excerpt || activeStudy.goal}
            </Body>

            <Body className="text-[#6F36D2] font-semibold mb-6">
              Reduced the order fulfillment lead time by 70% and got visibility of inventory levels across 200+ fulfillment partners having 5000+ product SKUs.
            </Body>

            <Link
              href={`/case-studies/${activeStudy.slug.current}`}
              className="inline-flex items-center text-[#6F36D2] font-semibold hover:underline group"
            >
              Read More 
              <span className="ml-2 group-hover:translate-x-2 transition-transform duration-300">→</span>
            </Link>
          </div>

          {/* Right side - Image */}
          <div 
            key={`image-${activeIndex}`}
            className="relative h-96 rounded-2xl overflow-hidden animate-fadeIn"
          >
            {activeStudy.bannerImage ? (
              <Image
                src={urlForImage(activeStudy.bannerImage)}
                alt={activeStudy.title}
                fill
                className="object-cover transition-transform duration-700 hover:scale-110"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-[#6F36D2] to-[#8000FF]" />
            )}
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-4 pointer-events-none">
          <button
            onClick={() => setActiveIndex((current) => (current - 1 + caseStudies.length) % caseStudies.length)}
            className="w-12 h-12 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg pointer-events-auto transition-all duration-300 hover:scale-110"
            aria-label="Previous case study"
          >
            <span className="text-2xl text-[#6F36D2]">←</span>
          </button>
          <button
            onClick={() => setActiveIndex((current) => (current + 1) % caseStudies.length)}
            className="w-12 h-12 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg pointer-events-auto transition-all duration-300 hover:scale-110"
            aria-label="Next case study"
          >
            <span className="text-2xl text-[#6F36D2]">→</span>
          </button>
        </div>

        {/* Carousel Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {caseStudies.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-3 rounded-full transition-all duration-500 ${
                index === activeIndex ? 'bg-[#6F36D2] w-8' : 'bg-gray-300 w-3'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </Container>
  );
};
