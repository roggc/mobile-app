import SearchContainer from "@/app/search/container";
import ProductList from "@/app/product-list/product-list";

export default async function Home() {
  return (
    <div className="pt-6 flex flex-col gap-6">
      <SearchContainer />
      <ProductList />
    </div>
  );
}
