const SLUG = "what-is-warehouse-management-system";
const SOURCE_LENGTH = 78;
const TABLES = [
  {
    key: "worksheet-warehouse-stock-move",
    label: "Warehouse stock move decisions, records and gaps on paper",
    start: 9,
    headers: ["Step","Decision the system makes","Record left behind","Gap on paper"],
    blocks: [
      ["p6b009","h3",[["p6b009s00","Goods receipt",[]]]],
      ["p6b00a","normal",[["p6b00as00","Decision the system makes:",["strong"]],["p6b00as01"," Accept or hold the delivery against its order",[]]]],
      ["p6b00b","normal",[["p6b00bs00","Record left behind:",["strong"]],["p6b00bs01"," Goods receipt note",[]]]],
      ["p6b00c","normal",[["p6b00cs00","Gap on paper:",["strong"]],["p6b00cs01"," Quantity typed later from a delivery slip",[]]]],
      ["p6b00d","h3",[["p6b00ds00","Putaway",[]]]],
      ["p6b00e","normal",[["p6b00es00","Decision the system makes:",["strong"]],["p6b00es01"," Apply the putaway rule to choose a bin location",[]]]],
      ["p6b00f","normal",[["p6b00fs00","Record left behind:",["strong"]],["p6b00fs01"," Bin location on the stock line",[]]]],
      ["p6b010","normal",[["p6b010s00","Gap on paper:",["strong"]],["p6b010s01"," Stock goes where space exists; location kept in memory",[]]]],
      ["p6b011","h3",[["p6b011s00","Pick",[]]]],
      ["p6b012","normal",[["p6b012s00","Decision the system makes:",["strong"]],["p6b012s01"," Set the pick path and the batch to pick",[]]]],
      ["p6b013","normal",[["p6b013s00","Record left behind:",["strong"]],["p6b013s01"," Scan confirmation from the handheld scanner",[]]]],
      ["p6b014","normal",[["p6b014s00","Gap on paper:",["strong"]],["p6b014s01"," Picker walks the aisles in sheet order",[]]]],
      ["p6b015","h3",[["p6b015s00","Dispatch",[]]]],
      ["p6b016","normal",[["p6b016s00","Decision the system makes:",["strong"]],["p6b016s01"," Confirm the order is complete and create the note",[]]]],
      ["p6b017","normal",[["p6b017s00","Record left behind:",["strong"]],["p6b017s01"," Dispatch note",[]]]],
      ["p6b018","normal",[["p6b018s00","Gap on paper:",["strong"]],["p6b018s01"," Note typed after the truck leaves",[]]]],
      ["p6b019","h3",[["p6b019s00","Audit",[]]]],
      ["p6b01a","normal",[["p6b01as00","Decision the system makes:",["strong"]],["p6b01as01"," Select a slice of stock to recount",[]]]],
      ["p6b01b","normal",[["p6b01bs00","Record left behind:",["strong"]],["p6b01bs01"," Stock audit trail",[]]]],
      ["p6b01c","normal",[["p6b01cs00","Gap on paper:",["strong"]],["p6b01cs01"," One full count a year",[]]]],
    ],
  },
  {
    key: "worksheet-warehouse-inventory",
    label: "Warehouse management system and inventory software comparison",
    start: 42,
    headers: ["Software","Question it answers","What it leaves out"],
    blocks: [
      ["p6b02a","h3",[["p6b02as00","Inventory software",[]]]],
      ["p6b02b","normal",[["p6b02bs00","Question it answers:",["strong"]],["p6b02bs01"," How many of each item do we hold?",[]]]],
      ["p6b02c","normal",[["p6b02cs00","What it leaves out:",["strong"]],["p6b02cs01"," Where each item sits and which move comes next",[]]]],
      ["p6b02d","h3",[["p6b02ds00","Warehouse management system",[]]]],
      ["p6b02e","normal",[["p6b02es00","Question it answers:",["strong"]],["p6b02es01"," Where is each item, and what should happen to it next?",[]]]],
      ["p6b02f","normal",[["p6b02fs00","What it leaves out:",["strong"]],["p6b02fs01"," Financial posting, unless it connects to the ledger",[]]]],
    ],
  },
];

const matchesSourceBlock = (block, [key, style, spans]) =>
  block?._key === key && block._type === "block" && block.style === style &&
  block.listItem === undefined && block.level === undefined &&
  Array.isArray(block.markDefs) && block.markDefs.length === 0 &&
  Array.isArray(block.children) && block.children.length === spans.length &&
  block.children.every((span, index) => {
    const [spanKey, text, marks] = spans[index];
    return span?._key === spanKey && span._type === "span" && span.text === text &&
      Array.isArray(span.marks) && JSON.stringify(span.marks) === JSON.stringify(marks);
  });

// Recover only the observed stock-move and software comparisons. Original
// blocks retain wording, spans, marks, annotations and row heading anchors.
// Any change to either observed table leaves the entire body untouched.
export const presentWarehouseArticle = (body, slug) => {
  if (slug !== SLUG || !Array.isArray(body) || body.length !== SOURCE_LENGTH ||
    TABLES.some((table) => body.some((block) => block?._key === table.key))) return body;
  const sourceKeys = body.map((block) => block?._key);
  if (TABLES.some((table) => table.blocks.some((expected, index) =>
    sourceKeys.filter((key) => key === expected[0]).length !== 1 ||
    !matchesSourceBlock(body[table.start + index], expected)
  ))) return body;

  const result = body.slice();
  for (const table of [...TABLES].reverse()) {
    const blocks = body.slice(table.start, table.start + table.blocks.length);
    const headers = table.headers.map((text, column) => ({
      _type: "block",
      _key: table.key + "-header-" + column,
      style: "normal",
      markDefs: [],
      children: [{
        _type: "span",
        _key: table.key + "-header-span-" + column,
        marks: [],
        text,
      }],
    }));
    const rows = [];
    for (let index = 0; index < blocks.length; index += headers.length) {
      rows.push({ heading: blocks[index], cells: blocks.slice(index + 1, index + headers.length) });
    }
    result.splice(table.start, blocks.length, {
      _type: "articleWorksheet", _key: table.key, label: table.label, headers, rows,
    });
  }
  return result;
};
