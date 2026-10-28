const SLUG = "software-development-outsourcing-companies";
const WORKSHEET_KEY = "worksheet-outsourcing-contract-clauses";
const HEADERS = ["Clause", "What it should say", "Question to ask the vendor"];
const ROWS = [
  ["Statement of work", "Deliverables; assumptions; exclusions", "What is outside scope?"],
  ["Acceptance testing", "Test method; tester; pass condition", "Who tests and who signs off?"],
  ["IP assignment", "Signed assignment naming rights; term; territory", "When does ownership transfer?"],
  ["NDA", "What is confidential and for how long", "Who sees our data on your side?"],
  ["Sprint demo", "Demo cadence and who attends", "How often do we see working software?"],
  ["Defect SLA", "Defect severity levels and response times", "What is the fix time for each level?"],
  ["Data processing", "Purpose; security safeguards; erasure", "Where is personal data stored?"],
  ["Exit clause", "Notice; handover; data return or erasure", "What do we receive on exit?"],
];
const SOURCE = [
  ...HEADERS.map((text, index) => ({
    key: `b${String(index + 3).padStart(4, "0")}`,
    style: "normal",
    spans: [[text, ["strong"]]],
  })),
  ...ROWS.flatMap((row, rowIndex) => row.map((text, column) => ({
    key: `b${String(6 + rowIndex * 3 + column).padStart(4, "0")}`,
    style: column === 0 ? "h3" : "normal",
    spans: [[HEADERS[column], ["strong"]], [": ", []], [text, []]],
  }))),
];

const matchesSource = (block, source) =>
  block?._type === "block" && block._key === source.key &&
  block.style === source.style && !block.listItem &&
  Array.isArray(block.markDefs) && block.markDefs.length === 0 &&
  Array.isArray(block.children) && block.children.length === source.spans.length &&
  block.children.every((span, index) =>
    span?._type === "span" &&
    span._key === `s${source.key.slice(1)}_${String(index).padStart(3, "0")}` &&
    span.text === source.spans[index][0] &&
    Array.isArray(span.marks) && span.marks.length === source.spans[index][1].length &&
    span.marks.every((mark, markIndex) => mark === source.spans[index][1][markIndex])
  );

// Restore only the reviewed eight-clause comparison. Retain the original
// header and row objects, including their words, marks and heading keys.
export const presentOutsourcingArticle = (body, slug) => {
  if (slug !== SLUG || !Array.isArray(body) ||
    body.some((block) => block?._key === WORKSHEET_KEY)) return body;
  const start = body.findIndex((block) => block?._key === SOURCE[0].key);
  if (start < 0) return body;
  const blocks = body.slice(start, start + SOURCE.length);
  if (blocks.length !== SOURCE.length || blocks.some((block, index) =>
    !matchesSource(block, SOURCE[index]) ||
    body.filter((candidate) => candidate?._key === SOURCE[index].key).length !== 1
  )) return body;

  const rows = [];
  for (let index = HEADERS.length; index < blocks.length; index += HEADERS.length) {
    rows.push({ heading: blocks[index], cells: blocks.slice(index + 1, index + HEADERS.length) });
  }
  return [
    ...body.slice(0, start),
    {
      _type: "articleWorksheet",
      _key: WORKSHEET_KEY,
      label: "Eight clauses in a software development outsourcing contract",
      headers: blocks.slice(0, HEADERS.length),
      rows,
    },
    ...body.slice(start + SOURCE.length),
  ];
};
