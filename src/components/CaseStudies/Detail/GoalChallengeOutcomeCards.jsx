import Container from "@/components/constants/Container";
import Reveal from "@/components/contact/Reveal";
import Bezel from "../Listing/Bezel";
import { Target, WarningCircle, Trophy } from "@phosphor-icons/react/dist/ssr";

const SECTIONS = [
  {
    key: "goal",
    title: "Goal",
    icon: Target,
    color: "text-emerald-500",
    bgGlow: "bg-emerald-500/10",
  },
  {
    key: "challenge",
    title: "Challenge",
    icon: WarningCircle,
    color: "text-amber-500",
    bgGlow: "bg-amber-500/10",
  },
  {
    key: "outcome",
    title: "Outcome",
    icon: Trophy,
    color: "text-[#6F36D2]",
    bgGlow: "bg-[#6F36D2]/10",
  },
];

export default function GoalChallengeOutcomeCards({ goal, challenge, outcome }) {
  const data = { goal, challenge, outcome };

  return (
    <section className="bg-zinc-50 py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {SECTIONS.map((section, index) => {
            const Icon = section.icon;
            const content = data[section.key];
            if (!content) return null;

            return (
              <Reveal key={section.key} delay={index * 0.1}>
                <Bezel className="h-full">
                  <div className="flex h-full flex-col p-6 lg:p-8">
                    <div
                      className={`mb-4 flex h-12 w-12 items-center justify-center rounded-full ${section.bgGlow} ring-1 ring-inset ring-black/[0.04]`}
                    >
                      <Icon
                        size={24}
                        weight="duotone"
                        className={section.color}
                        aria-hidden="true"
                      />
                    </div>

                    <h2 className="mb-4 font-inter text-xl font-semibold tracking-tight text-zinc-900 sm:text-2xl">
                      {section.title}
                    </h2>

                    <p className="flex-1 font-inter text-sm leading-relaxed text-zinc-700 sm:text-base">
                      {content}
                    </p>
                  </div>
                </Bezel>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
