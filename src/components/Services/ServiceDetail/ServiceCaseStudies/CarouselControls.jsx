export const CarouselControls = ({ currentIndex, total, onPrevious, onNext, onDotClick }) => {
  return (
    <>
      {/* Navigation Arrows */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-4 pointer-events-none z-10">
        <button
          onClick={onPrevious}
          className="w-12 h-12 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg pointer-events-auto transition-all duration-300 hover:scale-110"
          aria-label="Previous case study"
        >
          <span className="text-2xl text-[#6F36D2]">←</span>
        </button>
        <button
          onClick={onNext}
          className="w-12 h-12 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg pointer-events-auto transition-all duration-300 hover:scale-110"
          aria-label="Next case study"
        >
          <span className="text-2xl text-[#6F36D2]">→</span>
        </button>
      </div>

      {/* Carousel Dots */}
      <div className="flex justify-center gap-2 mt-8">
        {Array.from({ length: total }).map((_, index) => (
          <button
            key={index}
            onClick={() => onDotClick(index)}
            className={`h-3 rounded-full transition-all duration-500 ${
              index === currentIndex ? 'bg-[#6F36D2] w-8' : 'bg-gray-300 w-3'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </>
  );
};
