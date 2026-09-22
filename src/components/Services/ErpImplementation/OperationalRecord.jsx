"use client";

import Container from "@/components/constants/Container";
import {
  ChartLine,
  ChartBar,
  UsersThree,
  ChartPieSlice,
  ShieldCheck,
  ArrowsLeftRight,
} from "@phosphor-icons/react";

const gridItems = [
  {
    icon: ChartLine,
    heading: "Production monitoring dashboards",
    body: "Live status on every active batch, so the office sees what the floor sees without asking. This is the piece most spreadsheets cannot do at all.",
  },
  {
    icon: ChartBar,
    heading: "Stock and consumption analytics",
    body: "Accurate stock positions, raw material consumption against plan, and reorder points that fire from real movement instead of a monthly review.",
  },
  {
    icon: UsersThree,
    heading: "Customer and vendor records",
    body: "One record per relationship, carrying orders, pricing history and correspondence, available to whoever picks up the call.",
  },
  {
    icon: ChartPieSlice,
    heading: "Reporting and KPI monitoring",
    body: "The numbers your review meeting uses, generated from live data rather than assembled the night before.",
  },
];

const OperationalRecord = () => {
  return (
    <section className="relative overflow-hidden border-t border-white/5 bg-[#0B0B10] py-16 sxl:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-0 h-[420px] w-[420px] rounded-full bg-[#6F36D2]/[0.1] blur-[140px]"
      />

      <Container className="relative">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-semibold leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl">
            One operational record across departments
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-zinc-400 sm:text-base">
            We map the records and decisions that move between departments,
            then agree the modules, data migration and connections required.
            Each stage is reviewed against current records and working
            requirements before the ERP expands across the operation.
          </p>
        </div>

        {/* Bookended mosaic: one full-width flow strip, a 2x2 capability
           grid, and a closing full-width strip, so six items resolve into
           a 1 + 4 + 1 composition rather than a flat six-tile grid */}
        <div className="mt-10 flex flex-col gap-5 lg:mt-14 lg:gap-6">
          <div className="flex flex-col gap-4 rounded-2xl border border-[#6F36D2]/25 bg-gradient-to-r from-[#6F36D2]/[0.1] to-transparent p-6 sm:flex-row sm:items-center sm:gap-8 sm:p-8">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#6F36D2]/30 bg-[#6F36D2]/[0.12]">
              <ArrowsLeftRight size={22} weight="bold" className="text-[#B79CE8]" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white sm:text-xl">
                Enquiry to delivery in one flow
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-zinc-400 sm:text-base">
                Sales enquiry, order, raw material, production scheduling,
                quality checks and dispatch, connected so a status change in
                one is visible in all of them.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:gap-6">
            {gridItems.map((item) => {
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

          <div className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:flex-row sm:items-center sm:gap-8 sm:p-8">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5">
              <ShieldCheck size={22} weight="bold" className="text-[#B79CE8]" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white sm:text-xl">
                Role-based access
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-zinc-400 sm:text-base">
                Each role sees and edits only what it should. Defined during
                the mapping phase, not bolted on after go-live.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default OperationalRecord;
