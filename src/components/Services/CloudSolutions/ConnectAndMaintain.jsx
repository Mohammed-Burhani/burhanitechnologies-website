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
    seed: "burhani-devops-release-pipeline-monitor",
  },
  {
    icon: PlugsConnected,
    heading: "Integration Services",
    body: "Keep records moving between Tally, SAP, Salesforce and your internal software.",
    href: "/services/integration-services",
    seed: "burhani-integration-systems-connected",
  },
];

const ConnectAndMaintain = () => {
  return (
    <section className="relative overflow-hidden bg-white py-16 sxl:py-24">
      <Container>
        <h2 className="max-w-2xl text-2xl font-semibold leading-tight tracking-tight text-zinc-900 sm:text-3xl lg:text-4xl">
          Connect and maintain your cloud environment
        </h2>

        {/* Two large photo panels side by side: with only two items, a
           balanced half-and-half split reads better than a scaled-down
           bento or a divided row, and stays distinct from the other
           two-and-four-card treatments on sibling pillar pages */}
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-14 lg:gap-6">
          {options.map((option) => {
            const Icon = option.icon;
            return (
              <Link
                key={option.href}
                href={option.href}
                className="group relative flex min-h-[280px] flex-col justify-end overflow-hidden rounded-2xl"
              >
                <img
                  src={`https://picsum.photos/seed/${option.seed}/900/700`}
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B10]/95 via-[#0B0B10]/55 to-transparent" />
                <div className="relative flex flex-col gap-3 p-6 sm:p-8">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10">
                    <Icon size={20} weight="bold" className="text-white" />
                  </div>
                  <h3 className="text-xl font-semibold leading-snug text-white sm:text-2xl">
                    {option.heading}
                  </h3>
                  <p className="text-sm leading-relaxed text-zinc-300 sm:text-base">
                    {option.body}
                  </p>
                  <span className="mt-1 inline-flex w-fit items-center gap-1.5 text-sm font-medium text-[#B79CE8] transition-colors duration-200 group-hover:text-white">
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
