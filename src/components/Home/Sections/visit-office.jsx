"use client";

import Container from "@/components/constants/Container";
import { ArrowUpRight, Clock, MapPin, Phone } from "@phosphor-icons/react";

const VisitOffice = () => {
  return (
    <section data-reveal className="relative overflow-hidden border-t border-zinc-200 bg-white py-5 sm:py-6">
      <Container className="relative">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-8">
          <div className="flex min-w-0 flex-col gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#6F36D2]/20 bg-[#6F36D2]/[0.06]">
              <MapPin size={20} weight="bold" className="text-[#6F36D2]" />
            </div>
            <h2 className="text-lg font-semibold text-zinc-900 sm:text-xl">
              Visit our office
            </h2>
            <p className="text-sm leading-relaxed text-zinc-500 sm:text-base">
              1st Floor, Vanguard House, #48, Moore St,
              <br />
              Parry&apos;s Corner, George Town,
              <br />
              Chennai, Tamil Nadu 600001
            </p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Burhani+Technologies+48+Moore+Street+Chennai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 w-fit items-center gap-2 text-sm font-medium text-[#6F36D2] underline-offset-4 hover:underline"
            >
              Get directions <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>

          <div className="flex min-w-0 flex-col gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#6F36D2]/20 bg-[#6F36D2]/[0.06]">
              <Phone size={20} weight="bold" className="text-[#6F36D2]" />
            </div>
            <h2 className="text-lg font-semibold text-zinc-900 sm:text-xl">
              Talk to us
            </h2>
            <p className="flex flex-col gap-1 text-sm leading-relaxed text-zinc-500 sm:text-base">
              <a
                href="tel:+917299002152"
                className="inline-flex min-h-11 w-fit items-center transition-colors duration-200 hover:text-[#6F36D2]"
              >
                +91 72990 02152
              </a>
              <a
                href="mailto:connect@burhanitechnologies.com"
                className="inline-flex min-h-11 w-fit items-center break-all transition-colors duration-200 hover:text-[#6F36D2]"
              >
                connect@burhanitechnologies.com
              </a>
            </p>
          </div>

          <div className="flex min-w-0 flex-col gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#6F36D2]/20 bg-[#6F36D2]/[0.06]">
              <Clock size={20} weight="bold" className="text-[#6F36D2]" />
            </div>
            <h2 className="text-lg font-semibold text-zinc-900 sm:text-xl">
              Office hours
            </h2>
            <p className="text-sm leading-relaxed text-zinc-500 sm:text-base">
              Monday to Friday, 09:00 to 18:00 IST
              <br />
              Saturday, 09:00 to 13:00 IST
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default VisitOffice;
