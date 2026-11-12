/*
 * First-party cookie consent: storage, validation and a tiny store.
 *
 * Invariants
 *  - Optional categories (analytics, marketing) are off unless a valid, unexpired
 *    consent record of the current version says otherwise. Anything malformed,
 *    oversized, expired, from the future or from an older version reads as "no choice".
 *  - The record holds only booleans and a timestamp. No identifiers, no personal data.
 *  - The cookie is host-only (no Domain). Over HTTPS it carries the __Host- prefix,
 *    which browsers only accept as Secure + Path=/ + host-only, so a sibling
 *    subdomain cannot plant or overwrite it.
 *  - It cannot be HttpOnly because the client reads it to gate scripts. It holds
 *    nothing that needs protecting from script.
 */

export const CONSENT_VERSION = 1; // bump when categories or trackers change to re-ask everyone
export const CONSENT_MAX_AGE_SECONDS = 60 * 60 * 24 * 180;
export const OPEN_PREFERENCES_EVENT = "bt:open-cookie-preferences";

const COOKIE_BASE_NAME = "bt_consent";
const MAX_RAW_LENGTH = 256;
const CLOCK_SKEW_MS = 5 * 60 * 1000;
const GOOGLE_ANALYTICS_COOKIE = /^(_ga|_gid|_gat)(_[A-Za-z0-9_-]+)?$/;

export const consentCookieName = (secure) =>
  secure ? `__Host-${COOKIE_BASE_NAME}` : COOKIE_BASE_NAME;

export const CATEGORIES = [
  {
    id: "necessary",
    label: "Strictly necessary",
    locked: true,
    description:
      "Remember your cookie choice and keep the contact form protected from spam with Google reCAPTCHA, which loads only on the contact form. The site cannot work safely without these.",
  },
  {
    id: "analytics",
    label: "Analytics",
    description:
      "Google Analytics counts visits and shows which pages are read, so we can improve them. It sets the cookies _ga and _ga_*.",
  },
  {
    id: "marketing",
    label: "Marketing",
    description:
      "Our marketing platform (Marketing Manager, served from mkmpages.burhanitechnologies.com) records page visits so we can measure campaigns and follow up on enquiries.",
  },
];

export const REJECT_ALL = Object.freeze({ analytics: false, marketing: false });
export const ACCEPT_ALL = Object.freeze({ analytics: true, marketing: true });

export function parseConsent(raw, now = Date.now()) {
  if (typeof raw !== "string" || raw.length === 0 || raw.length > MAX_RAW_LENGTH) return null;

  let data;
  try {
    data = JSON.parse(decodeURIComponent(raw));
  } catch {
    return null;
  }
  if (data === null || typeof data !== "object" || Array.isArray(data)) return null;

  const { v, t, analytics, marketing } = data;
  if (v !== CONSENT_VERSION) return null;
  if (typeof t !== "number" || !Number.isFinite(t)) return null;
  if (t > now + CLOCK_SKEW_MS || now - t > CONSENT_MAX_AGE_SECONDS * 1000) return null;
  if (typeof analytics !== "boolean" || typeof marketing !== "boolean") return null;

  return Object.freeze({ analytics, marketing, savedAt: t });
}

export function buildConsentCookie(choices, { secure, now = Date.now() }) {
  const value = encodeURIComponent(
    JSON.stringify({
      v: CONSENT_VERSION,
      t: now,
      analytics: choices.analytics === true,
      marketing: choices.marketing === true,
    }),
  );
  const attributes = ["Path=/", `Max-Age=${CONSENT_MAX_AGE_SECONDS}`, "SameSite=Lax"];
  if (secure) attributes.push("Secure");
  return `${consentCookieName(secure)}=${value}; ${attributes.join("; ")}`;
}

export function readCookie(name, cookieString) {
  if (!cookieString) return null;
  for (const part of cookieString.split(";")) {
    const index = part.indexOf("=");
    if (index === -1) continue;
    if (part.slice(0, index).trim() === name) return part.slice(index + 1).trim();
  }
  return null;
}

// Host-only first, then the host and each parent down to the registrable domain,
// because analytics cookies are usually written on the parent domain.
export function domainCandidates(hostname) {
  const candidates = [undefined];
  const parts = hostname.split(".");
  if (parts.length < 2 || /^\d{1,3}(\.\d{1,3}){3}$/.test(hostname)) return candidates;
  for (let i = 0; i <= parts.length - 2; i += 1) candidates.push(parts.slice(i).join("."));
  return candidates;
}

export function googleAnalyticsCookieNames(cookieString) {
  return (cookieString || "")
    .split(";")
    .map((part) => part.split("=")[0].trim())
    .filter((name) => GOOGLE_ANALYTICS_COOKIE.test(name));
}

/* ---------------------------- browser-only store ---------------------------- */

const listeners = new Set();
let cache = { raw: null, value: null };
let sessionFallback = null; // keeps the choice for this page session if cookies are blocked

const isSecure = () => window.location.protocol === "https:";

export function getConsent() {
  if (typeof document === "undefined") return null;
  const raw = readCookie(consentCookieName(isSecure()), document.cookie);
  if (raw !== cache.raw) cache = { raw, value: parseConsent(raw) };
  return cache.value ?? sessionFallback;
}

export function subscribe(listener) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function saveConsent(choices) {
  const now = Date.now();
  document.cookie = buildConsentCookie(choices, { secure: isSecure(), now });
  sessionFallback = Object.freeze({
    analytics: choices.analytics === true,
    marketing: choices.marketing === true,
    savedAt: now,
  });
  listeners.forEach((listener) => listener());
}

export function clearGoogleAnalyticsCookies() {
  const { hostname } = window.location;
  const secure = isSecure() ? "; Secure" : "";
  for (const name of googleAnalyticsCookieNames(document.cookie)) {
    for (const domain of domainCandidates(hostname)) {
      const scope = domain ? `; Domain=${domain}` : "";
      document.cookie = `${name}=; Path=/${scope}; Max-Age=0; SameSite=Lax${secure}`;
    }
  }
}

export function openCookiePreferences() {
  window.dispatchEvent(new Event(OPEN_PREFERENCES_EVENT));
}
