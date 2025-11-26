import { Body } from "@/components/textComponents/Body";

export const TestimonialCard = ({ testimonial, index }) => {
  return (
    <div
      className="bg-white/10 backdrop-blur-sm rounded-2xl p-8"
      data-aos="fade-up"
      data-aos-delay={index * 100}
    >
      <Body className="text-white text-lg mb-6 leading-relaxed">
        "{testimonial.text}"
      </Body>
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-gradient-to-br from-[#6F36D2] to-[#8000FF] rounded-full flex items-center justify-center text-white font-bold text-xl">
          {testimonial.author.charAt(0)}
        </div>
        <div>
          <p className="text-white font-semibold">{testimonial.author}</p>
          <p className="text-gray-300 text-sm">{testimonial.company}</p>
        </div>
      </div>
    </div>
  );
};
