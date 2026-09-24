"use client";

import Link from "next/link";
import Container from "@/components/constants/Container";

const DesignInterpretation = () => {
  return (
    <section className="relative overflow-hidden bg-white py-16 sxl:py-24">
      <Container>
        {/* Alternating text alignment, no numeral rail and no symmetric
           columns, so this reads differently from the equivalent deep-dive
           sections on the other pillar pages */}
        <div className="mx-auto flex max-w-4xl flex-col gap-14 lg:gap-16">
          <div className="flex flex-col gap-4">
            <span
              aria-hidden="true"
              className="h-2 w-2 rounded-sm bg-[#6F36D2]"
            />
            <h2 className="text-2xl font-semibold leading-tight tracking-tight text-zinc-900 sm:text-3xl">
              Design the interpretation and the next action together
            </h2>
            <p className="max-w-2xl text-sm leading-relaxed text-zinc-500 sm:text-base">
              We map what arrives, how it is checked and which system
              receives the result. Our engineers can incorporate AI-enabled
              capture to read invoice fields or interpret form text, then
              connect that information to explicit business rules. Approval
              limits, required sign-offs and record ownership shape the
              implementation.
            </p>
            <p className="max-w-2xl text-sm leading-relaxed text-zinc-500 sm:text-base">
              A record that needs checking follows an exception path with
              the information a reviewer needs.{" "}
              <Link
                href="/services/workflow-automation"
                className="font-medium text-[#6F36D2] underline decoration-[#6F36D2]/30 underline-offset-2 transition-colors duration-200 hover:text-[#4f2496]"
              >
                Workflow automation
              </Link>{" "}
              manages that handoff.{" "}
              <Link
                href="/services/robotic-process-automation-rpa"
                className="font-medium text-[#6F36D2] underline decoration-[#6F36D2]/30 underline-offset-2 transition-colors duration-200 hover:text-[#4f2496]"
              >
                RPA
              </Link>{" "}
              can enter approved records into stable legacy screens where a
              direct connection is unavailable.
            </p>
          </div>

          <div className="flex flex-col gap-4 border-t border-zinc-200 pt-14 sm:ml-auto sm:items-end sm:text-right lg:pt-16">
            <span
              aria-hidden="true"
              className="h-2 w-2 rounded-sm bg-[#6F36D2]"
            />
            <h2 className="text-2xl font-semibold leading-tight tracking-tight text-zinc-900 sm:text-3xl">
              Measure the whole process
            </h2>
            <p className="max-w-2xl text-sm leading-relaxed text-zinc-500 sm:text-base">
              Review the time from receipt to completion, the queue waiting
              for attention and the reasons cases return for correction.
              Faster data entry helps only if the next stage can use the
              result.{" "}
              <Link
                href="/services/process-automation"
                className="font-medium text-[#6F36D2] underline decoration-[#6F36D2]/30 underline-offset-2 transition-colors duration-200 hover:text-[#4f2496]"
              >
                Process monitoring
              </Link>{" "}
              makes delays visible so the team can decide what to improve
              next.
            </p>
            <p className="max-w-2xl text-sm leading-relaxed text-zinc-500 sm:text-base">
              The loan platform in{" "}
              <Link
                href="/case-studies/digitalizing-the-end-to-end-loan-lifecycle"
                className="font-medium text-[#6F36D2] underline decoration-[#6F36D2]/30 underline-offset-2 transition-colors duration-200 hover:text-[#4f2496]"
              >
                Digitalizing the End-to-End Loan Lifecycle
              </Link>{" "}
              combined digital submission, validation, risk information and
              status tracking in one borrower and staff workflow.
            </p>
          </div>

          <div className="flex flex-col gap-4 border-t border-zinc-200 pt-14 lg:pt-16">
            <span
              aria-hidden="true"
              className="h-2 w-2 rounded-sm bg-[#6F36D2]"
            />
            <h2 className="text-2xl font-semibold leading-tight tracking-tight text-zinc-900 sm:text-3xl">
              Build the controls into the automation system
            </h2>
            <p className="max-w-2xl text-sm leading-relaxed text-zinc-500 sm:text-base">
              Our engineers connect the components of a document-heavy
              workflow, including OCR, model-based extraction and
              deterministic validation where the task requires them. An
              invoice may become a structured record, pass required-field
              and duplicate checks, then move into the approval queue. A
              model's interpretation supplies information; the business
              rules determine what can proceed.
            </p>
            <p className="max-w-2xl text-sm leading-relaxed text-zinc-500 sm:text-base">
              Guardrails make that division practical. Define the accepted
              inputs, permitted system actions and cases that require
              review. Keep an activity record of the transfer and decision
              so the team can investigate a failed or unexpected step.{" "}
              <Link
                href="/services/integration-services"
                className="font-medium text-[#6F36D2] underline decoration-[#6F36D2]/30 underline-offset-2 transition-colors duration-200 hover:text-[#4f2496]"
              >
                Integration services
              </Link>{" "}
              connects validated records to the destination, and{" "}
              <Link
                href="/services/workflow-automation"
                className="font-medium text-[#6F36D2] underline decoration-[#6F36D2]/30 underline-offset-2 transition-colors duration-200 hover:text-[#4f2496]"
              >
                workflow automation
              </Link>{" "}
              coordinates approvals and recovery.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default DesignInterpretation;
