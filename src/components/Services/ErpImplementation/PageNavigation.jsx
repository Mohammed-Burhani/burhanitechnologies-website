import Container from "@/components/constants/Container";

const sections = [
  { href: "#erp-scope", label: "ERP scope" },
  { href: "#erp-options", label: "Compare approaches" },
  { href: "#erp-rollout", label: "Rollout" },
  { href: "#erp-project", label: "Client project" },
  { href: "#erp-questions", label: "Questions" },
];

export default function PageNavigation() {
  return (
    <nav aria-label="On this ERP implementation page" className="border-b border-zinc-200 bg-zinc-50 py-5">
      <Container className="!py-0">
        <ul className="flex flex-wrap items-center gap-2 sm:gap-3">
          {sections.map(section => (
            <li key={section.href}>
              <a
                href={section.href}
                className="inline-flex min-h-11 items-center rounded-lg border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-700 transition-colors duration-200 hover:border-[#6F36D2]/40 hover:bg-[#6F36D2]/[0.04] hover:text-[#5c27b9]"
              >
                {section.label}
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </nav>
  );
}
