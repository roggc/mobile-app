import type { Product } from "@/app/utils/api/types";
import ProductList from "@/app/product-list/product-list";
import { getUniqueProducts } from "@/app/utils/products";

type Props = {
  products: Product[];
};

export default function SimilarProducts({ products }: Props) {
  const uniqueProducts = getUniqueProducts(products);

  return (
    <div className="flex flex-col gap-10 pb-20">
      <span className="font-light text-xl">SIMILAR ITEMS</span>
      <div className="overflow-auto">
        <ProductList products={uniqueProducts} isHorizontal />
      </div>
    </div>
  );
}
