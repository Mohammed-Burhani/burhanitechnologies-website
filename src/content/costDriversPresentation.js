const SLUG = "custom-software-development-cost";
const LIST_KEY = "cost-drivers-916f9a58aa2f";
const ITEMS = [
  {
    key: "916f9a58aa2f",
    prefix: "1. How much discovery the project needs before anything gets built.",
    text: "1. How much discovery the project needs before anything gets built. A five-screen internal tool needs a fraction of the discovery a system replacing three existing processes does. Discovery time isn't overhead; it's what prevents the mid-project rework that shows up when a decision gets made without it. Skipping this step doesn't remove the cost of finding out later; it just moves it and makes it bigger.",
  },
  {
    key: "c09fbf0344e8",
    prefix: "2. How the delivery is billed, and what happens when scope changes.",
    text: "2. How the delivery is billed, and what happens when scope changes. Fixed price assumes the scope is locked before work starts, and works well when it genuinely is. Milestone payment adapts as scope gets confirmed stage by stage, which suits a project where some decisions can't reasonably be made up front. Either can work. What matters is knowing which one you're actually in, and what happens the moment scope shifts under it.",
  },
  {
    key: "693aad2f9caa",
    prefix: "3. What the system has to talk to.",
    text: "3. What the system has to talk to. A standalone tool costs less to build than one syncing with an existing ERP, CRM, or payment system, because every integration adds its own testing surface and its own way to fail. A system with no integrations and a system with four don't belong in the same estimate, even if the number of screens looks similar on paper.",
  },
  {
    key: "1f9905bf57cd",
    prefix: "4. What it costs to own after launch.",
    text: "4. What it costs to own after launch. Licence costs and a maintenance retainer after launch are often left out of the headline number entirely. A custom software development cost estimate that stops at launch day is only telling you about the smaller part of what you'll actually spend across the system's working life. Over a few years, ownership cost on an actively used system routinely adds up to more than the build itself did, which is exactly why it belongs in the conversation up front rather than as a surprise a year in.",
  },
];
const BEFORE = {
  key: "601a0c951e04",
  text: "The Four Things That Move the Estimate",
};
const AFTER = {
  key: "8f6d6b9abf52",
  text: "The Four Cost Drivers, Side by Side",
};

const textOf = (block, style) => {
  if (block?._type !== "block" || block.style !== style || block.listItem ||
    !Array.isArray(block.children) || !block.children.length ||
    block.children.some((span) => span?._type !== "span" || typeof span.text !== "string")) {
    return null;
  }
  return block.children.map((span) => span.text).join("");
};

// Group only the exact published sequence observed in this article. Keep
// every original block, span, mark, reference and literal numeral intact;
// the article renderer supplies the ordered-list semantics. Changed copy
// falls back to its original presentation until deliberately reviewed.
export const structureCostDrivers = (body, slug) => {
  if (slug !== SLUG || !Array.isArray(body) ||
    body.some((block) => block?._key === LIST_KEY)) return body;

  const start = body.findIndex((block) => block?._key === ITEMS[0].key);
  if (start < 1) return body;

  const protectedKeys = [BEFORE.key, ...ITEMS.map((item) => item.key), AFTER.key];
  if (protectedKeys.some((key) => body.filter((block) => block?._key === key).length !== 1)) return body;

  const before = body[start - 1];
  const after = body[start + ITEMS.length];
  if (before?._key !== BEFORE.key || textOf(before, "h2") !== BEFORE.text ||
    after?._key !== AFTER.key || textOf(after, "h2") !== AFTER.text) return body;

  const items = body.slice(start, start + ITEMS.length);
  if (items.length !== ITEMS.length || items.some((block, index) => {
    const expected = ITEMS[index];
    const text = textOf(block, "normal");
    return block?._key !== expected.key || text === null ||
      !text.startsWith(expected.prefix) || text !== expected.text;
  })) return body;

  return [
    ...body.slice(0, start),
    { _type: "articleNumberedList", _key: LIST_KEY, items },
    ...body.slice(start + ITEMS.length),
  ];
};
