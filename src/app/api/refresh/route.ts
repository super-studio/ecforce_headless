import { revalidatePath } from "next/cache";

export async function GET() {
  revalidatePath("/", "layout");

  return new Response("success", {
    status: 200,
  });
}
