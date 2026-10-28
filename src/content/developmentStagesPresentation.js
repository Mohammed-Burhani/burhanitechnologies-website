const SLUG = "software-development-process-stages";
const WORKSHEET_KEY = "worksheet-development-stages";
const SOURCE = [
  ["ce0393ff00d2", "48690497d572", "h3", "Discovery"],
  ["eeef1d495845", "a105831f0b3a", "normal", "What it actually requires: Mapping the current workflow, the people involved, existing systems"],
  ["8c5d9b4b2f4c", "b8f00cdba5ac", "normal", "What gets skipped, and the cost: Skipped as a formality; costs show up as mid-project scope changes"],
  ["4ee193380298", "b214e9e9b17e", "h3", "Design"],
  ["ba27972b4bf3", "8af070b31900", "normal", "What it actually requires: Deciding the data model, interface, and integration points"],
  ["60cc3446280a", "d57dd2f2414c", "normal", "What gets skipped, and the cost: Skipped by building before decisions are settled; costs show up as rework"],
  ["ef4d1b2a9cfd", "b5fbc595f988", "h3", "Build and review"],
  ["9b593da90091", "2d9f3f04eebc", "normal", "What it actually requires: Working software reviewed as it's built"],
  ["fb94bb831de6", "14f6d8ea6b78", "normal", "What gets skipped, and the cost: Skipped by deferring all review to one acceptance test; costs show up as a late batch of fixes"],
  ["08b1324208e1", "494bd06dbf3c", "h3", "Testing"],
  ["0c8b0d1ed21e", "5a0691d50f6d", "normal", "What it actually requires: Testing against the actual workflow, not just the code"],
  ["b46394543db1", "d7f2a923e6c2", "normal", "What gets skipped, and the cost: Skipped by testing only the happy path; costs show up as production issues"],
  ["34d154f2d21a", "3af233f75e24", "h3", "Deployment"],
  ["40f6bbd07b1f", "db020be624ef", "normal", "What it actually requires: A defined release and rollback plan"],
  ["b44c6daa6dae", "c9ef668e716e", "normal", "What gets skipped, and the cost: Skipped by treating deployment as an afterthought; costs show up as downtime"],
  ["2dbd874b9a56", "765ec49e0fd9", "h3", "Maintenance"],
  ["bb96e4aefd67", "f7a6c6baccfc", "normal", "What it actually requires: An agreed plan for fixes, updates, and support"],
  ["d24a72cbb79e", "bc8704b89ad4", "normal", "What gets skipped, and the cost: Skipped by assuming the project ends at launch"],
];

const matchesSource = (block, [key, spanKey, style, text]) =>
  block?._type === "block" && block._key === key &&
  block.style === style && !block.listItem &&
  Array.isArray(block.markDefs) && block.markDefs.length === 0 &&
  Array.isArray(block.children) && block.children.length === 1 &&
  block.children[0]?._type === "span" && block.children[0]._key === spanKey &&
  block.children[0].text === text &&
  Array.isArray(block.children[0].marks) && block.children[0].marks.length === 0;

// Recover only this article's observed six-row comparison. Keep the original
// blocks by reference so their wording, marks and heading IDs remain intact.
export const presentDevelopmentStagesArticle = (body, slug) => {
  if (slug !== SLUG || !Array.isArray(body) ||
    body.some((block) => block?._key === WORKSHEET_KEY)) return body;
  const start = body.findIndex((block) => block?._key === SOURCE[0][0]);
  if (start < 0) return body;
  const blocks = body.slice(start, start + SOURCE.length);
  if (blocks.length !== SOURCE.length || blocks.some((block, index) =>
    !matchesSource(block, SOURCE[index]) ||
    body.filter((candidate) => candidate?._key === SOURCE[index][0]).length !== 1
  )) return body;

  const headers = ["Stage", "What it actually requires", "What gets skipped, and the cost"].map((text, index) => ({
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
      label: "Software development stages, requirements and the cost of skipped work",
      headers,
      rows,
    },
    ...body.slice(start + SOURCE.length),
  ];
};
