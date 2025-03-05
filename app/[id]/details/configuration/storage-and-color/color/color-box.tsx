import { useDetailsContext } from "@/app/[id]/details/details";

type Props = {
  color: string;
  index: number;
  isSelected?: boolean;
};

export default function ColorBox({ color, index, isSelected }: Props) {
  const { setSelectedColorIndex } = useDetailsContext();
  return (
    <div
      className={`border ${
        isSelected ? "" : "border-[#cccccc]"
      } w-6 h-6 flex items-center justify-center cursor-pointer`}
      onClick={() => setSelectedColorIndex(index)}
    >
      <div className="w-5 h-5" style={{ backgroundColor: color }} />
    </div>
  );
}
