const SLUG = "what-are-rpa-tools";
const WORKSHEET_KEY = "worksheet-rpa-tools-cost-components";
const HEADERS = ["Component", "What it covers", "Why it's easy to miss when scoping"];
const SECTION = ["f323bbab3de7", "016da37ef93e", "h2", "What You're Actually Paying For, Component by Component"];
const NEXT_SECTION = ["f27996e84ddf", "8a110fd75bc1", "h2", "Where Burhani Fits"];
const TABLE = [
  ["1d8cc1615d44", "e045e9e99b0b", "h3", "Bot licence (attended)"],
  ["2197b32df4a2", "e2a34f54f01a", "normal", "What it covers: A bot that runs on a person's machine, triggered on command"],
  ["92b559d3d7b1", "bcff7f0f9dff", "normal", "Why it's easy to miss when scoping: Looks cheap in isolation, but doesn't scale past one person's workload"],
  ["b5ed41ce88d6", "f6d5761c1771", "h3", "Bot licence (unattended)"],
  ["713d7db31af8", "06b483c4b6cd", "normal", "What it covers: A bot that runs independently on its own schedule"],
  ["309077ea68ea", "5ad721e87b6b", "normal", "Why it's easy to miss when scoping: Needs dedicated compute and a live orchestrator connection, both cost extra"],
  ["3dc23ca7c009", "bd2fffbf5e01", "h3", "Orchestrator"],
  ["4fc0e03bbddd", "9cd26d0be4b6", "normal", "What it covers: The control layer that schedules, monitors, and logs every bot"],
  ["1b2fdb28b7cb", "af8b840f6d71", "normal", "Why it's easy to miss when scoping: Often quoted separately from bot licences, and easy to underbudget"],
  ["34effebdf71b", "b7bce8fd3d0b", "h3", "Development and maintenance"],
  ["324d94ef4157", "fed5de729fd3", "normal", "What it covers: Building the automation and keeping it working when a screen changes"],
  ["0da5debd9686", "10a6161fa8ba", "normal", "Why it's easy to miss when scoping: Consistently the largest real cost, even though it's absent from most price comparisons"],
  ["5606d3addf7a", "bcb43db2ea81", "h3", "Credential store"],
  ["3a3e3cc3e0f5", "193288aa1b84", "normal", "What it covers: Secure storage for the logins bots use to access systems"],
  ["a013005ff5e2", "ae889ba29e71", "normal", "Why it's easy to miss when scoping: A genuine security requirement, not a checkbox"],
];

const matchesSource = (block, [key, spanKey, style, text]) =>
  block?._type === "block" && block._key === key && block.style === style &&
  block.listItem === undefined && block.level === undefined &&
  block.markDefs === undefined && Array.isArray(block.children) &&
  block.children.length === 1 && block.children[0]?._type === "span" &&
  block.children[0]._key === spanKey && block.children[0].text === text &&
  block.children[0].marks === undefined;

// Recover only this reviewed five-row comparison. The CMS snapshot omits
// marks and markDefs; added decorations, changed text or reordered cells
// must retain the source presentation. Keep all original cell objects and IDs.
export const presentRpaToolsArticle = (body, slug) => {
  if (slug !== SLUG || !Array.isArray(body) ||
    body.some((block) => block?._key === WORKSHEET_KEY) ||
    new Set(body.map((block) => block?._key)).size !== body.length
  ) return body;

  const start = body.findIndex((block) => block?._key === TABLE[0][0]);
  if (start < 1 || !matchesSource(body[start - 1], SECTION) ||
    !matchesSource(body[start + TABLE.length], NEXT_SECTION)
  ) return body;
  const cells = body.slice(start, start + TABLE.length);
  if (cells.length !== TABLE.length ||
    cells.some((block, index) => !matchesSource(block, TABLE[index]))
  ) return body;

  const headers = HEADERS.map((text, column) => ({
    _type: "block",
    _key: `${WORKSHEET_KEY}-header-${column}`,
    style: "normal",
    markDefs: [],
    children: [{ _type: "span", _key: `${WORKSHEET_KEY}-header-span-${column}`, marks: [], text }],
  }));
  const rows = [];
  for (let index = 0; index < cells.length; index += HEADERS.length) {
    rows.push({ heading: cells[index], cells: cells.slice(index + 1, index + HEADERS.length) });
  }
  return [
    ...body.slice(0, start),
    {
      _type: "articleWorksheet",
      _key: WORKSHEET_KEY,
      label: "RPA tools cost components, coverage and scoping risks",
      headers,
      rows,
    },
    ...body.slice(start + TABLE.length),
  ];
};
