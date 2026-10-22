const SLUG = "ux-design-process";
const WORKSHEET_KEY = "worksheet-ux-process";
const HEADINGS = [
  {
    "key": "719ef34a84fe",
    "span": "8b4b94d1224c",
    "text": "The standard stages. Most UX design process guides list the same core stages: research, define, wireframe, prototype, test, and handoff. That part isn't wrong. What's missing is what changes inside each stage once the product is opened all day, not once.",
    "label": "The standard stages."
  },
  {
    "key": "3cc07dab51b0",
    "span": "bf08fbbdcaea",
    "text": "Where daily use changes each one. A consumer app is judged on how quickly a new user figures it out. Daily-use software is judged on how fast a trained user gets through the same task for the thousandth time. That single shift changes almost every decision in the design process in UI UX work: what gets tested, what gets prioritized, and what \"done\" even means. This is really where the UI UX process for operational software splits off from the consumer playbook.",
    "label": "Where daily use changes each one."
  },
  {
    "key": "48e377475ba1",
    "span": "935d8b75a76c",
    "text": "Research: observe the actual environment. Don't just interview the person who'll use the software. Watch where they'll actually use it: a floor, an event entrance, a hospital front desk. Device conditions, permissions, and training all shape what the interface needs to do before a single screen gets designed. This is also where a real user journey gets mapped, not the one assumed from a desk, but the one that actually happens on the floor, interruptions, gloves, and all.",
    "label": "Research: observe the actual environment."
  },
  {
    "key": "40ea30df22df",
    "span": "92717aeec184",
    "text": "Information architecture: structure around the task, not the menu. For software used constantly, the structure should follow the task someone repeats most, not a tidy list of every feature the product has. A feature that's used once a month can sit two taps deeper than one that's used fifty times a day, even if that seems unbalanced on a feature list.",
    "label": "Information architecture: structure around the task, not the menu."
  },
  {
    "key": "fe238496cab0",
    "span": "215695b510ab",
    "text": "Wireframe: low-fidelity structure before visual design. A wireframe settles the structure before anyone worries about colour or polish. Most teams sketch this in a tool like Figma, since it's fast to adjust before development starts. For daily-use software, this stage decides how many taps a repeated action takes, which matters more than how the button looks.",
    "label": "Wireframe: low-fidelity structure before visual design."
  },
  {
    "key": "fa7f1531467c",
    "span": "cdbef5d46ba4",
    "text": "Interactive prototype: test the flow, not just the screen. An interactive prototype should let someone move through an actual task, not just look at a static screen. That's the only way to catch a clunky multi-step flow before it gets built.",
    "label": "Interactive prototype: test the flow, not just the screen."
  },
  {
    "key": "1535cddb4c1b",
    "span": "7f46e4b33a87",
    "text": "Usability testing: measure repeated-task speed, not just comprehension. For a consumer product, usability testing mostly asks: did they understand it? For daily-use software, it also has to ask: how fast can they do it the fiftieth time, not just the first?",
    "label": "Usability testing: measure repeated-task speed, not just comprehension."
  },
  {
    "key": "2dae9347f2fa",
    "span": "432cc10e7d42",
    "text": "Design handoff: what a developer actually needs. A design handoff isn't just a finished screen. It's the states, the edge cases, and the specs a developer needs to build it correctly the first time, without guessing.",
    "label": "Design handoff: what a developer actually needs."
  },
  {
    "key": "ea5ebae47317",
    "span": "8f464066bc74",
    "text": "Why skipping a stage costs more later. Teams under time pressure often compress research into a single conversation, or skip straight from wireframe to build. For a consumer app, that's a real but survivable risk. For daily-use software, skipping research means the interface gets designed for a desk instead of a floor, and every one of the ux design steps that follows inherits that mistake. Fixing it after launch means retraining people who already learned the wrong shortcuts.",
    "label": "Why skipping a stage costs more later."
  }
];
const TABLE = [
  {
    "key": "f86cf80a52e1",
    "span": "34ade9791808",
    "style": "h3",
    "text": "Onboarding"
  },
  {
    "key": "92a8f65bca9a",
    "span": "ada147d00b2b",
    "style": "normal",
    "text": "Product used occasionally: A guided walkthrough on first open"
  },
  {
    "key": "ceaabf9a7493",
    "span": "47b6559a9098",
    "style": "normal",
    "text": "Software used all day: Minimal; training happens once, the interface should reward memorized shortcuts"
  },
  {
    "key": "25534e72d19e",
    "span": "a2465b7132d6",
    "style": "h3",
    "text": "Navigation depth"
  },
  {
    "key": "5d27ffd94c76",
    "span": "8705be992efd",
    "style": "normal",
    "text": "Product used occasionally: Options can sit inside menus"
  },
  {
    "key": "078cee539e9c",
    "span": "ed5c3a02958f",
    "style": "normal",
    "text": "Software used all day: Frequent actions surface in one or two taps"
  },
  {
    "key": "4e36bc19f9ad",
    "span": "b46a5afbde6a",
    "style": "h3",
    "text": "Error handling"
  },
  {
    "key": "d56751239789",
    "span": "e01554828d34",
    "style": "normal",
    "text": "Product used occasionally: A friendly explanation is enough"
  },
  {
    "key": "d582917f81e3",
    "span": "7e89c9904f2e",
    "style": "normal",
    "text": "Software used all day: Needs a fast recovery path, since one person hits the same error repeatedly"
  },
  {
    "key": "2e50e39ad670",
    "span": "355bd7a55517",
    "style": "h3",
    "text": "Visual polish"
  },
  {
    "key": "36293349784f",
    "span": "9debd2729f2b",
    "style": "normal",
    "text": "Product used occasionally: High priority, first impression matters"
  },
  {
    "key": "f487b7a0be95",
    "span": "e51fc597135b",
    "style": "normal",
    "text": "Software used all day: Secondary to speed and legibility under real device conditions"
  }
];
const HEADERS = ["Decision", "Product used occasionally", "Software used all day"];

const matchesSource = (block, expected, style = "normal") =>
  block?._type === "block" && block._key === expected.key &&
  block.style === style && !block.listItem && !block.level &&
  Array.isArray(block.markDefs) && block.markDefs.length === 0 &&
  Array.isArray(block.children) && block.children.length === 1 &&
  block.children[0]?._type === "span" &&
  block.children[0]._key === expected.span &&
  block.children[0].text === expected.text &&
  Array.isArray(block.children[0].marks) && block.children[0].marks.length === 0;

// Recover only the nine observed subsection prefixes and four comparison rows.
// Fail closed on changed keys, text, marks or order; preserve source table blocks
// and existing heading IDs. The published CMS body remains untouched.
export const presentUxProcessArticle = (body, slug) => {
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
    body.some((block) => block?._key === "ux-process-heading-" + HEADINGS[index].key)
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
      label: "Designed for Once vs. Designed for All Day, Side by Side",
      headers,
      rows,
    }];
    if (index > tableStart && index < tableStart + TABLE.length) return [];
    const heading = headingByKey.get(block?._key);
    if (!heading) return [block];
    const span = block.children[0];
    return [
      { ...block, _key: "ux-process-heading-" + block._key, style: "h3",
        children: [{ ...span, text: span.text.slice(0, heading.label.length) }] },
      { ...block, children: [{ ...span, text: span.text.slice(heading.label.length) }] },
    ];
  });
};
