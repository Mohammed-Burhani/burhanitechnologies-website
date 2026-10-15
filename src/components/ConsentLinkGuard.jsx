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

  return null;
}
