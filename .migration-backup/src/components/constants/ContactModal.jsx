"use client";
import { useState, useEffect } from "react";
import { ArrowRight } from "iconsax-react";
import { Body } from "../textComponents/Body";
import Link from "next/link";

export function ContactModal({ className }) {
  const [randomLabel, setRandomLabel] = useState("Get In Touch"); // Default fallback
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const labels = [
      "Get In Touch",
      "Contact Us",
      "Talk to Us",
      "Get Free Consultation",
      "Let us Help You!",
      "Reach out to Us",
    ];
    setRandomLabel(labels[Math.floor(Math.random() * labels.length)]);
  }, []);

  return (
    <Link href="/contact">
      <button
        className={`rounded-2xl p-4 bg-[#6F36D2] px-5 7xl:px-7 7xl:p-5 py-2.5 text-sm font-medium text-white shadow flex gap-4 items-center w-max hover:bg-[#5a2ba8] transition-colors ${className}`}
        data-aos="fade-up"
      >
        <Body>{randomLabel}</Body>
        <ArrowRight color="#fff" size={24} className="rotate-45" />
      </button>
    </Link>
  );
}