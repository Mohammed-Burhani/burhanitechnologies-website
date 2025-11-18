import Container from "@/components/constants/Container";
import { Body } from "@/components/textComponents/Body";
import { LargeHeading } from "@/components/textComponents/LargeHeading";
import Marquee from "react-fast-marquee";
import { TestimonialCard } from "./Blocks/TestimonialCard";

export const Testimonials = () => {
  const testimonials = [
    {
      title: "Highly Professional and Reliable!",
      desc: "Collaborating with Burhani Technologies for our digital transformation was a seamless experience. Their expertise, timely communication, and commitment to delivering excellence truly stood out. We couldn’t be happier with the results!",
      client:"Sarah L.",
    },
    {
      title: "A Game-Changer for Our Business!",
      desc: "Working with Burhani Technologies transformed how we approach IT challenges. Their innovative solutions and dedicated support have significantly improved our efficiency. We’re grateful for their partnership!",
      client:"Mark R.",
    },
    {
      title: "Unmatched Expertise and Service!",
      desc: "From start to finish, Burhani Technologies provided top-notch service. They took the time to understand our needs and delivered tailored solutions that surpassed our expectations. A truly outstanding experience!",
      client:"Priya S.",
    },
    {
      title: "Outstanding Team and Results!",
      desc: "The team at Burhani Technologies exceeded our expectations at every step of our IT project. Their strategic approach and hands-on support made all the difference. We highly recommend them to any business!",
      client:"Michael K.",
    },
    {
      title: "Exceptional Support and Innovation!",
      desc: "We approached Burhani Technologies for help with optimizing our IT operations, and they delivered beyond our expectations. Their innovative solutions and 24/7 support have been a tremendous asset to our business.",
      client:"Emily T.",
    },
    {
      title: "Reliable, Responsive, and Remarkable!",
      desc: "Choosing Burhani Technologies was one of the best decisions we’ve made. Their ability to adapt to our needs and provide effective IT solutions has set a new standard for service. Thank you!",
      client:"David P.",
    },
    {
      title: "Trusted Partners for IT Success!",
      desc: "Burhani Technologies has become an integral part of our business operations. Their proactive approach and expertise have streamlined our IT processes, giving us the confidence to grow without limits.",
      client:"Anjali N.",
    },
   
  ];
  return (
    <Container className={"bg-[#8000FF] flex flex-col overflow-hidden !px-0"}>
      <div className="flex flex-col justify-center items-center w-full mb-14 px-7 sm:px-10 4xl:px-20">
        <h4
          className="uppercase text-gray-300 font-extrabold"
          data-aos="fade-down"
        >
          Testimonials
        </h4>

        <LargeHeading
          data-aos="fade-down"
          className="max-w-5xl 4xl:max-w-7xl text-center mt-7 text-white"
        >
          Trusted by more than 1000+ company’s around the world
        </LargeHeading>
        <Body
          className={"max-w-2xl 4xl:max-w-4xl text-center mt-4 text-gray-200"}
          data-aos="fade-down"
        >
          We are more than just a business; we are a community driven by our
          passion for serving our customers with excellence. Our success is
          intertwined with the success of each individual and company we proudly
          call our customers.
        </Body>
      </div>

      <Marquee className="flex-1 w-full" direction="left" speed={70} pauseOnHover pauseOnClick>
        <div className="flex gap-10 mr-10" data-aos="fade-up">
          {testimonials.map((item, i) => {
            return (
              <TestimonialCard key={i} title={item?.title} desc={item?.desc} client={item?.client} />
            );
          })}
        </div>
      </Marquee>
    </Container>
  );
};
