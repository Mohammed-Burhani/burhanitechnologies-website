import { Inter } from "next/font/google";
import "./globals.css";
import ProtectedComponent from "@/components/ProtectedComponent";
import Script from "next/script";

const inter = Inter({
  variable: "--font-inter",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Burhani Technologies | Custom Software Services",
  description:
    "Burhani Technologies in Chennai specializes in custom software development and business process automation services. We help businesses streamline operations, improve efficiency, and scale with innovative technology solutions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased bg-black`}>
        <ProtectedComponent>{children}</ProtectedComponent>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-3B1EB1YBXX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-3B1EB1YBXX');
          `}
        </Script>
      </body>
    </html>
  );
}
