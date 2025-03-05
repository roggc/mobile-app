import getProducts from "@/app/utils/api/get-products";
import type { Product } from "@/app/utils/api/types";
import ProductCard from "@/app/product-card";
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

export default async function ProductList() {
  const products = await getProducts();
  const uniqueProducts = getUniqueProducts(products);

  return (
    <div className="px-4 pb-4">
      {uniqueProducts.map((product: Product) => (
        <Link key={product.id} href={`/${product.id}`}>
          <ProductCard product={product} />
        </Link>
      ))}
    </div>
  );
}
