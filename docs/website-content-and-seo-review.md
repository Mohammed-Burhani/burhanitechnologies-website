# Website content and SEO update

## What changes

The page review found 15 missing routes in the original 49-page handoff and 24 pages with incomplete or different content. The additional rapid application development route was also missing. This branch implements those content gaps and improves the surrounding navigation, service explanations and presentation.

- Restores the missing industry pages, knowledge-base guides, author pages, consultation page and utility routes.
- Replaces generic service content with specific scope, use cases, delivery steps, FAQs and relevant next actions. Clarifies the distinction between workflow automation, robotic process automation, system integration and broader process improvement.
- Restores the company pages and six detailed case studies. The case-study hub retains those six featured systems and also displays additional published cases without requiring a rebuild.
- Adds a grouped mega menu covering all 18 services, company and industry dropdowns, and a mobile navigation dialog with keyboard focus management. An opaque header maintains legibility while scrolling.
- Rebuilds the 14 smaller service pages with illustrated headers, sticky section navigation, numbered use cases, expandable scope and delivery sections, and relevant project panels. Refines the four larger service pages by removing duplicate section padding and balancing process grids and illustrations.
- Corrects the service hub's uneven decision cards and oversized facts section. Improves homepage facts, contact email wrapping, author-page next actions, floating controls and the footer's office directions panel.
- Replaces random imagery with original lightweight process illustrations and a branded social preview. Replaces unsupported testimonial content with project evidence.
- Adds matching case-study illustrations to homepage project cards, service-hub cards, industry headers, case-study pages and relevant internal service panels. Responsive image sizing, descriptive alternative text and lazy loading support accessible, efficient rendering; labels identify the images as illustrations.
- Adds restrained scroll fades and hover feedback. Motion respects reduced-motion preferences, and content remains visible when JavaScript is unavailable.
- Consolidates technology stacks beneath one heading with local logos and three or four continuous rows moving in alternating directions. A pause control, hover/focus pausing and static reduced-motion/JavaScript-disabled layouts keep the technology list usable. Existing technology labels are retained; general categories use original symbols.
- Keeps the current contact form and published articles. Adds contextual links from relevant articles to the services they explain.

## Search and rendering behavior

The blog archive and sitemap use current published content. Article content, navigation and FAQs are available in the initial HTML. Metadata, canonical links and structured data correspond to the page being served. Missing content returns a real 404, including unexpected case-study identifiers. Article display dates use a consistent India time zone.

Build configuration and lint dependencies are aligned with the installed framework. A narrow consent-link guard prevents unresolved placeholder links from becoming broken destinations, and the known injected analytics frame receives an accessible title when missing. Configured consent destinations and tracking behavior are preserved.

Service and industry headings describe the actual offering. No traffic or ranking increase is guaranteed by these changes.

## Editing boundary

The restored service and case-study routes are maintained in the website source. Updating a CMS record with the same slug does not replace that source content. Additional service and case-study slugs retain their CMS routes. The blog remains CMS-managed. The archive, sitemap and additional case inventory require the CMS to be available at request time.

## Before deployment

Privacy and terms pages contain explicit review notices. They are excluded from the sitemap and use `noindex`, but they would still be publicly accessible after deployment. The owner must review and finalize them before release; `noindex` does not make a page private.

The existing business-enquiry form and separate career-enquiry email link are retained. No dedicated careers route has been introduced.

## Validation

The production build and five SEO regression tests pass. The route audit covers 100 pages, 96 sitemap URLs, 50 published articles, 98 internal destinations and 53 rendering assets. The 50 content routes were reviewed across desktop and mobile, with additional tablet and 320px reflow checks. Corrected layouts have no horizontal overflow or broken images in the checked viewports. All 36 navigation interaction checks pass; sampled accessibility scans are clear after the final contrast fixes.

Scroll effects run with the normal motion preference and stay disabled with reduced motion. Content and native service disclosures remain available without JavaScript. Source comparisons confirm the service-layout changes retain the approved copy and links.

The technology carousel passes 109 targeted checks covering original technology labels, local SVG loading, alternating movement, matching loop copies, pause/resume controls, keyboard and hover behaviour, and static fallbacks. Checks include desktop, tablet, 390px and 320px layouts; sampled accessibility scans report no violations.

These checks verify the local build. Production indexing, traffic and real-user performance require measurement after an approved deployment.
