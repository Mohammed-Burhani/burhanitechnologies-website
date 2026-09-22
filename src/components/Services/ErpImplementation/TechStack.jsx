"use client";

import Container from "@/components/constants/Container";

const groups = [
  {
    heading: "Languages and frameworks",
    items: [
      "React",
      "Angular",
      "Vue",
      "Node.js",
      "Python",
      ".NET",
      "Java",
      "Kotlin",
      "Swift",
      "React Native",
      "Flutter",
    ],
  },
  {
    heading: "Cloud and infrastructure",
    items: ["Microsoft Azure", "AWS", "Google Cloud", "Terraform", "Docker", "Kubernetes"],
  },
  {
    heading: "Data and reporting",
    items: ["Power BI", "Tableau", "Predictive analytics"],
  },
  {
    heading: "Integration",
    items: ["REST", "GraphQL", "SOAP", "iPaaS"],
  },
];

const TechStack = () => {
  return (
    <section className="relative overflow-hidden bg-white py-16 sxl:py-24">
      <Container>
        <div className="max-w-2xl">
          <h2 className="text-2xl font-semibold leading-tight tracking-tight text-zinc-900 sm:text-3xl lg:text-4xl">
            Technologies we work with
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-zinc-500 sm:text-base">
            Grouped by the layer it sits in. Every tool here is one we have
            shipped with.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-x-10 gap-y-10 lg:mt-14 lg:grid-cols-2">
          {groups.map((group) => (
            <div key={group.heading} className="flex flex-col gap-4">
              <h3 className="font-inter text-smallText font-semibold uppercase tracking-wide text-zinc-400">
                {group.heading}
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center rounded-full border border-zinc-200 bg-zinc-50 px-4 py-2 text-sm font-medium text-zinc-700 transition-colors duration-200 hover:border-[#6F36D2]/30 hover:bg-[#6F36D2]/[0.06] hover:text-[#6F36D2]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default TechStack;
