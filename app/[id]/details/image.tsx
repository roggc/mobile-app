import { ColorOptions } from "@/app/utils/api/types";
import Image from "next/image";
import { useDetailsContext } from "./details";

type Props = {
  colorOptions: ColorOptions;
};

export default function ProductImage({ colorOptions }: Props) {
  const { selectedColorIndex } = useDetailsContext();

  return (
    <Image
      src={colorOptions[selectedColorIndex].imageUrl}
      alt="product with specific color"
      width={260}
      height={273}
    />
  );
}
