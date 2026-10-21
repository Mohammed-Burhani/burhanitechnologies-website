import { readFile, writeFile } from "node:fs/promises";

// Read-only acceptance audit against a running build. The optional second
// argument saves the exact findings so a later check cannot overwrite evidence.
const origin = new URL(process.argv[2] || "http://127.0.0.1:3329");
const output = process.argv[3];
const publicOrigin = "https://burhanitechnologies.com";
const manifest = JSON.parse(await readFile(new URL("./handoff-routes.json", import.meta.url), "utf8"));
const handoffPaths = [...manifest.routes, ...manifest.addedRoutes];
const excluded = new Set(manifest.excludedFromIndex);
const failures = [];
const warnings = [];
const fetched = new Map();

function check(condition, path, message) {
  if (!condition) failures.push({ path, message });
}

async function request(path) {
  if (!fetched.has(path)) {
    fetched.set(path, fetch(new URL(path, origin), {
      redirect: "manual",
      signal: AbortSignal.timeout(45000),
      // Inspect the blocking HTML metadata that a search crawler receives.
      headers: { "user-agent": "Googlebot" },
    }).then(async response => ({
      status: response.status, html: await response.text(), headers: Object.fromEntries(response.headers),
    })).catch(error => ({ status: 0, html: "", headers: {}, error: error.message })));
  }
  return fetched.get(path);
}

function decode(value = "") {
  return value.replace(/&#(?:x([\da-f]+)|(\d+));/gi, (_, hex, decimal) =>
    String.fromCodePoint(parseInt(hex || decimal, hex ? 16 : 10)))
    .replaceAll("&amp;", "&").replaceAll("&quot;", '"').replaceAll("&#39;", "'")
    .replaceAll("&apos;", "'").replaceAll("&lt;", "<").replaceAll("&gt;", ">").replaceAll("&nbsp;", " ");
}

function text(value = "") {
  return decode(value.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, " ")
    .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, " ").replace(/<[^>]+>/g, " "))
    .replace(/\s+/g, " ").trim();
}

function attributes(tag) {
  return Object.fromEntries([...tag.matchAll(/([\w:-]+)\s*=\s*(?:"([^"]*)"|'([^']*)')/g)]
    .map(([, key, double, single]) => [key.toLowerCase(), decode(double ?? single)]));
}

function metas(html, key, value) {
  return [...html.matchAll(/<meta\b[^>]*>/gi)].map(match => attributes(match[0]))
    .filter(meta => meta[key] === value).map(meta => meta.content || "");
}

function canonicals(html) {
  return [...html.matchAll(/<link\b[^>]*>/gi)].map(match => attributes(match[0]))
    .filter(link => link.rel === "canonical").map(link => link.href);
}

function isPageUrl(value, path) {
  try { return new URL(value).href === new URL(path, publicOrigin).href; }
  catch { return false; }
}

function links(html) {
  return [...html.matchAll(/<a\b[^>]*>/gi)].flatMap(match => {
    const href = attributes(match[0]).href;
    if (!href || /^(mailto:|tel:|javascript:|#)/i.test(href)) return [];
    try {
      const url = new URL(href, publicOrigin);
      return url.origin === publicOrigin ? [url.pathname] : [];
    } catch { return []; }
  });
}

function schemaNodes(html, path) {
  return [...html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)]
    .flatMap(match => {
      try {
        const value = JSON.parse(match[1]);
        return Array.isArray(value) ? value : value["@graph"] || [value];
      } catch (error) {
        failures.push({ path, message: `Invalid JSON-LD: ${error.message}` });
        return [];
      }
    });
}

function hasType(nodes, type) {
  return nodes.some(node => [node["@type"]].flat().includes(type));
}

const sitemap = await request("/sitemap.xml");
check(sitemap.status === 200, "/sitemap.xml", `Expected 200; got ${sitemap.status}`);
const sitemapUrls = [...sitemap.html.matchAll(/<loc>([^<]+)<\/loc>/g)].map(match => decode(match[1]));
const sitemapPaths = sitemapUrls.flatMap(value => {
  try {
    const url = new URL(value);
    check(url.origin === publicOrigin, "/sitemap.xml", `Unexpected URL origin: ${value}`);
    return [url.pathname];
  } catch { failures.push({ path: "/sitemap.xml", message: `Invalid URL: ${value}` }); return []; }
});
check(sitemapPaths.length > 0, "/sitemap.xml", "Sitemap is empty");
check(new Set(sitemapPaths).size === sitemapPaths.length, "/sitemap.xml", "Duplicate sitemap URLs");
for (const path of handoffPaths) {
  check(excluded.has(path) ? !sitemapPaths.includes(path) : sitemapPaths.includes(path), path,
    excluded.has(path) ? "Utility/error route must be absent from sitemap" : "Handoff route missing from sitemap");
}
for (const [, value] of sitemap.html.matchAll(/<lastmod>([^<]+)<\/lastmod>/g)) {
  const timestamp = new Date(value).getTime();
  check(Number.isFinite(timestamp) && timestamp <= Date.now() + 60000, "/sitemap.xml", `Invalid/future lastmod: ${value}`);
}

const paths = [...new Set([...handoffPaths, ...sitemapPaths])];
const pending = [...paths];
const pages = [];
await Promise.all(Array.from({ length: 5 }, async () => {
  while (pending.length) {
    const path = pending.shift();
    const page = await request(path);
    const expectedStatus = path === "/404" ? 404 : 200;
    check(page.status === expectedStatus, path, `Expected ${expectedStatus}; got ${page.status}${page.error ? ` (${page.error})` : ""}`);
    if (page.status !== expectedStatus) continue;
    const titleMatches = [...page.html.matchAll(/<title\b[^>]*>([\s\S]*?)<\/title>/gi)];
    const title = text(titleMatches[0]?.[1]);
    const descriptions = metas(page.html, "name", "description");
    const description = descriptions[0] || "";
    const headings = [...page.html.matchAll(/<h1\b[^>]*>([\s\S]*?)<\/h1>/gi)].map(match => text(match[1]));
    const robots = [...metas(page.html, "name", "robots"), ...metas(page.html, "name", "googlebot"), page.headers["x-robots-tag"] || ""].join(",");
    const isExcluded = excluded.has(path);
    check(isExcluded ? /\bnoindex\b/i.test(robots) : !/\bnoindex\b/i.test(robots), path,
      isExcluded ? "Utility/error route must be noindex" : "Indexable route has noindex");
    check(titleMatches.length === 1 && title.length > 5, path, "Expected one meaningful HTML title");
    check(descriptions.length === 1 && description.length > 20, path, "Expected one meaningful meta description");
    // A route that intentionally calls notFound() can emit Next's minimal
    // error shell to bots; the correct HTTP status and noindex are decisive.
    if (path !== "/404") check(headings.length === 1 && headings[0].length > 5 && headings[0] !== "Features", path, "Expected one meaningful H1");
    if (isExcluded) { pages.push({ path, status: page.status, excluded: true, title, description, links: links(page.html) }); continue; }
    const canonical = canonicals(page.html);
    check(canonical.length === 1 && isPageUrl(canonical[0], path), path, "Expected one exact self canonical");
    check(isPageUrl(metas(page.html, "property", "og:url")[0], path), path, "Open Graph URL must match canonical");
    check(metas(page.html, "property", "og:title")[0]?.length > 5, path, "Missing Open Graph title");
    check(metas(page.html, "property", "og:description")[0]?.length > 20, path, "Missing Open Graph description");
    check(metas(page.html, "name", "twitter:title")[0]?.length > 5, path, "Missing Twitter title");
    check(metas(page.html, "name", "twitter:description")[0]?.length > 20, path, "Missing Twitter description");
    if (path !== "/") {
      check(metas(page.html, "name", "twitter:title")[0] !== "Custom Software Development Company | Burhani Technologies", path,
        "Twitter metadata inherits the homepage title");
    }
    const data = schemaNodes(page.html, path);
    check(hasType(data, "Organization"), path, "Missing server-rendered Organization schema");
    if (/^\/(services|case-studies|industries|knowledge-base|authors)\//.test(path)) {
      check(hasType(data, "BreadcrumbList"), path, "Missing page breadcrumbs in initial JSON-LD");
    }
    if (path.startsWith("/blog/")) {
      check(/<article\b/.test(page.html), path, "Missing article in initial HTML");
      check(hasType(data, "BlogPosting"), path, "Missing BlogPosting schema");
    }
    if (path.startsWith("/services/")) check(hasType(data, "Service"), path, "Missing Service schema");
    if (text(page.html).length < 150) failures.push({ path, message: "Initial HTML lacks meaningful body text" });
    for (const faq of data.filter(node => node["@type"] === "FAQPage")) {
      for (const question of faq.mainEntity || []) {
        check(text(page.html).includes(text(question.name)), path, `FAQ schema question absent from HTML: ${question.name}`);
        check(text(page.html).includes(text(question.acceptedAnswer?.text)), path, `FAQ schema answer absent from HTML: ${question.name}`);
      }
    }
    // Keep exact editorial copy. Character counts are evidence for a review,
    // not a universal search-engine limit or an automatic shortening rule.
    pages.push({ path, status: page.status, title, titleCharacters: title.length, description, descriptionCharacters: description.length, h1: headings[0], schemaTypes: data.map(node => node["@type"]), links: links(page.html) });
  }
}));

for (const field of ["title", "description"]) {
  const grouped = new Map();
  for (const page of pages.filter(page => !page.excluded)) {
    const value = page[field];
    if (!grouped.has(value)) grouped.set(value, []);
    grouped.get(value).push(page.path);
  }
  for (const routes of grouped.values()) if (routes.length > 1) failures.push({ path: routes.join(", "), message: `Duplicate ${field}` });
}

const destinations = new Set(pages.flatMap(page => page.links));
const broken = [];
for (const path of destinations) {
  const page = await request(path);
  if (page.status >= 400 || page.status === 0) broken.push({ path, status: page.status, referrers: pages.filter(page => page.links.includes(path)).map(page => page.path) });
}
for (const failure of broken) failures.push({ path: failure.path, message: `Broken internal link (${failure.status})`, referrers: failure.referrers });
const orphans = sitemapPaths.filter(path => path !== "/" && !destinations.has(path));
for (const path of orphans) failures.push({ path, message: "No incoming initial-HTML link from checked pages" });
const archive = pages.find(page => page.path === "/blog");
const articlePaths = sitemapPaths.filter(path => path.startsWith("/blog/"));
for (const path of articlePaths) check(archive?.links.includes(path), path, "Published article missing from server-rendered blog archive");

for (const path of ["/blog/seo-test-missing-article", "/services/seo-test-missing-service", "/case-studies/seo-test-missing-case", "/case-studies/constructor", "/case-studies/toString", "/case-studies/__proto__", "/industries/seo-test-missing-industry", "/knowledge-base/seo-test-missing-guide", "/authors/seo-test-missing-author"]) {
  const page = await request(path);
  check(page.status === 404, path, `Missing content must return 404; got ${page.status}`);
  check(metas(page.html, "name", "robots").some(value => /\bnoindex\b/.test(value)), path, "Missing route must be noindex");
}
const robots = await request("/robots.txt");
check(robots.status === 200, "/robots.txt", "Expected successful robots.txt");
check(!/Disallow:\s*\/_next\//i.test(robots.html), "/robots.txt", "Required rendering assets are blocked");
check(robots.html.includes(`Sitemap: ${publicOrigin}/sitemap.xml`), "/robots.txt", "Missing canonical sitemap reference");
const renderingAssets = new Set();
for (const page of pages) {
  const response = await request(page.path);
  for (const [, asset] of response.html.matchAll(/<(?:script|link)\b[^>]*(?:src|href)="(\/_next\/static\/[^"]+)"/gi)) {
    renderingAssets.add(decode(asset));
  }
}
const pendingAssets = [...renderingAssets];
await Promise.all(Array.from({ length: 5 }, async () => {
  while (pendingAssets.length) {
    const path = pendingAssets.shift();
    try {
      const response = await fetch(new URL(path, origin), { method: "HEAD", signal: AbortSignal.timeout(15000) });
      check(response.status === 200, path, `Required rendering asset must resolve; got ${response.status}`);
    } catch (error) { failures.push({ path, message: `Required rendering asset failed: ${error.message}` }); }
  }
}));

const report = {
  checkedAt: new Date().toISOString(), origin: origin.href,
  result: failures.length ? "FAIL" : "PASS",
  handoffRoutes: manifest.routes.length, addedRoutes: manifest.addedRoutes.length,
  sitemapURLs: sitemapPaths.length, pagesChecked: pages.length,
  publishedArticles: articlePaths.length, internalDestinationsChecked: destinations.size,
  renderingAssetsChecked: renderingAssets.size,
  failures, warnings, pages: pages.sort((a, b) => a.path.localeCompare(b.path)),
};
if (output) await writeFile(output, `${JSON.stringify(report, null, 2)}\n`, "utf8");
console.log(JSON.stringify({ ...report, pages: undefined }, null, 2));
process.exitCode = failures.length ? 1 : 0;
