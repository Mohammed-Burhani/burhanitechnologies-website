"use client";

import Image from "next/image";
import { ArrowUpRight } from "@phosphor-icons/react";

const clients = [
  {
    name: "Lehry Valves",
    category: "Supply chain & CRM",
    image: "/projectW/image (4).png",
    href: "https://lehryvalves.com/",
  },
  {
    name: "KAG Tiles",
    category: "E-commerce",
    image: "/projectW/image (3).png",
    href: "https://www.kagindia.com/",
  },
  {
    name: "ABTEKS",
    category: "Industrial web",
    image: "/projectW/image (8).png",
    href: "https://abteks.com/",
  },
  {
    name: "Mirakare",
    category: "Healthcare platform",
    image: "/projectW/image (7).png",
    href: "https://mirakare.com/",
  },
  {
    name: "PBHR Homeopathy",
    category: "Healthcare records",
    image: "/projectW/image (9).png",
    href: "https://pbhrc.in/",
  },
  {
    name: "DriveX",
    category: "Rental platform",
    image: "/projectW/image (2).png",
    href: "https://www.drivex.in/",
  },
];

const ClientReferences = () => {
  return (
    <section className="relative overflow-hidden bg-white py-16 sxl:py-24">
      {/* Tech-grid backdrop: same restrained-accent language as the hero, not decoration for its own sake */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(111,54,210,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(111,54,210,0.08) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 40%, black 40%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 60% at 50% 40%, black 40%, transparent 100%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-[#6F36D2]/[0.06] blur-[120px]"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 2xl:px-10">
        <div className="mb-10 flex flex-col items-center gap-3 sxl:mb-14">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#6F36D2]/20 bg-[#6F36D2]/[0.05] px-3 py-1 font-inter text-smallText font-medium text-[#6F36D2]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#6F36D2]" />
            In production today
          </span>
          <p className="font-inter text-body md:text-mdbody text-center font-medium text-zinc-700">
            Businesses running on software we built
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sxl:grid-cols-6 sxl:gap-5">
          {clients.map((client) => (
            <a
              key={client.name}
              href={client.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-[#6F36D2]/40 hover:shadow-lg hover:shadow-[#6F36D2]/[0.08]"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-100">
                <Image
                  src={client.image}
                  alt={client.name}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                  className="object-cover object-top grayscale transition-all duration-300 group-hover:grayscale-0"
                />
                <span className="absolute right-2 top-2 flex h-7 w-7 items-center justify-center rounded-full bg-white/90 text-zinc-500 opacity-0 shadow-sm backdrop-blur-sm transition-all duration-200 group-hover:opacity-100 group-hover:text-[#6F36D2]">
                  <ArrowUpRight size={14} weight="bold" />
                </span>
              </div>
              <div className="flex flex-col gap-0.5 border-t border-zinc-100 px-3 py-2.5">
                <span className="font-inter text-smallText md:text-mdsmallText font-medium text-zinc-800 transition-colors duration-200 group-hover:text-[#6F36D2]">
                  {client.name}
                </span>
                <span className="font-inter text-[11px] text-zinc-400">
                  {client.category}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientReferences;