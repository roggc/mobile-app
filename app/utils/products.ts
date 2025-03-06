import type { Product } from "@/app/utils/api/types";

export const getUniqueProducts = (products: Product[]) => {
  const seenIds = new Set();

  return products.filter((product: Product) => {
    if (seenIds.has(product.id)) {
      return false;
    }
    seenIds.add(product.id);
    return true;
  });
};
