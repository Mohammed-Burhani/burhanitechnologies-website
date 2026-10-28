const SLUG = "erp-modules";
const LABELS = ["Module", "Business function", "Record it owns", "Module that depends on it"];
const KEYS = [
  "ae9bdbab3c56", "a08656d70604", "41eb6579b430", "93f17d22a791",
  "f9f36e40fed2", "94b2025dc1ed", "3f53e2dc2b54", "7b9d2ce58d85",
  "355d2544c6f8", "204e32a8f426", "0c75fd695108", "79795c62d02b",
  "0fcfa95a1da6", "94ef9304bc99", "7819f1e2b5a4", "b1002be967c8",
  "b70457ca8bfc", "2cc156424a11", "4a9421716439", "f8842f84265a",
  "accab8e24ea4", "07dbaf4c14b0", "ab30d51b1f4c", "a00647e5cb41",
  "78e8a7192b76", "4412c1295f10", "7c9be4a0f557", "a12ada44455b",
  "d395e2ee48f9", "96c31aa0bffa", "a3eb5306e64c", "19cce02cc764",
];

const isLabelledBlock = (block, column) => {
  if (block?._type !== "block" || block.style !== (column === 0 ? "h3" : "normal") ||
    block.listItem || !Array.isArray(block.markDefs) ||
    !Array.isArray(block.children) || block.children.length === 0 ||
    !block.children.every((span) => span?._type === "span" &&
      typeof span.text === "string" && Array.isArray(span.marks))) return false;

  if (column === 0) {
    return block.children.length === 1 &&
      block.children[0].text.startsWith(`${LABELS[column]}: `) &&
      block.children[0].text.slice(LABELS[column].length + 2).trim().length > 0;
  }

  return block.children.length === 2 &&
    block.children[0].text === `${LABELS[column]}:` &&
    block.children[0].marks.includes("strong") &&
    block.children[1].text.startsWith(" ") &&
    block.children[1].text.trim().length > 0;
};

// Recover this article's eight-row module map without rewriting its source
// blocks. The column headers repeat only labels already present in the map.
export const structureErpModulesWorksheet = (body, slug) => {
  if (slug !== SLUG || !Array.isArray(body)) return body;

  const start = body.findIndex((block) => block?._key === KEYS[0]);
  if (start < 0) return body;

  const blocks = body.slice(start, start + KEYS.length);
  if (blocks.length !== KEYS.length || blocks.some((block, index) =>
    block?._key !== KEYS[index] ||
    body.filter((candidate) => candidate?._key === KEYS[index]).length !== 1 ||
    !isLabelledBlock(block, index % LABELS.length)
  )) return body;

  const headers = blocks.slice(0, LABELS.length).map((block, column) => ({
    _type: "block",
    _key: `erp-modules-header-${column}`,
    style: "normal",
    markDefs: [],
    children: [{
      _type: "span",
      _key: `erp-modules-header-span-${column}`,
      marks: [],
      text: block.children[0].text.slice(0, block.children[0].text.indexOf(":")),
    }],
  }));

  const rows = [];
  for (let index = 0; index < blocks.length; index += LABELS.length) {
    rows.push({ heading: blocks[index], cells: blocks.slice(index + 1, index + LABELS.length) });
  }

  return [
    ...body.slice(0, start),
    {
      _type: "articleWorksheet",
      _key: "worksheet-erp-modules",
      label: "ERP modules mapped to business functions, records and dependencies",
      headers,
      rows,
    },
    ...body.slice(start + KEYS.length),
  ];
};
