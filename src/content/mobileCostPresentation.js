const SLUG = "mobile-app-development-cost-india";
const WORKSHEET_KEY = "worksheet-mobile-cost-drivers";
const SOURCE = [
  {"key":"d2f1eb642541","style":"h3","spans":[{"key":"b91e5de2d88a","text":"App complexity","marks":[]}]},
  {"key":"255b2976017f","style":"normal","spans":[{"key":"909620bec7ac","text":"Why it moves the number: More screens and user roles mean more design and QA time","marks":[]}]},
  {"key":"3275472b02ec","style":"normal","spans":[{"key":"409b02f3b74c","text":"Question to ask: How many distinct user roles does the app need?","marks":[]}]},
  {"key":"f5f8b1d55336","style":"h3","spans":[{"key":"0d0b42045433","text":"Native vs. cross-platform","marks":[]}]},
  {"key":"89404365501f","style":"normal","spans":[{"key":"e49f561aa4bd","text":"Why it moves the number: Native means two codebases (Swift and Kotlin); React Native or Flutter share one","marks":[]}]},
  {"key":"bb70563d2092","style":"normal","spans":[{"key":"6ea4a5cfc688","text":"Question to ask: Does the app need a native-only capability, like heavy AR or real-time hardware access?","marks":[]}]},
  {"key":"24e870a88731","style":"h3","spans":[{"key":"2b9281838839","text":"Backend and integrations","marks":[]}]},
  {"key":"1a3cdde2ae15","style":"normal","spans":[{"key":"f3dbd01125b1","text":"Why it moves the number: A standalone app costs less than one syncing with an existing ERP or payment system","marks":[]}]},
  {"key":"5f8963e43813","style":"normal","spans":[{"key":"325552e82d91","text":"Question to ask: What does this app need to talk to?","marks":[]}]},
  {"key":"258a73f1d327","style":"h3","spans":[{"key":"ca0197fdc354","text":"Discovery phase","marks":[]}]},
  {"key":"7bb977629ab0","style":"normal","spans":[{"key":"c55fb09025b4","text":"Why it moves the number: Time spent mapping the workflow upfront reduces rework later","marks":[]}]},
  {"key":"b1f562408849","style":"normal","spans":[{"key":"26fc592d8d8c","text":"Question to ask: Is discovery scoped and priced separately, or folded into the estimate?","marks":[]}]},
  {"key":"9fac8d2c44af","style":"h3","spans":[{"key":"997bc5ac5acb","text":"Billing model","marks":[]}]},
  {"key":"0c4c733bf971","style":"normal","spans":[{"key":"eff4b42723b0","text":"Why it moves the number: Fixed price assumes a locked scope; milestone billing adapts as scope is confirmed","marks":[]}]},
  {"key":"35f0cffaef6b","style":"normal","spans":[{"key":"708dee5e8ced","text":"Question to ask: Is this fixed price or milestone billing, and what happens if scope changes?","marks":[]}]},
  {"key":"fcccd8809f4a","style":"h3","spans":[{"key":"6c717e0db76f","text":"Maintenance","marks":[]}]},
  {"key":"0806b84c3769","style":"normal","spans":[{"key":"8b7e7caac695","text":"Why it moves the number: Ongoing cost after launch is often left out of the headline number","marks":[]}]},
  {"key":"b841a3d9c858","style":"normal","spans":[{"key":"744312b73961","text":"Question to ask: What does a year of maintenance cost after launch?","marks":[]}]}
];

const matchesSource = (block, source) =>
  block?._type === "block" && block._key === source.key &&
  block.style === source.style && !block.listItem &&
  Array.isArray(block.markDefs) && block.markDefs.length === 0 &&
  Array.isArray(block.children) && block.children.length === source.spans.length &&
  block.children.every((span, index) => {
    const expected = source.spans[index];
    return span?._type === "span" && span._key === expected.key &&
      span.text === expected.text && Array.isArray(span.marks) &&
      span.marks.length === expected.marks.length &&
      span.marks.every((mark, markIndex) => mark === expected.marks[markIndex]);
  });

// Recover only the observed six-driver comparison referenced by this article.
// Reuse every original block, retaining its copy, spans, marks and heading ID.
export const presentMobileCostArticle = (body, slug) => {
  if (slug !== SLUG || !Array.isArray(body) ||
    body.some((block) => block?._key === WORKSHEET_KEY)) return body;
  const start = body.findIndex((block) => block?._key === SOURCE[0].key);
  if (start < 0) return body;
  const blocks = body.slice(start, start + SOURCE.length);
  if (blocks.length !== SOURCE.length || blocks.some((block, index) =>
    !matchesSource(block, SOURCE[index]) ||
    body.filter((candidate) => candidate?._key === SOURCE[index].key).length !== 1
  )) return body;

  const headers = ["Driver", "Why it moves the number", "Question to ask"].map((text, index) => ({
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
      label: "Six mobile app cost drivers and questions to ask",
      headers,
      rows,
    },
    ...body.slice(start + SOURCE.length),
  ];
};
