import { Inter } from "next/font/google";
import "./globals.css";
import ProtectedComponent from "@/components/ProtectedComponent";
import Script from "next/script";
import {
  organizationSchema,
  websiteSchema,
  localBusinessSchema,
} from "@/utils/schema";

const inter = Inter({
  variable: "--font-inter",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://burhanitechnologies.com"),
  title:
    "Burhani Technologies | Custom Software Development",
  description:
    "Leading software development company in Chennai specializing in Custom ERP, AI/ML Automation, DevOps/Azure, and Business Process Automation.",
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
      "Burhani Technologies | Custom Software Development",
    description:
      "Leading software development company in Chennai specializing in Custom ERP, AI/ML Automation, DevOps/Azure, and Business Process Automation.",
    images: [
      {
        url: "/BT-Logo.svg",
        width: 1200,
        height: 630,
        alt: "Burhani Technologies Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Burhani Technologies | Custom Software Development",
    description:
      "Leading software development company specializing in Custom ERP, AI/ML Automation, and Business Process Automation.",
    images: ["/BT-Logo.svg"],
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
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
          strategy="beforeInteractive"
        />
        {/* Website Schema */}
        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
          strategy="beforeInteractive"
        />
        {/* Local Business Schema */}
        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
          strategy="beforeInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-3B1EB1YBXX');
          `}
        </Script>
      </head>
      <body className={`${inter.variable} antialiased bg-black`}>
        <ProtectedComponent>{children}</ProtectedComponent>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-3B1EB1YBXX"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
