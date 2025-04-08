import { ErrorMessage, Field, Form, Formik } from "formik";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const services = [
  "NET Development",
  "WordPress Development",
  "Front-end Development",
  "Full-Stack Development",
  "ML Development",
  "Cloud Technologies",
];

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

  return (
    <Formik
      initialValues={initialValues}
      // validationSchema={validationSchema(action)}
      onSubmit={(arg) => {
        // handleSubmit(arg);
        console.log(arg);
      }}
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
              className={
                errors.albumin && touched.albumin ? "border-red-500" : ""
              }
            />
            <ErrorMessage
              name="albumin"
              component="div"
              className="text-sm text-red-500"
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
            <Label htmlFor="services">
              What Services Are You Interested In? *
            </Label>
            <div role="group" className="grid grid-cols-2 gap-4 mt-2">
              {services.map((service) => (
                <div key={service} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id={service}
                    value={service}
                    name="services"
                  />
                  <Label htmlFor="services">{service}</Label>
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
        </Form>
      )}
    </Formik>
  );
}

export default ContactForm;
