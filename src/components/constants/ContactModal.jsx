"use client";
import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ArrowRight } from "iconsax-react";
import ContactForm from "../form/ContactForm";
import { Body } from "../textComponents/Body";

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

  const handleCheckboxChange = (service) => {
    const selectedServices = formik.values.services.includes(service)
      ? formik.values.services.filter((item) => item !== service)
      : [...formik.values.services, service];
    formik.setFieldValue("services", selectedServices);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          className={`rounded-2xl p-4 bg-[#6F36D2] px-5 7xl:px-7 7xl:p-5 py-2.5 text-sm font-medium text-white shadow flex gap-4 items-center w-max ${className}`}
          data-aos="fade-up"
        >
          <Body>{randomLabel}</Body>
          <ArrowRight color="#fff" size={24} className="rotate-45" />
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-5xl z-[99999999999]">
        <DialogHeader className={"flex flex-col justify-center items-center"}>
          <DialogTitle className="text-mdcaptionLarge text-center">
            {randomLabel}
          </DialogTitle>
          <DialogDescription className="max-w-xl text-center">
            We build software and web development solutions for global
            businesses at speed and scale. If you have an idea, let’s build
            something great together.
          </DialogDescription>
        </DialogHeader>
        <ContactForm />
      </DialogContent>
    </Dialog>
  );
}
