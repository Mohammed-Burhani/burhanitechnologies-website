import Container from "@/components/constants/Container";
import { Body } from "@/components/textComponents/Body";
import { LargeHeading } from "@/components/textComponents/LargeHeading";

export const GoalChallengeOutcome = ({ goal, challenge, outcome }) => {
  const sections = [
    {
      title: "Goal",
      content: goal,
    },
    {
      title: "Challenge",
      content: challenge,
    },
    {
      title: "Outcome",
      content: outcome,
    },
  ];

  return (
    <Container className="bg-white py-20">
      <div className="flex flex-col gap-16">
        {sections.map((section, index) => (
          <div
            key={index}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className="lg:col-span-3">
              <h2 className="text-4xl 4xl:text-5xl font-bold font-inter text-gray-900">
                {section.title}
              </h2>
            </div>

            <div className="lg:col-span-1 flex justify-center">
              <div className="hidden lg:block w-px h-full bg-gradient-to-b from-[#6F36D2] to-transparent" />
            </div>

            <div className="lg:col-span-8">
              <Body className="text-gray-700 text-justify leading-relaxed">
                {section.content}
              </Body>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};
