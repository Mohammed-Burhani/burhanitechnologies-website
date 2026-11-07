import { NextResponse } from "next/server";
import { getKnowledge } from "@/lib/assistantKnowledge.server";

export const runtime = "nodejs";

// GET /api/assistant/knowledge?v=<cachedVersion>
// Returns the full doc list, or { unchanged: true } when the browser copy is current.
export async function GET(request) {
  try {
    const { version, docs } = await getKnowledge();
    const have = new URL(request.url).searchParams.get("v");
    if (have && have === version) return NextResponse.json({ version, unchanged: true });
    return NextResponse.json({ version, docs });
  } catch (err) {
    console.error("[assistant] knowledge failed:", err?.message);
    return NextResponse.json({ error: "Knowledge unavailable." }, { status: 502 });
  }
}
