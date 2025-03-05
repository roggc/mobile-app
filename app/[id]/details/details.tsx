"use client";

import { ProductDetails } from "@/app/utils/api/types";
import Configuration from "./configuration/configuration";
import { createContext, useContext, useState } from "react";
import Image from "./image";
import Specifications from "./specifications/specifications";
import SimilarProducts from "./similiar-products";

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
  const [selectedColorIndex, setSelectedColorIndex] = useState<number>(0);

  return (
    <DetailsContext.Provider
      value={{ selectedColorIndex, setSelectedColorIndex }}
    >
      <div className="px-4 gap-10 flex flex-col">
        <Image colorOptions={productDetails.colorOptions} />
        <Configuration productDetails={productDetails} />
        <Specifications productDetails={productDetails} />
        <SimilarProducts products={productDetails.similarProducts} />
      </div>
    </DetailsContext.Provider>
  );
}
