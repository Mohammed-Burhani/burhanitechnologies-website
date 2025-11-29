"use client";

import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import ContactPageContent from "./ContactPageContent";

export default function ContactPageWrapper() {
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? ""}
    >
      <ContactPageContent />
    </GoogleReCaptchaProvider>
  );
}
