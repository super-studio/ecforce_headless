import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { parseHTML } from "linkedom";

const isDev = process.env.NODE_ENV === "development" || process.env.IS_LOCAL;

function getHostname() {
  if (isDev) {
    return "localhost:3000";
  }
  if (process.env.VERCEL_ENV === "production") {
    return process.env.VERCEL_PROJECT_PRODUCTION_URL;
  }
  return process.env.VERCEL_BRANCH_URL;
}

/**
 * 画像をプリフェッチするAPIエンドポイント
 * @see https://github.com/ethanniser/NextFaster
 */
export async function GET(
  _: NextRequest,
  { params }: { params: Promise<{ rest: string[] }> }
) {
  const schema = isDev ? "http" : "https";
  const host = getHostname();
  if (!host) {
    return new Response("Failed to get hostname from env", { status: 500 });
  }
  const href = (await params).rest.join("/");
  if (!href) {
    return new Response("Missing url parameter", { status: 400 });
  }
  const url = `${schema}://${host}/${href}`;
  const response = await fetch(url);
  if (!response.ok) {
    return new Response("Failed to fetch", { status: response.status });
  }
  const body = await response.text();
  const { document } = parseHTML(body);
  const images = Array.from(document.querySelectorAll("img"))
    .map((img) => ({
      srcset: img.getAttribute("srcset") || img.getAttribute("srcSet"), // Linkedom is case-sensitive
      sizes: img.getAttribute("sizes"),
      src: img.getAttribute("src"),
      alt: img.getAttribute("alt"),
      loading: img.getAttribute("loading"),
    }))
    .filter((img) => img.src);
  return NextResponse.json(
    { images },
    {
      headers: {
        "Cache-Control": "public, max-age=3600",
      },
    }
  );
}
