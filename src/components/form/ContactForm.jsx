"use client";
import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

import { useToast } from "@/hooks/use-toast";

const services = [
  { value: "website-development", label: "Website development" },
  { value: "e-commerce", label: "E-commerce" },
  { value: "invoicing", label: "Invoicing" },
  { value: "application-development", label: "Application development" },
  {
    value: "integration-or-automation",
    label: "Integration or business process automation",
  },
  { value: "other", label: "Other business requirement" },
];

const validationSchema = Yup.object({
  service: Yup.string().required("Please select a service"),
  problem: Yup.string().trim().required("Please describe the business problem"),
  outcome: Yup.string().trim().required("Please describe a useful result"),
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
  outcome: "",
  name: "",
  email: "",
  company: "",
  phone: "",
  role: "",
  systems: "",
  timing: "",
  botField: "",
};

const fieldClass =
  "w-full font-inter text-mdbody text-[#180030] bg-white border border-[#180030]/20 rounded-xl px-4 py-3 focus:outline-none focus:border-[#6F36D2]";
const labelClass = "font-inter text-body font-semibold";
const optionalLabelClass = "font-inter text-body";

const Required = () => <span className="text-[#6622DC]">*</span>;

const FieldError = ({ name }) => (
  <ErrorMessage
    name={name}
    component="div"
    className="font-inter text-body text-red-600"
  />
);

function ContactForm() {
  const { toast } = useToast();
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [submitStatus, setSubmitStatus] = React.useState(null);

  const handleSubmit = async (values, { resetForm, setSubmitting }) => {
    setSubmitStatus(null);

    try {
      if (!executeRecaptcha) {
        toast({
          title: "reCAPTCHA not ready",
          description: "Please wait a moment and try again.",
          variant: "destructive",
        });
        return;
      }

      const recaptchaToken = await executeRecaptcha("contact_form");

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, recaptchaToken }),
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
      {({ isSubmitting }) => (
        <Form className="flex flex-col gap-5" noValidate>
          {submitStatus && (
            <div
              role="status"
              className={`rounded-xl border p-4 font-inter text-body ${
                submitStatus.type === "success"
                  ? "border-green-200 bg-green-50 text-green-800"
                  : "border-red-200 bg-red-50 text-red-800"
              }`}
            >
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
            <Field as="select" id="service" name="service" className={fieldClass}>
              <option value="">Select a service</option>
              {services.map((service) => (
                <option key={service.value} value={service.value}>
                  {service.label}
                </option>
              ))}
            </Field>
            <FieldError name="service" />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="problem" className={labelClass}>
              What business problem are you trying to solve? <Required />
            </label>
            <Field
              as="textarea"
              id="problem"
              name="problem"
              rows={4}
              placeholder="Describe what happens today, who it affects and what is slowing the work down."
              className={`${fieldClass} resize-y`}
            />
            <FieldError name="problem" />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="outcome" className={labelClass}>
              What would a useful result look like? <Required />
            </label>
            <Field
              as="textarea"
              id="outcome"
              name="outcome"
              rows={3}
              placeholder="For example: customers can order online and your team can track each order without re-entering it."
              className={`${fieldClass} resize-y`}
            />
            <FieldError name="outcome" />
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
                className={fieldClass}
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
                className={fieldClass}
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
              className={fieldClass}
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
              className={fieldClass}
            />
            <FieldError name="phone" />
          </div>

          <details className="group rounded-xl border border-[#180030]/15 p-4">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 [&::-webkit-details-marker]:hidden">
              <span className={labelClass}>Optional, if it helps us prepare</span>
              <svg
                className="h-5 w-5 shrink-0 text-[#6622DC] transition-transform group-open:rotate-45"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                aria-hidden="true"
              >
                <path d="M12 5v14M5 12h14" />
              </svg>
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
                  className={fieldClass}
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
                  className={fieldClass}
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
                  className={fieldClass}
                />
              </div>
            </div>
          </details>

          <button
            type="submit"
            disabled={isSubmitting || !executeRecaptcha}
            className="mt-2 flex w-fit min-w-fit items-center justify-center gap-3 rounded-xl bg-[#6F36D2] px-6 py-3.5 text-white shadow-sm transition hover:bg-[#7C3AE8] disabled:cursor-not-allowed disabled:opacity-50 2xl:rounded-2xl"
          >
            <span className="font-inter text-mdbody font-medium">
              {isSubmitting ? "Sending..." : "Discuss my project"}
            </span>
          </button>

          <p className="font-inter text-body text-[#180030]/55">
            We use these details to review and respond to your project enquiry.
          </p>
        </Form>
      )}
    </Formik>
  );
}

export default ContactForm;
