# Crawl discovery and page-signal repairs

## Why this change is needed

The article-rendering repair in PR #2 made blog content accessible, but the 15 October review found additional implementation gaps: a build-time sitemap lagged published content, archive links depended on browser rendering, case studies inherited the homepage canonical, service metadata missed real URL slugs, and existing navigation led to unavailable pages.

These changes address those remaining website defects. They do not claim a particular ranking improvement or indexing date.

## Changes

- Fetch published CMS inventory at request time for the blog archive and sitemap. Render article-card anchors in the initial archive response.
- Include case studies, the ERP service and restored content routes in the sitemap. Deduplicate URLs and omit modification dates that cannot be tied to the actual rendered page.
- Set article-specific case-study canonical and social metadata. Deliver breadcrumb and service/global structured data as literal JSON-LD in the initial HTML.
- Match service metadata to the real URL slugs. Use approved CMS copy for future service metadata fallbacks and return a real 404 when a record is missing.
- Give template service pages a meaningful main H1 and lower-level section headings while retaining the existing styles.
- Restore the industry index, four sector pages, four knowledge-base guides and the rapid application development service from the existing approved content.
- Correct the explicit UX/UI service link without changing unrelated slug generation. Point the contact page's consultation-agenda link to its existing process steps rather than an unavailable booking route.
- Select service-related guides by their existing published slugs rather than showing the same three latest posts for every service. Add those links to the four rewritten service pages.
- Link the existing Values and Why Burhani pages from the footer so they have discoverable incoming links in the initial HTML.
- Format publication labels in one explicit India timezone on server and browser, preventing the observed midnight-boundary hydration mismatch.
- Remove only unresolved Cookiebot DSR placeholder hrefs. Do not change configured destinations or consent controls. A real DSR destination still belongs in the consent-service configuration when provided.
- Align lint dependencies with the installed Next.js version, declare required peer dependencies, include JSX in lint coverage and preserve rendered copy while fixing the newly exposed entity/internal-link errors.

## Verification

Run these commands from the repository root:

```sh
npm ci
npm run lint
npm run test:seo
npm run build
npm run start -- -p 3329
```

With the production server running, use a second terminal:

```sh
node scripts/verify-seo.mjs http://127.0.0.1:3329
```

The read-only HTTP check compares sitemap routes with actual responses, canonicals, H1s, initial JSON-LD, archive article links, internal destinations and missing-record 404 behavior. The unit checks cover the timezone boundary and consent-placeholder guard. Verify desktop/mobile layouts and interactive FAQ behavior separately in a browser.

## Deployment and Search Console follow-up

1. Review and merge through the normal repository process, then verify the deployed site, not just the local build.
2. Confirm the sitemap and archive reflect published CMS inventory without another deployment. Confirm restored routes and case-study canonicals on production.
3. Run Google live checks and normal URL Inspection recrawl requests for the unresolved September exclusions, recording request acceptance separately from confirmed inclusion.
4. Reinspect crawl dates and selected canonicals after Google processes the new pages. Evaluate organic performance using complete dates after publication and repair; do not interpret old index decisions as a live-template failure.

Search Console processing and conversion measurement require follow-up after deployment.

## Framework references

- [Next.js 15 route caching controls](https://nextjs.org/docs/15/app/api-reference/file-conventions/route-segment-config)
- [Next.js JSON-LD delivery](https://nextjs.org/docs/15/app/guides/json-ld)
- [Hydration mismatch guidance](https://nextjs.org/docs/messages/react-hydration-error)
- [Cookiebot lifecycle events](https://support.cookiebot.com/hc/en-us/articles/360020661139-How-to-find-out-when-the-Cookiebot-script-has-loaded)
