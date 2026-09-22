"use client";

import Container from "@/components/constants/Container";

const signals = [
  {
    quote: "Every department gives me a different number for the same week.",
    body: "Sales counts orders, production counts batches, stores counts stock, and the three never reconcile until somebody spends a day on it.",
  },
  {
    quote: "I find out a delivery slipped when the customer calls.",
    body: "Production status lives on the floor, in a book or a WhatsApp group. It reaches the office after the commitment has already been missed.",
  },
  {
    quote: "Our ERP quote came back longer than the problem.",
    body: "Packaged implementations price the licence, then the modules, then the customisation to undo the modules. The scope grows before anything runs.",
  },
];

const DifferentRecords = () => {
  return (
    <section className="relative overflow-hidden bg-white py-16 sxl:py-24">
      <Container>
        <h2 className="max-w-2xl text-2xl font-semibold leading-tight tracking-tight text-zinc-900 sm:text-3xl lg:text-4xl">
          When departments work from different records
        </h2>

        {/* Zebra-striped rows, split quote / body columns: a horizontal
           rhythm distinct from the ghost-numeral list used on the custom
           software page */}
        <div className="mt-10 overflow-hidden rounded-2xl border border-zinc-200 lg:mt-14">
          {signals.map((item, i) => (
            <div
              key={item.quote}
              className={`grid grid-cols-1 gap-3 px-6 py-8 sm:grid-cols-[1fr_1.3fr] sm:gap-10 sm:px-8 lg:py-10 ${
                i % 2 === 1 ? "bg-zinc-50" : "bg-white"
              } ${i !== signals.length - 1 ? "border-b border-zinc-200" : ""}`}
            >
              <h3 className="text-lg font-semibold italic leading-snug text-zinc-900 sm:text-xl">
                &ldquo;{item.quote}&rdquo;
              </h3>
              <p className="text-sm leading-relaxed text-zinc-500 sm:text-base">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default DifferentRecords;
