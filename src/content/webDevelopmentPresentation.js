const SLUG = "web-development-company-chennai";
const SOURCE_LENGTH = 89;
const TABLES = [
  {
    key: "worksheet-web-portfolio",
    label: "Web development portfolio scorecard",
    start: 3,
    headers: ["Test","Good result","How to run it","What it shows"],
    blocks: [
      ["p5b003","h3",[["p5b003s00","Largest Contentful Paint",[]]]],
      ["p5b004","normal",[["p5b004s00","Good result:",["strong"]],["p5b004s01"," 2.5 seconds or less",[]]]],
      ["p5b005","normal",[["p5b005s00","How to run it:",["strong"]],["p5b005s01"," Field data for the site's URL",[]]]],
      ["p5b006","normal",[["p5b006s00","What it shows:",["strong"]],["p5b006s01"," How fast the main content appears",[]]]],
      ["p5b007","h3",[["p5b007s00","Interaction to Next Paint",[]]]],
      ["p5b008","normal",[["p5b008s00","Good result:",["strong"]],["p5b008s01"," 200 milliseconds or less",[]]]],
      ["p5b009","normal",[["p5b009s00","How to run it:",["strong"]],["p5b009s01"," Field data for the site's URL",[]]]],
      ["p5b00a","normal",[["p5b00as00","What it shows:",["strong"]],["p5b00as01"," How fast the page responds to a tap or click",[]]]],
      ["p5b00b","h3",[["p5b00bs00","Cumulative Layout Shift",[]]]],
      ["p5b00c","normal",[["p5b00cs00","Good result:",["strong"]],["p5b00cs01"," 0.1 or less",[]]]],
      ["p5b00d","normal",[["p5b00ds00","How to run it:",["strong"]],["p5b00ds01"," Field data for the site's URL",[]]]],
      ["p5b00e","normal",[["p5b00es00","What it shows:",["strong"]],["p5b00es01"," Whether content jumps while loading",[]]]],
      ["p5b00f","h3",[["p5b00fs00","Accessibility check",[]]]],
      ["p5b010","normal",[["p5b010s00","Good result:",["strong"]],["p5b010s01"," Meets WCAG 2.2 Level AA criteria",[]]]],
      ["p5b011","normal",[["p5b011s00","How to run it:",["strong"]],["p5b011s01"," Keyboard-only walk plus an automated scan",[]]]],
      ["p5b012","normal",[["p5b012s00","What it shows:",["strong"]],["p5b012s01"," Whether the site works without a mouse",[]]]],
      ["p5b013","h3",[["p5b013s00","Mobile layout",[]]]],
      ["p5b014","normal",[["p5b014s00","Good result:",["strong"]],["p5b014s01"," Usable at phone width",[]]]],
      ["p5b015","normal",[["p5b015s00","How to run it:",["strong"]],["p5b015s01"," Open on a real phone",[]]]],
      ["p5b016","normal",[["p5b016s00","What it shows:",["strong"]],["p5b016s01"," Whether the design holds on a small screen",[]]]],
    ],
  },
  {
    key: "worksheet-web-handover",
    label: "Web development handover questions and warning signs",
    start: 31,
    headers: ["Handover item","Question to ask","Warning sign"],
    blocks: [
      ["p5b01f","h3",[["p5b01fs00","CMS handover",[]]]],
      ["p5b020","normal",[["p5b020s00","Question to ask:",["strong"]],["p5b020s01"," Are admin accounts created in our name?",[]]]],
      ["p5b021","normal",[["p5b021s00","Warning sign:",["strong"]],["p5b021s01"," Agency keeps the only admin login",[]]]],
      ["p5b022","h3",[["p5b022s00","Hosting ownership",[]]]],
      ["p5b023","normal",[["p5b023s00","Question to ask:",["strong"]],["p5b023s01"," Whose account hosts the site?",[]]]],
      ["p5b024","normal",[["p5b024s00","Warning sign:",["strong"]],["p5b024s01"," Hosting billed through the agency with no transfer terms",[]]]],
      ["p5b025","h3",[["p5b025s00","Domain access",[]]]],
      ["p5b026","normal",[["p5b026s00","Question to ask:",["strong"]],["p5b026s01"," Who is the registrant of record?",[]]]],
      ["p5b027","normal",[["p5b027s00","Warning sign:",["strong"]],["p5b027s01"," Domain registered to the agency",[]]]],
      ["p5b028","h3",[["p5b028s00","Staging environment",[]]]],
      ["p5b029","normal",[["p5b029s00","Question to ask:",["strong"]],["p5b029s01"," Is there a test copy before every release?",[]]]],
      ["p5b02a","normal",[["p5b02as00","Warning sign:",["strong"]],["p5b02as01"," Changes go straight to the live site",[]]]],
      ["p5b02b","h3",[["p5b02bs00","Analytics setup",[]]]],
      ["p5b02c","normal",[["p5b02cs00","Question to ask:",["strong"]],["p5b02cs01"," Is analytics in a property we own?",[]]]],
      ["p5b02d","normal",[["p5b02ds00","Warning sign:",["strong"]],["p5b02ds01"," Reports shared as screenshots only",[]]]],
      ["p5b02e","h3",[["p5b02es00","Accessibility check",[]]]],
      ["p5b02f","normal",[["p5b02fs00","Question to ask:",["strong"]],["p5b02fs01"," Will we receive a written check against WCAG 2.2 AA?",[]]]],
      ["p5b030","normal",[["p5b030s00","Warning sign:",["strong"]],["p5b030s01"," Accessibility described as a feature with no report",[]]]],
      ["p5b031","h3",[["p5b031s00","Scope change clause",[]]]],
      ["p5b032","normal",[["p5b032s00","Question to ask:",["strong"]],["p5b032s01"," How is a new page or integration priced?",[]]]],
      ["p5b033","normal",[["p5b033s00","Warning sign:",["strong"]],["p5b033s01"," Changes absorbed with no written price",[]]]],
    ],
  },
];

const matchesSourceBlock = (block, [key, style, spans]) =>
  block?._key === key && block._type === "block" && block.style === style &&
  block.listItem === undefined && block.level === undefined &&
  Array.isArray(block.markDefs) && block.markDefs.length === 0 &&
  Array.isArray(block.children) && block.children.length === spans.length &&
  block.children.every((span, index) => {
    const [spanKey, text, marks] = spans[index];
    return span?._key === spanKey && span._type === "span" && span.text === text &&
      Array.isArray(span.marks) && JSON.stringify(span.marks) === JSON.stringify(marks);
  });

// Restore only this article's two published comparisons. Original blocks remain
// intact inside cells, preserving wording, spans, marks and heading anchors.
// If either observed source shape changes, leave the entire body untouched.
export const presentWebDevelopmentArticle = (body, slug) => {
  if (slug !== SLUG || !Array.isArray(body) || body.length !== SOURCE_LENGTH ||
    TABLES.some((table) => body.some((block) => block?._key === table.key))) return body;
  const sourceKeys = body.map((block) => block?._key);
  if (TABLES.some((table) => table.blocks.some((expected, index) =>
    sourceKeys.filter((key) => key === expected[0]).length !== 1 ||
    !matchesSourceBlock(body[table.start + index], expected)
  ))) return body;

  const result = body.slice();
  for (const table of [...TABLES].reverse()) {
    const blocks = body.slice(table.start, table.start + table.blocks.length);
    const headers = table.headers.map((text, column) => ({
      _type: "block",
      _key: `${table.key}-header-${column}`,
      style: "normal",
      markDefs: [],
      children: [{
        _type: "span",
        _key: `${table.key}-header-span-${column}`,
        marks: [],
        text,
      }],
    }));
    const rows = [];
    for (let index = 0; index < blocks.length; index += headers.length) {
      rows.push({ heading: blocks[index], cells: blocks.slice(index + 1, index + headers.length) });
    }
    result.splice(table.start, blocks.length, {
      _type: "articleWorksheet", _key: table.key, label: table.label, headers, rows,
    });
  }
  return result;
};
