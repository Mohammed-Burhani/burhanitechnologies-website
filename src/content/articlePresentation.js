const PRESENTATION_SLUG =
  "beyond-pretty-why-strategic-ui-ux-design-is-your-product-s-most-important-feature";
const CLOUD_PRESENTATION_SLUG =
  "beyond-the-server-room-how-cloud-solutions-power-modern-business-resilience";
const AZURE_PRESENTATION_SLUG =
  "custom-software-development-with-devops-on-azure-cloud";

// These exact CMS spans contain headings stored as bold paragraph text.
// Keep this correction local to the observed articles; never infer headings
// from arbitrary bold copy or change the published CMS document.
const HEADINGS = new Map([
  ["88dc0a3751e9", ["8abdf007f9fd", "h2", "Demystifying the Acronyms: UI vs. UX"]],
  ["e15224e002bd", ["f9f612e189b5", "h3", "UX (User Experience) Design"]],
  ["8798f6e0be08", ["3cac85ab7166", "h3", "UI (User Interface) Design"]],
  ["11f20462e8c1", ["1c557841aa48", "h3", "The Bottom Line"]],
  ["6aa36b17cb50", ["4c46d27b8ff5", "h2", "The Tangible Business Value of Great UI/UX"]],
  ["c027922cb2eb", ["496ef51c9e65", "h3", "1. Increases User Adoption and Retention"]],
  ["1cb2b3406791", ["14efc0029270", "h3", "2. Reduces Development Costs and Rework"]],
  ["4e927e515051", ["50fe8d6c1eba", "h3", "3. Strengthens Brand Perception and Trust"]],
  ["8b6cfb20b5a7", ["9172a19e5e87", "h3", "4. Boosts Conversion Rates"]],
  ["f7738a2c9ae3", ["0aeb9c71ae6a", "h2", "Is Strategic Design What Your Product Is Missing?"]],
  ["43e91fc3b291", ["82b0654bde06", "h2", "Our Design Philosophy: Built Around Your User"]],
  ["54c3c8d39da7", ["71f5cc7d9ef0", "h3", "1. Empathize (Research & Discovery)"]],
  ["ab4015af7e23", ["e8288f72cab3", "h3", "2. Define (Strategy & Wireframing)"]],
  ["cf4952527526", ["52af1ed04928", "h3", "3. Ideate (UI Design & Prototyping)"]],
  ["b1f1360ce8ac", ["a8702e64e742", "h3", "4. Test (Feedback & Iteration)"]],
  ["e72b37fd6a82", ["eb5bed2b0475", "h3", "Result?"]],
  ["a0879921c742", ["30edaf6b83e0", "h2", "Your Product's Success Starts with Design"]],
  ["1c2e2ebb6849", ["e4c1e8e642ab", "h2", "Ready to Build Something Users Love?"]],
]);

const CLOUD_HEADINGS = new Map([
  ["5f12f9f27ae2", ["ce777b610c25", "h2", "The Difference That Delivers a Competitive Edge"]],
  ["a0fa9e0bc69e", ["01d5a382ecae", "h2", "Key Business Benefits of Migrating to the Cloud"]],
  ["45d3ba422769", ["ce5a7dcea2db", "h3", "1. Significant Cost Savings"]],
  ["0b4bb0cf7fbc", ["ac8c96d60ed4", "h3", "2. Ironclad Security and Compliance"]],
  ["f3dc1fb42dca", ["71caf751b2c3", "h3", "3. Unbreakable Business Continuity and Disaster Recovery"]],
  ["127bc46bd995", ["3dada43a0e5c", "h3", "4. Unmatched Flexibility and Agility"]],
  ["7f1b845f5c7e", ["5ebce2e8e370", "h3", "5. Enhanced Collaboration and Global Accessibility"]],
  ["5733f405342b", ["5bb8daa47ec0", "h2", "Are Cloud Solutions Right for Your Business?"]],
  ["8e6c84475504", ["ea6476db7717", "h2", "Our Proven Path to a Future-Ready Cloud Infrastructure"]],
  ["6f669320decf", ["3bfd0f0fc957", "h2", "Ready to Leave Legacy IT Behind?"]],
]);

const AZURE_HEADINGS = new Map([
  ["04fbe9172f4b", ["80bf60206700", "h2", "Custom Software Development - What’s the Big Deal?"]],
  ["83a8b08fbadd", ["80bf60206700", "h3", "There’s more, too:"]],
  ["8141f169f154", ["80bf60206700", "h2", "Why DevOps Matters"]],
  ["b95c2c117fec", ["80bf60206700", "h2", "Why Pick Azure Cloud?"]],
  ["84bc814ac1fe", ["80bf60206700", "h2", "How the Process Works at Burhani Technologies"]],
]);

const textOf = (children) => children.map((child) => child.text).join("");

// Slice only text, retaining each span's marks and every block's markDefs.
const sliceSpans = (children, start, end) => {
  let offset = 0;
  return children.flatMap((child) => {
    const childStart = offset;
    offset += child.text.length;
    const from = Math.max(start, childStart);
    const to = Math.min(end, offset);
    return from < to
      ? [{ ...child, text: child.text.slice(from - childStart, to - childStart) }]
      : [];
  });
};

const trimRange = (text, start, end) => {
  while (start < end && /\s/u.test(text[start])) start += 1;
  while (end > start && /\s/u.test(text[end - 1])) end -= 1;
  return [start, end];
};

const structureParagraph = (block) => {
  const text = textOf(block.children);
  const ranges = [];
  let start = 0;
  let paragraphStart = 0;

  const addParagraph = (end) => {
    const [from, to] = trimRange(text, paragraphStart, end);
    if (from < to) ranges.push({ start: from, end: to });
  };

  // A leading literal bullet is unambiguous here. Convert only its marker
  // into list structure; retain punctuation, wording and inline marks.
  for (const line of text.split("\n")) {
    const end = start + line.length;
    const bullet = /^[\t ]*•[\t ]+/u.exec(line);
    if (bullet) {
      addParagraph(start);
      const [from, to] = trimRange(text, start + bullet[0].length, end);
      if (from < to) ranges.push({ start: from, end: to, listItem: "bullet" });
      paragraphStart = end + 1;
    } else if (!line.trim()) {
      addParagraph(start);
      paragraphStart = end + 1;
    }
    start = end + 1;
  }
  addParagraph(text.length);

  if (ranges.length === 1 && !ranges[0].listItem) {
    const range = ranges[0];
    if (range.start === 0 && range.end === text.length) return [block];
    return [{ ...block, children: sliceSpans(block.children, range.start, range.end) }];
  }

  return ranges.map((range) => ({
    ...block,
    _key: `${block._key}-${range.listItem ? "li" : "p"}-${range.start}`,
    children: sliceSpans(block.children, range.start, range.end),
    ...(range.listItem ? { listItem: range.listItem, level: 1 } : {}),
  }));
};

const normalizeBlock = (block, headings) => {
  if (
    block?._type !== "block" ||
    block.style !== "normal" ||
    block.listItem ||
    !Array.isArray(block.children) ||
    block.children.some((child) => child._type !== "span" || typeof child.text !== "string")
  ) return [block];

  const output = [];
  let pending = [];
  let part = 0;
  const flush = () => {
    if (pending.length) {
      output.push(...structureParagraph({
        ...block,
        _key: `${block._key}-part-${part}`,
        children: pending,
      }));
      pending = [];
      part += 1;
    }
  };
  const hasHeading = block.children.some((child) => {
    const heading = headings.get(child._key);
    return heading && heading[0] === block._key &&
      heading[2] === child.text.trim() && child.marks?.includes("strong");
  });
  if (!hasHeading) return structureParagraph(block);

  for (const child of block.children) {
    const heading = headings.get(child._key);
    if (heading && heading[0] === block._key &&
      heading[2] === child.text.trim() && child.marks?.includes("strong")) {
      flush();
      output.push({
        ...block,
        _key: `${block._key}-heading-${child._key}`,
        style: heading[1],
        children: [{ ...child, text: child.text.trim() }],
      });
    } else {
      pending.push(child);
    }
  }
  flush();
  return output;
};

export const normalizeArticleBody = (body, slug) => {
  const headings = slug === PRESENTATION_SLUG ? HEADINGS :
    slug === CLOUD_PRESENTATION_SLUG ? CLOUD_HEADINGS :
    slug === AZURE_PRESENTATION_SLUG ? AZURE_HEADINGS : null;
  if (!headings || !Array.isArray(body)) return body;
  return body.flatMap((block) => normalizeBlock(block, headings));
};
