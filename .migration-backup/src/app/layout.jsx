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
    "Burhani Technologies | Custom Software Development & Enterprise Automation",
  description:
    "Leading software development company in Chennai with 14+ years of expertise. Specializing in Custom ERP Implementation, AI/ML Automation, Microsoft Power Platform, DevOps/Azure, and Business Process Automation serving healthcare, manufacturing, and enterprise clients globally.",
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
      "Burhani Technologies | Custom Software Development & Enterprise Automation",
    description:
      "Leading software development company in Chennai with 14+ years of expertise in Custom ERP Implementation, AI/ML Automation, Microsoft Power Platform, DevOps/Azure, and Business Process Automation.",
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
    title: "Burhani Technologies | Custom Software Development & Enterprise Automation",
    description:
      "Leading software development company with 14+ years of expertise specializing in Custom ERP, AI/ML Automation, Microsoft Power Platform, and Business Process Automation.",
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
        {/* Marketing Manager Tracking Code Start */}
        <Script id="marketing-manager-tracking" strategy="afterInteractive">
          {`!function () { var e, t; e = document.createElement("script"), e.type = "text/javascript",e.async = !0, e.defer = !0, e.src ="https://mkmpages.burhanitechnologies.com/6666?isnew=1&pdn=mkmpages.burhanitechnologies.com&v=" + String((new Date).getMonth() + 1) + String((new Date).getFullYear()) +String(Math.round(parseInt((new Date).getDate() / 7), 0) + 1) +"&encsid=71DEnjHXXHQ,&enccid=xGvuWINf1Fg,&wsid=NzM0&dHJhY2tpbmdVcmw=2PtuCvDuCGT5LwTmxa5wjl35YCAFpwehX6VzxWewIgs,", t =document.getElementsByTagName("head")[0], t.appendChild(e, t) }();`}
        </Script>
        <noscript>
          <p>
            <img
              src="https://mkmpages.burhanitechnologies.com/7777?idsite=734"
              style={{ border: 0 }}
              alt=""
            />
          </p>
        </noscript>
        {/* Marketing Manager Tracking Code End */}
      </body>
    </html>
  );
}
