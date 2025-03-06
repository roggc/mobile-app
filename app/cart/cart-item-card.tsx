import { CartItem } from "@/app/context/cart";
import Image from "next/image";
import { useCart } from "@/app/context/cart";

type Props = {
  cartItem: CartItem;
};

export default function CartItemCard({ cartItem }: Props) {
  const { removeItem } = useCart();

  return (
    <div className="flex gap-6">
      <div className="w-[160px] h-[198px] relative">
        <Image
          src={cartItem.imageUrl}
          layout="fill"
          objectFit="contain"
          alt="cart item"
        />
      </div>
      <div className="flex flex-col justify-between py-10">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-1">
            <span className="text-xs font-light">
              {cartItem.name.toUpperCase()}
            </span>
            <span className="text-xs font-light">{`${
              cartItem.storage
            } | ${cartItem.color.toUpperCase()}`}</span>
          </div>
          <span className="text-xs font-light">{`${cartItem.price} EUR`}</span>
        </div>
        <span
          className="text-xs font-light text-[#DF0000] cursor-pointer"
          onClick={() => removeItem(cartItem.id)}
        >
          Remove
        </span>
      </div>
    </div>
  );
}
