import Container from "@/components/constants/Container";
import { Body } from "@/components/textComponents/Body";
import { Star1 } from "iconsax-react";

export const CaseStudyTestimonial = ({ testimonial }) => {
  if (!testimonial || !testimonial.quote) return null;

  return (
    <Container className="bg-[#8000FF] py-20">
      <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
        <div className="flex justify-center items-center gap-2 mb-8">
          {[...Array(5)].map((_, i) => (
            <Star1 key={i} color="white" size={32} variant="Bold" />
          ))}
        </div>

        <blockquote className="text-2xl 4xl:text-3xl font-medium text-white leading-relaxed mb-8">
          "{testimonial.quote}"
        </blockquote>

        <div className="flex flex-col items-center gap-2">
          <h3 className="text-xl font-bold text-white">
            {testimonial.author}
          </h3>
          {testimonial.position && (
            <p className="text-gray-200">
              {testimonial.position}
              {testimonial.company && ` at ${testimonial.company}`}
            </p>
          )}
        </div>
      </div>
    </Container>
  );
};
