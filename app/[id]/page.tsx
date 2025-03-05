import getProductById from "@/app/utils/api/get-product-by-id";
import Back from "./back";
import { ProductDetails } from "@/app/utils/api/types";
import Details from "./details/details";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const productDetails: ProductDetails = await getProductById(id);

  return (
    <>
      <Back />
      <Details productDetails={productDetails} />
    </>
  );
}
