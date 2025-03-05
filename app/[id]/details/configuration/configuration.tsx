"use client";

import { ProductDetails } from "@/app/utils/api/types";
import NameAndPrice from "./name-and-price";
import StorageAndColor from "./storage-and-color/storage-and-color";
import { useState, createContext, useContext } from "react";
import ButtonToAddToCart from "./button";

type ConfigurationContextType = {
  price: number;
  setPrice: (price: number) => void;
  selectedStorageIndex: number | undefined;
  setSelectedStorageIndex: (index: number) => void;
};

const ConfigurationContext = createContext<ConfigurationContextType>({
  price: 0,
  setPrice: () => {},
  selectedStorageIndex: undefined,
  setSelectedStorageIndex: () => {},
});

export const useConfigurationContext = () => {
  return useContext(ConfigurationContext);
};

type Props = {
  productDetails: ProductDetails;
};

export default function Configuration({ productDetails }: Props) {
  const [price, setPrice] = useState(0);
  const [selectedStorageIndex, setSelectedStorageIndex] = useState<
    number | undefined
  >(undefined);

  return (
    <ConfigurationContext.Provider
      value={{ price, setPrice, selectedStorageIndex, setSelectedStorageIndex }}
    >
      <div className="flex flex-col gap-10 items-start">
        <NameAndPrice name={productDetails.name} />
        <StorageAndColor productDetails={productDetails} />
        <ButtonToAddToCart
          id={productDetails.id}
          name={productDetails.name}
          colorOptions={productDetails.colorOptions}
          storageOptions={productDetails.storageOptions}
        />
      </div>
    </ConfigurationContext.Provider>
  );
}
