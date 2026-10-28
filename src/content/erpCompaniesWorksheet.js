const SLUG = "erp-software-companies-chennai";
const QUESTION_PREFIX = "Question to ask: ";
const CELL_LABELS = [
  "Reseller of a packaged product:",
  "Implementation firm:",
  "Custom builder:",
];
const WORKSHEET_KEY = "worksheet-p2b00a";
const KEYS = Array.from({ length: 28 }, (_, index) =>
  `p2b${(index + 10).toString(16).padStart(3, "0")}`
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

const isQuestion = (block) =>
  isTextBlock(block, "h3") &&
  block.children[0].text.startsWith(QUESTION_PREFIX) &&
  block.children.map((span) => span.text).join("")
    .slice(QUESTION_PREFIX.length).trim().length > 0;

const isLabelledCell = (block, label) =>
  isTextBlock(block, "normal") &&
  block.children.length >= 2 &&
  block.children[0].text === label &&
  block.children[0].marks.includes("strong") &&
  block.children.slice(1).some((span) => span.text.trim().length > 0);

// Reconstruct only this known seven-row comparison. Original row blocks retain
// their text, annotations and heading keys; unfamiliar source stays unchanged.
export const structureErpCompaniesWorksheet = (body, slug) => {
  if (slug !== SLUG || !Array.isArray(body)) return body;

  const start = body.findIndex((block) => block?._key === KEYS[0]);
  if (start < 0 || body.some((block) => block?._key === WORKSHEET_KEY)) return body;

  const blocks = body.slice(start, start + KEYS.length);
  if (blocks.length !== KEYS.length || blocks.some((block, index) =>
    block?._key !== KEYS[index] ||
    body.filter((candidate) => candidate?._key === KEYS[index]).length !== 1
  )) return body;

  const rows = [];
  for (let index = 0; index < blocks.length; index += 4) {
    const [heading, ...cells] = blocks.slice(index, index + 4);
    if (!isQuestion(heading) || cells.some((cell, column) =>
      !isLabelledCell(cell, CELL_LABELS[column])
    )) return body;
    rows.push({ heading, cells });
  }

  // Column labels are drawn from the first row, without changing that row.
  const headerTexts = [
    rows[0].heading.children[0].text.slice(0, QUESTION_PREFIX.length).replace(/:\s*$/u, ""),
    ...rows[0].cells.map((cell) => cell.children[0].text.slice(0, -1)),
  ];
  const headers = headerTexts.map((text, index) => ({
    _type: "block",
    _key: `${WORKSHEET_KEY}-header-${index}`,
    style: "normal",
    markDefs: [],
    children: [{
      _type: "span",
      _key: `${WORKSHEET_KEY}-header-${index}-span`,
      text,
      marks: [],
    }],
  }));

  return [
    ...body.slice(0, start),
    {
      _type: "articleWorksheet",
      _key: WORKSHEET_KEY,
      label: "ERP software companies in Chennai process fit comparison",
      headers,
      rows,
    },
    ...body.slice(start + KEYS.length),
  ];
};
