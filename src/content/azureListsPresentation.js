const AZURE_SLUG = "custom-software-development-with-devops-on-azure-cloud";

// Match only the audited source spans after heading/paragraph normalization.
// A changed item leaves its whole list group untouched rather than inferring
// structure from arbitrary underlined labels or paragraph wording.
const LIST_GROUPS = [
  {
    listItem: "bullet",
    items: [
      {
        key: "80bf60206700-part-2-p-2",
        spans: [
          ["8e8c8ecc06f0", "Scalability", ["underline"]],
          ["6219cdbeda5e", ": When your company grows, your software grows along with you. Need new features? Add them - no need to start from scratch.", []],
        ],
      },
      {
        key: "80bf60206700-part-2-p-138",
        spans: [
          ["5476a6aa7733", "Security", ["underline"]],
          ["e0aa84f386ae", ": Hackers love targeting widely used software. Custom solutions use unique controls and systems that are much tougher to crack.", []],
        ],
      },
      {
        key: "80bf60206700-part-2-p-275",
        spans: [
          ["79004f5bd2e1", "Integration", ["underline"]],
          ["f47dabe19895", ": Custom software brings all your tools together - ERP, CRM, cloud services - so data moves where it should. You cut out double entries and reduce errors.", []],
        ],
      },
    ],
  },
  {
    listItem: "number",
    items: [
      {
        key: "80bf60206700-part-5-p-116",
        spans: [
          ["a71cea31f097", "Understand & Plan", ["underline"]],
          ["235d6ca03426", ": We dig into how your business works and set clear targets.", []],
        ],
      },
      {
        key: "80bf60206700-part-5-p-195",
        spans: [
          ["da4d2f01890b", "Design & Build", ["underline"]],
          ["5cae96a8499d", ": We sketch out a simple, user-friendly system and build it with scalable, clean code.", []],
        ],
      },
      {
        key: "80bf60206700-part-5-p-297",
        spans: [
          ["35abfd09bb9f", "DevOps & Deploy", ["underline"]],
          ["37d402fd0703", ": Automated testing checks everything works. With Azure ", []],
          ["f7976ee8bb0c", "DevOps", ["f699cd4a28c5"]],
          ["409bd8c3aa17", ", updates roll out smoothly and often.", []],
        ],
      },
      {
        key: "80bf60206700-part-5-p-414",
        spans: [
          ["d8bef4a94e14", "Maintain & Support", ["underline"]],
          ["13dee425f55a", ": Our team keeps an eye on the system, handles updates, and makes sure everything stays fast, stable, and secure.", []],
        ],
      },
    ],
  },
];

const matchesItem = (block, item) =>
  block?._type === "block" && block._key === item.key &&
  block.style === "normal" && !block.listItem &&
  Array.isArray(block.children) && block.children.length === item.spans.length &&
  block.children.every((span, index) => {
    const [key, text, marks] = item.spans[index];
    return span?._type === "span" && span._key === key && span.text === text &&
      Array.isArray(span.marks) && span.marks.length === marks.length &&
      span.marks.every((mark, markIndex) => mark === marks[markIndex]);
  });

export const structureAzureLists = (body, slug) => {
  if (slug !== AZURE_SLUG || !Array.isArray(body)) return body;
  const lists = new Map();
  for (const group of LIST_GROUPS) {
    const start = body.findIndex((block) => block?._key === group.items[0].key);
    if (start < 0 || !group.items.every((item, index) => matchesItem(body[start + index], item))) continue;
    group.items.forEach((_, index) => lists.set(start + index, group.listItem));
  }
  if (!lists.size) return body;
  return body.map((block, index) => lists.has(index)
    ? { ...block, listItem: lists.get(index), level: 1 }
    : block);
};
