"use client";

import Link from "next/link";
import Container from "@/components/constants/Container";
import { ArrowUpRight, Bank, Factory, Heartbeat, Ticket } from "@phosphor-icons/react";

const sectors = [
  {
    icon: Heartbeat,
    heading: "Healthcare",
    body: "Build connected systems for patient tracking, clinical review and digital support.",
    tag: "Healthcare software",
    href: "/industries/healthcare",
  },
  {
    icon: Factory,
    heading: "Manufacturing",
    body: "Bring production, stock and dispatch records into a shared system.",
    tag: "Manufacturing software",
    href: "/industries/manufacturing",
  },
  {
    icon: Bank,
    heading: "Finance",
    body: "Bring borrower applications, staff review and loan status into a connected workflow.",
    tag: "Finance software",
    href: "/industries/finance",
  },
  {
    icon: Ticket,
    heading: "Events & Exhibitions",
    body: "Connect visitor registration, staff check-in and product interest with event reporting.",
    tag: "Events & Exhibitions software",
    href: "/industries/events",
  },
];

const Sectors = () => {
  return (
    <section className="relative overflow-hidden bg-white py-16 sxl:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-10 h-[380px] w-[380px] rounded-full bg-[#6F36D2]/[0.07] blur-[120px]"
      />

      <Container className="relative">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-semibold leading-tight tracking-tight text-zinc-900 sm:text-3xl lg:text-4xl">
            Sectors we have already delivered in
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-zinc-500 sm:text-base">
            Explore the{" "}
            <Link
              href="/industries"
              className="font-medium text-[#6F36D2] underline decoration-[#6F36D2]/30 underline-offset-2 transition-colors duration-200 hover:text-[#4f2496] hover:decoration-[#4f2496]"
            >
              industry workflows we build for
            </Link>
            , with evidence from delivered systems.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4 lg:gap-6">
          {sectors.map((sector) => {
            const Icon = sector.icon;
            return (
              <Link
                key={sector.heading}
                href={sector.href}
                className="group relative flex flex-col gap-4 overflow-hidden rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#6F36D2]/30 hover:shadow-lg hover:shadow-[#6F36D2]/[0.06]"
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-[#6F36D2]/[0.06] blur-2xl transition-opacity duration-300 group-hover:opacity-150"
                />

                <div className="relative flex h-11 w-11 items-center justify-center rounded-full border border-[#6F36D2]/20 bg-[#6F36D2]/[0.06]">
                  <Icon size={20} weight="bold" className="text-[#6F36D2]" />
                </div>

                <h3 className="relative text-lg font-semibold text-zinc-900">
                  {sector.heading}
                </h3>
                <p className="relative text-sm leading-relaxed text-zinc-500">
                  {sector.body}
                </p>

                <span className="relative mt-auto flex items-center gap-1.5 pt-2 text-xs font-medium uppercase tracking-wide text-zinc-400 transition-colors duration-200 group-hover:text-[#6F36D2]">
                  {sector.tag}
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

export default Sectors;
