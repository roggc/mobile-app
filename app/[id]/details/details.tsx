"use client";

import { ProductDetails } from "@/app/utils/api/types";
import Configuration from "./configuration/configuration";
import { createContext, useContext, useEffect, useState } from "react";
import Image from "./image";
import Specifications from "./specifications/specifications";
import SimilarProducts from "./similiar-products";
import { useCart } from "@/app/context/cart";

type DetailsContextType = {
  selectedColorIndex: number;
  setSelectedColorIndex: (index: number) => void;
};

const DetailsContext = createContext<DetailsContextType>({
  selectedColorIndex: 0,
  setSelectedColorIndex: () => {},
});

export const useDetailsContext = () => {
  return useContext(DetailsContext);
};

type Props = {
  productDetails: ProductDetails;
};

export default function Details({ productDetails }: Props) {
  const { setDetailItemId } = useCart();
  const [selectedColorIndex, setSelectedColorIndex] = useState<number>(0);

  useEffect(() => {
    setDetailItemId(productDetails.id);
  }, [productDetails]);

  return (
    <DetailsContext.Provider
      value={{ selectedColorIndex, setSelectedColorIndex }}
    >
      <div className="px-4 gap-10 flex flex-col">
        <div className="flex flex-col gap-10 md:flex-row md:gap-1 md:justify-between md:items-center">
          <Image colorOptions={productDetails.colorOptions} />
          <Configuration productDetails={productDetails} />
        </div>
        <Specifications productDetails={productDetails} />
        <SimilarProducts products={productDetails.similarProducts} />
      </div>
    </DetailsContext.Provider>
  );
}
