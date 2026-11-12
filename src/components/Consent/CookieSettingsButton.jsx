"use client";

import { openCookiePreferences } from "@/lib/consent";

export default function CookieSettingsButton({ className }) {
  return (
    <button type="button" onClick={openCookiePreferences} className={className}>
      Cookie settings
    </button>
  );
}
