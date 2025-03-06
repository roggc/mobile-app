import Button from "@/app/ui/button";
import { useRouter } from "next/navigation";

type Props = {
  isEmpty?: boolean;
  total: number;
};

export default function TabletFooter({ isEmpty = false, total }: Props) {
  const router = useRouter();

  return (
    <div className={`flex justify-between p-10 pt-6`}>
      <Button
        className="bg-white border border-black max-w-[200px]"
        onClick={() => router.push("/")}
      >
        <div className="font-light text-xs text-black">
          {"Continue shopping".toUpperCase()}
        </div>
      </Button>
      {!isEmpty && (
        <div className="flex flex-row gap-14">
          <div className="flex justify-between items-center gap-6">
            <span className="font-normal text-sm">TOTAL</span>
            <span className="font-normal text-sm whitespace-nowrap">
              {total.toFixed(2)} EUR
            </span>
          </div>
          <Button isFilled className="min-w-[260px]">
            <div className="font-light text-xs text-white">
              {"pay".toUpperCase()}
            </div>
          </Button>
        </div>
      )}
    </div>
  );
}
