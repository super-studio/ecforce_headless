import { Menu, Search, ShoppingCart } from "lucide-react";
import { Link } from "@/components/ui/link";

export function Header() {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white p-4 flex items-center justify-between shadow-md">
        <Menu className="w-6 h-6" />
        <h1 className="text-2xl font-bold">
          <Link prefetch href="/">
            Good Skin
          </Link>
        </h1>
        <div className="flex space-x-4">
          <Search className="w-6 h-6" />
          <ShoppingCart className="w-6 h-6" />
        </div>
      </header>
    </>
  );
}
