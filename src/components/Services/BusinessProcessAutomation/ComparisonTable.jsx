"use client";

import Container from "@/components/constants/Container";

const rows = [
  {
    decision: "Common workflows",
    packaged: "Existing components may cover much of the required routing and execution.",
    custom: "Assess whether specific requirements justify additional development.",
  },
  {
    decision: "Unusual rules",
    packaged: "Check how exceptions and extensions are supported.",
    custom: "Define and test the rules directly around the task.",
  },
  {
    decision: "Legacy screens",
    packaged: "Bot tooling can provide execution and operational controls.",
    custom: "Assess available tooling before building screen automation from scratch.",
  },
  {
    decision: "Operating cost",
    packaged: "Include licences, configuration, support and change effort.",
    custom: "Include development, hosting, support and change effort.",
  },
];

const ComparisonTable = () => {
  return (
    <section className="relative overflow-hidden border-t border-white/5 bg-[#0B0B10] py-16 sxl:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 bottom-0 h-[380px] w-[380px] rounded-full bg-[#6F36D2]/[0.1] blur-[130px]"
      />

      <Container className="relative">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-semibold leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl">
            Choose how the automation will be implemented
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-zinc-400 sm:text-base">
            The choice depends on task stability, existing connectors,
            licensing and the work required to maintain the process.
          </p>
        </div>

        <div className="mt-10 hidden overflow-hidden rounded-2xl border border-white/10 sm:block lg:mt-14">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="border-b border-white/10 bg-white/[0.03]">
                <th scope="col" className="w-1/5 px-6 py-4 font-inter text-smallText font-semibold uppercase tracking-wide text-zinc-400">
                  Decision
                </th>
                <th scope="col" className="w-2/5 px-6 py-4 font-inter text-smallText font-semibold uppercase tracking-wide text-zinc-400">
                  Platform configuration
                </th>
                <th scope="col" className="w-2/5 px-6 py-4 font-inter text-smallText font-semibold uppercase tracking-wide text-[#B79CE8]">
                  Custom implementation
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr
                  key={row.decision}
                  className={i !== rows.length - 1 ? "border-b border-white/10" : ""}
                >
                  <th scope="row" className="px-6 py-5 align-top text-base font-semibold text-white">
                    {row.decision}
                  </th>
                  <td className="px-6 py-5 align-top text-sm leading-relaxed text-zinc-400">
                    {row.packaged}
                  </td>
                  <td className="border-l border-white/5 px-6 py-5 align-top text-sm leading-relaxed text-zinc-200">
                    {row.custom}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-10 flex flex-col gap-5 sm:hidden">
          {rows.map((row) => (
            <div
              key={row.decision}
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-5"
            >
              <h3 className="text-base font-semibold text-white">
                {row.decision}
              </h3>
              <div className="mt-4 flex flex-col gap-3">
                <div>
                  <span className="font-inter text-smallText font-semibold uppercase tracking-wide text-zinc-500">
                    Platform configuration
                  </span>
                  <p className="mt-1 text-sm leading-relaxed text-zinc-400">
                    {row.packaged}
                  </p>
                </div>
                <div>
                  <span className="font-inter text-smallText font-semibold uppercase tracking-wide text-[#B79CE8]">
                    Custom implementation
                  </span>
                  <p className="mt-1 text-sm leading-relaxed text-zinc-200">
                    {row.custom}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ComparisonTable;
