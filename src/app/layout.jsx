import { Lora } from "next/font/google";
import "./globals.css";
import ProtectedComponent from "@/components/ProtectedComponent";
import ConsentManager from "@/components/Consent/ConsentManager";
import {
  organizationSchema,
  websiteSchema,
  localBusinessSchema,
} from "@/utils/schema";

const lora = Lora({
  variable: "--font-lora",
  weight: "variable",
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://burhanitechnologies.com"),
  title:
    "Custom Software Development Company | Burhani Technologies",
  description:
    "Custom software engineering since 2010. Burhani builds applications, ERP and automation around your operations, with experience across real client projects.",
  keywords: [
    "custom software development Chennai",
    "ERP implementation",
    "business process automation",
    "AI automation solutions",
    "DevOps services Chennai",
    "Azure cloud services",
    "software development company",
    "RPA solutions",
    "workflow automation",
    "Microsoft Power Platform",
    "enterprise software development",
    "custom ERP systems",
    "application development services",
  ],
  authors: [{ name: "Burhani Technologies" }],
  creator: "Burhani Technologies",
  publisher: "Burhani Technologies",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://burhanitechnologies.com",
    siteName: "Burhani Technologies",
    title:
      "Custom Software Development Company | Burhani Technologies",
    description:
      "Custom software engineering since 2010. Burhani builds applications, ERP and automation around your operations, with experience across real client projects.",
  },
  twitter: {
    card: "summary",
    title: "Custom Software Development Company | Burhani Technologies",
    description:
      "Custom software engineering since 2010. Burhani builds applications, ERP and automation around your operations, with experience across real client projects.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "UP_wON5lYN_QqtZzPogE3GooUQ7Clqzy6nIsqoYpCcg",
  },
  alternates: {
    canonical: "https://burhanitechnologies.com",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Organization Schema */}
        <script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema).replace(/</g, "\\u003c"),
          }}
        />
        {/* Website Schema */}
        <script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema).replace(/</g, "\\u003c"),
          }}
        />
        {/* Local Business Schema */}
        <script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema).replace(/</g, "\\u003c"),
          }}
        />
      </head>
      <body className={`${lora.variable} font-sans antialiased bg-black`}>
        {/* First in the DOM so keyboard users reach the consent choices immediately.
            Google Analytics and Marketing Manager load only after consent (see Consent/Trackers). */}
        <ConsentManager />
        <ProtectedComponent>{children}</ProtectedComponent>
      </body>
    </html>
  );
}
