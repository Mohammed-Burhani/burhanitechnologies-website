import assert from "node:assert/strict";

// Read-only acceptance check against a running production build.
const origin = new URL(process.argv[2] || "http://127.0.0.1:3329");
const publicOrigin = "https://burhanitechnologies.com";
const fetched = new Map();

async function request(path) {
  if (!fetched.has(path)) {
    fetched.set(path, fetch(new URL(path, origin), { redirect: "manual" }).then(async (response) => ({
      status: response.status, html: await response.text(), headers: Object.fromEntries(response.headers),
    })));
  }
  return fetched.get(path);
}

function links(html) {
  return [...html.matchAll(/<a\b[^>]*\bhref="([^"]+)"/gi)].flatMap((match) => {
    const href = match[1].replaceAll("&amp;", "&");
    if (!href || /^(mailto:|tel:|javascript:|#)/i.test(href)) return [];
    const url = new URL(href, publicOrigin);
    return url.origin === publicOrigin ? [url.pathname] : [];
  });
}

function schemas(html) {
  return [...html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)]
    .map((match) => JSON.parse(match[1]));
}

const sitemap = await request("/sitemap.xml");
assert.equal(sitemap.status, 200, "sitemap must respond successfully");
const paths = [...sitemap.html.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => new URL(match[1]).pathname);
assert.ok(paths.length, "sitemap cannot be empty");
assert.equal(new Set(paths).size, paths.length, "sitemap URLs must be unique");

const pending = [...paths];
const pages = [];
await Promise.all(Array.from({ length: 5 }, async () => {
  while (pending.length) {
    const path = pending.shift();
    const page = await request(path);
    assert.equal(page.status, 200, `${path}: sitemap must not list unavailable routes`);
    const canonical = page.html.match(/<link\b[^>]*rel="canonical"[^>]*href="([^"]+)"/i)?.[1];
    assert.ok(canonical, `${path}: canonical present`);
    assert.equal(new URL(canonical).href, new URL(path, publicOrigin).href, `${path}: exact self canonical`);
    const data = schemas(page.html);
    assert.ok(data.some((item) => item["@type"] === "Organization"), `${path}: server-delivered organization schema`);
    if (/^\/(blog|services|case-studies|industries|knowledge-base)\//.test(path)) {
      assert.equal([...page.html.matchAll(/<h1\b/gi)].length, 1, `${path}: one meaningful H1`);
    }
    if (path.startsWith("/blog/")) {
      assert.ok(/<article\b/.test(page.html), `${path}: article in initial HTML`);
      assert.ok(data.some((item) => item["@type"] === "BlogPosting"), `${path}: article schema`);
    }
    if (path.startsWith("/services/")) {
      assert.ok(!/<title>Services \| Burhani Technologies<\/title>/.test(page.html), `${path}: specific title`);
      assert.ok(!/<h1\b[^>]*>Features<\/h1>/.test(page.html), `${path}: service title rather than section label`);
    }
    pages.push({ path, status: page.status, links: links(page.html) });
  }
}));

const articlePaths = paths.filter((path) => path.startsWith("/blog/"));
const archive = await request("/blog");
const archiveLinks = new Set(links(archive.html));
articlePaths.forEach((path) => assert.ok(archiveLinks.has(path), `${path}: archive link in initial HTML`));

const destinations = new Set(pages.flatMap((page) => page.links));
const broken = [];
for (const path of destinations) {
  const response = await request(path);
  if (response.status >= 400) broken.push({ path, status: response.status, referringPages: pages.filter((page) => page.links.includes(path)).map((page) => page.path) });
}
assert.deepEqual(broken, [], "internal content links must resolve");
const unlinkedSitemapPaths = paths.filter((path) => path !== "/" && !destinations.has(path));
assert.deepEqual(unlinkedSitemapPaths, [], "all sitemap content must have an incoming initial-HTML link");

const missing = ["/blog/seo-test-missing-article", "/services/seo-test-missing-service", "/case-studies/seo-test-missing-case", "/industries/seo-test-missing-industry", "/knowledge-base/seo-test-missing-guide"];
for (const path of missing) {
  const response = await request(path);
  assert.equal(response.status, 404, `${path}: missing content must be a real 404`);
  assert.ok(/name="robots" content="noindex"/.test(response.html), `${path}: missing content not indexable`);
}

const robots = await request("/robots.txt");
assert.equal(robots.status, 200);
assert.ok(!/Disallow:\s*\/_next\//.test(robots.html), "public rendering resources must remain crawlable");
const contact = await request("/contact");
assert.ok(contact.html.includes('href="#consultation-agenda"') && contact.html.includes('id="consultation-agenda"'), "consultation agenda links to existing process steps");

console.log(JSON.stringify({
  checkedAt: new Date().toISOString(), origin: origin.href,
  sitemapURLs: paths.length, articles: articlePaths.length,
  archiveArticlesInInitialHTML: articlePaths.length,
  selfCanonicals: pages.length, initialSchemaPages: pages.length,
  internalDestinationsChecked: destinations.size, brokenInternalDestinations: broken.length,
  unlinkedSitemapPaths,
  missingRoutesReturn404: missing.length,
  contextualServiceArticleLinks: pages.filter((page) => page.path.startsWith("/services/")).reduce((count, page) => count + page.links.filter((path) => path.startsWith("/blog/")).length, 0),
}, null, 2));
