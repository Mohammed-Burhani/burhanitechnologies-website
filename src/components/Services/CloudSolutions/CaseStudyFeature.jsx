"use client";

import Link from "next/link";
import Container from "@/components/constants/Container";
import { ArrowUpRight } from "@phosphor-icons/react";

const meta = [
  { label: "Sector", value: "Healthcare (United States)" },
  { label: "Client", value: "A US healthcare provider" },
  { label: "Engagement type", value: "Healthcare CRM and AI monitoring build" },
  {
    label: "What we built",
    value:
      "Vitals and activity tracking with AI-driven insights, patient dashboards and doctor review interfaces",
  },
];

const CaseStudyFeature = () => {
  return (
    <section className="relative overflow-hidden border-t border-white/5 bg-[#0B0B10] py-16 sxl:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-0 h-[420px] w-[420px] rounded-full bg-[#6F36D2]/[0.1] blur-[140px]"
      />

      <Container className="relative">
        <span className="font-inter text-smallText font-semibold uppercase tracking-wide text-[#B79CE8]">
          Client project
        </span>

        <div className="mt-6 grid grid-cols-1 overflow-hidden rounded-2xl border border-white/10 lg:grid-cols-2">
          <div className="relative aspect-[16/11] w-full lg:aspect-auto">
            <img
              src="https://picsum.photos/seed/burhani-healthcare-vitals-ai-dashboard/900/900"
              alt="A patient vitals dashboard with AI-driven monitoring insights"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>

          <div className="flex flex-col gap-6 bg-white/[0.02] p-6 sm:p-10">
            <h2 className="text-xl font-semibold leading-snug text-white sm:text-2xl">
              AI-Powered Healthcare CRM &amp; Monitoring
            </h2>

            <dl className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {meta.map((item) => (
                <div key={item.label} className="flex flex-col gap-1">
                  <dt className="font-inter text-smallText font-medium uppercase tracking-wide text-zinc-500">
                    {item.label}
                  </dt>
                  <dd className="text-sm leading-relaxed text-zinc-200">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>

            <Link
              href="/case-studies/ai-powered-healthcare-crm-and-monitoring"
              className="group mt-2 inline-flex w-fit items-center gap-2 rounded-lg border border-zinc-700 px-5 py-3 text-sm font-medium text-zinc-200 transition-colors duration-200 hover:border-zinc-500 hover:text-white active:scale-[0.98] sm:text-base"
            >
              Read the case study
              <ArrowUpRight
                size={16}
                weight="bold"
                className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CaseStudyFeature;
