import Image from "next/image";
import { AddToCartForm } from "./_components/add-to-cart-form";

export default function ProductPage() {
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
              保湿フェイスクリーム
            </h1>
            <p className="text-2xl font-bold text-gray-900">¥4,800</p>
            <p className="text-gray-700">
              私たちの保湿フェイスクリームは、肌に長時間の潤いと栄養を提供するよう特別に配合されています。ヒアルロン酸やビタミンEなどの天然成分を配合し、肌の弾力性を改善し、細かいシワの外観を減らすのに役立ちます。
            </p>
            <div className="mt-4">
              <h2 className="text-sm font-medium text-gray-900">主な利点:</h2>
              <ul className="mt-2 list-disc list-inside text-sm text-gray-700">
                <li>24時間保湿</li>
                <li>肌の質感を改善</li>
                <li>すべての肌タイプに適しています</li>
                <li>無香料のフォーミュラ</li>
              </ul>
            </div>
            <div className="mt-6">
              <AddToCartForm />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
