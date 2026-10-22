const SLUG = "inventory-management-software";
const WORKSHEET_KEY = "worksheet-inventory-software-routes";
const HEADERS = ["Requirement", "Buy fits when", "Configure fits when", "Build fits when"];
const ROWS = [
  ["Barcode scan", "Standard labels and scanners", "ERP supports the same labels", "Custom label or device rules"],
  ["Cycle count", "Product schedules counts", "ERP module schedules counts", "Counts follow your own floor rules"],
  ["Reorder point", "Rules are per item", "ERP rules match your policy", "Rules depend on production plans"],
  ["Batch and serial tracking", "Product tracks both", "ERP module tracks both", "Tracking rules are unusual"],
  ["Multi-warehouse", "Few sites, standard transfers", "ERP already models sites", "Transfers follow custom approvals"],
  ["Stock reconciliation", "Standard variance reports", "ERP ledger posts variances", "Reconciliation joins other systems"],
  ["ERP sync", "A connector exists", "No sync needed, same system", "A connector does not exist"],
];

const isObservedBlock = (block, index) => {
  const number = 16 + index;
  const sourceKey = String(number).padStart(4, "0");
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

// Recover only the observed four-column comparison. Original header and cell
// objects retain their words, span marks, annotations and heading anchor keys.
export const presentInventorySoftwareArticle = (body, slug) => {
  if (slug !== SLUG || !Array.isArray(body) ||
    body.some((block) => block?._key === WORKSHEET_KEY)) return body;

  const start = body.findIndex((block) => block?._key === "b0016");
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
      label: "Inventory management software: buy, configure and build requirements",
      headers: blocks.slice(0, HEADERS.length),
      rows,
    },
    ...body.slice(start + count),
  ];
};
