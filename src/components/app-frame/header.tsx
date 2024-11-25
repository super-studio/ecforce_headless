import { Menu, ShoppingCart, User2 } from "lucide-react";
import { Link } from "@/components/ui/link";

export function Header() {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white p-4 flex items-center justify-between shadow-md">
        <div className="flex-1">
          <Menu className="w-6 h-6" />
        </div>
        <div className="flex justify-center">
          <h1 className="text-2xl font-bold">
            <Link prefetch href="/">
              Good Skin
            </Link>
          </h1>
        </div>
        <div className="flex space-x-4 flex-1 justify-end">
          <Link href="/customer">
            <User2 className="w-6 h-6" />
          </Link>
          <ShoppingCart className="w-6 h-6" />
        </div>
      </header>
    </>
  );
}
