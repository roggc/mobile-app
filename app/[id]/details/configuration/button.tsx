"use client";

import Button from "@/app/ui/button";
import { useConfigurationContext } from "./configuration";
import { useCart } from "@/app/context/cart";
import type { ColorOptions, StorageOptions } from "@/app/utils/api/types";
import { useDetailsContext } from "@/app/[id]/details/details";

type Props = {
  id: string;
  name: string;
  colorOptions: ColorOptions;
  storageOptions: StorageOptions;
};

export default function ButtonToAddToCart({
  id,
  name,
  colorOptions,
  storageOptions,
}: Props) {
  const { addItem } = useCart();
  const { price, selectedStorageIndex } = useConfigurationContext();
  const { selectedColorIndex } = useDetailsContext();

  const selectedColor = colorOptions[selectedColorIndex];
  const selectedStorage = storageOptions[selectedStorageIndex ?? 0];
  const itemToAdd = {
    id,
    name,
    price,
    color: selectedColor.name,
    imageUrl: selectedColor.imageUrl,
    storage: selectedStorage.capacity,
  };

  const isFilled = price > 0 && price === selectedStorage.price;

  const onClick = () => {
    if (!isFilled) {
      return;
    }
    addItem(itemToAdd);
  };

  return (
    <Button onClick={onClick} isFilled={isFilled}>
      <div
        className={`text-xs font-light ${
          isFilled ? "text-white" : "text-[#C2BFBC]"
        }`}
      >
        ADD
      </div>
    </Button>
  );
}
