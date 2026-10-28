const SLUG = "hire-dedicated-developers";
const HEADERS = ["Term", "Dedicated developers", "Fixed-scope project"];
const KEYS = Array.from({ length: 24 }, (_, index) =>
  `b${String(index + 15).padStart(4, "0")}`
);

const isTextBlock = (block, style) =>
  block?._type === "block" &&
  block.style === style &&
  !block.listItem &&
  Array.isArray(block.markDefs) &&
  Array.isArray(block.children) &&
  block.children.length > 0 &&
  block.children.every((span) =>
    span?._type === "span" &&
    typeof span.text === "string" &&
    Array.isArray(span.marks)
  );

const isLabelledCell = (block, label, style) =>
  isTextBlock(block, style) &&
  block.children.length >= 3 &&
  block.children[0].text === label &&
  block.children[0].marks.includes("strong") &&
  block.children[1].text === ": " &&
  block.children.slice(2).some((span) => span.text.trim().length > 0);

// Recover the published three-column, seven-term comparison while retaining
// the original blocks, marks and heading keys. Unknown content is untouched.
export const structureDedicatedDevelopersWorksheet = (body, slug) => {
  if (slug !== SLUG || !Array.isArray(body)) return body;

  const start = body.findIndex((block) => block?._key === KEYS[0]);
  if (start < 0) return body;

  const blocks = body.slice(start, start + KEYS.length);
  if (blocks.length !== KEYS.length || blocks.some((block, index) =>
    block?._key !== KEYS[index] ||
    body.filter((candidate) => candidate?._key === KEYS[index]).length !== 1
  )) return body;

  const headers = blocks.slice(0, HEADERS.length);
  if (headers.some((block, index) =>
    !isTextBlock(block, "normal") ||
    block.children.map((span) => span.text).join("") !== HEADERS[index]
  )) return body;

  const rows = [];
  for (let index = HEADERS.length; index < blocks.length; index += HEADERS.length) {
    const [heading, dedicated, fixed] = blocks.slice(index, index + HEADERS.length);
    if (!isLabelledCell(heading, HEADERS[0], "h3") ||
      !isLabelledCell(dedicated, HEADERS[1], "normal") ||
      !isLabelledCell(fixed, HEADERS[2], "normal")) return body;
    rows.push({ heading, cells: [dedicated, fixed] });
  }

  return [
    ...body.slice(0, start),
    {
      _type: "articleWorksheet",
      _key: "worksheet-dedicated-developers",
      label: "Dedicated developers and fixed-scope projects compared on seven contract terms",
      headers,
      rows,
    },
    ...body.slice(start + KEYS.length),
  ];
};
