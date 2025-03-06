import SearchContainer from "@/app/search/container";
import ProductList from "@/app/product-list/product-list";
import getProducts from "@/app/utils/api/get-products";
import { SearchProvider } from "@/app/context/search";
import { getUniqueProducts } from "@/app/utils/products";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ search?: string }>;
}) {
  const { search } = await searchParams;
  const products = await getProducts(search);
  const uniqueProducts = getUniqueProducts(products);

  return (
    <div className="pt-6 flex flex-col gap-6">
      <SearchProvider>
        <SearchContainer
          search={search}
          numberOfResults={uniqueProducts.length}
        />
      </SearchProvider>
      <ProductList products={uniqueProducts} />
    </div>
  );
}
