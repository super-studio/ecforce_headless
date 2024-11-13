"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft, AlertCircle } from "lucide-react";
import Link from "next/link";

export default function Error({
  code,
  message,
}: {
  code: number;
  message: string;
}) {
  return (
    <div className="flex flex-col items-center my-48 justify-center px-4 text-center">
      <AlertCircle
        className="w-16 h-16 mb-4 text-destructive"
        aria-hidden="true"
      />
      <h1 className="text-4xl font-bold mb-2">エラー {code}</h1>
      <p className="text-xl text-muted-foreground mb-8">{message}</p>
      <Button asChild>
        <Link href="/" className="inline-flex items-center">
          <ArrowLeft className="mr-2 h-4 w-4" />
          ホームに戻る
        </Link>
      </Button>
    </div>
  );
}
