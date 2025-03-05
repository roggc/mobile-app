import { useConfigurationContext } from "@/app/[id]/details/configuration/configuration";

type Props = {
  value: string;
  isFirst?: boolean;
  isSelected?: boolean;
  index: number;
};

export default function Box({ value, isFirst, isSelected, index }: Props) {
  const { setSelectedStorageIndex } = useConfigurationContext();
  return (
    <div
      className={`p-6 ${isFirst ? "border" : "border-t border-b border-r"} ${
        isSelected ? "border" : "border-[#cccccc]"
      }  w-[95px] h-[48px] text-xs font-light flex items-center justify-center cursor-pointer`}
      onClick={() => setSelectedStorageIndex(index)}
    >
      {value}
    </div>
  );
}
