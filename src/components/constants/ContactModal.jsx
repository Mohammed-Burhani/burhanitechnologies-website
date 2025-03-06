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
import { useEffect } from "react";

const services = [
  "NET Development",
  "WordPress Development",
  "Front-end Development",
  "Full-Stack Development",
  "ML Development",
  "Cloud Technologies",
];

const validate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = "Name is required";
  }
  if (!values.email) {
    errors.email = "Email is required";
  }
  if (!values.contactNumber) {
    errors.contactNumber = "Phone number is required";
  }
  if (!values.companyWebsite) {
    errors.companyWebsite = "Company website is required";
  }
  if (!values.challenge) {
    errors.challenge = "Subject is required";
  }
  if (!values.desc) {
    errors.desc = "Project description is required";
  }
  if (values.services.length === 0) {
    errors.services = "You must select at least one service";
  }
  return errors;
};

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
    validate,
    onSubmit: (data) => {
      toast({
        title: "You submitted the following values:",
        description: (
          <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
            <code className="text-white">{JSON.stringify(data, null, 2)}</code>
          </pre>
        ),
      });
    },
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
          action="https://formsubmit.co/aa2bf27e847ec93b60ee28f2fdf73881"
          method="POST"
          className="flex flex-wrap gap-4"
        >
          {/* Name Input */}
          <div className="grid w-full gap-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              name="name"
              className="border border-[#8000FF]"
              placeholder="Enter your name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.name && formik.touched.name && (
              <div className="text-[#ff0000] text-sm">{formik.errors.name}</div>
            )}
          </div>

          {/* Email and Phone Inputs */}
          <div className="flex w-full gap-4">
            <div className="grid flex-1 gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                className="border border-[#8000FF]"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.email && formik.touched.email && (
                <div className="text-[#ff0000] text-sm">
                  {formik.errors.email}
                </div>
              )}
            </div>
            <div className="grid flex-1 gap-2">
              <Label htmlFor="contactNumber">Phone/Contact No</Label>
              <Input
                id="contactNumber"
                name="phoneNumber"
                className="border border-[#8000FF]"
                placeholder="Enter your Phone Number"
                value={formik.values.contactNumber}
                onChange={(v) =>
                  formik.setFieldValue("contactNumber", v.target.value)
                }
                onBlur={formik.handleBlur}
              />
              {formik.errors.contactNumber && formik.touched.contactNumber && (
                <div className="text-[#ff0000] text-sm">
                  {formik.errors.contactNumber}
                </div>
              )}
            </div>
          </div>

          {/* Company Website */}
          <div className="grid w-full gap-2">
            <Label htmlFor="companyWebsite">Company Website</Label>
            <Input
              className="border border-[#8000FF]"
              id="companyWebsite"
              name="website"
              placeholder="Enter your Company Website"
              value={formik.values.companyWebsite}
              onChange={(v) =>
                formik.setFieldValue("companyWebsite", v.target.value)
              }
              onBlur={formik.handleBlur}
            />
            {formik.errors.companyWebsite && formik.touched.companyWebsite && (
              <div className="text-[#ff0000] text-sm">
                {formik.errors.companyWebsite}
              </div>
            )}
          </div>

          {/* Subject */}
          <div className="grid w-full gap-2">
            <Label htmlFor="challenge">Subject</Label>
            <Input
              id="challenge"
              name="challenge"
              className="border border-[#8000FF]"
              placeholder="What's your current biggest challenge"
              value={formik.values.challenge}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.challenge && formik.touched.challenge && (
              <div className="text-[#ff0000] text-sm">
                {formik.errors.challenge}
              </div>
            )}
          </div>

          {/* Project Description */}
          <div className="grid w-full gap-2">
            <Label htmlFor="desc">Project Description</Label>
            <Input
              className="border border-[#8000FF]"
              id="desc"
              name="projectDescription"
              placeholder="Describe your project briefly"
              value={formik.values.desc}
              onChange={(v) => formik.setFieldValue("desc", v.target.value)}
              onBlur={formik.handleBlur}
            />
            {formik.errors.desc && formik.touched.desc && (
              <div className="text-[#ff0000] text-sm">{formik.errors.desc}</div>
            )}
          </div>

          {/* Services (Checkboxes) */}
          <div className="grid w-full gap-2 mb-4">
            <Label>What Services Are You Interested In? *</Label>
            <div className="grid grid-cols-2 gap-4 mt-2">
              {services.map((service) => (
                <div key={service} className="flex items-center gap-2">
                  <input
                    className="border border-[#8000FF]"
                    type="checkbox"
                    id={service}
                    value={service}
                    name="Type Of Service"
                    checked={formik.values.services.includes(service)}
                    onChange={() => handleCheckboxChange(service)}
                  />
                  <Label htmlFor={service}>{service}</Label>
                </div>
              ))}
            </div>
            {formik.errors.services && formik.touched.services && (
              <div className="text-[#ff0000] text-sm">
                {formik.errors.services}
              </div>
            )}
          </div>
          <DialogFooter className="sm:justify-start">
            <DialogClose asChild>
              <Button type="button" variant="secondary">
                Close
              </Button>
            </DialogClose>
            <Button type="submit">Submit</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
