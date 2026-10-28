const SLUG = "inventory-management-techniques";
const WORKSHEET_KEY = "worksheet-inventory-techniques";
const HEADERS = [
  "Technique",
  "Data it consumes",
  "System feature it needs",
  "Failure when the data is wrong",
];
const ROWS = [
  ["ABC analysis", "Annual usage value per item", "Consumption history per item", "Wrong class sets wrong count frequency"],
  ["FSN analysis", "Movement dates per item", "Date on every stock movement", "Dead stock stays invisible"],
  ["Just in time", "Supplier lead time and daily demand", "Linked purchase orders and a lead-time field", "A late supplier halts production"],
  ["Safety stock", "Demand and lead-time variability", "Demand history by period", "Buffer set by guess"],
  ["Reorder point", "Lead time, daily demand and safety stock", "Live stock level and an alert", "Order placed late or early"],
  ["Demand forecast", "Sales history by period", "Clean history with adjustments recorded", "Forecast repeats past stockouts"],
  ["Cycle count", "Count schedule and variance per item", "Count tasks and a variance log", "Errors found once a year"],
];

const isObservedBlock = (block, index) => {
  const sourceKey = String(3 + index).padStart(4, "0");
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

// Restore only this article's observed four-column, seven-technique comparison.
// Reuse every source block so wording, marks, annotations and anchor keys survive.
export const presentInventoryTechniquesArticle = (body, slug) => {
  if (slug !== SLUG || !Array.isArray(body) ||
    body.some((block) => block?._key === WORKSHEET_KEY)) return body;

  const start = body.findIndex((block) => block?._key === "b0003");
  if (start < 0) return body;
  const count = HEADERS.length * (ROWS.length + 1);
  const blocks = body.slice(start, start + count);
  if (blocks.length !== count || blocks.some((block, index) =>
    !isObservedBlock(block, index) ||
    body.filter((candidate) => candidate?._key === block._key).length !== 1
  )) return body;

  return [
    ...body.slice(0, start),
    {
      _type: "articleWorksheet",
      _key: WORKSHEET_KEY,
      label: "Inventory management techniques: data, system features and failure modes",
      headers: blocks.slice(0, HEADERS.length),
      rows: ROWS.map((_, row) => {
        const index = HEADERS.length * (row + 1);
        return { heading: blocks[index], cells: blocks.slice(index + 1, index + HEADERS.length) };
      }),
    },
    ...body.slice(start + count),
  ];
};
