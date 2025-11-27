"use client";
import { useEffect, useState } from "react";
import Container from "@/components/constants/Container";
import { Body } from "@/components/textComponents/Body";
import { Heading } from "@/components/textComponents/Heading";
import { client } from "@/sanity/lib/client";
import { CaseStudyContent } from "./CaseStudyContent";
import { CaseStudyImage } from "./CaseStudyImage";
import { CarouselControls } from "./CarouselControls";

export const ServiceCaseStudies = ({ title, description }) => {
  const [caseStudies, setCaseStudies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

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

  // Auto-advance carousel with smooth transition
  useEffect(() => {
    if (caseStudies.length === 0) return;

    const interval = setInterval(() => {
      handleNext();
    }, 7000); // Changed to 7 seconds for smoother experience

    return () => clearInterval(interval);
  }, [caseStudies.length, activeIndex]);

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setActiveIndex((current) => (current + 1) % caseStudies.length);
    setTimeout(() => setIsTransitioning(false), 700); // Match transition duration
  };

  const handlePrevious = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setActiveIndex((current) => (current - 1 + caseStudies.length) % caseStudies.length);
    setTimeout(() => setIsTransitioning(false), 700);
  };

  const handleDotClick = (index) => {
    if (isTransitioning || index === activeIndex) return;
    setIsTransitioning(true);
    setActiveIndex(index);
    setTimeout(() => setIsTransitioning(false), 700);
  };

  if (loading || caseStudies.length === 0) return null;

  const activeStudy = caseStudies[activeIndex];

  return (
    <Container className="bg-gradient-to-b from-purple-50 to-white py-20">
      {(title || description) && (
        <div className="mb-16" data-aos="fade-up">
          {title && (
            <Heading className="text-[#180030] text-4xl md:text-5xl mb-4">
              {title}
            </Heading>
          )}
          {description && (
            <Body className="text-gray-600 text-lg max-w-4xl">
              {description}
            </Body>
          )}
        </div>
      )}

      {/* Case Study Carousel */}
      <div className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <CaseStudyContent study={activeStudy} />
          <CaseStudyImage study={activeStudy} />
        </div>

        <CarouselControls
          currentIndex={activeIndex}
          total={caseStudies.length}
          onPrevious={handlePrevious}
          onNext={handleNext}
          onDotClick={handleDotClick}
        />
      </div>
    </Container>
  );
};
