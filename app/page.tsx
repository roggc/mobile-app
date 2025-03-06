import SearchContainer from "@/app/search/container";
import ProductList from "@/app/product-list/product-list";
import getProducts from "@/app/utils/api/get-products";
import { SearchProvider } from "@/app/context/search";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ search?: string }>;
}) {
  const { search } = await searchParams;
  const products = await getProducts(search);

  return (
    <div className="pt-6 flex flex-col gap-6">
      <SearchProvider>
        <SearchContainer search={search} numberOfResults={products.length} />
      </SearchProvider>
      <ProductList products={products} />
    </div>
  );
}
