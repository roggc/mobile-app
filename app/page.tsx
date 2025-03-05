import SearchContainer from "@/app/search/container";
import ProductList from "@/app/product-list/product-list";
import getProducts from "@/app/utils/api/get-products";

export default async function Home() {
  const products = await getProducts();

  return (
    <div className="pt-6 flex flex-col gap-6">
      <SearchContainer />
      <ProductList products={products} />
    </div>
  );
}
