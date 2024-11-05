/* eslint-disable @typescript-eslint/no-explicit-any */
import { ecforceApi } from "@/lib/ecforce-sdk";
import { Suspense } from "react";
import { DynamicComponent } from "./_components/dynamic-component";
import { cacheTag } from "next/dist/server/use-cache/cache-tag";
import { RevalidateProductsButton } from "./_components/revalidate-products-button";

export default function Home() {
  return (
    // <Suspense fallback={<div>Loading...</div>}>
    <Products />
    // </Suspense>
  );
}

async function getCachedProducts() {
  "use cache";
  cacheTag("products");

  return [await ecforceApi.products.list(), new Date().toISOString()];
}

async function Products() {
  const [products, dateTime] = await getCachedProducts();

  return (
    <div>
      <div>RENDERED AT: {dateTime}</div>
      <h1>Products</h1>
      <ul>
        {products.map((product: any) => (
          <li key={product.id}>{product.attributes.name}</li>
        ))}
      </ul>
      <RevalidateProductsButton />
      <Suspense fallback={<div>Loading...</div>}>
        <DynamicComponent />
      </Suspense>
    </div>
  );
}
