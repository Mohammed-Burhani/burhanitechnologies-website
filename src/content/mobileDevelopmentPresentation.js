const SLUG = "mobile-app-development-company-chennai";
const WORKSHEET_KEY = "worksheet-mobile-development-checks";
const ROWS = [
  ["p4b003", "1. Store account ownership", "p4b004", " Enrollment plan for both stores", "p4b005", " Accounts open in your company name"],
  ["p4b006", "2. Native or cross-platform", "p4b007", " A written rationale per platform", "p4b008", " Choice tied to device features you need"],
  ["p4b009", "3. Backend API", "p4b00a", " API specification and hosting plan", "p4b00b", " Documented endpoints and a named host"],
  ["p4b00c", "4. Release build", "p4b00d", " Build and signing procedure", "p4b00e", " Signing keys held by you; procedure documented"],
  ["p4b00f", "5. App store submission", "p4b010", " Submission checklist and review plan", "p4b011", " Dates for review rounds; listing assets agreed"],
  ["p4b012", "6. Crash reporting", "p4b013", " Monitoring tool and alert owner", "p4b014", " Named tool and a named person who reads it"],
  ["p4b015", "7. Maintenance retainer", "p4b016", " Scope of support after launch", "p4b017", " Covers OS updates and store policy changes"],
  ["p4b018", "8. Source code transfer", "p4b019", " Transfer terms and repository access", "p4b01a", " Written assignment and a handover date"],
];
const SOURCE = ROWS.flatMap(([headingKey, heading, proofKey, proof, answerKey, answer]) => [
  { key: headingKey, style: "h3", spans: [[heading, []]] },
  { key: proofKey, style: "normal", spans: [["Proof to request:", ["strong"]], [proof, []]] },
  { key: answerKey, style: "normal", spans: [["A good answer looks like:", ["strong"]], [answer, []]] },
]);

const matchesSource = (block, source) =>
  block?._type === "block" && block._key === source.key &&
  block.style === source.style && !block.listItem &&
  Array.isArray(block.markDefs) && block.markDefs.length === 0 &&
  Array.isArray(block.children) && block.children.length === source.spans.length &&
  block.children.every((span, index) =>
    span?._type === "span" && span._key === `${source.key}s0${index}` &&
    span.text === source.spans[index][0] &&
    Array.isArray(span.marks) && span.marks.length === source.spans[index][1].length &&
    span.marks.every((mark, markIndex) => mark === source.spans[index][1][markIndex])
  );

// Recover only this article's observed eight-row comparison. Original blocks
// remain unchanged by reference, preserving all copy, marks and heading IDs.
export const presentMobileDevelopmentArticle = (body, slug) => {
  if (slug !== SLUG || !Array.isArray(body) ||
    body.some((block) => block?._key === WORKSHEET_KEY)) return body;
  const start = body.findIndex((block) => block?._key === SOURCE[0].key);
  if (start < 0) return body;
  const blocks = body.slice(start, start + SOURCE.length);
  if (blocks.length !== SOURCE.length || blocks.some((block, index) =>
    !matchesSource(block, SOURCE[index]) ||
    body.filter((candidate) => candidate?._key === SOURCE[index].key).length !== 1
  )) return body;

  const headers = ["Check", "Proof to request", "A good answer looks like"].map((text, index) => ({
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
      label: "Eight checks before signing with a mobile app development company",
      headers,
      rows,
    },
    ...body.slice(start + SOURCE.length),
  ];
};
