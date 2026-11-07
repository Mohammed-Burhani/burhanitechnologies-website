// Browser side of the assistant knowledge base: fetch once, keep in IndexedDB,
// rank locally. Falls back to an in-memory copy when IndexedDB is unavailable.

const DB_NAME = "bt-assistant";
const STORE = "kv";
const KEY = "knowledge";
const FRESH_MS = 24 * 60 * 60 * 1000; // re-check the server once a day

let memory = null;

function openDb() {
  return new Promise((resolve, reject) => {
    if (typeof indexedDB === "undefined") return reject(new Error("no idb"));
    const req = indexedDB.open(DB_NAME, 1);
    req.onupgradeneeded = () => req.result.createObjectStore(STORE);
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

async function idbGet() {
  try {
    const db = await openDb();
    return await new Promise((resolve, reject) => {
      const req = db.transaction(STORE).objectStore(STORE).get(KEY);
      req.onsuccess = () => resolve(req.result || null);
      req.onerror = () => reject(req.error);
    });
  } catch {
    return null;
  }
}

async function idbSet(value) {
  try {
    const db = await openDb();
    await new Promise((resolve, reject) => {
      const tx = db.transaction(STORE, "readwrite");
      tx.objectStore(STORE).put(value, KEY);
      tx.oncomplete = resolve;
      tx.onerror = () => reject(tx.error);
    });
  } catch {
    /* private mode or blocked storage: memory copy still works */
  }
}

/** Returns { version, docs, index }. Network is touched at most once per day. */
export async function loadKnowledge() {
  if (memory) return memory;

  const stored = await idbGet();
  if (stored?.docs?.length && Date.now() - stored.fetchedAt < FRESH_MS) {
    return (memory = withIndex(stored));
  }

  try {
    const res = await fetch(`/api/assistant/knowledge${stored ? `?v=${stored.version}` : ""}`);
    if (!res.ok) throw new Error(`knowledge ${res.status}`);
    const data = await res.json();
    const next =
      data.unchanged && stored
        ? { ...stored, fetchedAt: Date.now() }
        : { version: data.version, docs: data.docs, fetchedAt: Date.now() };
    await idbSet(next);
    return (memory = withIndex(next));
  } catch (err) {
    if (stored?.docs?.length) return (memory = withIndex(stored)); // stale beats nothing
    throw err;
  }
}

/* --------------------------- local retrieval --------------------------- */

const STOP = new Set(
  "the and for with from that this are can you our your how what why not into about more most have has does did get got any who when where which will would could should its their them they there than then also".split(
    " ",
  ),
);
// 5-letter prefix = cheap stemmer (automation/automate -> "autom")
const stems = (t) =>
  (String(t).toLowerCase().match(/[a-z0-9]{3,}/g) || [])
    .filter((w) => !STOP.has(w))
    .map((w) => w.slice(0, 5));

function withIndex(k) {
  const df = new Map();
  const rows = k.docs.map((d) => {
    const title = new Set(stems(d.title));
    const body = new Map();
    for (const s of stems(d.text)) body.set(s, (body.get(s) || 0) + 1);
    for (const s of new Set([...title, ...body.keys()])) df.set(s, (df.get(s) || 0) + 1);
    return { d, title, body };
  });
  return { ...k, index: { rows, df, n: k.docs.length } };
}

const TYPE_BONUS = { "case-study": 0.4, faq: 0.4, page: 0 };

/** Top doc ids for a question. Returns [] when nothing matches. */
export function retrieve(knowledge, question, limit = 4) {
  const q = [...new Set(stems(question))];
  if (!q.length) return [];
  const { rows, df, n } = knowledge.index;

  const scored = rows
    .map(({ d, title, body }) => {
      let score = 0;
      for (const s of q) {
        const f = df.get(s);
        if (!f) continue;
        const idf = Math.log(1 + n / f);
        if (title.has(s)) score += 2 * idf;
        const tf = body.get(s);
        if (tf) score += idf * (1 + Math.log(tf));
      }
      return { id: d.id, score: score > 0 ? score + (TYPE_BONUS[d.type] || 0) : 0 };
    })
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score);

  return scored.slice(0, limit).map((x) => x.id);
}
