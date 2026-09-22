"use client";

import Link from "next/link";
import Container from "@/components/constants/Container";
import { ArrowRight } from "@phosphor-icons/react";

const DiscussFirstScope = () => {
  return (
    <section className="relative overflow-hidden border-t border-zinc-200 bg-white py-16 sxl:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 bottom-0 h-[380px] w-[380px] rounded-full bg-[#6F36D2]/[0.07] blur-[120px]"
      />

      <Container className="relative">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_0.85fr] lg:gap-16">
          <div className="flex flex-col gap-5">
            <h2 className="max-w-xl text-2xl font-semibold leading-tight tracking-tight text-zinc-900 sm:text-3xl lg:text-4xl">
              Discuss the first useful scope
            </h2>
            <p className="max-w-xl text-sm leading-relaxed text-zinc-500 sm:text-base">
              Our technical team reviews your workflow, existing systems and
              the first useful scope. Bring a workflow and the systems it
              depends on to the first discussion.
            </p>
            <div className="mt-1">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#6F36D2] px-5 py-3 text-sm font-medium text-white shadow-[0_1px_0_rgba(255,255,255,0.08)_inset] transition-transform duration-200 hover:bg-[#7C43E0] active:scale-[0.98] sm:text-base"
              >
                Book a free consultation
                <ArrowRight size={18} weight="bold" />
              </Link>
            </div>
          </div>

          <div className="relative aspect-[16/11] w-full overflow-hidden rounded-2xl border border-zinc-200">
            <img
              src="https://picsum.photos/seed/burhani-scoping-discussion-table/1000/700"
              alt="A Burhani Technologies scoping discussion around a client workflow"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default DiscussFirstScope;
