"use client";

import { revalidateProducts } from "@/lib/actions";

export function RevalidateProductsButton() {
  return (
    <button
      className="border rounded px-2 py-1 hover:bg-gray-200"
      onClick={async () => {
        await revalidateProducts();
      }}
    >
      Revalidate Products
    </button>
  );
}
