"use client";
import Link from "next/link";
import ContactForm from "@/components/form/ContactForm";

const shell = "mx-auto max-w-[1600px] px-7 sm:px-10 xl:px-20";

const steps = [
  {
    number: "01",
    title: "Review your requirement",
    text: "Our team reviews the business problem, service need and outcome you describe.",
  },
  {
    number: "02",
    title: "Discuss the scope",
    text: "We clarify the workflow, existing systems and people involved before proposing an approach.",
  },
  {
    number: "03",
    title: "Agree the next step",
    text: "Scope, delivery, pricing and support are agreed for your project before work begins.",
  },
];

const hours = [
  "Monday to Friday, 09:00 to 18:00 IST",
  "Saturday, 09:00 to 13:00 IST",
];

export default function ContactPageContent() {
  return (
    <main id="main" className="font-inter text-[#180030]">
      {/* Hero */}
      <section className="contact-hero-bg contact-grid-lines relative overflow-hidden">
        <div className={`${shell} relative pt-32 pb-14 lg:pt-36`}>
          <div className="mb-8">
            <nav aria-label="Breadcrumb" className="font-inter text-body">
              <ol className="flex flex-wrap items-center gap-2 text-white/55">
                <li className="flex items-center gap-2">
                  <Link href="/" className="transition hover:text-white">
                    Home
                  </Link>
                </li>
                <li className="flex items-center gap-2">
                  <span aria-hidden="true">/</span>
                  <span className="text-white/85" aria-current="page">
                    Contact
                  </span>
                </li>
              </ol>
            </nav>
          </div>
          <h1 className="max-w-4xl font-inter text-captionLarge font-extrabold leading-[1.16] text-white sm:text-mdcaptionLarge">
            What business problem do you want to solve?
          </h1>
          <p className="mt-6 max-w-2xl font-inter text-mdbody leading-relaxed text-white/75">
            Tell us what needs to work better, the result you want and the
            service you need. We can then discuss an approach that fits your
            business.
          </p>
        </div>
      </section>

      {/* Form + technical leadership */}
      <section className="bg-white py-16">
        <div className={`${shell} grid grid-cols-1 gap-12 lg:grid-cols-12`}>
          <div className="lg:col-span-7">
            <div className="mb-8 rounded-2xl border border-[#6622DC]/15 bg-[#F5F5F5] p-6">
              <h2 className="font-inter text-captionSmall font-bold">
                Start with your business requirement
              </h2>
              <p className="mt-3 font-inter text-body text-[#180030]/70">
                This form is for business projects. Share the problem and the
                outcome you are looking for.
              </p>
              <p className="mt-3 font-inter text-body text-[#180030]/70">
                Looking for a role?{" "}
                <a
                  href="mailto:connect@burhanitechnologies.com?subject=Career%20enquiry"
                  className="text-[#6622DC] underline underline-offset-4"
                >
                  Send a career enquiry by email
                </a>
                .
              </p>
            </div>
            <ContactForm />
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-[#180030] p-8 lg:sticky lg:top-28">
              <p className="font-inter text-body uppercase tracking-[.18em] text-[#E3C8FF]">
                Technical leadership
              </p>
              <h2 className="mt-4 font-inter text-captionLarge font-bold text-white">
                Aliasgar Ghadyali
              </h2>
              <p className="font-inter text-mdbody text-[#9933FF]">CTO</p>
              <p className="mt-5 font-inter text-body text-white/70">
                Our technical team reviews the workflow and systems your project
                needs to connect. We agree your project contacts during
                scoping.
              </p>
              <div className="mt-7 flex flex-col gap-4 border-t border-white/15 pt-7">
                <a
                  href="mailto:connect@burhanitechnologies.com"
                  className="font-inter text-mdbody text-white transition hover:text-[#9933FF]"
                >
                  connect@burhanitechnologies.com
                </a>
                <a
                  href="tel:+917299002152"
                  className="font-inter text-mdbody text-white transition hover:text-[#9933FF]"
                >
                  +91 72990 02152
                </a>
                <a
                  href="https://wa.me/917299002152"
                  rel="noopener"
                  className="flex w-fit items-center gap-3 rounded-xl bg-[#25D366] px-5 py-3 text-white transition hover:bg-[#128C7E]"
                >
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 18.15h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.22-8.23 8.22Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.78.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23a7.5 7.5 0 0 1-1.38-1.72c-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.15.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.42h-.48c-.17 0-.43.06-.66.31-.23.25-.87.85-.87 2.07 0 1.22.89 2.4 1.01 2.57.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.06-.1-.23-.16-.48-.29Z" />
                  </svg>
                  <span className="font-inter text-body font-medium">
                    WhatsApp us
                  </span>
                </a>
              </div>
              <p className="mt-7 font-inter text-body text-white/50">
                {hours.map((line) => (
                  <span key={line}>
                    {line}
                    <br />
                  </span>
                ))}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What happens after you send it */}
      <section className="bg-[#F5F5F5] py-20">
        <div className={shell}>
          <h2 className="font-inter text-captionLarge font-bold sm:text-mdcaptionLarge">
            What happens after you send it
          </h2>
          <p className="mt-4 font-inter text-mdbody text-[#180030]/70">
            See the{" "}
            <Link
              href="/book-a-consultation"
              className="text-[#6622DC] underline underline-offset-4"
            >
              consultation agenda
            </Link>{" "}
            and our{" "}
            <Link
              href="/knowledge-base/what-you-need-ready-before-a-discovery-call"
              className="text-[#6622DC] underline underline-offset-4"
            >
              preparation guide
            </Link>{" "}
            to make the first discussion useful.
          </p>
          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
            {steps.map((step) => (
              <div
                key={step.number}
                className="rounded-2xl border border-[#180030]/10 bg-white p-6"
              >
                <span className="font-inter text-body font-bold text-[#6622DC]">
                  {step.number}
                </span>
                <h3 className="mt-2 font-inter text-captionSmall font-bold">
                  {step.title}
                </h3>
                <p className="mt-3 font-inter text-body text-[#180030]/70">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Office details */}
      <section className="bg-white py-16">
        <div className={`${shell} grid grid-cols-1 gap-10 lg:grid-cols-3`}>
          <div>
            <h2 className="font-inter text-captionSmall font-bold">
              Visit our office
            </h2>
            <address className="mt-4 font-inter text-body not-italic leading-relaxed text-[#180030]/70">
              1st Floor, Vanguard House, #48, Moore St,
              <br />
              Parry&apos;s Corner, George Town,
              <br />
              Chennai, Tamil Nadu 600001
            </address>
          </div>
          <div>
            <h2 className="font-inter text-captionSmall font-bold">
              Talk to us
            </h2>
            <p className="mt-4 font-inter text-body leading-relaxed text-[#180030]/70">
              <a href="tel:+917299002152" className="hover:text-[#6622DC]">
                +91 72990 02152
              </a>
              <br />
              <a
                href="mailto:connect@burhanitechnologies.com"
                className="hover:text-[#6622DC]"
              >
                connect@burhanitechnologies.com
              </a>
            </p>
          </div>
          <div>
            <h2 className="font-inter text-captionSmall font-bold">
              Office hours
            </h2>
            <p className="mt-4 font-inter text-body leading-relaxed text-[#180030]/70">
              {hours.map((line) => (
                <span key={line}>
                  {line}
                  <br />
                </span>
              ))}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
