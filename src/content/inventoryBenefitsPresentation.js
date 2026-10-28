const SLUG = "inventory-management-system-benefits";
const WORKSHEET_KEY = "worksheet-inventory-benefits";
const SOURCE = [
  ["b721d4e4d249", "390f3fead876", "Recording a count"],
  ["91f8243a1ac2", "9ff2516da074", "Clipboard count: Written by hand, re-typed later"],
  ["b60bd6fe77a1", "a3dec4ae35b7", "Scan-based count: Captured immediately by the scan"],
  ["128033732c21", "ee0758726641", "Who sees it first"],
  ["4c6f89aede99", "3a266d9cc0b0", "Clipboard count: Whoever re-types it, often hours later"],
  ["ed502680aa52", "11365f5f3202", "Scan-based count: Anyone with access to the system, immediately"],
  ["3ed49a6dd4c6", "f8cf69bd4d03", "Cost of a full physical count"],
  ["28c47f48cb37", "433c785298a6", "Clipboard count: Disrupts operations for a day or more"],
  ["ad9e494c1320", "a62c3aa2655b", "Scan-based count: Cycle counts happen in small windows without stopping work"],
  ["9ae98399bd19", "01614cd7935c", "Printable labels"],
  ["c115d916bccf", "68c13b851031", "Clipboard count: Not applicable"],
  ["35dc5af35be5", "cf18cc53ca6e", "Scan-based count: A label ties a physical item to its system record from the start"],
];

const matchesSource = (block, [key, spanKey, text], style) =>
  block?._type === "block" && block._key === key &&
  block.style === style && !block.listItem &&
  Array.isArray(block.markDefs) && block.markDefs.length === 0 &&
  Array.isArray(block.children) && block.children.length === 1 &&
  block.children[0]?._type === "span" && block.children[0]._key === spanKey &&
  block.children[0].text === text &&
  Array.isArray(block.children[0].marks) && block.children[0].marks.length === 0;

// This article's published side-by-side comparison is twelve flat blocks.
// Recognize only its exact source keys, spans, labels and empty annotations.
// Retain every original block by reference, including its heading anchor key.
export const presentInventoryBenefitsArticle = (body, slug) => {
  if (slug !== SLUG || !Array.isArray(body) ||
    body.some((block) => block?._key === WORKSHEET_KEY)) return body;
  const start = body.findIndex((block) => block?._key === SOURCE[0][0]);
  if (start < 0) return body;
  const blocks = body.slice(start, start + SOURCE.length);
  if (blocks.length !== SOURCE.length || blocks.some((block, index) =>
    !matchesSource(block, SOURCE[index], index % 3 === 0 ? "h3" : "normal") ||
    body.filter((candidate) => candidate?._key === SOURCE[index][0]).length !== 1
  )) return body;

  const headers = ["Comparison", "Clipboard count", "Scan-based count"].map((text, index) => ({
    _type: "block",
    _key: `${WORKSHEET_KEY}-header-${index}`,
    style: "normal",
    markDefs: [],
    children: [{
      _type: "span",
      _key: `${WORKSHEET_KEY}-header-span-${index}`,
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
      _key: WORKSHEET_KEY,
      label: "Clipboard count and scan-based count comparison",
      headers,
      rows,
    },
    ...body.slice(start + SOURCE.length),
  ];
};
