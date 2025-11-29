import ContactPageContent from "@/components/contact/ContactPageContent";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

export const metadata = {
  title: "Contact Us | Burhani Technologies - Get In Touch",
  description:
    "Contact Burhani Technologies for custom software development, ERP implementation, and enterprise automation solutions. Located in Chennai, serving clients globally.",
  keywords: [
    "contact burhani technologies",
    "software development consultation",
    "custom software development contact",
    "ERP implementation contact",
    "Chennai software company contact",
  ],
  openGraph: {
    title: "Contact Us | Burhani Technologies",
    description:
      "Get in touch with our expert team for custom software development and enterprise automation solutions.",
    url: "https://burhanitechnologies.com/contact",
  },
  alternates: {
    canonical: "https://burhanitechnologies.com/contact",
  },
};

export default function ContactPage() {
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? ""}
    >
      <ContactPageContent />
    </GoogleReCaptchaProvider>
  );
}
