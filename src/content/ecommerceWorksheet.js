const SLUG = "ecommerce-website-development-company-chennai";
const HEADERS = ["Requirement", "Platform store fits when", "Built store fits when"];
const KEYS = Array.from({ length: 24 }, (_, index) =>
  `b${String(index + 8).padStart(4, "0")}`
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

// The published comparison is three labels followed by seven
// heading/paragraph/paragraph groups. Preserve every original block;
// only this observed article's presentation changes.
export const structureEcommerceWorksheet = (body, slug) => {
  if (slug !== SLUG || !Array.isArray(body)) return body;

  const start = body.findIndex((block) => block?._key === KEYS[0]);
  if (start < 0) return body;

  const blocks = body.slice(start, start + KEYS.length);
  if (blocks.length !== KEYS.length || blocks.some((block, index) =>
    block?._key !== KEYS[index] ||
    body.filter((candidate) => candidate?._key === KEYS[index]).length !== 1
  )) return body;

  const headers = blocks.slice(0, 3);
  if (headers.some((block, index) =>
    !isTextBlock(block, "normal") ||
    block.children.map((span) => span.text).join("") !== HEADERS[index]
  )) return body;

  const rows = [];
  for (let index = 3; index < blocks.length; index += 3) {
    const [heading, platform, built] = blocks.slice(index, index + 3);
    if (!isLabelledCell(heading, HEADERS[0], "h3") ||
      !isLabelledCell(platform, HEADERS[1], "normal") ||
      !isLabelledCell(built, HEADERS[2], "normal")) return body;
    rows.push({ heading, cells: [platform, built] });
  }

  return [
    ...body.slice(0, start),
    {
      _type: "articleWorksheet",
      _key: "worksheet-b0008",
      label: "Ecommerce platform requirements comparison",
      headers,
      rows,
    },
    ...body.slice(start + KEYS.length),
  ];
};
