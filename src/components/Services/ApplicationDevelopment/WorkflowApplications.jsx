"use client";

import Container from "@/components/constants/Container";
import {
  Browser,
  DeviceMobile,
  FlowArrow,
  Stack,
  Browsers,
} from "@phosphor-icons/react";

const secondary = [
  {
    icon: DeviceMobile,
    heading: "Mobile applications, native and cross-platform",
    body: "Field teams, drivers and borrowers get an app built for the phone they already carry, feeding the same data the office dashboard reads.",
  },
  {
    icon: Browsers,
    heading: "Cross-platform enterprise applications",
    body: "One codebase running across web, iOS and Android, where maintaining three separate versions would slow down every future change.",
  },
  {
    icon: Stack,
    heading: "Line-of-business applications",
    body: "A single department's system, with the approval rules, permissions and records that department needs, built without waiting on a company-wide platform decision.",
  },
  {
    icon: FlowArrow,
    heading: "CMS-based marketing websites",
    body: "The website where content is the job. A different kind of build from a web application, and one we design to work alongside it.",
  },
];

const WorkflowApplications = () => {
  return (
    <section className="relative overflow-hidden border-t border-white/5 bg-[#0B0B10] py-16 sxl:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-0 h-[420px] w-[420px] rounded-full bg-[#6F36D2]/[0.1] blur-[140px]"
      />

      <Container className="relative">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-semibold leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl">
            Applications shaped around your workflow
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-zinc-400 sm:text-base">
            We start with the task your team needs to complete and the
            systems it depends on. The agreed workflow informs the
            interfaces, data model and permissions. Short development cycles
            give your team working software to review as the application
            takes shape.
          </p>
        </div>

        {/* Bento: the first application type carries a photo feature tile,
           the remaining four sit in compact rows, so five items resolve
           into a 1 + 4 composition rather than five identical tiles */}
        <div className="mt-10 grid grid-cols-1 gap-5 lg:mt-14 lg:grid-cols-2 lg:gap-6">
          <div className="relative flex min-h-[280px] flex-col justify-end overflow-hidden rounded-2xl lg:row-span-2">
            <img
              src="https://picsum.photos/seed/burhani-web-application-daily-ops/900/1000"
              alt=""
              aria-hidden="true"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B10]/95 via-[#0B0B10]/45 to-transparent" />
            <div className="relative flex flex-col gap-3 p-6 sm:p-8">
              <Browser size={24} weight="bold" className="text-[#B79CE8]" />
              <h3 className="text-xl font-semibold leading-snug text-white sm:text-2xl">
                Web applications for daily operations
              </h3>
              <p className="text-sm leading-relaxed text-zinc-300 sm:text-base">
                Browser-based systems your team runs the business on, distinct
                from a marketing website. Built for the workflows sales,
                operations and finance repeat every day.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:gap-6">
            {secondary.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.heading}
                  className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/[0.02] p-6"
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
        </div>
      </Container>
    </section>
  );
};

export default WorkflowApplications;
