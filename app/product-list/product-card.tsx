import { Product } from "@/app/utils/api/types";
import Image from "next/image";

type Props = {
  product: Product;
  isFirst?: boolean;
};

export default function ProductCard({ product, isFirst = false }: Props) {
  return (
    <div
      className={`flex flex-col gap-6 p-4 ${
        isFirst ? "border-[0.5px]" : "border-x-[0.5px] border-b-[0.5px]"
      } items-center`}
    >
      <Image
        src={product.imageUrl}
        alt={product.name}
        width={329}
        height={257}
      />
      <div className="flex flex-col gap-1 w-full">
        <span className="text-[10px] text-[#79736D] font-light">
          {product.brand.toUpperCase()}
        </span>
        <div className="flex justify-between">
          <span className="text-xs font-light">
            {product.name.toUpperCase()}
          </span>
          <span className="text-xs font-light">{product.basePrice} EUR</span>
        </div>
      </div>
    </div>
  );
}
