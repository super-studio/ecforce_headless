"use client";

import { useState } from "react";
import { Minus, Plus, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

export function AddToCartForm() {
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => setQuantity((prev) => prev + 1);
  const decrementQuantity = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <>
      <div className="flex items-center border-gray-100">
        <span className="mr-3 text-gray-600">数量</span>
        <button
          onClick={decrementQuantity}
          className="w-8 h-8 flex items-center justify-center text-gray-600 transition hover:opacity-75"
          aria-label="数量を減らす"
        >
          <Minus size={16} />
        </button>
        <input
          type="number"
          id="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(parseInt(e.target.value))}
          className="h-8 w-12 rounded border-gray-200 text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
        />
        <button
          onClick={incrementQuantity}
          className="w-8 h-8 flex items-center justify-center text-gray-600 transition hover:opacity-75"
          aria-label="数量を増やす"
        >
          <Plus size={16} />
        </button>
      </div>
      <Button size="lg" className="mt-4 w-full">
        <ShoppingCart className="w-5 h-5 mr-2" />
        カートに追加
      </Button>
    </>
  );
}
