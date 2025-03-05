"use client";

import Image from "next/image";
import { useCart } from "@/app/context/cart";

export default function HeaderCart() {
  const { items } = useCart();

  return (
    <div className="flex gap-1 items-center">
      <Image
        src="/bag-icon-inactive.svg"
        alt="Inactive Cart Icon"
        width={24}
        height={24}
      />
      <div className="font-light">{items.length}</div>
    </div>
  );
}
