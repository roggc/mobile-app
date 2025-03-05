import Image from "next/image";
import HeaderCart from "@/app/header/header-cart";

export default function Header() {
  return (
    <div className="px-4 py-6 h-[80px] flex justify-between">
      <Image src="/logo.svg" alt="Logo" width={74} height={24} />
      <HeaderCart />
    </div>
  );
}
