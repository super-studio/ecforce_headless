import Image from "next/image";

export function NewArrival() {
  return (
    <section className="py-12 px-4">
      <div className="text-center">
        <div className="text-3xl">NEW ARRIVAL</div>
        <div className="text-xl">新商品</div>
      </div>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {[1, 2, 3, 4].map((item) => (
          <div key={item} className="relative">
            <Image
              src="/placeholder.svg?height=300&width=300"
              alt={`Product ${item}`}
              width={300}
              height={300}
              className="w-full h-auto"
            />
            <div className="mt-2">
              <h3 className="font-semibold">Product Name</h3>
              <p className="text-gray-600">¥5,000</p>
            </div>
            <span className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 text-xs rounded">
              NEW
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
