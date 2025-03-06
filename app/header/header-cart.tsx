import Image from "next/image";
import { useCart } from "@/app/context/cart";
import { usePathname } from "next/navigation";

export default function HeaderCart() {
  const pathname = usePathname();
  const { items, detailItemId } = useCart();
  const isActive =
    items.some((item) => item.id === detailItemId) &&
    pathname.includes(`/${detailItemId}`);

  return (
    <div className="flex gap-1 items-center">
      <Image
        src={isActive ? "/bag-icon-active.svg" : "/bag-icon-inactive.svg"}
        alt="Inactive Cart Icon"
        width={24}
        height={24}
      />
      <div className="font-light">{items.length}</div>
    </div>
  );
}
