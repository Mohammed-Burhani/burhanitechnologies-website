"use client";

import Link from "next/link";
import Container from "@/components/constants/Container";
import {
  ArrowUpRight,
  Robot,
  FlowArrow,
  Wrench,
  ChartLineUp,
} from "@phosphor-icons/react";

const options = [
  {
    icon: Robot,
    heading: "Robotic Process Automation",
    body: "Let software bots handle stable, repeatable tasks through existing application screens.",
    href: "/services/robotic-process-automation-rpa",
  },
  {
    icon: FlowArrow,
    heading: "Workflow Automation",
    body: "Give requests a clear path through approvals and handoffs.",
    href: "/services/workflow-automation",
  },
  {
    icon: Wrench,
    heading: "Custom Automation Tools",
    body: "Turn a repeated conversion, check, calculation or reporting task into a focused tool.",
    href: "/services/custom-automation-tools",
  },
  {
    icon: ChartLineUp,
    heading: "Process Automation",
    body: "Track how work moves through each stage, where it waits and which cases need attention.",
    href: "/services/process-automation",
  },
];

const MatchAutomation = () => {
  return (
    <section className="relative overflow-hidden bg-white py-16 sxl:py-24">
      <Container className="!py-0">
        <h2 className="max-w-2xl text-2xl font-semibold leading-tight tracking-tight text-zinc-900 sm:text-3xl lg:text-4xl">
          Match the automation to the task
        </h2>

        {/* Minimal divided row, no card backgrounds or borders beyond the
           hairline dividers, distinct from the tinted-tile bento used for
           the equivalent section on the software development page */}
        <div className="mt-10 grid grid-cols-1 border-t border-zinc-200 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4">
          {options.map((option, index) => {
            const Icon = option.icon;
            return (
              <Link
                key={option.href}
                href={option.href}
                className={`group flex min-w-0 flex-col gap-3 border-b border-zinc-200 py-6 transition-colors duration-200 last:border-b-0 hover:bg-[#6F36D2]/[0.03] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#6F36D2] sm:px-6 sm:py-7 lg:border-b-0 lg:px-8 ${index % 2 === 0 ? "sm:border-r" : ""} ${index >= 2 ? "sm:border-b-0" : ""} ${index < options.length - 1 ? "lg:border-r" : ""}`}
              >
                <Icon
                  size={24}
                  weight="bold"
                  className="text-[#6F36D2] transition-transform duration-200 group-hover:-translate-y-0.5"
                />
                <h3 className="text-base font-semibold leading-snug text-zinc-900">
                  {option.heading}
                </h3>
                <p className="text-sm leading-relaxed text-zinc-500">
                  {option.body}
                </p>
                <span className="mt-auto inline-flex w-fit items-center gap-1.5 pt-2 text-sm font-medium text-zinc-600 transition-colors duration-200 group-hover:text-[#6F36D2]">
                  Explore
                  <ArrowUpRight
                    size={14}
                    weight="bold"
                    className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </span>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default MatchAutomation;
