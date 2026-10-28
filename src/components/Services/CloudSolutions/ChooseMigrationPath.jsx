"use client";

import Link from "next/link";
import Container from "@/components/constants/Container";
import { Compass, PlugsConnected } from "@phosphor-icons/react";

const ChooseMigrationPath = () => {
  return (
    <section className="relative overflow-hidden bg-white py-16 sxl:py-24">
      <Container className="!py-0">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-12">
          <div className="flex min-w-0 flex-col gap-4 border-b border-zinc-200 pb-10 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-12">
            <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#6F36D2]/20 bg-[#6F36D2]/[0.06]">
              <Compass size={20} weight="bold" className="text-[#6F36D2]" />
            </div>
            <h2 className="text-balance text-2xl font-semibold leading-tight tracking-tight text-zinc-900 sm:text-3xl">
              Choose a migration path from the application&apos;s needs
            </h2>
            <p className="text-sm leading-relaxed text-zinc-500 sm:text-base">
              Begin with the workload, dependencies and recovery
              requirements. Some systems can move with limited changes.
              Others need adjustments to storage, scaling or the application
              itself. Test those assumptions before estimating the migration
              cost or the savings it might produce.
            </p>
            <p className="text-sm leading-relaxed text-zinc-500 sm:text-base">
              Agree the data transfer, cutover checks and rollback steps.
              Connections to retained systems belong in the{" "}
              <Link
                href="/services/integration-services"
                className="font-medium text-[#6F36D2] underline decoration-[#6F36D2]/30 underline-offset-2 transition-colors duration-200 hover:text-[#4f2496]"
              >
                integration scope
              </Link>
              , including what happens when a service is unavailable.
            </p>
          </div>

          <div className="flex min-w-0 flex-col gap-4">
            <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#6F36D2]/20 bg-[#6F36D2]/[0.06]">
              <PlugsConnected size={20} weight="bold" className="text-[#6F36D2]" />
            </div>
            <h2 className="text-balance text-2xl font-semibold leading-tight tracking-tight text-zinc-900 sm:text-3xl">
              Plan for every external dependency
            </h2>
            <p className="text-sm leading-relaxed text-zinc-500 sm:text-base">
              An application that calls an AI service has another provider,
              data flow and usage cost to account for. Response times, access
              limits and failure behaviour affect the user experience.
              Review them alongside hosting and recovery requirements.
            </p>
            <p className="text-sm leading-relaxed text-zinc-500 sm:text-base">
              After release,{" "}
              <Link
                href="/services/devops-and-maintenance"
                className="font-medium text-[#6F36D2] underline decoration-[#6F36D2]/30 underline-offset-2 transition-colors duration-200 hover:text-[#4f2496]"
              >
                DevOps and maintenance
              </Link>{" "}
              supports monitoring, updates and repeatable deployments. The
              operating plan should make it clear who investigates failures
              and how a change is tested before it reaches users.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ChooseMigrationPath;
