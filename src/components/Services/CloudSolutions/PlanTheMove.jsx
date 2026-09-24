"use client";

import Container from "@/components/constants/Container";
import {
  CloudArrowUp,
  Stack,
  GitBranch,
  PlugsConnected,
  ShieldCheck,
  ChartLineUp,
} from "@phosphor-icons/react";

const capabilities = [
  {
    icon: CloudArrowUp,
    heading: "Cloud migration and architecture",
    body: "Moving systems onto Azure, AWS or Google Cloud with an architecture designed for the load you carry today.",
  },
  {
    icon: Stack,
    heading: "Infrastructure as code",
    body: "Environments defined in Terraform and built with Docker and Kubernetes, so a new environment is a repeatable process rather than a manual rebuild.",
  },
  {
    icon: GitBranch,
    heading: "DevOps pipelines and continuous delivery",
    body: "Automated builds and deployments through Jenkins or Azure DevOps, so a code change reaches production on a schedule you control.",
  },
  {
    icon: PlugsConnected,
    heading: "System integration",
    body: "Your cloud environment connected to the systems already running your business, so moving to the cloud does not mean rebuilding what already works.",
  },
  {
    icon: ShieldCheck,
    heading: "Monitoring, backup and recovery",
    body: "Continuous monitoring and a tested backup plan, so a failure becomes a recovery procedure rather than a rebuild from scratch.",
  },
  {
    icon: ChartLineUp,
    heading: "Cost and capacity management",
    body: "Capacity that adjusts to actual usage, reviewed regularly so you pay for the infrastructure your systems need this month.",
  },
];

const PlanTheMove = () => {
  return (
    <section className="relative overflow-hidden border-t border-white/5 bg-[#0B0B10] py-16 sxl:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-0 h-[420px] w-[420px] rounded-full bg-[#6F36D2]/[0.1] blur-[140px]"
      />

      <Container className="relative">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-semibold leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl">
            Plan the move around your applications and data
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-zinc-400 sm:text-base">
            We review application dependencies, usage and recovery needs
            before choosing a migration path. The design covers hosting,
            identity, storage, monitoring and the connections you retain.
            Cutover checks and ongoing support are planned alongside the
            infrastructure.
          </p>
        </div>

        {/* Checkerboard-tinted 3x2 grid: alternating cell backgrounds carry
           the bento diversity here instead of a photo tile or bookend
           strips, a fifth distinct composition for this recurring
           capability-grid section across the pillar pages */}
        <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-2xl bg-white/10 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">
          {capabilities.map((item, i) => {
            const Icon = item.icon;
            const tinted = i % 2 === 0;
            return (
              <div
                key={item.heading}
                className={`flex flex-col gap-3 p-6 sm:p-7 ${
                  tinted ? "bg-[#6F36D2]/[0.08]" : "bg-[#0B0B10]"
                }`}
              >
                <Icon size={22} weight="bold" className="text-[#B79CE8]" />
                <h3 className="text-base font-semibold leading-snug text-white">
                  {item.heading}
                </h3>
                <p className="text-sm leading-relaxed text-zinc-400">
                  {item.body}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default PlanTheMove;
