"use client";

import { useEffect } from "react";
import Script from "next/script";

/*
 * Third-party trackers. Each one is mounted only while its consent category is
 * granted, so nothing here is fetched or executed before the visitor opts in.
 */

const GA_ID = "G-3B1EB1YBXX";

export function AnalyticsTracker() {
  return (
    <>
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}
      </Script>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
    </>
  );
}

export function MarketingTracker() {
  useEffect(() => {
    const titleMarketingFrame = (element) => {
      if (!element.matches("iframe#mrktFrame__") || element.getAttribute("title")?.trim()) return;
      try {
        const source = new URL(element.getAttribute("src") || "", document.baseURI);
        if (source.hostname === "mkmpages.burhanitechnologies.com") {
          element.setAttribute("title", "Burhani Technologies marketing analytics");
        }
      } catch {
        // Ignore an incomplete source while the third-party script creates the frame.
      }
    };

    const existingFrame = document.getElementById("mrktFrame__");
    if (existingFrame) titleMarketingFrame(existingFrame);

    const observer = new MutationObserver((records) => {
      for (const record of records) {
        if (record.type === "attributes") {
          titleMarketingFrame(record.target);
          continue;
        }
        for (const node of record.addedNodes) {
          if (node.nodeType !== Node.ELEMENT_NODE) continue;
          titleMarketingFrame(node);
          node.querySelectorAll("iframe#mrktFrame__").forEach(titleMarketingFrame);
        }
      }
    });
    observer.observe(document.documentElement, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["id", "src", "title"],
    });
    return () => observer.disconnect();
  }, []);

  return (
    <Script id="marketing-manager-tracking" strategy="afterInteractive">
      {`!function () { var e, t; e = document.createElement("script"), e.type = "text/javascript",e.async = !0, e.defer = !0, e.src ="https://mkmpages.burhanitechnologies.com/6666?isnew=1&pdn=mkmpages.burhanitechnologies.com&v=" + String((new Date).getMonth() + 1) + String((new Date).getFullYear()) +String(Math.round(parseInt((new Date).getDate() / 7), 0) + 1) +"&encsid=71DEnjHXXHQ,&enccid=xGvuWINf1Fg,&wsid=NzM0&dHJhY2tpbmdVcmw=2PtuCvDuCGT5LwTmxa5wjl35YCAFpwehX6VzxWewIgs,", t =document.getElementsByTagName("head")[0], t.appendChild(e, t) }();`}
    </Script>
  );
}
