"use client";

import Link from "next/link";
import Container from "@/components/constants/Container";
import { ArrowUpRight, GitBranch, PlugsConnected } from "@phosphor-icons/react";

const options = [
  {
    icon: GitBranch,
    heading: "DevOps & Maintenance",
    body: "Keep releases, monitoring and maintenance organised as your application evolves.",
    href: "/services/devops-and-maintenance",
    image: "devops",
  },
  {
    icon: PlugsConnected,
    heading: "Integration Services",
    body: "Keep records moving between Tally, SAP, Salesforce and your internal software.",
    href: "/services/integration-services",
    image: "integration",
  },
];

const ConnectAndMaintain = () => {
  return (
    <section className="relative overflow-hidden bg-white py-16 sxl:py-24">
      <Container className="!py-0">
        <h2 className="max-w-2xl text-2xl font-semibold leading-tight tracking-tight text-zinc-900 sm:text-3xl lg:text-4xl">
          Connect and maintain your cloud environment
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-14 lg:gap-6">
          {options.map((option) => {
            const Icon = option.icon;
            return (
              <Link
                key={option.href}
                href={option.href}
                className="group relative flex flex-col overflow-hidden rounded-2xl bg-[#14111d] outline-offset-4 transition-shadow duration-200 hover:shadow-[0_8px_24px_rgba(70,40,100,0.18)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#6F36D2]"
              >
                <img
                  src={`/illustrations/${option.image}.svg`}
                  width="800" height="640" loading="lazy"
                  alt={`Conceptual process illustration for ${option.heading}`}
                  className="h-auto max-h-80 w-full object-contain"
                />
                <div className="relative flex flex-1 flex-col gap-3 p-6 sm:p-8">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10">
                    <Icon size={20} weight="bold" className="text-white" />
                  </div>
                  <h3 className="text-xl font-semibold leading-snug text-white sm:text-2xl">
                    {option.heading}
                  </h3>
                  <p className="text-sm leading-relaxed text-zinc-300 sm:text-base">
                    {option.body}
                  </p>
                  <span className="mt-auto inline-flex w-fit items-center gap-1.5 pt-1 text-sm font-medium text-[#B79CE8] transition-colors duration-200 group-hover:text-white">
                    Explore
                    <ArrowUpRight
                      size={14}
                      weight="bold"
                      className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default ConnectAndMaintain;
