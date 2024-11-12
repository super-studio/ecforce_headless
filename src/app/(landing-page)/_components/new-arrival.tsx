import { ecforceApi } from "@/lib/ecforce-sdk";
import Image from "next/image";
import Link from "next/link";

export async function NewArrival() {
  const products = await ecforceApi.products.list();
  const filteredProducts = products.slice(0, 4);

  return (
    <section className="py-12 px-4">
      <div className="text-center">
        <div className="text-3xl">NEW ARRIVAL</div>
        <div className="text-xl">新商品</div>
      </div>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {filteredProducts.map((product) => (
          <div key={product.id} className="relative">
            <Link href={`/products/${product.id}`}>
              <Image
                src={
                  product.attributes.thumbnail?.attributes.url_medium ??
                  "/placeholder.svg?height=300&width=300"
                }
                alt={product.attributes.name}
                width={300}
                height={300}
                className="w-full h-auto"
              />
              <div className="mt-2">
                <h3 className="font-semibold">{product.attributes.name}</h3>
                <p className="text-gray-600">
                  ¥{product.attributes.master_sales_price.toLocaleString()}
                </p>
              </div>
              <span className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 text-xs rounded">
                NEW
              </span>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
