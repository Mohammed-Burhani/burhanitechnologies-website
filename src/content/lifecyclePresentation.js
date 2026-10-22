// Only these eight observed CMS paragraphs contain title prefixes.
// Preserve the CMS document; changed or unrelated blocks remain untouched.
const LIFECYCLE_SLUG = "data-analysis-lifecycle";

const SECTION_PREFIXES = new Map([
  [
    "ad23f7bb8df5",
    {
      "spanKey": "f2b33d56469f",
      "heading": "The standard version, built for data science.",
      "text": "The standard version, built for data science. The standard data analysis lifecycle most guides describe has six phases: discovery, data preparation, model planning, model building, communicating results, and operationalizing. It's a real, well-established framework. It's also built for a team training a predictive model, not a business trying to trust a monthly sales report."
    }
  ],
  [
    "e6e9a1ed47fc",
    {
      "spanKey": "b9e2cf171b6a",
      "heading": "The shorter version, built for a spreadsheet operation.",
      "text": "The shorter version, built for a spreadsheet operation. A spreadsheet-run business doesn't need model planning or model building. It needs the data collected in one place, cleaned once, defined consistently, and turned into a dashboard people actually trust. That's the data analysis process this guide covers: five stages instead of six, with different failure points than the data analytics lifecycle stages built for a modeling team."
    }
  ],
  [
    "f66ed9e8c69c",
    {
      "spanKey": "f95f913617d9",
      "heading": "Data collection: getting everything into one place.",
      "text": "Data collection: getting everything into one place. Before anything else, the data has to live somewhere consistent. If three departments keep three different spreadsheets tracking the same thing, there's no lifecycle yet, just three separate guesses sitting next to each other. This is also where a business decides on a single source of truth for each type of record- the one spreadsheet or system everyone agrees is correct when two numbers disagree."
    }
  ],
  [
    "1d9cb5c49a2f",
    {
      "spanKey": "b63a5fbe2a23",
      "heading": "Data cleaning: fixing it once, not every month.",
      "text": "Data cleaning: fixing it once, not every month. Cleaning means fixing duplicate entries, inconsistent formats, and missing values. Done properly, it's a one-time setup with rules that hold going forward. Done badly, it's a monthly chore someone repeats by hand, forever."
    }
  ],
  [
    "6927b010a6c0",
    {
      "spanKey": "6429d57c31a4",
      "heading": "Transformation: turning raw rows into operational data.",
      "text": "Transformation: turning raw rows into operational data. Transformation turns raw records into operational data: numbers organized around how the business actually works, not just how they happened to be entered."
    }
  ],
  [
    "3184f1b144a8",
    {
      "spanKey": "e126e9c2ec04",
      "heading": "Metric definition: agreeing on what a number means before displaying it.",
      "text": "Metric definition: agreeing on what a number means before displaying it. This is the step most guides skip entirely, and it's the actual source of dashboard distrust. If sales defines \"active customer\" one way and support defines it another, the same dashboard tells two different stories depending on who's reading it. Fixing this usually means writing the definition down once, somewhere everyone can see it, and treating that document as the single source of truth for what the word \"active\" actually means across the business."
    }
  ],
  [
    "44ba46aba4a2",
    {
      "spanKey": "2d54b0c08077",
      "heading": "Dashboard and drill-down: the summary and the detail behind it.",
      "text": "Dashboard and drill-down: the summary and the detail behind it. A dashboard shows the summary. Drill-down lets someone click into a number and see what's actually behind it. Without drill-down, a dashboard is just a claim nobody can verify."
    }
  ],
  [
    "6cac39e0f481",
    {
      "spanKey": "b3f78a2a47a8",
      "heading": "Why the order matters.",
      "text": "Why the order matters. Skipping ahead in these data analysis steps, building a dashboard before metric definitions are agreed, is the single most common reason a new reporting tool gets abandoned within a few months. The tool isn't the problem. The order is. A business that follows the correct data analysis steps in sequence rarely needs to redo the work later; one that skips ahead usually rebuilds the same dashboard twice."
    }
  ]
]);

export const structureLifecycleSections = (body, slug) => {
  if (slug !== LIFECYCLE_SLUG || !Array.isArray(body)) return body;

  return body.flatMap((block) => {
    const section = SECTION_PREFIXES.get(block?._key);
    const span = block?.children?.[0];
    if (
      !section ||
      block._type !== "block" ||
      block.style !== "normal" ||
      block.listItem ||
      !Array.isArray(block.children) ||
      block.children.length !== 1 ||
      span?._type !== "span" ||
      span._key !== section.spanKey ||
      span.text !== section.text ||
      !span.text.startsWith(section.heading + " ")
    ) return [block];

    return [
      {
        ...block,
        _key: block._key + "-lifecycle-heading",
        style: "h3",
        children: [{ ...span, text: section.heading }],
      },
      {
        ...block,
        _key: block._key + "-lifecycle-body",
        children: [{ ...span, text: span.text.slice(section.heading.length + 1) }],
      },
    ];
  });
};
