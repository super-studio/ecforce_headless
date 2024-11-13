import { expireTag } from "next/cache";

export async function GET() {
  expireTag("landing-page", "products");

  return new Response("success", {
    status: 200,
  });
}
