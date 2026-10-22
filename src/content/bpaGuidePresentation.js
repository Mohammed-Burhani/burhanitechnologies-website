const SLUG = "stop-wasting-your-most-valuable-asset-a-guide-to-business-process-automation";
const HEADINGS = [
  {
    "key": "98781fd2c08e",
    "style": "h2",
    "spans": [
      {
        "key": "c94864b73026",
        "text": "What is Business Process Automation (BPA)?\n",
        "marks": [
          "strong"
        ]
      },
      {
        "key": "411dc72e1a07",
        "text": "\nAt its core, BPA is the use of technology to execute recurring tasks or processes that were once handled by humans. It’s not about physical robots on an assembly line. It’s about creating \"software robots\" and intelligent workflows that can handle rule-based, digital work with perfect accuracy and speed.\n\n",
        "marks": []
      }
    ]
  },
  {
    "key": "f1ab541313e8",
    "style": "h2",
    "spans": [
      {
        "key": "da8acf272c7f",
        "text": "The Transformative Benefits of Automation",
        "marks": [
          "strong"
        ]
      },
      {
        "key": "ca34a0191a53",
        "text": "\n\nInvesting in BPA is a direct investment in your company’s efficiency and intelligence. The returns are clear, measurable, and immediate.",
        "marks": []
      }
    ]
  },
  {
    "key": "9bec168a426e",
    "style": "h3",
    "spans": [
      {
        "key": "de61278692ca",
        "text": "\n1. Radically Increased Efficiency\n",
        "marks": [
          "strong"
        ]
      },
      {
        "key": "feafe689fd04",
        "text": "\nAutomated systems work 24/7/365 without breaks or fatigue. Processes that once took hours or days can be completed in minutes. This dramatically accelerates your business cycles, whether it's closing the books at month-end or onboarding a new client.\n",
        "marks": []
      }
    ]
  },
  {
    "key": "0a5616292dc4",
    "style": "h3",
    "spans": [
      {
        "key": "4a0d6d60bbef",
        "text": "\n2. Near-Perfect Accuracy\n",
        "marks": [
          "strong"
        ]
      },
      {
        "key": "d35f83943787",
        "text": "\nHumans make mistakes. It’s in our nature. But a typo in a financial report or a customer order can be costly. Automation eliminates the risk of human error in rule-based tasks, ensuring consistency and reliability in your data and operations.\n",
        "marks": []
      }
    ]
  },
  {
    "key": "11a9c40b5537",
    "style": "h3",
    "spans": [
      {
        "key": "8cf64d1126ac",
        "text": "\n3. Significant Cost Reduction\n",
        "marks": [
          "strong"
        ]
      },
      {
        "key": "c4276041421e",
        "text": "\nBy freeing up employees from repetitive tasks, you are not just saving time; you are optimizing your payroll. Your team can now focus on higher-value activities that generate revenue and drive strategy. Furthermore, the reduction in errors means less time and money spent on rework and damage control.\n",
        "marks": []
      }
    ]
  },
  {
    "key": "684c7366b8d1",
    "style": "h3",
    "spans": [
      {
        "key": "43b47bf475fd",
        "text": "\n4. Enhanced Employee Satisfaction and Morale",
        "marks": [
          "strong"
        ]
      },
      {
        "key": "70410272e381",
        "text": "\n\nNo one gets excited about mind-numbing data entry. Automating tedious work removes the drudgery from your team's day, allowing them to engage in more creative, challenging, and fulfilling projects. This boosts job satisfaction and helps you retain top talent.",
        "marks": []
      }
    ]
  },
  {
    "key": "8e90277b1cf0",
    "style": "h3",
    "spans": [
      {
        "key": "d112fa39808a",
        "text": "\n5. Scalability for Growth",
        "marks": [
          "strong"
        ]
      },
      {
        "key": "441ec9f61784",
        "text": "\n\nA manual process becomes a bottleneck as your business grows. You can’t just \"hire more people\" forever. An automated workflow, however, can handle 10 transactions as easily as it handles 10,000. Automation builds a foundation that allows your business to scale efficiently without a corresponding explosion in operational costs.",
        "marks": []
      }
    ]
  },
  {
    "key": "58977d605e0e",
    "style": "h2",
    "spans": [
      {
        "key": "24b0ece5710d",
        "text": "\n\nWhat Processes Are Prime for Automation?",
        "marks": [
          "strong"
        ]
      },
      {
        "key": "68e3746f415f",
        "text": "\n\nThe best candidates for automation are tasks that are:\n\n",
        "marks": []
      }
    ]
  },
  {
    "key": "ea1eb3281503",
    "style": "h2",
    "spans": [
      {
        "key": "d5c6492ad1e3",
        "text": "\n\nOur Approach: Smart Automation, Strategic Results",
        "marks": [
          "strong"
        ]
      },
      {
        "key": "d6bba88194a9",
        "text": "\n\nAt Burhani Technologies, we believe automation should be strategic, not haphazard. Our goal is to identify the processes that will deliver the highest return on investment.\n\n",
        "marks": []
      }
    ]
  },
  {
    "key": "db2f263b0d5d",
    "style": "h2",
    "spans": [
      {
        "key": "36e569f5b430",
        "text": "IT'S TIME TO RECLAIM YOUR TEAM'S TIME\n",
        "marks": [
          "strong"
        ]
      },
      {
        "key": "e86c8223a164",
        "text": "\nYour employees are your greatest strength. Don't let their talent be wasted on tasks a machine can do better. Empower them to solve problems, delight customers, and drive your business forward.",
        "marks": []
      }
    ]
  }
];

const matchesSource = (block, expected) =>
  block?._type === "block" && block._key === expected.key &&
  block.style === "normal" && !block.listItem && !block.level &&
  Array.isArray(block.markDefs) && block.markDefs.length === 0 &&
  Array.isArray(block.children) && block.children.length === expected.spans.length &&
  block.children.every((span, index) =>
    span?._type === "span" && span._key === expected.spans[index].key &&
    span.text === expected.spans[index].text &&
    Array.isArray(span.marks) && span.marks.length === expected.spans[index].marks.length &&
    span.marks.every((mark, markIndex) => mark === expected.spans[index].marks[markIndex])
  );

// Ten reviewed section labels are stored as bold paragraph spans. Recognize
// only this article's exact source keys, spans, wording and marks. Keep the
// original paragraph keys, source span keys, links and inline decorations.
export const presentBpaGuideArticle = (body, slug) => {
  if (slug !== SLUG || !Array.isArray(body) ||
    new Set(body.map((block) => block?._key)).size !== body.length
  ) return body;
  const positions = HEADINGS.map((expected) =>
    body.findIndex((block) => block?._key === expected.key));
  if (positions.some((position, index) => position < 0 ||
    (index > 0 && position <= positions[index - 1]) ||
    !matchesSource(body[position], HEADINGS[index]) ||
    body.some((block) => block?._key === HEADINGS[index].key + "-heading-" + HEADINGS[index].spans[0].key)
  )) return body;

  const headings = new Map(HEADINGS.map((heading) => [heading.key, heading]));
  return body.flatMap((block) => {
    const expected = headings.get(block?._key);
    if (!expected) return [block];
    const [label, ...paragraph] = block.children;
    return [
      {
        ...block,
        _key: block._key + "-heading-" + label._key,
        style: expected.style,
        children: [{ ...label, text: label.text.trim() }],
      },
      { ...block, children: paragraph },
    ];
  });
};
