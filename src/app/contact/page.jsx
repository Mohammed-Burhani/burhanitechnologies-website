import ContactPageWrapper from "@/components/contact/ContactPageWrapper";

export const metadata = {
  title: "Contact Burhani Technologies | Discuss Your Project",
  description:
    "Discuss your website, e-commerce, invoicing or application project with Burhani Technologies. Share your business problem, desired outcome and service needs.",
  keywords: [
    "contact burhani technologies",
    "software development consultation",
    "custom software development contact",
    "ERP implementation contact",
    "Chennai software company contact",
  ],
  openGraph: {
    title: "Contact Burhani Technologies | Discuss Your Project",
    description:
      "Discuss your website, e-commerce, invoicing or application project with Burhani Technologies. Share your business problem, desired outcome and service needs.",
    url: "https://burhanitechnologies.com/contact",
  },
  alternates: {
    canonical: "https://burhanitechnologies.com/contact",
  },
};

export default function ContactPage() {
  return <ContactPageWrapper />;
}
