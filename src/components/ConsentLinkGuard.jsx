"use client";

import { useEffect } from "react";
import { removeUnconfiguredDsrLink } from "@/lib/cookiebotLinks";

export default function ConsentLinkGuard() {
  useEffect(() => {
    const guard = () => removeUnconfiguredDsrLink(document);
    const events = ["CookiebotOnDialogDisplay", "CookiebotOnLoad"];
    guard();
    events.forEach((event) => window.addEventListener(event, guard));
    return () => events.forEach((event) => window.removeEventListener(event, guard));
  }, []);

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

  return null;
}
