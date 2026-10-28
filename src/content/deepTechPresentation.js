const SLUG = "indias-deep-tech-revolution-why-usd3-billion-in-2025-signals-a-bigger-shift";
const BLOCK_KEY = "9d6448586fd6";
const PARAGRAPH_KEY = "f735ea33e6c7";
const HEADING_KEY = "6deff69c04be";
const HEADING_BLOCK_KEY = `${BLOCK_KEY}-heading-${HEADING_KEY}`;
const PARAGRAPH_TEXT = "\nThat difference fundamentally changes how these companies need to be funded and developed.\n\n";
const HEADING_TEXT = "Why Is Deep Tech Gaining Momentum in India?";

// This exact CMS block stores the next section heading after its paragraph.
// Split only the observed spans, retaining their full text and inline marks.
export const presentDeepTechArticle = (body, slug) => {
  if (slug !== SLUG || !Array.isArray(body)) return body;
  const matches = body.filter((block) => block?._key === BLOCK_KEY);
  if (matches.length !== 1 || body.some((block) => block?._key === HEADING_BLOCK_KEY)) return body;
  const block = matches[0];
  if (block._type !== "block" || block.style !== "normal" || block.listItem ||
    !Array.isArray(block.markDefs) || block.markDefs.length !== 0 ||
    !Array.isArray(block.children) || block.children.length !== 2) return body;
  const [paragraph, heading] = block.children;
  if (paragraph?._type !== "span" || paragraph._key !== PARAGRAPH_KEY ||
    paragraph.text !== PARAGRAPH_TEXT || !Array.isArray(paragraph.marks) ||
    paragraph.marks.length !== 0 || heading?._type !== "span" ||
    heading._key !== HEADING_KEY || heading.text !== HEADING_TEXT ||
    !Array.isArray(heading.marks) || heading.marks.length !== 1 ||
    heading.marks[0] !== "strong") return body;

  return body.flatMap((candidate) => candidate === block ? [
    { ...block, children: [paragraph] },
    { ...block, _key: HEADING_BLOCK_KEY, style: "h2", children: [heading] },
  ] : [candidate]);
};
