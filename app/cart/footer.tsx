import { useCart } from "@/app/context/cart";
import Button from "@/app/ui/button";
import { useRouter } from "next/navigation";

export default function Footer() {
  const router = useRouter();
  const { items } = useCart();
  const isEmpty = items.length === 0;
  const total = items.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className={`flex flex-col gap-6 py-6 px-4 ${isEmpty ? "" : "pt-4"}`}>
      {!isEmpty && (
        <div className="flex justify-between">
          <span className="font-normal text-sm">TOTAL</span>
          <span className="font-normal text-sm">{total.toFixed(2)} EUR</span>
        </div>
      )}
      <div className="flex gap-3">
        <Button
          className="bg-white border border-black"
          onClick={() => router.push("/")}
        >
          <div className="font-light text-xs text-black">
            {"Continue shopping".toUpperCase()}
          </div>
        </Button>
        {!isEmpty && (
          <Button isFilled>
            <div className="font-light text-xs text-white">
              {"pay".toUpperCase()}
            </div>
          </Button>
        )}
      </div>
    </div>
  );
}
