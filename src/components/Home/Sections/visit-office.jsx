"use client";

import Container from "@/components/constants/Container";
import { Clock, EnvelopeSimple, MapPin, Phone } from "@phosphor-icons/react";

const VisitOffice = () => {
  return (
    <section className="relative overflow-hidden border-t border-zinc-200 bg-white py-16 sxl:py-24">
      <Container className="relative">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-8">
          <div className="flex flex-col gap-3">
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
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#6F36D2]/20 bg-[#6F36D2]/[0.06]">
              <Phone size={20} weight="bold" className="text-[#6F36D2]" />
            </div>
            <h2 className="text-lg font-semibold text-zinc-900 sm:text-xl">
              Talk to us
            </h2>
            <p className="flex flex-col gap-1 text-sm leading-relaxed text-zinc-500 sm:text-base">
              <a
                href="tel:+917299002152"
                className="transition-colors duration-200 hover:text-[#6F36D2]"
              >
                +91 72990 02152
              </a>
              <a
                href="mailto:info@burhanitechnologies.com"
                className="transition-colors duration-200 hover:text-[#6F36D2]"
              >
                info@burhanitechnologies.com
              </a>
            </p>
          </div>

          <div className="flex flex-col gap-3">
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

        <div className="mt-12 flex items-center gap-2 rounded-xl border border-zinc-200 overflow-hidden">
          <iframe
            title="Burhani Technologies office location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.1418227785625!2d80.28746827569132!3d13.090196912265775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526f458172cdb1%3A0x7218069a220fa332!2sBurhani%20Technologies!5e0!3m2!1sen!2sin!4v1761984836983!5m2!1sen!2sin"
            width="100%"
            height="320"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="grayscale transition-all duration-300 hover:grayscale-0"
          />
        </div>
      </Container>
    </section>
  );
};

export default VisitOffice;
