const SLUG = "erp-software-for-manufacturing-industry";
const LABELS = [
  "Module",
  "Record it creates",
  "Read by",
  "What breaks when it is weak",
];
const WORKSHEET_KEY = "worksheet-manufacturing-erp";
const KEYS = Array.from({ length: 32 }, (_, index) =>
  `b${String(index + 9).padStart(4, "0")}`
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

const isLabelledCell = (block, column) =>
  isTextBlock(block, column === 0 ? "h3" : "normal") &&
  block.children.length >= 3 &&
  block.children[0].text === LABELS[column] &&
  block.children[0].marks.includes("strong") &&
  block.children[1].text === ": " &&
  block.children.slice(2).some((span) => span.text.trim().length > 0);

// Recover only the reviewed four-column, seven-row manufacturing module map.
// Its existing headers and row blocks retain their text, annotations and keys.
export const structureManufacturingErpWorksheet = (body, slug) => {
  if (slug !== SLUG || !Array.isArray(body)) return body;

  const start = body.findIndex((block) => block?._key === KEYS[0]);
  if (start < 0 || body.some((block) => block?._key === WORKSHEET_KEY)) return body;

  const blocks = body.slice(start, start + KEYS.length);
  if (blocks.length !== KEYS.length || blocks.some((block, index) =>
    block?._key !== KEYS[index] ||
    body.filter((candidate) => candidate?._key === KEYS[index]).length !== 1
  )) return body;

  const headers = blocks.slice(0, LABELS.length);
  if (headers.some((block, column) =>
    !isTextBlock(block, "normal") ||
    block.children.map((span) => span.text).join("") !== LABELS[column]
  )) return body;

  const rows = [];
  for (let index = LABELS.length; index < blocks.length; index += LABELS.length) {
    const [heading, ...cells] = blocks.slice(index, index + LABELS.length);
    if (!isLabelledCell(heading, 0) || cells.some((cell, column) =>
      !isLabelledCell(cell, column + 1)
    )) return body;
    rows.push({ heading, cells });
  }

  return [
    ...body.slice(0, start),
    {
      _type: "articleWorksheet",
      _key: WORKSHEET_KEY,
      label: "Manufacturing ERP module records, dependencies and weak-link effects",
      headers,
      rows,
    },
    ...body.slice(start + KEYS.length),
  ];
};
