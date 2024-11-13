import Image from "next/image";
import { AddToCartForm } from "./_components/add-to-cart-form";
import { ecforceApi } from "@/lib/ecforce-sdk";
import { cacheTag } from "next/dist/server/use-cache/cache-tag";
import { cacheLife } from "next/dist/server/use-cache/cache-life";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const product = await getProduct((await params).id);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8 items-start">
        {/* 商品画像 */}
        <div className="aspect-square relative overflow-hidden rounded-lg bg-gray-200">
          <Image
            src={
              product.attributes.thumbnail?.attributes.url_large ??
              "/placeholder.svg?height=600&width=600"
            }
            alt={product.attributes.name}
            priority
            sizes="600px"
            className="w-full h-full object-center object-cover"
            fill
          />
        </div>

        {/* 商品詳細 */}
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold text-gray-900">
            {product.attributes.name}
          </h1>
          <p className="text-2xl font-bold text-gray-900">
            ¥{product.attributes.master_sales_price.toLocaleString()}
          </p>
          <p className="text-gray-700">{product.attributes.description}</p>
          <div className="mt-6">
            <AddToCartForm />
          </div>
        </div>
      </div>
    </div>
  );
}

async function getProduct(id: string) {
  "use cache";
  cacheTag("products", `product-${id}`);
  cacheLife("hours");
  return await ecforceApi.products.get(id);
}
