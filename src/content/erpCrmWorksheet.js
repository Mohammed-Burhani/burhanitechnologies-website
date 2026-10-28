const SLUG = "erp-vs-crm";
const LABELS = ["Addresses it first", "What still needs the other system"];
const ROW_LABELS = [
  "Leads and follow-ups falling through the cracks",
  "Stock, production, or dispatch disconnected from sales",
  "Same customer exists twice with different data (module overlap)",
  "Order to cash breaks between a closed deal and the invoice",
];
const KEYS = [
  "a9842ae90ce1", "977fd815325c", "d473736a233d",
  "fdd8213e0209", "8e07f95c5219", "7ddb1485c627",
  "9a5f6f26e412", "3708afcb1333", "fb4a6c3d7b29",
  "f279a71f153e", "f53331013555", "3fbb5430a773",
];

const isLabelledBlock = (block, index) => {
  const column = index % 3;
  if (block?._type !== "block" || block.style !== (column === 0 ? "h3" : "normal") ||
    block.listItem || !Array.isArray(block.markDefs) ||
    !Array.isArray(block.children) || block.children.length === 0 ||
    !block.children.every((span) => span?._type === "span" &&
      typeof span.text === "string" && Array.isArray(span.marks))) return false;

  if (column === 0) {
    return block.children.length === 1 &&
      block.children[0].text === ROW_LABELS[Math.floor(index / 3)];
  }

  return block.children.length === 2 &&
    block.children[0].text === `${LABELS[column - 1]}: ` &&
    block.children[0].marks.includes("strong") &&
    block.children[1].text.trim().length > 0;
};

// Recover the four-row comparison while retaining every original row block.
// "Business need" is an organizational column label; the other two headers
// repeat labels already present in the source cells.
export const structureErpCrmWorksheet = (body, slug) => {
  if (slug !== SLUG || !Array.isArray(body) ||
    body.some((block) => block?._key === "worksheet-erp-crm")) return body;

  const start = body.findIndex((block) => block?._key === KEYS[0]);
  if (start < 0) return body;

  const blocks = body.slice(start, start + KEYS.length);
  if (blocks.length !== KEYS.length || blocks.some((block, index) =>
    block?._key !== KEYS[index] ||
    body.filter((candidate) => candidate?._key === KEYS[index]).length !== 1 ||
    !isLabelledBlock(block, index)
  )) return body;

  const headers = [
    "Business need",
    ...blocks.slice(1, 3).map((block) => block.children[0].text.slice(0, -2)),
  ].map((text, column) => ({
    _type: "block",
    _key: `erp-crm-header-${column}`,
    style: "normal",
    markDefs: [],
    children: [{
      _type: "span",
      _key: `erp-crm-header-span-${column}`,
      marks: [],
      text,
    }],
  }));

  const rows = [];
  for (let index = 0; index < blocks.length; index += 3) {
    rows.push({ heading: blocks[index], cells: blocks.slice(index + 1, index + 3) });
  }

  return [
    ...body.slice(0, start),
    {
      _type: "articleWorksheet",
      _key: "worksheet-erp-crm",
      label: "ERP vs CRM sequencing comparison",
      headers,
      rows,
    },
    ...body.slice(start + KEYS.length),
  ];
};
