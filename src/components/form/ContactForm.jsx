"use client";
import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import {
  ArrowUpRight,
  CaretDown,
  CheckCircle,
  CircleNotch,
  Paperclip,
  Plus,
  WarningCircle,
  X,
} from "@phosphor-icons/react";

import { useToast } from "@/hooks/use-toast";

const services = [
  { value: "business-process-automation", label: "Business Process Automation" },
  {
    value: "agentic-model-engineering",
    label: "Agentic Model Engineering with AI/ML",
  },
  { value: "bespoke-system-integrations", label: "Bespoke System Integrations" },
  { value: "erp-implementation", label: "ERP Implementation" },
  {
    value: "software-and-app-development",
    label: "Software and App Development Services",
  },
];

const validationSchema = Yup.object({
  service: Yup.string().required("Please select a service"),
  problem: Yup.string().trim(),
  attachment: Yup.mixed()
    .test("fileSize", "File must be less than 10MB", (value) => {
      if (!value) return true;
      return value.size <= 10 * 1024 * 1024;
    })
    .test("fileType", "Only PDF and image files allowed", (value) => {
      if (!value) return true;
      return ["application/pdf", "image/jpeg", "image/jpg", "image/png", "image/webp"].includes(value.type);
    }),
  name: Yup.string().trim().required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  company: Yup.string().trim().required("Company is required"),
  phone: Yup.string()
    .matches(/^[0-9+\-() ]{6,}$/, "Invalid phone number")
    .required("Phone or WhatsApp is required"),
  role: Yup.string(),
  systems: Yup.string(),
  timing: Yup.string(),
  botField: Yup.string(),
});

const initialValues = {
  service: "",
  problem: "",
  attachment: null,
  name: "",
  email: "",
  company: "",
  phone: "",
  role: "",
  systems: "",
  timing: "",
  botField: "",
};

// Shape rule for this page: pill buttons, 16px inputs, 2rem bezelled cards.
// Light surface: placeholder zinc-500 on zinc-50 is about 4.7:1, labels zinc-900.
const EASE_CLASS = "ease-[cubic-bezier(0.32,0.72,0,1)]";
const fieldBase = `w-full rounded-2xl bg-zinc-50 px-4 py-3.5 font-inter text-base text-zinc-900 placeholder:text-zinc-500 ring-1 ring-inset transition duration-300 ${EASE_CLASS} hover:bg-white focus:bg-white focus:outline-none focus:ring-2`;
const fieldOk = "ring-zinc-900/10 hover:ring-zinc-900/20 focus:ring-[#6F36D2]";
const fieldBad = "ring-red-500/70 focus:ring-red-500";
const labelClass = "font-inter text-sm font-semibold text-zinc-900";
const optionalLabelClass = "font-inter text-sm font-medium text-zinc-700";

const Required = () => (
  <span className="text-[#6F36D2]" aria-hidden="true">
    *
  </span>
);

const FieldError = ({ name }) => (
  <ErrorMessage name={name}>
    {(message) => (
      <p
        id={`${name}-error`}
        role="alert"
        className="flex items-center gap-1.5 font-inter text-sm text-red-600"
      >
        <WarningCircle size={16} weight="regular" aria-hidden="true" />
        {message}
      </p>
    )}
  </ErrorMessage>
);

function ContactForm() {
  const { toast } = useToast();
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [submitStatus, setSubmitStatus] = React.useState(null);
  const fileInputRef = React.useRef(null);

  const handleSubmit = async (values, { resetForm, setSubmitting }) => {
    setSubmitStatus(null);

    try {
      let recaptchaToken = "";
      
      if (executeRecaptcha) {
        recaptchaToken = await executeRecaptcha("contact_form");
      }

      const formData = new FormData();
      Object.keys(values).forEach((key) => {
        if (key === "attachment") {
          if (values[key]) {
            formData.append("attachment", values[key]);
          }
        } else if (values[key]) {
          formData.append(key, values[key]);
        }
      });
      formData.append("recaptchaToken", recaptchaToken);

      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus({
          type: "success",
          message:
            "Thank you. We have received your enquiry and will get back to you soon.",
        });
        toast({
          title: "Enquiry sent",
          description: "We'll get back to you soon.",
        });
        resetForm();
        if (fileInputRef.current) {
          fileInputRef.current.value = "";
        }
      } else {
        setSubmitStatus({
          type: "error",
          message:
            "We could not send your enquiry. Please try again later or contact us directly.",
        });
        toast({
          title: "Error submitting form",
          description: "Please try again later or contact us directly.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus({
        type: "error",
        message:
          "We could not send your enquiry. Please check your internet connection and try again.",
      });
      toast({
        title: "Error submitting form",
        description: "Please check your internet connection and try again.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched, values, isSubmitting, setFieldValue }) => {
        const cls = (name, extra = "") =>
          `${fieldBase} ${errors[name] && touched[name] ? fieldBad : fieldOk} ${extra}`;
        const accessibility = (name, required = true) => ({
          required,
          "aria-invalid": Boolean(errors[name] && touched[name]),
          "aria-describedby": errors[name] && touched[name] ? `${name}-error` : undefined,
        });

        return (
          <Form className="flex flex-col gap-5" noValidate>
            {submitStatus && (
              <div
                role="status"
                className={`flex items-start gap-3 rounded-2xl p-4 font-inter text-sm ring-1 ring-inset ${
                  submitStatus.type === "success"
                    ? "bg-emerald-50 text-emerald-800 ring-emerald-600/25"
                    : "bg-red-50 text-red-800 ring-red-600/25"
                }`}
              >
                {submitStatus.type === "success" ? (
                  <CheckCircle
                    size={20}
                    weight="regular"
                    className="mt-px shrink-0"
                    aria-hidden="true"
                  />
                ) : (
                  <WarningCircle
                    size={20}
                    weight="regular"
                    className="mt-px shrink-0"
                    aria-hidden="true"
                  />
                )}
                {submitStatus.message}
              </div>
            )}

            {/* Honeypot */}
            <p className="hidden">
              <label>
                Leave this empty:{" "}
                <Field name="botField" tabIndex={-1} autoComplete="off" />
              </label>
            </p>

            <div className="flex flex-col gap-2">
              <label htmlFor="service" className={labelClass}>
                What do you need help with? <Required />
              </label>
              <div className="relative">
                <Field
                  as="select"
                  id="service"
                  name="service"
                  {...accessibility("service")}
                  className={cls(
                    "service",
                    `appearance-none pr-12 ${values.service ? "" : "text-zinc-500"}`,
                  )}
                >
                  <option value="" className="bg-white text-zinc-500">
                    Select a service
                  </option>
                  {services.map((service) => (
                    <option
                      key={service.value}
                      value={service.value}
                      className="bg-white text-zinc-900"
                    >
                      {service.label}
                    </option>
                  ))}
                </Field>
                <CaretDown
                  size={18}
                  weight="regular"
                  className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500"
                  aria-hidden="true"
                />
              </div>
              <FieldError name="service" />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="problem" className={optionalLabelClass}>
                What business problem are you trying to solve?
              </label>
              <Field
                as="textarea"
                id="problem"
                name="problem"
                rows={4}
                {...accessibility("problem", false)}
                placeholder="Describe what happens today, who it affects and what is slowing the work down."
                className={cls("problem", "resize-y")}
              />
              <FieldError name="problem" />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="attachment" className={optionalLabelClass}>
                Attach your requirement (PDF or Image)
              </label>
              <div className="relative">
                <input
                  ref={fileInputRef}
                  id="attachment"
                  name="attachment"
                  type="file"
                  accept=".pdf,.jpg,.jpeg,.png,.webp"
                  onChange={(event) => {
                    const file = event.currentTarget.files?.[0] || null;
                    setFieldValue("attachment", file);
                  }}
                  className="hidden"
                />
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className={`${cls("attachment", "text-left")} flex items-center gap-3`}
                >
                  <Paperclip size={20} weight="regular" className="text-zinc-500" aria-hidden="true" />
                  <span className={values.attachment ? "text-zinc-900" : "text-zinc-500"}>
                    {values.attachment ? values.attachment.name : "Choose file (Max 10MB)"}
                  </span>
                </button>
                {values.attachment && (
                  <button
                    type="button"
                    onClick={() => {
                      setFieldValue("attachment", null);
                      if (fileInputRef.current) {
                        fileInputRef.current.value = "";
                      }
                    }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full p-1 text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-900"
                    aria-label="Remove file"
                  >
                    <X size={16} weight="bold" aria-hidden="true" />
                  </button>
                )}
              </div>
              <FieldError name="attachment" />
              <p className="font-inter text-xs text-zinc-500">
                PDF, JPG, PNG, or WebP up to 10MB
              </p>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className={labelClass}>
                  Your name <Required />
                </label>
                <Field
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  {...accessibility("name")}
                  className={cls("name")}
                />
                <FieldError name="name" />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className={labelClass}>
                  Work email <Required />
                </label>
                <Field
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  {...accessibility("email")}
                  className={cls("email")}
                />
                <FieldError name="email" />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="company" className={labelClass}>
                Company <Required />
              </label>
              <Field
                id="company"
                name="company"
                type="text"
                autoComplete="organization"
                {...accessibility("company")}
                className={cls("company")}
              />
              <FieldError name="company" />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="phone" className={labelClass}>
                Phone or WhatsApp <Required />
              </label>
              <Field
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                {...accessibility("phone")}
                className={cls("phone")}
              />
              <FieldError name="phone" />
            </div>

            <details className="group rounded-2xl bg-zinc-50 p-4 ring-1 ring-inset ring-zinc-900/10 transition-colors duration-300 open:bg-white">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6F36D2] [&::-webkit-details-marker]:hidden">
                <span className={labelClass}>
                  Optional, if it helps us prepare
                </span>
                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#6F36D2]/[0.08] text-[#6F36D2] transition duration-500 ${EASE_CLASS} group-open:rotate-45`}
                >
                  <Plus size={16} weight="bold" aria-hidden="true" />
                </span>
              </summary>
              <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label htmlFor="role" className={optionalLabelClass}>
                    Your role in this project
                  </label>
                  <Field
                    id="role"
                    name="role"
                    type="text"
                    placeholder="Owner, project lead, operations team"
                    className={cls("role")}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="systems" className={optionalLabelClass}>
                    Systems you already run
                  </label>
                  <Field
                    id="systems"
                    name="systems"
                    type="text"
                    placeholder="Tally, SAP, Salesforce, in-house"
                    className={cls("systems")}
                  />
                </div>
                <div className="flex flex-col gap-2 md:col-span-2">
                  <label htmlFor="timing" className={optionalLabelClass}>
                    Expected timeline for completion
                  </label>
                  <Field
                    id="timing"
                    name="timing"
                    type="text"
                    className={cls("timing")}
                  />
                </div>
              </div>
            </details>

            <div className="mt-2 flex flex-col gap-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`group inline-flex w-fit items-center gap-4 rounded-full bg-[#6F36D2] py-2 pl-6 pr-2 font-inter text-base font-medium text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.2)] transition duration-500 ${EASE_CLASS} hover:bg-[#7C43E0] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6F36D2] focus-visible:ring-offset-2 focus-visible:ring-offset-white active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50`}
              >
                <span>{isSubmitting ? "Sending" : "Discuss my project"}</span>
                <span
                  className={`flex h-10 w-10 items-center justify-center rounded-full bg-white/15 transition duration-500 ${EASE_CLASS} group-hover:-translate-y-px group-hover:translate-x-0.5 group-hover:scale-105`}
                >
                  {isSubmitting ? (
                    <CircleNotch
                      size={18}
                      weight="bold"
                      className="animate-spin motion-reduce:animate-none"
                      aria-hidden="true"
                    />
                  ) : (
                    <ArrowUpRight size={18} weight="bold" aria-hidden="true" />
                  )}
                </span>
              </button>

              <p className="font-inter text-sm text-zinc-500">
                We use these details to review and respond to your project
                enquiry.
              </p>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
}

export default ContactForm;
