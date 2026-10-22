const SLUG = "how-to-integrate-apis";
const TABLES = [
  {
    key: "worksheet-api-protocols",
    label: "API protocols and mechanics comparison",
    headers: ["Protocol or mechanism", "What it's good at", "What it doesn't solve"],
    rows: ["REST", "GraphQL", "SOAP", "Webhook"],
    keys: [
      "8114b48c2db8", "4bf36b152791", "ae943da8395b",
      "57cb27423ccf", "e2fd8c3c05ed", "b9eb18c25e17",
      "2245e7cee95c", "844cb78afac4", "24d6bf7c35f7",
      "4edf60709039", "31594661eb0a", "4a31a8522d9c",
    ],
  },
  {
    key: "worksheet-api-ownership",
    label: "API integration ownership questions and why they matter",
    headers: ["Question", "Why it matters"],
    rows: [
      "Which system is the source of truth for this record?",
      "What's the sync frequency?",
      "What happens on failure?",
      "Who resolves a conflict when both systems changed the same record?",
    ],
    keys: [
      "e20907cdeb4f", "5e103d415a1f",
      "f7878379560f", "f0d02d7222e2",
      "7a0ad6889b2e", "5356e6483cc2",
      "a8f704f19d4d", "8dd4b0df81fd",
    ],
  },
];

const isSourceBlock = (block, style) =>
  block?._type === "block" && block.style === style &&
  !block.listItem &&
  (block.markDefs === undefined || Array.isArray(block.markDefs)) &&
  Array.isArray(block.children) && block.children.length > 0 &&
  block.children.every((span) => span?._type === "span" &&
    typeof span.text === "string" &&
    (span.marks === undefined || Array.isArray(span.marks)));

const isTableBlock = (block, index, table) => {
  const column = index % table.headers.length;
  if (!isSourceBlock(block, column === 0 ? "h3" : "normal")) return false;
  const text = block.children.map((span) => span.text).join("");
  if (column === 0) return text === table.rows[Math.floor(index / table.headers.length)];
  const prefix = `${table.headers[column]}: `;
  return text.startsWith(prefix) && text.slice(prefix.length).trim().length > 0;
};

// Recover the two published comparisons without rewriting source blocks.
// Empty marks and markDefs are omitted in this article's original payload.
// Only the organizational first-column labels are added for the table headers.
export const structureApiIntegrationWorksheet = (body, slug) => {
  if (slug !== SLUG || !Array.isArray(body) ||
    TABLES.some((table) => body.some((block) => block?._key === table.key))) return body;

  const replacements = [];
  for (const table of TABLES) {
    const start = body.findIndex((block) => block?._key === table.keys[0]);
    if (start < 0) return body;
    const blocks = body.slice(start, start + table.keys.length);
    if (blocks.length !== table.keys.length || blocks.some((block, index) =>
      block?._key !== table.keys[index] ||
      body.filter((candidate) => candidate?._key === table.keys[index]).length !== 1 ||
      !isTableBlock(block, index, table)
    )) return body;

    const headers = table.headers.map((text, column) => ({
      _type: "block",
      _key: `${table.key}-header-${column}`,
      style: "normal",
      markDefs: [],
      children: [{
        _type: "span",
        _key: `${table.key}-header-span-${column}`,
        marks: [],
        text,
      }],
    }));
    const rows = [];
    for (let index = 0; index < blocks.length; index += table.headers.length) {
      rows.push({ heading: blocks[index], cells: blocks.slice(index + 1, index + table.headers.length) });
    }
    replacements.push({ start, count: blocks.length, worksheet: {
      _type: "articleWorksheet", _key: table.key, label: table.label, headers, rows,
    } });
  }

  const result = body.slice();
  for (const { start, count, worksheet } of replacements.sort((left, right) => right.start - left.start)) {
    result.splice(start, count, worksheet);
  }
  return result;
};
