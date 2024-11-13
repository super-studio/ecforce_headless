"use client";

import Error from "@/components/ui/error";

export default function ErrorPage() {
  return <Error code={500} message="エラーが発生しました。" />;
}
