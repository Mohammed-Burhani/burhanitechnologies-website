const LEGACY_SLUGS = new Set([
  "why-your-business-needs-a-strategic-mobile-app",
  "your-website-is-great-but-is-it-actually-helping-you-run-your-business",
]);

// These two legacy articles use boundary newlines as block spacers. Their
// semantic paragraph/heading margins already supply that space. Trim only
// the combined block boundary, retaining intentional breaks between words
// and every span's key, decorations and link annotations.
export const trimLegacyArticleSpacing = (body, slug) => {
  if (!LEGACY_SLUGS.has(slug) || !Array.isArray(body)) return body;
  let changed = false;
  const output = body.map((block) => {
    if (block?._type !== "block" ||
      !["normal", "h1", "h2", "h3", "h4"].includes(block.style) ||
      !Array.isArray(block.children) || block.children.some((span) =>
        span?._type !== "span" || typeof span.text !== "string"
      )) return block;
    const text = block.children.map((span) => span.text).join("");
    if (!text.trim()) return block;
    const start = text.length - text.trimStart().length;
    const end = text.trimEnd().length;
    if (start === 0 && end === text.length) return block;
    let offset = 0;
    const children = block.children.map((span) => {
      const from = Math.max(0, Math.min(span.text.length, start - offset));
      const to = Math.max(0, Math.min(span.text.length, end - offset));
      offset += span.text.length;
      const value = span.text.slice(from, to);
      return value === span.text ? span : { ...span, text: value };
    });
    changed = true;
    return { ...block, children };
  });
  return changed ? output : body;
};
