const SLUG = "erp-implementation-services-for-healthcare-and-finance";
const BLOCK_KEY = "5422f4a76a7d";
const HEADINGS = [
  ["a7eb2846522c", "h2", "What ERP Really Does for You", "strong"],
  ["cc3698f8d440", "h2", "How ERP Has Changed: From Rigid to Ready", "strong"],
  ["7d42beecb19c", "h2", "Why Healthcare and Finance Need ERP", "strong"],
  ["f88893f99f3d", "h3", "In Healthcare", "underline"],
  ["1a3d9c7bc66e", "h3", "In Finance", "underline"],
  ["94aef94a8724", "h2", "The Power Move: ERP Meets DevOps", "strong"],
];

const sliceSpans = (children, start, end) => {
  let offset = 0;
  return children.flatMap((span) => {
    const spanStart = offset;
    offset += span.text.length;
    const from = Math.max(start, spanStart);
    const to = Math.min(end, offset);
    if (from >= to) return [];
    return from === spanStart && to === offset
      ? [span]
      : [{ ...span, text: span.text.slice(from - spanStart, to - spanStart) }];
  });
};

// This published article stores its six section labels inside one paragraph.
// Recognize only the observed slug, block, span keys, labels and decorations.
// Keep the source snapshot, inline marks and link annotations intact.
export const structureErpSectorsSections = (body, slug) => {
  if (slug !== SLUG || !Array.isArray(body) || body.length !== 1) return body;
  const block = body[0];
  if (block?._key !== BLOCK_KEY || block._type !== "block" ||
    block.style !== "normal" || block.listItem ||
    !Array.isArray(block.markDefs) || !Array.isArray(block.children) ||
    block.children.some((span) => span?._type !== "span" ||
      typeof span.text !== "string" || !Array.isArray(span.marks)) ||
    new Set(block.children.map((span) => span._key)).size !== block.children.length
  ) return body;

  let offset = 0;
  const positions = new Map(block.children.map((span) => {
    const start = offset;
    offset += span.text.length;
    return [span._key, { span, start, end: offset }];
  }));
  const text = block.children.map((span) => span.text).join("");
  const headings = HEADINGS.map(([key, style, label, mark]) => {
    const match = positions.get(key);
    if (!match || match.span.text !== label ||
      match.span.marks.length !== 1 || match.span.marks[0] !== mark ||
      text.slice(match.start - 2, match.start) !== "\n\n" ||
      text.slice(match.end, match.end + 2) !== "\n\n") return null;
    return { ...match, style };
  });
  if (headings.some((heading, index) => !heading ||
    (index > 0 && heading.start <= headings[index - 1]?.start)
  )) return body;

  const output = [];
  const addParagraphs = (start, end) => {
    const segment = text.slice(start, end);
    const paragraphs = /\S(?:[\s\S]*?\S)?(?=\n[\t ]*\n|$)/gu;
    for (const match of segment.matchAll(paragraphs)) {
      const from = start + match.index;
      const to = from + match[0].length;
      output.push({
        ...block,
        _key: `${BLOCK_KEY}-p-${from}`,
        children: sliceSpans(block.children, from, to),
      });
    }
  };
  let start = 0;
  for (const heading of headings) {
    addParagraphs(start, heading.start);
    output.push({
      ...block,
      _key: `${BLOCK_KEY}-heading-${heading.span._key}`,
      style: heading.style,
      children: [heading.span],
    });
    start = heading.end;
  }
  addParagraphs(start, text.length);
  return output;
};
