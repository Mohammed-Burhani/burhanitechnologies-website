import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";

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

  const initialValues = {
    name: "",
    email: "",
    contactNumber: "",
    companyWebsite: "",
    challenge: "",
    desc: "",
    services: [],
  };

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    toast({
      title: "Form submitted successfully!",
      description: "We'll get back to you soon.",
    });
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <Form className="flex flex-wrap gap-4">
          {/* Name Input */}
          <div className="grid w-full gap-2">
            <Label htmlFor="name">Name</Label>
            <Field
              as={Input}
              id="name"
              name="name"
              type="text"
              placeholder="Enter your name"
              className={errors.name && touched.name ? "border-red-500" : ""}
            />
            <ErrorMessage
              name="name"
              component="div"
              className="text-sm text-red-500"
            />
          </div>

          {/* Email and Phone Inputs */}
          <div className="flex w-full gap-4">
            <div className="grid flex-1 gap-2">
              <Label htmlFor="email">Email</Label>
              <Field
                as={Input}
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                className={
                  errors.email && touched.email ? "border-red-500" : ""
                }
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-sm text-red-500"
              />
            </div>
            <div className="grid flex-1 gap-2">
              <Label htmlFor="contactNumber">Phone/Contact No</Label>
              <Field
                as={Input}
                id="contactNumber"
                name="contactNumber"
                placeholder="Enter your Phone Number"
                className={
                  errors.contactNumber && touched.contactNumber
                    ? "border-red-500"
                    : ""
                }
              />
              <ErrorMessage
                name="contactNumber"
                component="div"
                className="text-sm text-red-500"
              />
            </div>
          </div>

          {/* Company Website */}
          <div className="grid w-full gap-2">
            <Label htmlFor="companyWebsite">Company Website</Label>
            <Field
              as={Input}
              id="companyWebsite"
              name="companyWebsite"
              placeholder="Enter your Company Website"
              className={
                errors.companyWebsite && touched.companyWebsite
                  ? "border-red-500"
                  : ""
              }
            />
            <ErrorMessage
              name="companyWebsite"
              component="div"
              className="text-sm text-red-500"
            />
          </div>

          {/* Subject */}
          <div className="grid w-full gap-2">
            <Label htmlFor="challenge">Subject</Label>
            <Field
              as={Input}
              id="challenge"
              name="challenge"
              placeholder="What's your current biggest challenge"
              className={
                errors.challenge && touched.challenge ? "border-red-500" : ""
              }
            />
            <ErrorMessage
              name="challenge"
              component="div"
              className="text-sm text-red-500"
            />
          </div>

          {/* Project Description */}
          <div className="grid w-full gap-2">
            <Label htmlFor="desc">Project Description</Label>
            <Field
              as={Textarea}
              id="desc"
              name="desc"
              placeholder="Describe your project briefly"
              className={errors.desc && touched.desc ? "border-red-500" : ""}
            />
            <ErrorMessage
              name="desc"
              component="div"
              className="text-sm text-red-500"
            />
          </div>

          {/* Services (Checkboxes) */}
          <div className="grid w-full gap-2 mb-4">
            <Label htmlFor="services">
              What Services Are You Interested In? *
            </Label>
            <div role="group" className="grid grid-cols-2 gap-4 mt-2">
              {services.map((service) => (
                <div key={service} className="flex items-center gap-2">
                  <Field
                    type="checkbox"
                    id={service}
                    value={service}
                    name="services"
                    className="rounded-sm"
                  />
                  <Label htmlFor={service}>{service}</Label>
                </div>
              ))}
            </div>
            <ErrorMessage
              name="services"
              component="div"
              className="text-sm text-red-500"
            />
          </div>

          <button
            type="submit"
            className="bg-indigo-600 px-7 p-2 text-white rounded-lg font-bold text-lg hover:bg-indigo-700 transition-colors"
          >
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default ContactForm;
