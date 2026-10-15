import test from "node:test";
import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { formatPublicationDate } from "../src/lib/publicationDate.js";
import { removeUnconfiguredDsrLink } from "../src/lib/cookiebotLinks.js";

test("publication date uses editorial India date across UTC midnight", () => {
  assert.equal(formatPublicationDate("2026-09-29T18:30:00.000Z"), "September 30, 2026");
  assert.equal(formatPublicationDate("2026-09-29T18:29:59.000Z", "short"), "Sep 29, 2026");
});

test("publication label is identical in different server and browser timezones", () => {
  const moduleUrl = new URL("../src/lib/publicationDate.js", import.meta.url).href;
  const source = `import {formatPublicationDate} from ${JSON.stringify(moduleUrl)}; process.stdout.write(formatPublicationDate('2026-09-29T18:30:00.000Z'));`;
  const labels = ["UTC", "Asia/Kolkata", "America/Los_Angeles"].map((TZ) =>
    execFileSync(process.execPath, ["--input-type=module", "-e", source], {
      env: { ...process.env, TZ }, encoding: "utf8", stdio: ["ignore", "pipe", "pipe"],
    })
  );
  assert.deepEqual(labels, Array(3).fill("September 30, 2026"));
});

test("missing or invalid publication dates do not break article rendering", () => {
  for (const value of [undefined, null, "", "invalid-date"]) {
    assert.equal(formatPublicationDate(value), "");
  }
});

function dsrLink(href) {
  const attributes = { href };
  return {
    attributes,
    getAttribute: (name) => attributes[name],
    removeAttribute: (name) => { delete attributes[name]; },
  };
}

test("unresolved Cookiebot DSR placeholders cannot become broken article links", () => {
  for (const href of ["[#DSR_FORM_URL#]", "/blog/[%23DSR_FORM_URL%23]"]) {
    const link = dsrLink(href);
    assert.equal(removeUnconfiguredDsrLink({ getElementById: () => link }), true);
    assert.equal(link.attributes.href, undefined);
  }
});

test("configured DSR links and absent consent dialogs are left intact", () => {
  const link = dsrLink("https://example.com/privacy/request");
  assert.equal(removeUnconfiguredDsrLink({ getElementById: () => link }), false);
  assert.equal(link.attributes.href, "https://example.com/privacy/request");
  assert.equal(removeUnconfiguredDsrLink({ getElementById: () => null }), false);
});
