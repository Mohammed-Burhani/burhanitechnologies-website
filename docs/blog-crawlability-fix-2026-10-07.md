# Blog crawlability and initial HTML repair

Date: 7 October 2026 (IST)  
Author: Akash Sharma <akash@content-whale.com>  
Repository: Mohammed-Burhani/burhanitechnologies-website  
Source baseline: `4b41eb9fb6441e75561ec83f6d86299db7364510`

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

The original `package.json` declared Next.js `^16.0.7`, while `package-lock.json` resolved Next.js `15.1.1` and omitted two already declared dependencies. A strict clean install failed with that mismatch.

A separate dependency commit pins Next.js `16.3.8` and synchronizes the npm lock. The lock includes the already declared `@phosphor-icons/react` and `react-google-recaptcha-v3` packages. Matching original direct dependency versions, including React `19.0.0` and Sanity `3.75.1`, are retained. Next.js remains within the originally declared major/range; the selected patch release includes the official September security fixes.

Deployment should use the committed npm lock with `npm ci`, followed by `npm run build` and the existing production start process. This repair updates the npm lock; it does not validate the repository's older Bun lock or change the hosting configuration.

## Validation

Validation uses a local production build and raw HTTP responses, rather than relying only on an interactive browser rendering. The final scoped push is checked for:

- A strict clean npm install and successful production build with the committed lock.
- Five representative published articles: `agile-software-development-steps`, `robotic-process-automation-for-sap`, `software-development-process-stages`, `types-of-software-maintenance` and `inventory-management-system-benefits`.
- All 152 normal text paragraphs from those five Sanity articles present in their initial HTML, exact article H1, one self-canonical, matching BlogPosting/BreadcrumbList data, actual team byline, article-specific social metadata and image, related links and contact CTAs.
- An unknown blog slug returning HTTP 404 with noindex, rather than an indexable generic blog shell.
- Generated robots output allowing `/_next/` while continuing to exclude `/api/` and `/admin/`.
- Existing desktop/mobile article content and layout retained. No new UI or CMS publishing workflow is introduced.

The existing repository-wide lint setup has an unresolved TypeScript configuration dependency. Focused syntax, undefined-name and React-hooks checks are used for the changed files; a full lint pass is not claimed.

## Production verification after deployment

The repository contains no confirmed production deployment workflow or hosting project linkage. A Git push records the source change; it does not by itself prove that the production server has deployed it.

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
- [Next.js 16.3.8 release](https://github.com/vercel/next.js/releases/tag/v16.3.8)
