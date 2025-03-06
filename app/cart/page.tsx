"use client";

import { useCart } from "@/app/context/cart";
import Footer from "./footer/footer";
import CartItemCard from "./cart-item-card";

export default function Page() {
  const { items } = useCart();

  return (
    <div className="flex flex-col flex-1 min-h-0">
      <div className="flex flex-col gap-6 px-4 pt-6 flex-1 min-h-0 overflow-auto">
        <span className="font-light text-xl">CART ({items.length})</span>
        {items.map((item) => (
          <CartItemCard key={item.id} cartItem={item} />
        ))}
      </div>
      <Footer />
    </div>
  );
}
