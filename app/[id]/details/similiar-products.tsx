import type { Product } from "@/app/utils/api/types";
import ProductList from "@/app/ui/product-list/product-list";

type Props = {
  products: Product[];
};

export default function SimilarProducts({ products }: Props) {
  return (
    <div className="flex flex-col gap-10 pb-20">
      <span className="font-light text-xl">SIMILAR ITEMS</span>
      <div className="overflow-auto">
        <ProductList products={products} isHorizontal />
      </div>
    </div>
  );
}
