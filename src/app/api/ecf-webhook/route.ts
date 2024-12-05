import { revalidateTag } from "next/cache";
import { headers } from "next/headers";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const productWebhooks = [
    "product_created",
    "product_updated",
    "product_destroyed",
  ];
  const topic = (await headers()).get("x-ecf-event") || "unknown";
  const isProductUpdate = productWebhooks.includes(topic);
  const body = await req.json();

  console.log(`Received webhook for topic: ${topic}`, body);

  if (!isProductUpdate) {
    // We don't need to revalidate anything for any other topics.
    return NextResponse.json({ status: 200 });
  }

  if (isProductUpdate) {
    revalidateTag("products");
  }

  return NextResponse.json({ status: 200, revalidated: true, now: Date.now() });
}
