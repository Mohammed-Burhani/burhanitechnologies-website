"use client";

import Link from "next/link";
import Container from "@/components/constants/Container";
import {
  ArrowUpRight,
  Browser,
  DeviceMobile,
  Browsers,
  FlowArrow,
} from "@phosphor-icons/react";

const options = [
  {
    icon: Browser,
    heading: "Web Application Development",
    body: "Bring orders, requests, approvals and operational records into a browser application.",
    href: "/services/web-application-development",
  },
  {
    icon: DeviceMobile,
    heading: "Mobile App Development",
    body: "Give field teams and customers a practical way to work from their phones.",
    href: "/services/mobile-application-development",
  },
  {
    icon: Browsers,
    heading: "Cross-Platform Enterprise Apps",
    body: "Share application logic across web, mobile and desktop where it suits the work.",
    href: "/services/cross-platform-enterprise-applications",
  },
  {
    icon: FlowArrow,
    heading: "Web & CMS Development",
    body: "Publish and maintain your website through reusable templates and a clear editing workflow.",
    href: "/services/cms-based-website-development",
  },
];

const ChooseRightApplication = () => {
  return (
    <section className="relative overflow-hidden bg-white py-16 sxl:py-24">
      <Container>
        <h2 className="max-w-2xl text-2xl font-semibold leading-tight tracking-tight text-zinc-900 sm:text-3xl lg:text-4xl">
          Choose the right application for your team
        </h2>

        {/* Filled tinted tiles instead of the bordered-white-card treatment
           used elsewhere on the site, so this grid reads as its own moment */}
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-14 lg:gap-6">
          {options.map((option, i) => {
            const Icon = option.icon;
            return (
              <Link
                key={option.href}
                href={option.href}
                className={`group flex flex-col gap-4 rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 sm:p-8 ${
                  i % 2 === 0
                    ? "bg-[#6F36D2]/[0.05] hover:bg-[#6F36D2]/[0.09]"
                    : "bg-zinc-900 hover:bg-zinc-800"
                }`}
              >
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-full ${
                    i % 2 === 0
                      ? "bg-[#6F36D2]/[0.12] text-[#6F36D2]"
                      : "bg-white/10 text-white"
                  }`}
                >
                  <Icon size={22} weight="bold" />
                </div>
                <h3
                  className={`text-lg font-semibold leading-snug sm:text-xl ${
                    i % 2 === 0 ? "text-zinc-900" : "text-white"
                  }`}
                >
                  {option.heading}
                </h3>
                <p
                  className={`text-sm leading-relaxed sm:text-base ${
                    i % 2 === 0 ? "text-zinc-600" : "text-zinc-400"
                  }`}
                >
                  {option.body}
                </p>
                <span
                  className={`mt-auto inline-flex w-fit items-center gap-1.5 pt-2 text-sm font-medium transition-colors duration-200 ${
                    i % 2 === 0
                      ? "text-[#6F36D2]"
                      : "text-[#B79CE8]"
                  }`}
                >
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

export default ChooseRightApplication;
