# Blog crawlability and initial HTML repair

Date: 7 October 2026 (IST)

Author: Akash Sharma <akash@content-whale.com>

Repository: Mohammed-Burhani/burhanitechnologies-website

Source baseline: `4b41eb9fb6441e75561ec83f6d86299db7364510`

Review workflow: submit `fix/blog-crawlability-2026-10-07` as a pull request for Mohammed's review. Merge to `main` and production deployment must wait for his confirmation.

## Problem and observed behavior

Two confirmed implementation problems affected the blog pages:

1. The live `robots.txt` contained `Disallow: /_next/`. This excluded the site's Next.js JavaScript, CSS and other public assets from crawling. A visitor's browser could load those resources, while a crawler following the rule could not. Google states that it will not render blocked JavaScript files.
2. The blog route returned its shared page shell without the article H1 or body in the initial HTML. `BlogPageClient.jsx` waited for a browser-side `useEffect` Sanity fetch before rendering the article and related posts. The published articles existed in Sanity and became visible in a browser, but the initial HTTP response did not contain their actual content.

These defects reinforced each other: article content depended on JavaScript, and the JavaScript resources were blocked for crawlers. Removing the robots rule alone would leave the article dependent on later browser rendering. The repair therefore addresses both the resource rule and the initial article HTML.

Current Search Console checks also found some articles with Google's canonical pointing to another article. The rendering defects are a plausible contributor; they do not prove the cause of Google's individual canonical decisions. This change does not claim immediate indexing, ranking improvement or a completed canonical correction.

## Changes

| File | Change and purpose |
| --- | --- |
| `src/app/robots.js` | Remove only the `/_next/` exclusion. Keep the `/api/` and `/admin/` exclusions, root allow rule and existing sitemap URL. |
| `src/sanity/utils/blogData.js` | Fetch the published Sanity article, including its Portable Text body, author and categories, on the server. Share the article snapshot through React cache; use 60-second revalidation. Fetch related posts on the server with the existing category-first/latest-post fallback. |
| `src/app/blog/[slug]/page.jsx` | Use the server article for the page, metadata and structured data. Pass complete article and related-post data into the presentation component. Return a real 404 for a missing article. Emit BlogPosting and BreadcrumbList JSON-LD directly in the HTML and escape `<` during serialization. |
| `src/app/blog/[slug]/BlogPageClient.jsx` | Remove the browser-only article fetch and loading gate. Render the supplied article immediately while retaining the existing interactive components, Portable Text rendering, layout, contents navigation, author card, related posts and contact CTAs. Remove the article hero's initially hidden animation state. |

The initial response now contains the article H1, body, author information, related article links and contact links. It also includes a self-canonical, article-specific Open Graph/Twitter metadata and JSON-LD. Structured data uses the actual CMS article, image and byline. `Burhani Technologies Team` is represented as an Organization rather than an invented individual; the publisher logo uses the existing `/BT-Logo.svg` asset.

No Sanity document, published article text, slug or asset is changed by this repair. The optional new author-profile route is excluded from this push.

## Dependency repair required for a reproducible build

The original `package.json` declared Next.js `^16.0.7`, while `package-lock.json` resolved Next.js `15.1.1` and omitted two already declared dependencies. The existing `next-sanity` `9.8.58` and its `@sanity/next-loader` dependency declare support for Next.js 14/15, rather than 16.

The Netlify PR preview confirmed that the host uses Node.js `20.9.0` and npm `10.1.0`. Its normal dependency installation rejected a Next.js 16 build with `ERESOLVE` because of those integration peer requirements. The earlier local production build passed, but the workstation's pre-existing npm `legacy-peer-deps=true` setting had allowed that unsupported dependency combination. That install was insufficient proof of compatibility with the host's normal peer resolution. The final isolated host-version checks explicitly disable both legacy peer resolution and force; the workstation's global settings are not changed.

The final dependency repair pins Next.js `15.5.27` and synchronizes the npm lock. This aligns the manifest with the original lock's Next.js 15 lineage and the existing Sanity integration. It deliberately replaces the incompatible declared Next.js 16 range, without introducing a Sanity Studio or hosting Node migration. The selected 15.5 patch release includes the official September security backports.

Normal host-version resolution also exposed the unused root `expo: latest` dependency, which pulled a React Native stack requiring a newer Node runtime and changed React independently of ReactDOM. Source import checks confirmed that the website and Studio do not use Expo; it is removed. The direct `@portabletext/react` dependency is pinned to `4.0.3`, which supports Node `20.9` and the existing React version. The case-study renderer uses its stable `value`/`components` API; blog rendering continues through the existing `next-sanity` renderer.

The lock includes the already declared `@phosphor-icons/react` and `react-google-recaptcha-v3` packages. `next-sanity` `9.8.58`, React/ReactDOM `19.0.0` and Sanity `3.75.1` are retained. Installation is validated with the host's Node/npm versions and normal peer resolution; no `--force` or `--legacy-peer-deps` bypass is introduced.

Deployment should use the committed npm lock with `npm ci`, followed by `npm run build` and the existing production start process. This repair updates the npm lock; it does not validate the repository's older Bun lock or change the hosting configuration.

## Validation

Final local host-version checks passed on 8 October 2026 (IST): normal installation on Node `20.9.0` / npm `10.1.0`, with `legacy-peer-deps=false` and `force=false`, followed by the Next.js `15.5.27` production build. No engine warnings were emitted. All five initial article responses preserved the 152 source paragraphs and the checks below passed. A real published healthcare case study also preserved all 19 nonempty text blocks across its four process sections with Portable Text `4.0.3` and the existing component mapping.

Validation uses a local production build and raw HTTP responses, rather than relying only on an interactive browser rendering. The final scoped push is checked for:

- A strict clean npm install and successful production build with the committed lock.
- Five representative published articles: `agile-software-development-steps`, `robotic-process-automation-for-sap`, `software-development-process-stages`, `types-of-software-maintenance` and `inventory-management-system-benefits`.
- All 152 normal text paragraphs from those five Sanity articles present in their initial HTML, exact article H1, one self-canonical, matching BlogPosting/BreadcrumbList data, actual team byline, article-specific social metadata and image, related links and contact CTAs.
- An unknown blog slug returning HTTP 404 with noindex, rather than an indexable generic blog shell.
- Generated robots output allowing `/_next/` while continuing to exclude `/api/` and `/admin/`.
- Existing desktop/mobile article content and layout retained. No new UI or CMS publishing workflow is introduced.

The existing repository-wide lint configuration reports an ESLint parser serialization diagnostic during the host-version build, which still exits successfully. Focused syntax, undefined-name and React-hooks checks passed for the changed files; a full repository lint pass is not claimed.

## Production verification after deployment

The GitHub pull request is connected to Netlify's `burhanitechnologies` project and triggers a deploy preview. That linkage was confirmed through the PR and deploy log. A successful PR preview verifies a separate review environment; it does not mean that `main` or the production website has been updated. Mohammed's review and confirmation are required before merge and production deployment.

After the production build is deployed:

1. Fetch the live `/robots.txt` and confirm the `/_next/` exclusion is absent.
2. Fetch the five live articles without executing browser JavaScript. Confirm the article H1/body, self-canonical, structured data and links are in the HTML response.
3. Check the pages normally on desktop and mobile, including their images, contents navigation, related links and CTAs. Verify an unknown slug returns 404.
4. Run Search Console's live URL test and confirm Google can load the article and public resources.
5. Only after those checks pass, request indexing for affected published URLs. Record request acceptance separately from confirmed indexing, and monitor Google's subsequent crawl/canonical decisions.

The unrelated missing manufacturing/finance industry routes and historical spam-subdomain URLs are outside this repair.

## Rollback

If a regression appears, revert the source repair commit with a normal Git revert and redeploy through the existing hosting process. The independent dependency commit can be reverted separately if required, but doing so restores the documented package/lock mismatch. Avoid rewriting shared branch history. Keep the original baseline available for comparison.

## References

- [Google: JavaScript rendering, blocked resources and server-side rendering](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics)
- [Next.js 15.5.27 release](https://github.com/vercel/next.js/releases/tag/v15.5.27)
