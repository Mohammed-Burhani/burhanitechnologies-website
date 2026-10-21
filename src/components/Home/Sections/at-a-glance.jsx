import Container from "@/components/constants/Container";

const stats = [
  { value: "2010", label: "Building business software since" },
  {
    value: "4",
    label: "Countries we deliver into: India, the US, the UAE and Australia",
  },
  { value: "6", label: "Client projects across four industry groups" },
  { value: "5", label: "Connected service practices" },
];

const AtAGlance = () => {
  return (
    <section id="company-facts" className="relative overflow-hidden border-y border-white/10 bg-[#14101D] py-10 sm:py-12">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-0 h-[380px] w-[380px] rounded-full bg-[#6F36D2]/[0.1] blur-[130px]"
      />

      <Container className="relative !py-0">
        <div className="grid gap-8 xl:grid-cols-[190px_minmax(0,1fr)] xl:items-center xl:gap-10">
        <h2 className="text-2xl font-semibold leading-tight tracking-tight text-white">
          At a glance
        </h2>

        <dl className="grid grid-cols-2 gap-x-5 gap-y-8 sm:grid-cols-4 sm:gap-x-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col gap-3 border-l-2 border-[#78549D] pl-4 sm:pl-5"
            >
              <dt className="max-w-[22ch] text-xs leading-relaxed text-[#C3B9CF] sm:text-sm">
                {stat.label}
              </dt>
              <dd className="order-first text-3xl font-semibold leading-none tracking-tight tabular-nums text-[#D4BCF2]">{stat.value}</dd>
            </div>
          ))}
        </dl>
        </div>
      </Container>
    </section>
  );
};

export default AtAGlance;
