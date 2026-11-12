import test from "node:test";
import assert from "node:assert/strict";
import {
  ACCEPT_ALL,
  CONSENT_MAX_AGE_SECONDS,
  CONSENT_VERSION,
  REJECT_ALL,
  buildConsentCookie,
  consentCookieName,
  domainCandidates,
  googleAnalyticsCookieNames,
  parseConsent,
  readCookie,
} from "../src/lib/consent.js";

const NOW = Date.UTC(2026, 10, 12);
const encode = (record) => encodeURIComponent(JSON.stringify(record));
const valid = (overrides = {}) =>
  encode({ v: CONSENT_VERSION, t: NOW, analytics: true, marketing: false, ...overrides });

test("a saved choice round-trips through the cookie it builds", () => {
  for (const choices of [ACCEPT_ALL, REJECT_ALL, { analytics: true, marketing: false }]) {
    const cookie = buildConsentCookie(choices, { secure: false, now: NOW });
    const raw = readCookie(consentCookieName(false), cookie.split("; ")[0]);
    assert.deepEqual(
      { ...parseConsent(raw, NOW) },
      { analytics: choices.analytics, marketing: choices.marketing, savedAt: NOW },
    );
  }
});

test("non-boolean category values are stored as off", () => {
  const cookie = buildConsentCookie({ analytics: "yes", marketing: 1 }, { secure: false, now: NOW });
  const parsed = parseConsent(readCookie(consentCookieName(false), cookie.split("; ")[0]), NOW);
  assert.equal(parsed.analytics, false);
  assert.equal(parsed.marketing, false);
});

test("cookie attributes: host-only, site-wide path, SameSite=Lax, bounded lifetime", () => {
  const cookie = buildConsentCookie(ACCEPT_ALL, { secure: false, now: NOW });
  assert.match(cookie, /; Path=\//);
  assert.match(cookie, new RegExp(`; Max-Age=${CONSENT_MAX_AGE_SECONDS}(;|$)`));
  assert.match(cookie, /; SameSite=Lax/);
  assert.doesNotMatch(cookie, /Domain=/i);
  assert.doesNotMatch(cookie, /Secure/);
});

test("over HTTPS the cookie is Secure and uses the __Host- prefix", () => {
  const cookie = buildConsentCookie(ACCEPT_ALL, { secure: true, now: NOW });
  assert.ok(cookie.startsWith("__Host-bt_consent="));
  assert.match(cookie, /; Secure$/);
  assert.doesNotMatch(cookie, /Domain=/i);
});

test("missing, malformed, tampered or wrong-shaped records read as no choice", () => {
  const bad = [
    undefined,
    null,
    "",
    "not-json",
    "%E0%A4%A", // malformed percent-encoding
    encodeURIComponent("[]"),
    encodeURIComponent("null"),
    encodeURIComponent('"string"'),
    valid({ analytics: "true" }),
    valid({ marketing: 1 }),
    valid({ analytics: undefined }),
    valid({ t: "1" }),
    valid({ t: null }),
    valid({ v: undefined }),
  ];
  for (const raw of bad) assert.equal(parseConsent(raw, NOW), null, String(raw));
});

test("records from an older or newer policy version are ignored so visitors are re-asked", () => {
  assert.equal(parseConsent(valid({ v: CONSENT_VERSION - 1 }), NOW), null);
  assert.equal(parseConsent(valid({ v: CONSENT_VERSION + 1 }), NOW), null);
});

test("expired and future-dated records are ignored", () => {
  const maxAgeMs = CONSENT_MAX_AGE_SECONDS * 1000;
  assert.notEqual(parseConsent(valid({ t: NOW - maxAgeMs }), NOW), null);
  assert.equal(parseConsent(valid({ t: NOW - maxAgeMs - 1 }), NOW), null);
  assert.equal(parseConsent(valid({ t: NOW + 60 * 60 * 1000 }), NOW), null);
});

test("oversized values are rejected before parsing", () => {
  assert.equal(parseConsent(valid({ padding: "x".repeat(400) }), NOW), null);
});

test("a polluted __proto__ key cannot grant consent", () => {
  const raw = encodeURIComponent(
    `{"v":${CONSENT_VERSION},"t":${NOW},"analytics":false,"marketing":false,"__proto__":{"analytics":true}}`,
  );
  const parsed = parseConsent(raw, NOW);
  assert.equal(parsed.analytics, false);
  assert.equal(({}).analytics, undefined);
});

test("parsed records are immutable", () => {
  const parsed = parseConsent(valid(), NOW);
  assert.throws(() => {
    "use strict";
    parsed.marketing = true;
  }, TypeError);
});

test("readCookie finds the exact cookie name and nothing that merely contains it", () => {
  const header = "a=1; xbt_consent=bad; bt_consent=good; bt_consent_extra=bad2";
  assert.equal(readCookie("bt_consent", header), "good");
  assert.equal(readCookie("missing", header), null);
  assert.equal(readCookie("bt_consent", ""), null);
});

test("analytics cookie matching covers Google's names and no others", () => {
  const header = "_ga=1; _ga_3B1EB1YBXX=2; _gid=3; _gat_gtag_G_X=4; _gat=5; bt_consent=6; session_ga=7; _gax=8";
  assert.deepEqual(googleAnalyticsCookieNames(header), [
    "_ga",
    "_ga_3B1EB1YBXX",
    "_gid",
    "_gat_gtag_G_X",
    "_gat",
  ]);
  assert.deepEqual(googleAnalyticsCookieNames(""), []);
});

test("domain candidates cover the host and its parents, never bare TLDs, IPs or localhost", () => {
  assert.deepEqual(domainCandidates("www.burhanitechnologies.com"), [
    undefined,
    "www.burhanitechnologies.com",
    "burhanitechnologies.com",
  ]);
  assert.deepEqual(domainCandidates("burhanitechnologies.com"), [undefined, "burhanitechnologies.com"]);
  assert.deepEqual(domainCandidates("localhost"), [undefined]);
  assert.deepEqual(domainCandidates("127.0.0.1"), [undefined]);
});
