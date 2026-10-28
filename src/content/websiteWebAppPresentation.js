const SLUG = "your-website-is-great-but-is-it-actually-helping-you-run-your-business";
const SOURCE_LENGTH = 69;
const HEADINGS = [
  [7, "a9a225586728", "h1", "h2", [
    ["2d7764999daa", "\n", []],
    ["dbd8fc300629", "What's a Web App?", ["strong"]],
  ]],
  [26, "790f6bcbb09f", "h1", "h2", [
    ["625005027c66", "Why Would Your Business Need One?", ["strong"]],
    ["07d19e00a3b7", "\n\n", []],
  ]],
  [28, "067fe710b620", "normal", "h3", [
    ["398f145c6231", "\n1. All Your Information in One Place\n\n", ["strong"]],
  ]],
  [32, "1068555eca58", "normal", "h3", [
    ["64850f0886d5", "\n2. Let the Computer Do the Boring Stuff\n\n", ["strong"]],
  ]],
  [36, "62e1a2a21750", "normal", "h3", [
    ["9b3175c2cb0d", "\n3. It Grows With You", ["strong"]],
  ]],
  [40, "a50b06c64f1b", "normal", "h3", [
    ["2cf5245663e0", "\n4. Your Data Stays Safe", ["strong"]],
  ]],
  [44, "4149dd75af89", "normal", "h3", [
    ["607e1a93fa29", "\n5. Works on Any Device", ["strong"]],
  ]],
  [48, "541e364ddc74", "h1", "h2", [
    ["03e4ed115e7e", "\n\n", []],
    ["37ca54051a65", "Do You Actually Need a Web App?", ["strong"]],
  ]],
  [55, "25784334e05f", "h1", "h2", [
    ["21dee16f036a", "\n\n", []],
    ["8f7526e36022", "How We Build It (Step by Step)", ["strong", "underline"]],
  ]],
  [56, "598561225f50", "normal", "h3", [
    ["15f30b9180b2", "\n", ["strong"]],
    ["a6bd4a9cd796", "Step 1: We Listen", ["em"]],
  ]],
  [58, "6c309c26076c", "normal", "h3", [
    ["1df921435dad", "\n", ["strong"]],
    ["9d9830af8112", "Step 2: We Design", ["em"]],
  ]],
  [60, "34daa79f7ba9", "normal", "h3", [
    ["ab17e665ffe0", "\n", ["strong"]],
    ["bcdce9361e9b", "Step 3: We Build", ["em"]],
  ]],
  [62, "e4eb9ad10f04", "normal", "h3", [
    ["bb69df866309", "\n", ["strong"]],
    ["4595aa6ae3cf", "Step 4: We Launch and Support", ["em"]],
  ]],
  [64, "29d44119c90c", "h1", "h2", [
    ["27d22e730df4", "\n\n", []],
    ["1532cf2170ce", "Let's Make Your Work Easier", ["strong"]],
  ]],
];

const matchesHeading = (block, [, key, style, , spans]) =>
  block?._key === key && block._type === "block" && block.style === style &&
  block.listItem === undefined && block.level === undefined &&
  Array.isArray(block.markDefs) && block.markDefs.length === 0 &&
  Array.isArray(block.children) && block.children.length === spans.length &&
  block.children.every((span, index) => {
    const [spanKey, text, marks] = spans[index];
    return span?._key === spanKey && span._type === "span" && span.text === text &&
      Array.isArray(span.marks) && JSON.stringify(span.marks) === JSON.stringify(marks);
  });

// These exact published headings use h1 or paragraph styles, preventing the
// article outline from representing its sections. Change only their styles;
// retain original blocks, spans, whitespace, marks, annotations and anchors.
export const presentWebsiteWebAppArticle = (body, slug) => {
  if (slug !== SLUG || !Array.isArray(body) || body.length !== SOURCE_LENGTH ||
    new Set(body.map((block) => block?._key)).size !== body.length ||
    HEADINGS.some((heading) => !matchesHeading(body[heading[0]], heading))) return body;

  const styles = new Map(HEADINGS.map(([index, , , style]) => [index, style]));
  return body.map((block, index) => styles.has(index)
    ? { ...block, style: styles.get(index) }
    : block);
};
