"use client";

import Image from "next/image";
import HeaderCart from "@/app/header/header-cart";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const showCart = !pathname.endsWith("/cart");

  return (
    <div className="px-4 py-6 h-[80px] flex justify-between">
      <Link href={"/"}>
        <Image src="/logo.svg" alt="Logo" width={74} height={24} />
      </Link>
      {showCart && (
        <Link href={"/cart"}>
          <HeaderCart />
        </Link>
      )}
    </div>
  );
}
