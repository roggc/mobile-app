import getProductById from "@/app/utils/api/get-product-by-id";
import Back from "./back";
import { ProductDetails } from "@/app/utils/api/types";
import Details from "./details/details";

export default async function Page({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ isHorizontal: string }>;
}) {
  const { id } = await params;
  const { isHorizontal } = await searchParams;
  const productDetails: ProductDetails = await getProductById(id);

  return (
    <>
      <Back isHorizontal={isHorizontal ? true : false} />
      <Details productDetails={productDetails} />
    </>
  );
}
