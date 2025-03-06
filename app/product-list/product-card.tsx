import { Product } from "@/app/utils/api/types";
import Image from "next/image";

type Props = {
  product: Product;
  isFirst?: boolean;
  isHorizontal?: boolean;
};

export default function ProductCard({
  product,
  isFirst = false,
  isHorizontal = false,
}: Props) {
  return (
    <div
      className={`flex flex-col gap-6 p-4 ${
        isFirst
          ? "border-[0.5px]"
          : isHorizontal
          ? "border-y-[0.5px] border-r-[0.5px]"
          : "border-x-[0.5px] border-b-[0.5px]"
      } items-center ${
        isHorizontal ? "w-[344px]" : "w-full"
      } md:border group relative bg-black`}
    >
      <div className="w-[312px] h-[257px] relative z-1">
        <Image
          src={product.imageUrl}
          alt={product.name}
          fill
          className="object-contain"
        />
      </div>
      <div className="flex flex-col gap-1 w-full z-1 group-hover:text-white transition-all duration-500 easy-out">
        <span className="text-[10px] text-[#79736D] group-hover:text-white transition-all duration-500 easy-out font-light">
          {product.brand.toUpperCase()}
        </span>
        <div className="flex justify-between">
          <span className="text-xs font-light">
            {product.name.toUpperCase()}
          </span>
          <span className="text-xs font-light">{product.basePrice} EUR</span>
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full bg-white h-full group-hover:h-0 transition-all duration-500 ease-out z-0"></div>
    </div>
  );
}
