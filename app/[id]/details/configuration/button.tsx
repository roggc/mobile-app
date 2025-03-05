import Button from "@/app/ui/button";
import { useConfigurationContext } from "./configuration";

export default function ButtonToAddToCart() {
  const { price } = useConfigurationContext();
  const isFilled = price > 0;

  return (
    <Button onClick={() => console.log("clicked")} isFilled={isFilled}>
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
