const SLUG = "robotic-process-automation-for-sap";
const WORKSHEET_KEY = "worksheet-sap-automation";
const HEADINGS = [
  {
    "key": "39464bc1ec60",
    "span": "1a8a5b2c311a",
    "text": "What \"UI-level automation\" actually means. UI-level automation means the bot works through SAP's own interface, the same screens and transaction codes a human user sees, rather than talking to SAP's database or business logic directly. It reads what's on screen, types into the same fields a person would, and clicks the same buttons, at whatever speed and schedule the task needs.",
    "label": "What \"UI-level automation\" actually means."
  },
  {
    "key": "7c32581697f0",
    "span": "0ebb8ef41068",
    "text": "Why the core is usually off-limits. SAP automation almost always starts from a constraint, not a wish list: the business is contractually, financially, or procedurally barred from modifying SAP's core configuration or code. RPA for SAP exists specifically because it respects that constraint. It automates around SAP rather than into it.",
    "label": "Why the core is usually off-limits."
  },
  {
    "key": "f0364a088f78",
    "span": "c888b260c4b8",
    "text": "Reading and entering data through a transaction code. A bot can open a specific transaction code, enter data into the same fields a person fills in, and confirm the entry, repeatedly and on schedule. This is the most common and most reliable use of RPA for SAP: repetitive entry into a stable, unchanging screen.",
    "label": "Reading and entering data through a transaction code."
  },
  {
    "key": "2f15891bd0c1",
    "span": "572f545e9aba",
    "text": "Working with master data without touching the schema. A bot can read, reconcile, and update master data records through the interface, the same fields a data entry clerk would use, without ever touching how that data is structured underneath. The schema stays exactly as SAP defines it; only the values entered through the screen change.",
    "label": "Working with master data without touching the schema."
  },
  {
    "key": "f51d501a08d9",
    "span": "54c3fc09f55e",
    "text": "Where an unattended bot fits, and where it doesn't. An unattended bot fits a task with a stable screen layout and predictable inputs, running on a schedule with no person watching. It doesn't fit a task with judgment calls, an exception that doesn't match the expected pattern, or a screen that changes based on conditions the bot wasn't built to read. Those still need a person.",
    "label": "Where an unattended bot fits, and where it doesn't."
  },
  {
    "key": "77b3d75ced9a",
    "span": "67c5f8ed29ca",
    "text": "Logging every action for an audit trail. Every action a bot takes inside SAP- which transaction, what was entered, when- can be logged automatically, which is often a stronger audit trail than the same task performed manually. That logging matters as much for compliance as the automation itself does for efficiency.",
    "label": "Logging every action for an audit trail."
  }
];
const TABLE = [
  {
    "key": "d8b7373b5484",
    "span": "56484f81020c",
    "style": "h3",
    "text": "Repetitive data entry into a fixed transaction"
  },
  {
    "key": "69c04c260757",
    "span": "3a8079f7db5a",
    "style": "normal",
    "text": "Can RPA handle it at the UI level: Yes, reliably"
  },
  {
    "key": "cd3647c8c2c7",
    "span": "7a7c8a8d4032",
    "style": "normal",
    "text": "What it still depends on: A stable screen layout and enabled GUI scripting"
  },
  {
    "key": "41eeee51340a",
    "span": "25cdae5f828c",
    "style": "h3",
    "text": "Reconciling data between SAP and a spreadsheet or another system"
  },
  {
    "key": "08cc600adc59",
    "span": "5a1df8c501f0",
    "style": "normal",
    "text": "Can RPA handle it at the UI level: Yes"
  },
  {
    "key": "703a9cec9ff4",
    "span": "344445842def",
    "style": "normal",
    "text": "What it still depends on: Access to both systems and a defined matching rule"
  },
  {
    "key": "25abbcf9bdee",
    "span": "65cce32160f6",
    "style": "h3",
    "text": "Changing SAP's own business logic or workflow rules"
  },
  {
    "key": "5f122cf592b6",
    "span": "f9bbd0124170",
    "style": "normal",
    "text": "Can RPA handle it at the UI level: No"
  },
  {
    "key": "18309732a1aa",
    "span": "dffd025a0276",
    "style": "normal",
    "text": "What it still depends on: A core change, which is exactly what RPA is chosen to avoid"
  },
  {
    "key": "56deb6ddc805",
    "span": "cf490f345ff2",
    "style": "h3",
    "text": "Handling an exception the bot doesn't recognize"
  },
  {
    "key": "f0328b62219a",
    "span": "f39dd838bd59",
    "style": "normal",
    "text": "Can RPA handle it at the UI level: No"
  },
  {
    "key": "76eef310edb5",
    "span": "40de4d0fb9fa",
    "style": "normal",
    "text": "What it still depends on: A human, routed through the same exception-handling pattern as any other automation"
  }
];
const HEADERS = ["Task", "Can RPA handle it at the UI level", "What it still depends on"];

const matchesSource = (block, expected, style = "normal") =>
  block?._type === "block" && block._key === expected.key &&
  block.style === style && !block.listItem && !block.level &&
  Array.isArray(block.markDefs) && block.markDefs.length === 0 &&
  Array.isArray(block.children) && block.children.length === 1 &&
  block.children[0]?._type === "span" &&
  block.children[0]._key === expected.span &&
  block.children[0].text === expected.text &&
  Array.isArray(block.children[0].marks) && block.children[0].marks.length === 0;

// The reviewed article stores six exact subsection labels in paragraph spans
// and one comparison as twelve consecutive blocks. Fail closed if any observed
// key, text, decoration or position changes; preserve original table objects.
export const presentSapAutomationArticle = (body, slug) => {
  if (slug !== SLUG || !Array.isArray(body) ||
    body.some((block) => block?._key === WORKSHEET_KEY) ||
    new Set(body.map((block) => block?._key)).size !== body.length
  ) return body;

  const positions = HEADINGS.map((expected) =>
    body.findIndex((block) => block?._key === expected.key));
  if (positions.some((position, index) => position < 0 ||
    (index > 0 && position <= positions[index - 1]) ||
    !matchesSource(body[position], HEADINGS[index]) ||
    !HEADINGS[index].text.startsWith(HEADINGS[index].label + " ") ||
    body.some((block) => block?._key === "sap-heading-" + HEADINGS[index].key)
  )) return body;

  const tableStart = body.findIndex((block) => block?._key === TABLE[0].key);
  const tableBlocks = body.slice(tableStart, tableStart + TABLE.length);
  if (tableStart <= positions[positions.length - 1] ||
    tableBlocks.length !== TABLE.length ||
    tableBlocks.some((block, index) => !matchesSource(block, TABLE[index], TABLE[index].style))
  ) return body;

  const headers = HEADERS.map((text, column) => ({
    _type: "block",
    _key: WORKSHEET_KEY + "-header-" + column,
    style: "normal",
    markDefs: [],
    children: [{ _type: "span", _key: WORKSHEET_KEY + "-header-span-" + column, marks: [], text }],
  }));
  const rows = [];
  for (let index = 0; index < tableBlocks.length; index += HEADERS.length) {
    rows.push({ heading: tableBlocks[index], cells: tableBlocks.slice(index + 1, index + HEADERS.length) });
  }
  const headingByKey = new Map(HEADINGS.map((heading) => [heading.key, heading]));
  return body.flatMap((block, index) => {
    if (index === tableStart) return [{
      _type: "articleWorksheet",
      _key: WORKSHEET_KEY,
      label: "RPA for SAP capabilities and dependencies",
      headers,
      rows,
    }];
    if (index > tableStart && index < tableStart + TABLE.length) return [];
    const heading = headingByKey.get(block?._key);
    if (!heading) return [block];
    const span = block.children[0];
    return [
      { ...block, _key: "sap-heading-" + block._key, style: "h3",
        children: [{ ...span, text: span.text.slice(0, heading.label.length) }] },
      { ...block, children: [{ ...span, text: span.text.slice(heading.label.length) }] },
    ];
  });
};
