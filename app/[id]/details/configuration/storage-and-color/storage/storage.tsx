import Box from "./box";
import { StorageOptions } from "@/app/utils/api/types";
import { useEffect } from "react";
import { useConfigurationContext } from "@/app/[id]/details/configuration/configuration";

type Props = {
  storageOptions: StorageOptions;
  basePrice: number;
};

const findIndex = (storageOptions: StorageOptions, basePrice: number) => {
  let foundIndex = storageOptions.findIndex(
    (option) => option.price === basePrice
  );
  if (foundIndex === -1) {
    foundIndex = 0;
  }
  return foundIndex;
};

export default function Storage({ storageOptions, basePrice }: Props) {
  const { setPrice, selectedStorageIndex, setSelectedStorageIndex } =
    useConfigurationContext();
  const foundIndex = findIndex(storageOptions, basePrice);

  useEffect(() => {
    if (selectedStorageIndex === undefined) {
      setPrice(storageOptions[foundIndex].price);
      setSelectedStorageIndex(foundIndex);
    } else {
      setPrice(storageOptions[selectedStorageIndex].price);
    }
  }, [selectedStorageIndex]);

  // useEffect(() => {
  //   setPrice(storageOptions[selectedStorageIndex ?? foundIndex].price);
  // }, [foundIndex, selectedStorageIndex]);

  return (
    <div className="flex flex-col gap-5">
      <span className="text-xs font-light">
        {"Storage ¿hOW MUCH SPACE DO YOU NEED?".toUpperCase()}
      </span>
      <div className="flex">
        {storageOptions.map((option, index) => (
          <Box
            key={option.capacity}
            value={option.capacity}
            isFirst={index === 0}
            isSelected={index === (selectedStorageIndex ?? foundIndex)}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}
