const SLUG = "what-is-erp-implementation";
const WORKSHEET_KEY = "worksheet-erp-implementation-phases";
const HEADERS = ["Phase", "What actually happens", "What's easy to underestimate"];
const SOURCE = [
  ["780fb0273091", "54c625be24e3", "Discovery"],
  ["fcaab769fe0e", "e7dd31888d19", "What actually happens: Mapping how an inquiry becomes an order, a production run, and a dispatch"],
  ["aa89247e7078", "d0bac15303b9", "What's easy to underestimate: How many departments define the same step differently"],
  ["f75b1bad5e17", "772d68d33542", "Master data migration"],
  ["51c8b6e151e4", "e9e7325ff403", "What actually happens: Cleaning and moving customer, stock, and production records"],
  ["16c6a6f79433", "7d3f4b4ea0ba", "What's easy to underestimate: How much existing data is duplicated or out of date"],
  ["e606f94433b1", "5f9f877d75ae", "Configuration"],
  ["16e15f5d0f39", "2b43e35ccb82", "What actually happens: Building the modules around the mapped sequence, not a default template"],
  ["246e99ba238f", "28720fc394ec", "What's easy to underestimate: How much of the default workflow doesn't match the real one"],
  ["c50e02d44415", "9d9b57c82026", "Training and change management"],
  ["272527548f8c", "6dd6f352b60a", "What actually happens: Teaching people to work inside the new system, not just log into it"],
  ["2f1115cdae92", "a62dfb4d40c4", "What's easy to underestimate: How long it takes people to trust a new system over the old habit"],
  ["41bc74866504", "9e992deda4bd", "Go-live"],
  ["c0a594c96318", "f6df909e4103", "What actually happens: Switching over, phased or all at once"],
  ["f38ccd059c54", "8e8e56647598", "What's easy to underestimate: How much support is needed in the first weeks after"],
];

const isObservedBlock = (block, expected, style) =>
  block?._key === expected[0] && block._type === "block" &&
  block.style === style && block.listItem === undefined &&
  block.markDefs === undefined &&
  Array.isArray(block.children) && block.children.length === 1 &&
  block.children[0]?._key === expected[1] &&
  block.children[0]._type === "span" &&
  block.children[0].text === expected[2] &&
  block.children[0].marks === undefined;

// This exact published phase comparison has no inline marks or annotations.
// Keep its original blocks, fragment keys and copy as the worksheet cells.
export const presentErpImplementationArticle = (body, slug) => {
  if (slug !== SLUG || !Array.isArray(body) ||
    body.some((block) => block?._key === WORKSHEET_KEY)) return body;

  const start = body.findIndex((block) => block?._key === SOURCE[0][0]);
  if (start < 0) return body;
  const blocks = body.slice(start, start + SOURCE.length);
  if (blocks.length !== SOURCE.length || blocks.some((block, index) =>
    !isObservedBlock(block, SOURCE[index], index % HEADERS.length === 0 ? "h3" : "normal") ||
    body.filter((candidate) => candidate?._key === block._key).length !== 1
  )) return body;

  const headers = HEADERS.map((text, index) => ({
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
  for (let index = 0; index < blocks.length; index += HEADERS.length) {
    rows.push({ heading: blocks[index], cells: blocks.slice(index + 1, index + HEADERS.length) });
  }

  return [
    ...body.slice(0, start),
    {
      _type: "articleWorksheet",
      _key: WORKSHEET_KEY,
      label: "What Happens at Each Phase",
      headers,
      rows,
    },
    ...body.slice(start + SOURCE.length),
  ];
};
