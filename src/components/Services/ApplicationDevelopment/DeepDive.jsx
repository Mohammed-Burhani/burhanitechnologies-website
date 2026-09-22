"use client";

import Link from "next/link";
import Container from "@/components/constants/Container";

const DeepDive = () => {
  return (
    <section className="relative overflow-hidden bg-white py-16 sxl:py-24">
      <Container>
        {/* Three long-form sections stacked vertically, each headed by its own
           numeral rather than split into a headline-left / body-right layout */}
        <div className="mx-auto flex max-w-3xl flex-col divide-y divide-zinc-200">
          <div className="flex flex-col gap-4 pb-12">
            <span className="font-inter text-smallText font-semibold text-[#6F36D2]">
              01
            </span>
            <h2 className="text-2xl font-semibold leading-tight tracking-tight text-zinc-900 sm:text-3xl">
              Make the first release a complete piece of work
            </h2>
            <p className="text-sm leading-relaxed text-zinc-500 sm:text-base">
              A useful first release lets someone finish a task. A request
              can be entered, checked, assigned and found again by the right
              person. Agree that sequence, its exceptions and its acceptance
              criteria before adding more screens. Our engineers use AI
              assistance to expedite development, then review the code,
              integrate the changes and test the workflow with your team.
            </p>
            <p className="text-sm leading-relaxed text-zinc-500 sm:text-base">
              The schedule includes access to existing systems, data
              preparation and time for your team to review the result. These
              dependencies are covered in our{" "}
              <Link
                href="/knowledge-base"
                className="font-medium text-[#6F36D2] underline decoration-[#6F36D2]/30 underline-offset-2 transition-colors duration-200 hover:text-[#4f2496]"
              >
                project timeline guide
              </Link>
              .
            </p>
          </div>

          <div className="flex flex-col gap-4 py-12">
            <span className="font-inter text-smallText font-semibold text-[#6F36D2]">
              02
            </span>
            <h2 className="text-2xl font-semibold leading-tight tracking-tight text-zinc-900 sm:text-3xl">
              Connect the application to the work around it
            </h2>
            <p className="text-sm leading-relaxed text-zinc-500 sm:text-base">
              An application may need to receive an approved invoice, update
              a customer record or return a status to another team. Define
              those connections alongside the main workflow.{" "}
              <Link
                href="/services/business-process-automation-solutions"
                className="font-medium text-[#6F36D2] underline decoration-[#6F36D2]/30 underline-offset-2 transition-colors duration-200 hover:text-[#4f2496]"
              >
                Business process automation
              </Link>{" "}
              can handle document capture and routine handoffs, while the
              application gives people the records and controls they need.
            </p>
            <p className="text-sm leading-relaxed text-zinc-500 sm:text-base">
              In{" "}
              <Link
                href="/case-studies/erp-solution-for-a-global-apparel-company"
                className="font-medium text-[#6F36D2] underline decoration-[#6F36D2]/30 underline-offset-2 transition-colors duration-200 hover:text-[#4f2496]"
              >
                ERP Solution for a Global Apparel Company
              </Link>
              , the browser application brought sales, stock, production and
              dispatch into one shared system.
            </p>
          </div>

          <div className="flex flex-col gap-4 pt-12">
            <span className="font-inter text-smallText font-semibold text-[#6F36D2]">
              03
            </span>
            <h2 className="text-2xl font-semibold leading-tight tracking-tight text-zinc-900 sm:text-3xl">
              Engineer the AI capability around the task
            </h2>
            <p className="text-sm leading-relaxed text-zinc-500 sm:text-base">
              When an application needs an AI capability, our engineering
              work starts with the task and the information behind it.
              Frontier models are one option for complex language and
              reasoning requirements. Model selection belongs alongside
              decisions about the interface, data, connected tools and the
              result a user needs. Compare candidate models on representative
              inputs, response time and usage cost.
            </p>
            <p className="text-sm leading-relaxed text-zinc-500 sm:text-base">
              We design a knowledge-based assistant around a defined
              information source. An assistant updating a record needs a
              permitted action and a validation step. These are different
              requirements.{" "}
              <Link
                href="/services/integration-services"
                className="font-medium text-[#6F36D2] underline decoration-[#6F36D2]/30 underline-offset-2 transition-colors duration-200 hover:text-[#4f2496]"
              >
                System integration
              </Link>{" "}
              connects the tools and records involved, while guardrails
              define the access and actions allowed within the application.
            </p>
            <p className="text-sm leading-relaxed text-zinc-500 sm:text-base">
              Evaluate the result against complete user tasks, including
              missing information and exceptions. Those checks help decide
              whether the feature is ready to extend beyond the first
              workflow.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default DeepDive;
