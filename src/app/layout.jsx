import { Inter } from "next/font/google";
import "./globals.css";
import ProtectedComponent from "@/components/ProtectedComponent";
import ConsentLinkGuard from "@/components/ConsentLinkGuard";
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
        {/* Cookiebot Consent Banner - must be first script in head */}
        <Script
          id="Cookiebot"
          src="https://consent.cookiebot.com/uc.js"
          data-cbid="9f18f071-2c32-4567-a894-d530d7e5c1cb"
          data-blockingmode="auto"
          strategy="beforeInteractive"
        />
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
        <ConsentLinkGuard />
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
