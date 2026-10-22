const SLUG = "legacy-modernization";
const WORKSHEET_KEY = "worksheet-legacy-modernization-routes";
const HEADERS = ["Route", "Fits when", "Evidence to check", "Main risk"];
const ROWS = [
  ["Rehost", "Code is sound, platform is ageing", "Stable behaviour, few defects", "Same limits, new location"],
  ["Replatform", "Light changes cut running cost", "Database or runtime can change alone", "Hidden dependencies"],
  ["Refactor", "Code is hard to change or test", "Low test coverage, unclear modules", "Slow progress"],
  ["Rearchitect", "Structure blocks new features", "Monolith slows every release", "Highest effort"],
  ["Rebuild", "Old code cannot carry the roadmap", "Source is lost or unmaintainable", "Long run without value"],
  ["Replace", "A product covers the function", "Process is standard, data extractable", "Fit gaps found late"],
];

const isObservedBlock = (block, index) => {
  const sourceKey = String(8 + index).padStart(4, "0");
  const isHeader = index < HEADERS.length;
  const column = isHeader ? index : (index - HEADERS.length) % HEADERS.length;
  const row = Math.floor((index - HEADERS.length) / HEADERS.length);
  const texts = isHeader ? [HEADERS[column]] : [HEADERS[column], ": ", ROWS[row][column]];
  const style = !isHeader && column === 0 ? "h3" : "normal";

  return block?._key === `b${sourceKey}` && block._type === "block" &&
    block.style === style && !block.listItem &&
    Array.isArray(block.markDefs) && block.markDefs.length === 0 &&
    Array.isArray(block.children) && block.children.length === texts.length &&
    block.children.every((span, spanIndex) =>
      span?._key === `s${sourceKey}_${String(spanIndex).padStart(3, "0")}` &&
      span._type === "span" && span.text === texts[spanIndex] &&
      Array.isArray(span.marks) && (spanIndex === 0
        ? span.marks.length === 1 && span.marks[0] === "strong"
        : span.marks.length === 0));
};

// Recover only this observed six-route comparison. Reuse each source block
// unchanged so its wording, spans, marks and existing heading anchors survive.
export const presentLegacyModernizationArticle = (body, slug) => {
  if (slug !== SLUG || !Array.isArray(body) ||
    body.some((block) => block?._key === WORKSHEET_KEY)) return body;

  const start = body.findIndex((block) => block?._key === "b0008");
  if (start < 0) return body;
  const count = HEADERS.length * (ROWS.length + 1);
  const blocks = body.slice(start, start + count);
  if (blocks.length !== count || blocks.some((block, index) =>
    !isObservedBlock(block, index) ||
    body.filter((candidate) => candidate?._key === block._key).length !== 1
  )) return body;

  const rows = ROWS.map((_, row) => {
    const index = HEADERS.length * (row + 1);
    return { heading: blocks[index], cells: blocks.slice(index + 1, index + HEADERS.length) };
  });

  return [
    ...body.slice(0, start),
    {
      _type: "articleWorksheet",
      _key: WORKSHEET_KEY,
      label: "Legacy modernization route comparison",
      headers: blocks.slice(0, HEADERS.length),
      rows,
    },
    ...body.slice(start + count),
  ];
};
