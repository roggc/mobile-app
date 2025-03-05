import PropertyBox from "./property-box";
import { ProductDetails } from "@/app/utils/api/types";
import List from "./list";

type Props = {
  productDetails: ProductDetails;
};

const extractSpecsFromObject = (object: { [x: string]: string }) => {
  const specs = Object.keys(object).map((key) => {
    return {
      label: Object.keys(object).find((key_) => key_ === key) ?? "",
      value: object[key],
    };
  });
  return specs;
};

export default function Specifications({ productDetails }: Props) {
  const {
    basePrice,
    rating,
    specs,
    colorOptions,
    storageOptions,
    similarProducts,
    id,
    ...restOfProductDetails
  } = productDetails;
  const specifications = [
    ...extractSpecsFromObject(restOfProductDetails),
    ...extractSpecsFromObject(productDetails.specs),
  ];

  return (
    <div className="flex flex-col gap-10">
      <span className="text-xl font-light">SPECIFICATIONS</span>
      <List pairs={specifications} />
    </div>
  );
}
