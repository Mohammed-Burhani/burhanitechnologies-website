"use client";
import { useState, useEffect } from "react";
import { CaseStudyContent } from "./CaseStudyContent";
import { CaseStudyImage } from "./CaseStudyImage";
import { CarouselControls } from "./CarouselControls";

export const CaseStudyCarousel = ({ caseStudies }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

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

  const activeStudy = caseStudies[activeIndex];

  return (
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
  );
};
