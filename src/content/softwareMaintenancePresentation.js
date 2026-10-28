const SLUG = "types-of-software-maintenance";
const WORKSHEET_KEY = "worksheet-software-maintenance-types";
const SOURCE = [
  {
    "key": "94103b4a74be",
    "style": "h3",
    "spans": [
      {
        "key": "871770fd99b5",
        "text": "Corrective",
        "marks": []
      }
    ]
  },
  {
    "key": "ce016cde5674",
    "style": "normal",
    "spans": [
      {
        "key": "da9e57f7e8ee",
        "text": "What triggers it: A defect found after release",
        "marks": []
      }
    ]
  },
  {
    "key": "6f7037e7be94",
    "style": "normal",
    "spans": [
      {
        "key": "63c3bdd4564c",
        "text": "What happens if it's skipped: Not really skippable; it becomes an emergency fix under pressure",
        "marks": []
      }
    ]
  },
  {
    "key": "de668878045a",
    "style": "h3",
    "spans": [
      {
        "key": "f76e275d3141",
        "text": "Adaptive",
        "marks": []
      }
    ]
  },
  {
    "key": "23ac56b4cd35",
    "style": "normal",
    "spans": [
      {
        "key": "ab3ecad1648b",
        "text": "What triggers it: The environment changes (an OS update, an API a system depends on)",
        "marks": []
      }
    ]
  },
  {
    "key": "94f4d02e8456",
    "style": "normal",
    "spans": [
      {
        "key": "3a543901ec46",
        "text": "What happens if it's skipped: The software breaks on someone else's schedule, not yours",
        "marks": []
      }
    ]
  },
  {
    "key": "4e8ee8b65221",
    "style": "h3",
    "spans": [
      {
        "key": "f6bb14dde815",
        "text": "Perfective",
        "marks": []
      }
    ]
  },
  {
    "key": "70f141dfef82",
    "style": "normal",
    "spans": [
      {
        "key": "0b4ae60dfa14",
        "text": "What triggers it: A performance or usability gap surfaces",
        "marks": []
      }
    ]
  },
  {
    "key": "bab76cfd0ac7",
    "style": "normal",
    "spans": [
      {
        "key": "de63cc2e72ed",
        "text": "What happens if it's skipped: Technical debt and slow workarounds accumulate",
        "marks": []
      }
    ]
  },
  {
    "key": "c39805642053",
    "style": "h3",
    "spans": [
      {
        "key": "f3295068d2ad",
        "text": "Preventive",
        "marks": []
      }
    ]
  },
  {
    "key": "98399cf410b8",
    "style": "normal",
    "spans": [
      {
        "key": "95bffa1c0d68",
        "text": "What triggers it: A dependency nears end of support, or a review finds a latent risk",
        "marks": []
      }
    ]
  },
  {
    "key": "f12e5d6b36cf",
    "style": "normal",
    "spans": [
      {
        "key": "1e691fedd0f3",
        "text": "What happens if it's skipped: A scheduled dependency upgrade becomes an unscheduled corrective fix",
        "marks": []
      }
    ]
  }
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

// Recover only the observed four-type comparison introduced as side by side.
// Reuse every original block, retaining its copy, spans, marks and heading ID.
export const presentSoftwareMaintenanceArticle = (body, slug) => {
  if (slug !== SLUG || !Array.isArray(body) ||
    body.some((block) => block?._key === WORKSHEET_KEY)) return body;
  const start = body.findIndex((block) => block?._key === SOURCE[0].key);
  if (start < 0) return body;
  const blocks = body.slice(start, start + SOURCE.length);
  if (blocks.length !== SOURCE.length || blocks.some((block, index) =>
    !matchesSource(block, SOURCE[index]) ||
    body.filter((candidate) => candidate?._key === SOURCE[index].key).length !== 1
  )) return body;

  const headers = ["Type", "What triggers it", "What happens if it's skipped"].map((text, index) => ({
    _type: "block",
    _key: WORKSHEET_KEY + "-header-" + index,
    style: "normal",
    markDefs: [],
    children: [{
      _type: "span",
      _key: WORKSHEET_KEY + "-header-span-" + index,
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
      label: "The four types of software maintenance, side by side",
      headers,
      rows,
    },
    ...body.slice(start + SOURCE.length),
  ];
};
