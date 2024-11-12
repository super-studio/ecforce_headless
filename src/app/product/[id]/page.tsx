import Image from "next/image";
import { AddToCartForm } from "./_components/add-to-cart-form";
import { ecforceApi } from "@/lib/ecforce-sdk";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  "use cache";

  const product = await getProductInfo((await params).id);

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* 商品画像 */}
          <div className="aspect-square relative overflow-hidden rounded-lg bg-gray-200">
            <Image
              src="/placeholder.svg?height=600&width=600"
              alt="保湿フェイスクリーム"
              layout="fill"
              objectFit="cover"
              className="w-full h-full object-center"
            />
          </div>

          {/* 商品詳細 */}
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl font-bold text-gray-900">
              {product.attributes.name}
            </h1>
            <p className="text-2xl font-bold text-gray-900">
              ¥{product.attributes.master_sales_price}
            </p>
            <p className="text-gray-700">{product.attributes.description}</p>
            <div className="mt-6">
              <AddToCartForm />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

async function getProductInfo(id: string) {
  const res = await ecforceApi.products.get(id);
  return res;
}
