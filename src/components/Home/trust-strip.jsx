import Container from "../constants/Container";

const facts = [
  { label: "Since 2010" },
  { label: "Based in India" },
  { label: "Clients in India, the US, the UAE and Australia" },
  { label: "Early working versions, reviewed with your team" },
];

const TrustStrip = () => {
  return (
    <section className="border-t border-white/5 bg-[#0B0B10] py-10">
      <Container>
        <div className="grid grid-cols-1 gap-y-6 gap-x-8 sm:grid-cols-2 lg:grid-cols-4">
          {facts.map((fact) => (
            <p
              key={fact.label}
              className="border-l-2 border-[#6F36D2]/50 pl-4 text-sm leading-snug text-zinc-400"
            >
              {fact.label}
            </p>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default TrustStrip;