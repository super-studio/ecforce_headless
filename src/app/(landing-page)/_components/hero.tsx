import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative aspect-[2.5]">
      <div className="absolute inset-0">
        <Image
          src="https://d1ogj02ptc5x6g.cloudfront.net/demo38/uploads/themes/ec_force_basic_theme_20240815170418/ec_force/assets/images/kv-1.jpg"
          alt="Hero banner"
          fill
          className="object-cover w-full h-full"
          priority
        />
        <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-black/70 to-transparent"></div>
      </div>
      <div className="absolute inset-0 flex items-end">
        <div className="flex flex-col gap-4 p-10 text-white">
          <div className="text-xs">NEW ITEM</div>
          <div className="text-2xl">GLOW & SHINEY</div>
          <Button size="lg">詳しく見る</Button>
        </div>
      </div>
    </section>
  );
}
