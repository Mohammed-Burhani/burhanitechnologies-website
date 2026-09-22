"use client";

import Link from "next/link";
import Container from "@/components/constants/Container";

const StartWithRecords = () => {
  return (
    <section className="relative overflow-hidden bg-white py-16 sxl:py-24">
      <Container>
        {/* Two symmetric columns divided by a hairline, distinct from the
           single-column numbered rail used for three-part explanations
           elsewhere in this design system */}
        <div className="grid grid-cols-1 gap-10 divide-y divide-zinc-200 lg:grid-cols-2 lg:gap-16 lg:divide-x lg:divide-y-0">
          <div className="flex flex-col gap-4 lg:pr-8">
            <h2 className="text-xl font-semibold leading-tight tracking-tight text-zinc-900 sm:text-2xl">
              Start with records your team can reconcile
            </h2>
            <p className="text-sm leading-relaxed text-zinc-500 sm:text-base">
              Choose a first module that has clear owners and dependable
              source records. Compare balances, permissions and status
              changes with the current process before extending the ERP to
              another department. Migration needs decisions about duplicate
              records, missing fields and the history users must retain.
            </p>
            <p className="text-sm leading-relaxed text-zinc-500 sm:text-base">
              <Link
                href="/services/integration-services"
                className="font-medium text-[#6F36D2] underline decoration-[#6F36D2]/30 underline-offset-2 transition-colors duration-200 hover:text-[#4f2496]"
              >
                System integration
              </Link>{" "}
              connects the ERP to software you keep. Agree which system owns
              each field and how failed or repeated transfers will be
              handled. A shared dashboard is useful only when the underlying
              records can be trusted.
            </p>
          </div>

          <div className="flex flex-col gap-4 pt-10 lg:pl-8 lg:pt-0">
            <h2 className="text-xl font-semibold leading-tight tracking-tight text-zinc-900 sm:text-2xl">
              Reduce the manual work between departments
            </h2>
            <p className="text-sm leading-relaxed text-zinc-500 sm:text-base">
              An invoice may arrive as a document, become a finance record
              and then wait for approval. AI-enabled capture can help read
              the incoming information. Validation and approval rules
              determine what can proceed and what needs review.{" "}
              <Link
                href="/services/business-process-automation-solutions"
                className="font-medium text-[#6F36D2] underline decoration-[#6F36D2]/30 underline-offset-2 transition-colors duration-200 hover:text-[#4f2496]"
              >
                Business process automation
              </Link>{" "}
              brings those steps into the ERP workflow.
            </p>
            <p className="text-sm leading-relaxed text-zinc-500 sm:text-base">
              For production and inventory requirements, our{" "}
              <Link
                href="/industries/manufacturing"
                className="font-medium text-[#6F36D2] underline decoration-[#6F36D2]/30 underline-offset-2 transition-colors duration-200 hover:text-[#4f2496]"
              >
                manufacturing software work
              </Link>{" "}
              shows how shared records support scheduling, stock control and
              dispatch.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default StartWithRecords;
