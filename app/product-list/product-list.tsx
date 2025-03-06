import type { Product } from "@/app/utils/api/types";
import ProductCard from "./product-card";
import Link from "next/link";

const getUniqueProducts = (products: Product[]) => {
  const seenIds = new Set();

  return products.filter((product: Product) => {
    if (seenIds.has(product.id)) {
      return false;
    }
    seenIds.add(product.id);
    return true;
  });
};

type Props = {
  products: Product[];
  isHorizontal?: boolean;
};

export default function ProductList({ products, isHorizontal = false }: Props) {
  const uniqueProducts = getUniqueProducts(products);

  return (
    <div
      className={`${isHorizontal ? "" : "px-4"} pb-4 flex ${
        isHorizontal ? "flex-row" : "flex-col"
      } md:grid md:grid-cols-2`}
    >
      {uniqueProducts.map((product: Product, index: number) => (
        <Link
          key={product.id}
          href={`/${product.id}?isHorizontal=${isHorizontal ?? ""}`}
        >
          <ProductCard
            product={product}
            isFirst={index === 0}
            isHorizontal={isHorizontal}
          />
        </Link>
      ))}
    </div>
  );
}
