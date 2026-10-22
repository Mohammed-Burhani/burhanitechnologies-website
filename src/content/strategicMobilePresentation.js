const SLUG = "why-your-business-needs-a-strategic-mobile-app";

// The observed article starts at H4 below its hero H1. Recover its section
// hierarchy only when every original heading matches this exact CMS snapshot.
const HEADINGS = [
  ["d7bc323381b9", "h4", "h2", [["ac9422dbf893", "Beyond the Browser: Why Your Business Needs a Strategic Mobile App", ["strong"]]]],
  ["287faa3f8988", "h3", "h2", [["18d913be57a6", "\n\nThe Limits of a Mobile Website", ["strong"]]]],
  ["a4a10d672f59", "h3", "h2", [["71343f64956c", "\n\nWhy a Custom Mobile App Is Worth It", ["strong"]]]],
  ["56e69f95b2d7", "h4", "h3", [["787d38f311a8", "\n1. ", []], ["3805307947a0", "Stronger Customer Engagement", ["strong"]]]],
  ["31316e263b70", "h4", "h3", [["e3dbe7a5aa3a", "\n2. ", []], ["ead6aa89fd12", "Better User Experience (UX)", ["strong"]]]],
  ["cf87ea9e1498", "h4", "h3", [["87f8c848273f", "\n3. ", []], ["a0c845755328", "New Ways to Earn Revenue", ["strong"]]]],
  ["78dba5aaf08c", "h4", "h3", [["76a3ea5001fe", "\n4. ", []], ["37248354ce3e", "Improved Operational Efficiency", ["strong"]]]],
  ["f8d814d56fba", "h4", "h3", [["6ff68db6874a", "\n5. ", []], ["66e8d7c9e724", "A Clear Competitive Edge", ["strong"]]]],
  ["52cf89f0f370", "h3", "h2", [["01a37d3f737a", "\n\nOur Process: From Idea to Impact", ["strong"]]]],
  ["b38a027e692f", "h3", "h2", [["047d4ebe3a05", "\nIs It Time to Go Mobile?", ["strong"]]]],
];

const matchesHeading = (block, [, style, , spans]) =>
  block?._type === "block" && block.style === style &&
  !block.listItem && block.level === undefined &&
  Array.isArray(block.markDefs) && block.markDefs.length === 0 &&
  Array.isArray(block.children) && block.children.length === spans.length &&
  block.children.every((span, index) =>
    span?._type === "span" && span._key === spans[index][0] &&
    span.text === spans[index][1] &&
    Array.isArray(span.marks) && span.marks.length === spans[index][2].length &&
    span.marks.every((mark, markIndex) => mark === spans[index][2][markIndex])
  );

export const presentStrategicMobileArticle = (body, slug) => {
  if (slug !== SLUG || !Array.isArray(body)) return body;

  let previousIndex = -1;
  for (const heading of HEADINGS) {
    const matches = body.flatMap((block, index) =>
      block?._key === heading[0] ? [index] : []
    );
    if (matches.length !== 1 || matches[0] <= previousIndex ||
      !matchesHeading(body[matches[0]], heading)) return body;
    previousIndex = matches[0];
  }

  const styles = new Map(HEADINGS.map(([key, , style]) => [key, style]));
  return body.map((block) => styles.has(block?._key)
    ? { ...block, style: styles.get(block._key) }
    : block
  );
};
