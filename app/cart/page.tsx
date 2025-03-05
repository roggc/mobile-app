"use client";

import { useCart } from "@/app/context/cart";
import Footer from "./footer";

export default function Page() {
  const { items } = useCart();

  return (
    <div className="flex flex-col flex-1">
      <div className="flex flex-col gap-6 px-4 pt-6 flex-1">
        <span className="font-light text-xl">CART ({items.length})</span>
      </div>
      <Footer />
    </div>
  );
}
