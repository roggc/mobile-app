import { ColorOptions } from "@/app/utils/api/types";
import ColorBox from "./color-box";
import { useDetailsContext } from "@/app/[id]/details/details";

type Props = {
  colorOptions: ColorOptions;
};

export default function Color({ colorOptions }: Props) {
  const { selectedColorIndex } = useDetailsContext();
  return (
    <div className="flex flex-col gap-5">
      <span className="text-xs font-light">
        {"color. pick your favourite.".toUpperCase()}
      </span>
      <div className="inline-flex gap-4">
        {colorOptions.map((option, index) => (
          <ColorBox
            key={option.name}
            color={option.hexCode}
            index={index}
            isSelected={selectedColorIndex === index}
          />
        ))}
      </div>
    </div>
  );
}
