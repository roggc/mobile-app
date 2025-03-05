import Storage from "./storage/storage";
import { ProductDetails } from "@/app/utils/api/types";
import Color from "./color/color";

type Props = {
  productDetails: ProductDetails;
};

export default function StorageAndColor({ productDetails }: Props) {
  return (
    <div className="inline-flex flex-col gap-8 pb-6">
      <Storage
        storageOptions={productDetails.storageOptions}
        basePrice={productDetails.basePrice}
      />
      <Color colorOptions={productDetails.colorOptions} />
    </div>
  );
}
