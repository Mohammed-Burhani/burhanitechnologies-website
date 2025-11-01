"use client";
import React, { useEffect, useState } from "react";
import Navbar from "./constants/Navbar";
import { GoToTop } from "./constants/GoToTop";
import { Footer } from "./constants/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import ChatBot from "./ChatBot";
import Script from "next/script";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import { Toaster } from "@/components/ui/toaster";

const ProtectedComponent = ({ children }) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);

  useEffect(() => {
    setLoading(true);
  }, []);

  return (
    // {!loading ?
    //   : ""
    // }
    <div>
      <Navbar />
      <GoToTop />
      {children}
      <ProgressBar
        height="4px"
        color="#4f39f6"
      />
      {/* <ChatSurvey /> */}
      {/* <ChatBot /> */}
      {/* <Script
        id="engati-widget"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(e, t, a) {
              var c = e.head || e.getElementsByTagName("head")[0],
                  n = e.createElement("script");
              n.async = true;
              n.defer = true;
              n.type = "text/javascript";
              n.src = t + "/static/js/widget.js?config=" + JSON.stringify(a);
              c.appendChild(n);
            })(document, "https://app.engati.com", {
              bot_key: "d1d660980c6644c2",
              welcome_msg: true,
              branding_key: "default",
              server: "https://app.engati.com",
              e: "p"
            });
          `,
        }}
      /> */}
      <Footer />
      <Toaster />
    </div>
  );
};

export default ProtectedComponent;
