const SLUG = "on-premise-vs-cloud";
const FAQ_SECTION_KEY = "80a95ff9c7ca";
const FAQ_SECTION_SPAN_KEY = "87033ef08c65";
const QUESTIONS = [
  ["c7bf0d736c5d", "0dc42b80894f", "What is the difference between on-premise and cloud?"],
  ["97ce7547b4fe", "a02e49fd1d8e", "What is the difference between cloud computing vs on premise pricing?"],
  ["b27695f06f49", "c9e229dcaf5f", "Is cloud always cheaper than on-premise?"],
  ["a3ce7191efd8", "c104bb0572b5", "What is a hybrid cloud approach?"],
  ["f6900d1d5e7a", "73c48c845f19", "Does Indian law require business data to stay in India?"],
  ["cdcce4c712c0", "e9c14c6943b6", "What is the difference between lift and shift and re-architecture?"],
];

const isObservedBlock = (block, key, spanKey, text, style, marks) =>
  block?._key === key && block._type === "block" && block.style === style &&
  !block.listItem && block.level === undefined &&
  Array.isArray(block.markDefs) && block.markDefs.length === 0 &&
  Array.isArray(block.children) && block.children.length === 1 &&
  block.children[0]?._key === spanKey && block.children[0]._type === "span" &&
  block.children[0].text === text && Array.isArray(block.children[0].marks) &&
  block.children[0].marks.length === marks.length &&
  block.children[0].marks.every((mark, index) => mark === marks[index]);

// These six published FAQ labels are bold paragraphs beneath one h2.
// Change only their semantics; retain source keys, words, spans and marks.
export const presentOnPremiseCloudArticle = (body, slug) => {
  if (slug !== SLUG || !Array.isArray(body)) return body;
  const start = body.findIndex((block) => block?._key === FAQ_SECTION_KEY);
  if (start < 0 || body.filter((block) => block?._key === FAQ_SECTION_KEY).length !== 1 ||
    !isObservedBlock(body[start], FAQ_SECTION_KEY, FAQ_SECTION_SPAN_KEY,
      "FAQs on On-Premise vs Cloud", "h2", []) ||
    QUESTIONS.some(([key, spanKey, text], index) =>
      body.filter((block) => block?._key === key).length !== 1 ||
      !isObservedBlock(body[start + 1 + index * 2], key, spanKey, text, "normal", ["strong"]))
  ) return body;

  const keys = new Set(QUESTIONS.map(([key]) => key));
  return body.map((block) => keys.has(block?._key) ? { ...block, style: "h3" } : block);
};
