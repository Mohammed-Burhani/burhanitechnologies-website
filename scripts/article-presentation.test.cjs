const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

// Public article excerpts exercise content preservation without a live CMS.
const fixtures = require("./fixtures/article-presentation.json");
const load = async (name) => import("data:text/javascript;base64," + Buffer.from(
  fs.readFileSync(path.join(__dirname, "../src/content", name + ".js"), "utf8"),
).toString("base64"));
const freeze = (value) => {
  if (value && typeof value === "object") {
    Object.values(value).forEach(freeze);
    Object.freeze(value);
  }
  return value;
};
const tables = [
  { fixture: "cloud", module: "cloudMigrationWorksheet", fn: "structureCloudMigrationWorksheet", slug: "cloud-migration-services", rows: 7, columns: 3, sourceHeaders: true },
  { fixture: "modules", module: "erpModulesWorksheet", fn: "structureErpModulesWorksheet", slug: "erp-modules", rows: 8, columns: 4, sourceHeaders: false },
];

for (const item of tables) {
  test(`${item.columns}-column worksheet retains every source block and annotation`, async () => {
    const transform = (await load(item.module))[item.fn];
    const source = freeze(structuredClone(fixtures[item.fixture]));
    const before = JSON.stringify(source);
    const output = transform(source, item.slug);
    const worksheet = output.find(block => block._type === "articleWorksheet");
    assert.ok(worksheet);
    assert.equal(worksheet.headers.length, item.columns);
    assert.equal(worksheet.rows.length, item.rows);
    const originalBlocks = [
      ...(item.sourceHeaders ? worksheet.headers : []),
      ...worksheet.rows.flatMap(row => [row.heading, ...row.cells]),
    ];
    assert.deepEqual(originalBlocks, source);
    originalBlocks.forEach((block, index) => assert.equal(block, source[index]));
    assert.equal(JSON.stringify(source), before);
    assert.equal(transform(output, item.slug), output);
  });

  test(`${item.columns}-column worksheet rejects ambiguous or changed source structure`, async () => {
    const transform = (await load(item.module))[item.fn];
    for (const mutate of [
      body => { body[0]._key = "changed-key"; },
      body => { body.push(body[0]); },
      body => { body.splice(2, 0, { _type: "block", _key: "interleaved", style: "normal", children: [] }); },
    ]) {
      const body = structuredClone(fixtures[item.fixture]);
      mutate(body);
      assert.equal(transform(body, item.slug), body);
    }
    assert.equal(transform(fixtures[item.fixture], "another-article"), fixtures[item.fixture]);
  });
}

test("cost drivers retain the literal numbered copy and original item objects", async () => {
  const { structureCostDrivers } = await load("costDriversPresentation");
  const source = freeze(structuredClone(fixtures.cost));
  const output = structureCostDrivers(source, "custom-software-development-cost");
  const list = output.find(block => block._type === "articleNumberedList");
  assert.equal(list.items.length, 4);
  const roundtrip = output.flatMap(block => block._type === "articleNumberedList" ? block.items : [block]);
  assert.deepEqual(roundtrip, source);
  roundtrip.forEach((block, index) => assert.equal(block, source[index]));
  assert.equal(structureCostDrivers(output, "custom-software-development-cost"), output);
});

const words = body => body.flatMap(block => block.children || []).map(span => span.text || "").join(" ").replace(/\s+/gu, " ").trim();
const links = body => body.flatMap(block => (block.children || []).flatMap(span =>
  (span.marks || []).flatMap(mark => {
    const definition = block.markDefs?.find(value => value._key === mark && value._type === "link");
    return definition ? [{ key: span._key, text: span.text.trim(), href: definition.href }] : [];
  }),
));

test("Azure section and list corrections retain article words and all link destinations", async () => {
  const { normalizeArticleBody } = await load("articlePresentation");
  const { structureAzureLists } = await load("azureListsPresentation");
  const slug = "custom-software-development-with-devops-on-azure-cloud";
  const source = freeze(structuredClone(fixtures.azure));
  const output = structureAzureLists(normalizeArticleBody(source, slug), slug);
  assert.equal(words(output), words(source));
  assert.deepEqual(links(output), links(source));
  assert.equal(links(output).length, 13);
  assert.equal(output.filter(block => ["h2", "h3"].includes(block.style)).length, 5);
  assert.equal(output.filter(block => block.listItem === "bullet").length, 3);
  assert.equal(output.filter(block => block.listItem === "number").length, 4);
  assert.deepEqual(structureAzureLists(normalizeArticleBody(output, slug), slug), output);
});

test("article corrections leave unrelated and absent content intact", async () => {
  for (const [module, fn] of [
    ["articlePresentation", "normalizeArticleBody"],
    ["azureListsPresentation", "structureAzureLists"],
    ["costDriversPresentation", "structureCostDrivers"],
  ]) {
    const transform = (await load(module))[fn];
    assert.equal(transform(fixtures.azure, "unrelated-article"), fixtures.azure);
    assert.equal(transform(undefined, "unrelated-article"), undefined);
  }
});

test("legacy spacing trims combined block edges while preserving internal breaks and annotations", async () => {
  const { trimLegacyArticleSpacing } = await load("legacyArticleSpacing");
  const slug = "why-your-business-needs-a-strategic-mobile-app";
  const source = freeze([{
    _type: "block", _key: "paragraph", style: "normal",
    markDefs: [{ _type: "link", _key: "reference", href: "https://example.com/guide" }],
    children: [
      { _type: "span", _key: "before", text: "\n\n", marks: [] },
      { _type: "span", _key: "start", text: "Read ", marks: ["strong"] },
      { _type: "span", _key: "middle", text: "this\n\nnext", marks: ["reference"] },
      { _type: "span", _key: "end", text: " section", marks: [] },
      { _type: "span", _key: "after", text: "\n\n", marks: [] },
    ],
  }]);
  const output = trimLegacyArticleSpacing(source, slug);
  assert.equal(output[0].children.map(span => span.text).join(""), "Read this\n\nnext section");
  assert.equal(words(output), words(source));
  assert.deepEqual(links(output), links(source));
  assert.deepEqual(output[0].children.map(span => span._key), source[0].children.map(span => span._key));
  assert.equal(output[0].markDefs, source[0].markDefs);
  assert.equal(output[0].children[2], source[0].children[2]);
  assert.equal(source[0].children[0].text, "\n\n");
  assert.equal(trimLegacyArticleSpacing(output, slug), output);
  assert.equal(trimLegacyArticleSpacing(source, "another-article"), source);
});
