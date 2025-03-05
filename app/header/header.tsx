import Image from "next/image";
import HeaderCart from "@/app/header/header-cart";
import Link from "next/link";

export default function Header() {
  return (
    <div className="px-4 py-6 h-[80px] flex justify-between">
      <Link href={"/"}>
        <Image src="/logo.svg" alt="Logo" width={74} height={24} />
      </Link>
      <HeaderCart />
    </div>
  );
}
