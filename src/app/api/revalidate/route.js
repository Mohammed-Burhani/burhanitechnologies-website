import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();

    // Verify the secret
    const secret = request.headers.get("x-sanity-signature");
    if (secret !== process.env.SANITY_REVALIDATION_SECRET) {
      return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
    }

    // Get the document type from the webhook payload
    const documentType = body._type;

    // Revalidate based on document type
    if (documentType === "caseStudy") {
      // Revalidate the case studies listing page
      revalidatePath("/case-studies");

      // If there's a slug, revalidate the specific case study page
      if (body.slug?.current) {
        revalidatePath(`/case-studies/${body.slug.current}`);
      }

      return NextResponse.json({
        revalidated: true,
        message: "Case study pages revalidated",
        now: Date.now(),
      });
    }

    return NextResponse.json({
      revalidated: false,
      message: "No revalidation needed",
    });
  } catch (err) {
    console.error("Revalidation error:", err);
    return NextResponse.json(
      { message: "Error revalidating", error: err.message },
      { status: 500 }
    );
  }
}
