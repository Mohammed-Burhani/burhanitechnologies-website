const SLUG = "robotic-process-automation-services";
const WORKSHEET_KEY = "worksheet-rpa-services-scope";
const HEADERS = [
  ["b0010", "Scope item"],
  ["b0011", "What to define"],
  ["b0012", "What breaks in month two"],
];
const ROWS = [
  [
    ["b0013", "Process discovery"],
    ["b0014", "Steps; rules; inputs; process owner"],
    ["b0015", "The bot automates a process nobody agreed on"],
  ],
  [
    ["b0016", "Stable screens"],
    ["b0017", "Which screens the bot uses and who can change them"],
    ["b0018", "A screen change stops the bot"],
  ],
  [
    ["b0019", "Exception queue"],
    ["b0020", "Where failed items go and who clears them"],
    ["b0021", "Failed items pile up unseen"],
  ],
  [
    ["b0022", "Maintenance effort"],
    ["b0023", "Who fixes the bot after a change and how fast"],
    ["b0024", "No one owns the upkeep"],
  ],
  [
    ["b0025", "Bot licence"],
    ["b0026", "Attended or unattended run, and the licence line"],
    ["b0027", "Licence scope fits a pilot only"],
  ],
  [
    ["b0028", "Control room"],
    ["b0029", "Who monitors runs and receives alerts"],
    ["b0030", "Failures found by users"],
  ],
];

const matchesBlock = (block, key, style, texts) =>
  block?._type === "block" && block._key === key && block.style === style &&
  block.listItem === undefined && block.level === undefined &&
  Array.isArray(block.markDefs) && block.markDefs.length === 0 &&
  Array.isArray(block.children) && block.children.length === texts.length &&
  block.children.every((span, index) =>
    span?._type === "span" &&
    span._key === `s${key.slice(1)}_${String(index).padStart(3, "0")}` &&
    span.text === texts[index] && Array.isArray(span.marks) &&
    (index === 0 ? span.marks.length === 1 && span.marks[0] === "strong" :
      span.marks.length === 0)
  );

// Recover only the observed three-column, six-row scope comparison. Exact
// keys, span keys, text, marks and adjacency fail closed if the source changes.
// Preserve every original block, annotation and heading ID by reference.
export const presentRpaServicesArticle = (body, slug) => {
  if (slug !== SLUG || !Array.isArray(body) ||
    body.some((block) => block?._key === WORKSHEET_KEY) ||
    new Set(body.map((block) => block?._key)).size !== body.length
  ) return body;

  const start = body.findIndex((block) => block?._key === HEADERS[0][0]);
  const length = HEADERS.length * (ROWS.length + 1);
  if (start < 0 || start + length > body.length) return body;
  const blocks = body.slice(start, start + length);
  const headers = blocks.slice(0, HEADERS.length);
  if (headers.some((block, index) =>
    !matchesBlock(block, HEADERS[index][0], "normal", [HEADERS[index][1]])
  )) return body;

  const rows = [];
  for (let row = 0; row < ROWS.length; row += 1) {
    const cells = blocks.slice((row + 1) * HEADERS.length, (row + 2) * HEADERS.length);
    if (cells.some((block, column) =>
      !matchesBlock(block, ROWS[row][column][0], column === 0 ? "h3" : "normal",
        [HEADERS[column][1], ": ", ROWS[row][column][1]])
    )) return body;
    rows.push({ heading: cells[0], cells: cells.slice(1) });
  }

  return [
    ...body.slice(0, start),
    {
      _type: "articleWorksheet",
      _key: WORKSHEET_KEY,
      label: "RPA services scope items, definitions and month-two failures",
      headers,
      rows,
    },
    ...body.slice(start + length),
  ];
};
