"use client";
import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const services = [
  "NET Development",
  "WordPress Development",
  "Front-end Development",
  "Full-Stack Development",
  "ML Development",
  "Cloud Technologies",
];

// Validation schema using Yup
const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  contactNumber: Yup.string()
    .matches(/^[0-9+\- ]+$/, "Invalid phone number")
    .required("Phone number is required"),
  companyWebsite: Yup.string()
    .url("Please enter a valid URL")
    .required("Company website is required"),
  challenge: Yup.string().required("Subject is required"),
  desc: Yup.string().required("Project description is required"),
  services: Yup.array()
    .min(1, "Please select at least one service")
    .required("Please select at least one service"),
});

function ContactForm() {
  const { toast } = useToast();
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [submitStatus, setSubmitStatus] = React.useState(null);

  const initialValues = {
    name: "",
    email: "",
    contactNumber: "",
    companyWebsite: "",
    challenge: "",
    desc: "",
    services: [],
  };

  const handleSubmit = async (values, { resetForm, setSubmitting }) => {
    console.log(values);

    try {
      setSubmitting(true);

      // Execute reCAPTCHA
      if (!executeRecaptcha) {
        toast({
          title: "reCAPTCHA not ready",
          description: "Please wait a moment and try again.",
          variant: "destructive",
        });
        setSubmitting(false);
        return;
      }

      const recaptchaToken = await executeRecaptcha("contact_form");

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...values,
          recaptchaToken,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus({ type: 'success', message: 'Form submitted successfully! We\'ll get back to you soon.' });
        toast({
          title: "Form submitted successfully!",
          description: "We'll get back to you soon.",
        });
        resetForm();
      } else {
        setSubmitStatus({ type: 'error', message: 'Error submitting form. Please try again later or contact us directly.' });
        toast({
          title: "Error submitting form",
          description: "Please try again later or contact us directly.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus({ type: 'error', message: 'Error submitting form. Please check your internet connection and try again.' });
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
      {({ errors, touched, isSubmitting }) => (
        <Form className="flex flex-wrap gap-6">
          {/* Status Message */}
          {submitStatus && (
            <div className={`w-full p-4 rounded-xl mb-4 border ${
              submitStatus.type === 'success' 
                ? 'bg-green-50 text-green-800 border-green-200' 
                : 'bg-red-50 text-red-800 border-red-200'
            }`}>
              {submitStatus.message}
            </div>
          )}
          
          {/* Name Input */}
          <div className="grid w-full gap-3">
            <Label htmlFor="name" className="text-gray-700 font-medium text-sm">Name *</Label>
            <Field
              as={Input}
              id="name"
              name="name"
              type="text"
              placeholder="Enter your name"
              className={`bg-white border-gray-300 text-gray-900 placeholder:text-gray-500 focus:border-[#6F36D2] focus:ring-1 focus:ring-[#6F36D2] h-12 rounded-xl ${
                errors.name && touched.name ? "border-red-500 focus:border-red-500 focus:ring-red-500" : ""
              }`}
            />
            <ErrorMessage
              name="name"
              component="div"
              className="text-sm text-red-600"
            />
          </div>

          {/* Email and Phone Inputs */}
          <div className="flex w-full gap-4 flex-col md:flex-row">
            <div className="grid flex-1 gap-3">
              <Label htmlFor="email" className="text-gray-700 font-medium text-sm">Email *</Label>
              <Field
                as={Input}
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                className={`bg-white border-gray-300 text-gray-900 placeholder:text-gray-500 focus:border-[#6F36D2] focus:ring-1 focus:ring-[#6F36D2] h-12 rounded-xl ${
                  errors.email && touched.email ? "border-red-500 focus:border-red-500 focus:ring-red-500" : ""
                }`}
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-sm text-red-600"
              />
            </div>
            <div className="grid flex-1 gap-3">
              <Label htmlFor="contactNumber" className="text-gray-700 font-medium text-sm">Phone/Contact No *</Label>
              <Field
                as={Input}
                id="contactNumber"
                name="contactNumber"
                placeholder="Enter your Phone Number"
                className={`bg-white border-gray-300 text-gray-900 placeholder:text-gray-500 focus:border-[#6F36D2] focus:ring-1 focus:ring-[#6F36D2] h-12 rounded-xl ${
                  errors.contactNumber && touched.contactNumber ? "border-red-500 focus:border-red-500 focus:ring-red-500" : ""
                }`}
              />
              <ErrorMessage
                name="contactNumber"
                component="div"
                className="text-sm text-red-600"
              />
            </div>
          </div>

          {/* Company Website */}
          <div className="grid w-full gap-3">
            <Label htmlFor="companyWebsite" className="text-gray-700 font-medium text-sm">Company Website *</Label>
            <Field
              as={Input}
              id="companyWebsite"
              name="companyWebsite"
              placeholder="Enter your Company Website"
              className={`bg-white border-gray-300 text-gray-900 placeholder:text-gray-500 focus:border-[#6F36D2] focus:ring-1 focus:ring-[#6F36D2] h-12 rounded-xl ${
                errors.companyWebsite && touched.companyWebsite ? "border-red-500 focus:border-red-500 focus:ring-red-500" : ""
              }`}
            />
            <ErrorMessage
              name="companyWebsite"
              component="div"
              className="text-sm text-red-600"
            />
          </div>

          {/* Subject */}
          <div className="grid w-full gap-3">
            <Label htmlFor="challenge" className="text-gray-700 font-medium text-sm">Subject *</Label>
            <Field
              as={Input}
              id="challenge"
              name="challenge"
              placeholder="What's your current biggest challenge"
              className={`bg-white border-gray-300 text-gray-900 placeholder:text-gray-500 focus:border-[#6F36D2] focus:ring-1 focus:ring-[#6F36D2] h-12 rounded-xl ${
                errors.challenge && touched.challenge ? "border-red-500 focus:border-red-500 focus:ring-red-500" : ""
              }`}
            />
            <ErrorMessage
              name="challenge"
              component="div"
              className="text-sm text-red-600"
            />
          </div>

          {/* Project Description */}
          <div className="grid w-full gap-3">
            <Label htmlFor="desc" className="text-gray-700 font-medium text-sm">Project Description *</Label>
            <Field
              as={Textarea}
              id="desc"
              name="desc"
              placeholder="Describe your project briefly"
              className={`bg-white border-gray-300 text-gray-900 placeholder:text-gray-500 focus:border-[#6F36D2] focus:ring-1 focus:ring-[#6F36D2] min-h-[120px] rounded-xl resize-none ${
                errors.desc && touched.desc ? "border-red-500 focus:border-red-500 focus:ring-red-500" : ""
              }`}
            />
            <ErrorMessage
              name="desc"
              component="div"
              className="text-sm text-red-600"
            />
          </div>

          {/* Services (Checkboxes) */}
          <div className="grid w-full gap-4 mb-4">
            <Label className="text-gray-700 font-medium text-sm">
              What Services Are You Interested In? *
            </Label>
            <div role="group" className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
              {services.map((service) => (
                <div key={service} className="flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-200 hover:border-[#6F36D2]/50 transition-colors shadow-sm">
                  <Field
                    type="checkbox"
                    id={service}
                    value={service}
                    name="services"
                    className="w-4 h-4 text-[#6F36D2] bg-white border-gray-300 rounded focus:ring-[#6F36D2] focus:ring-2"
                  />
                  <Label htmlFor={service} className="text-gray-700 cursor-pointer select-none">{service}</Label>
                </div>
              ))}
            </div>
            <ErrorMessage
              name="services"
              component="div"
              className="text-sm text-red-600"
            />
          </div>

          {/* reCAPTCHA Badge Info */}
          <div className="w-full text-xs text-gray-500 flex items-center gap-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
            </svg>
            This site is protected by reCAPTCHA and the Google{" "}
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#6F36D2] hover:underline">
              Privacy Policy
            </a>{" "}
            and{" "}
            <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="text-[#6F36D2] hover:underline">
              Terms of Service
            </a>{" "}
            apply.
          </div>

          <button
            type="submit"
            disabled={isSubmitting || !executeRecaptcha}
            className="w-full bg-[#6F36D2] hover:bg-[#5a2ba8] px-8 py-4 text-white rounded-xl font-bold text-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 shadow-lg hover:shadow-[#6F36D2]/25 hover:shadow-xl"
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Verifying & Submitting...
              </>
            ) : (
              <>
                Send Message
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </>
            )}
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default ContactForm;
