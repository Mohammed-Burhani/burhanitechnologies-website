"use client";
import { useFormik } from "formik";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Body } from "../textComponents/Body";
import { ArrowRight } from "iconsax-react";
import { useToast } from "@/hooks/use-toast";

const services = [
  "NET Development",
  "WordPress Development",
  "Front-end Development",
  "Full-Stack Development",
  "ML Development",
  "Cloud Technologies",
];

export function ContactModal({ className }) {
  const { toast } = useToast();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      contactNumber: "",
      companyWebsite: "",
      challenge: "",
      desc: "",
      services: [],
    },
    onSubmit: () => {},
  });

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
          <Body>Get In Touch</Body>
          <ArrowRight color="#fff" size={24} className="rotate-45" />
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-5xl z-[99999999999]">
        <DialogHeader className={"flex flex-col justify-center items-center"}>
          <DialogTitle className="text-mdcaptionLarge text-center">
            Get In Touch With Us
          </DialogTitle>
          <DialogDescription className="max-w-xl text-center">
            We build software and web development solutions for global
            businesses at speed and scale. If you have an idea, let’s build
            something great together.
          </DialogDescription>
        </DialogHeader>
        <form
          target="_blank"
          action="https://formsubmit.co/jhansi@burhanitechnologies.com"
          method="POST"
          className="flex flex-wrap gap-4"
        >
          {/* Name Input */}
          <div className="grid w-full gap-2">
            <Label htmlFor="name">Name</Label>
            <input
              required
              id="name"
              name="name"
              placeholder="Enter your name"
              className="p-2 px-4 border rounded-lg border-indigo-500"
            />
          </div>

          {/* Email and Phone Inputs */}
          <div className="flex w-full gap-4">
            <div className="grid flex-1 gap-2">
              <Label htmlFor="email">Email</Label>
              <input
                required
                id="email"
                name="email"
                type="email"
                className="p-2 px-4 border rounded-lg border-indigo-500"
                placeholder="Enter your email"
              />
            </div>
            <div className="grid flex-1 gap-2">
              <Label htmlFor="contactNumber">Phone/Contact No</Label>
              <input
                required
                id="contactNumber"
                name="phoneNumber"
                placeholder="Enter your Phone Number"
                className="p-2 px-4 border rounded-lg border-indigo-500"
              />
            </div>
          </div>

          {/* Company Website */}
          <div className="grid w-full gap-2">
            <Label htmlFor="companyWebsite">Company Website</Label>
            <input
              required
              id="companyWebsite"
              name="companyWebsite"
              placeholder="Enter your Company Website"
              className="p-2 px-4 border rounded-lg border-indigo-500"
            />
          </div>

          {/* Subject */}
          <div className="grid w-full gap-2">
            <Label htmlFor="challenge">Subject</Label>
            <input
              required
              id="challenge"
              name="challenge"
              placeholder="What's your current biggest challenge"
              className="p-2 px-4 border rounded-lg border-indigo-500"
            />
          </div>

          {/* Project Description */}
          <div className="grid w-full gap-2">
            <Label htmlFor="desc">Project Description</Label>
            <input
              required
              id="desc"
              name="desc"
              placeholder="Describe your project briefly"
              className="p-2 px-4 border rounded-lg border-indigo-500"
            />
          </div>

          {/* Services (Checkboxes) */}
          <div className="grid w-full gap-2 mb-4">
            <Label>What Services Are You Interested In? *</Label>
            <div className="grid grid-cols-2 gap-4 mt-2">
              {services.map((service) => (
                <div key={service} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id={service}
                    value={service}
                    name="services"
                  />
                  <Label htmlFor={service}>{service}</Label>
                </div>
              ))}
            </div>
          </div>

          <button
            type="submit"
            className="bg-indigo-600 px-7 p-2 text-white rounded-lg font-bold text-lg"
          >
            Submit
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
