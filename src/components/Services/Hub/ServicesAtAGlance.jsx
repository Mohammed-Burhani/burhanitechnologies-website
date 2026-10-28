import Container from "@/components/constants/Container";

const stats = [
  { value: "2010", label: "Building business software since" },
  { value: "4", label: "Countries we deliver into" },
  { value: "6", label: "Client case studies" },
  { value: "Staged", label: "Delivery with working reviews" },
];

const ServicesAtAGlance = () => {
  return (
    <section id="service-facts" className="border-y border-[#E8E2F1] bg-[#FAF8FD] py-10 sm:py-12">
      <Container className="!py-0">
        <div className="grid gap-7 xl:grid-cols-[190px_minmax(0,1fr)] xl:items-center xl:gap-10">
        <h2 className="text-2xl font-semibold leading-tight tracking-tight text-zinc-900">
          At a glance
        </h2>
        <dl className="grid grid-cols-2 gap-x-5 gap-y-7 sm:grid-cols-4 sm:gap-x-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col gap-3 border-l-2 border-[#D9C7F0] pl-4 sm:pl-5"
            >
              <dt className="min-h-9 max-w-[22ch] text-xs leading-relaxed text-zinc-600 sm:min-h-10 sm:text-sm">
                {stat.label}
              </dt>
              <dd className="font-inter text-[1.75rem] font-semibold leading-none tracking-tight tabular-nums text-[#5C2A9F] sm:text-3xl">{stat.value}</dd>
            </div>
          ))}
        </dl>
        </div>
      </Container>
    </section>
  );
};

export default ServicesAtAGlance;
