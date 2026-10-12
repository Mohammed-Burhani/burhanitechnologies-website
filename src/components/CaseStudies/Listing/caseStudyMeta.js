import {
  Bank,
  Briefcase,
  Factory,
  Heartbeat,
  Ticket,
  TShirt,
} from "@phosphor-icons/react/dist/ssr";

// Same glyphs the home page "Sectors" section uses, so an industry reads the
// same everywhere on the site. Order matters: apparel is checked before the
// generic manufacturing match because "Apparel Manufacturing" contains both.
const INDUSTRY_ICONS = [
  { match: /apparel|garment|textile/i, icon: TShirt },
  { match: /health|medical|clinic/i, icon: Heartbeat },
  { match: /manufactur|warehous|inventory/i, icon: Factory },
  { match: /financ|lending|loan|bank/i, icon: Bank },
  { match: /event|exhibition/i, icon: Ticket },
];

export const industryIcon = (industry) => {
  if (!industry) return Briefcase;
  const hit = INDUSTRY_ICONS.find((entry) => entry.match.test(industry));
  return hit ? hit.icon : Briefcase;
};

// Shared easing, same curve as components/contact/Reveal.jsx.
export const EASE_CLASS = "ease-[cubic-bezier(0.32,0.72,0,1)]";

/**
 * Plans the desktop (12 column) layout for the listing grid so it never ends
 * on an orphaned cell: rows alternate between two cards (7/5, then 5/7) and
 * three equal cards (4/4/4). Returns one `lg:col-span-*` class per card.
 */
export const planGridSpans = (count) => {
  const rows = [];
  let left = count;
  let index = 0;

  while (left > 0) {
    let take = index % 2 === 0 ? 2 : 3;
    if (left <= 3) {
      take = left;
    } else if (left - take === 1) {
      take = take === 3 ? 2 : 3;
    }
    rows.push(take);
    left -= take;
    index += 1;
  }

  const spans = [];
  let pairRows = 0;
  rows.forEach((size) => {
    if (size === 1) {
      spans.push("lg:col-span-12");
    } else if (size === 2) {
      const flip = pairRows % 2 === 1;
      spans.push(flip ? "lg:col-span-5" : "lg:col-span-7");
      spans.push(flip ? "lg:col-span-7" : "lg:col-span-5");
      pairRows += 1;
    } else {
      spans.push("lg:col-span-4", "lg:col-span-4", "lg:col-span-4");
    }
  });
  return spans;
};
