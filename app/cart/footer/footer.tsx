import { useCart } from "@/app/context/cart";
import { useMediaQuery } from "@/app/hooks";
import MobileFooter from "./mobile";
import TabletFooter from "./tablet";

export default function Footer() {
  const isMediumUp = useMediaQuery("(min-width: 768px)");
  const { items } = useCart();
  const isEmpty = items.length === 0;
  const total = items.reduce((acc, item) => acc + item.price, 0);

  return isMediumUp ? (
    <TabletFooter isEmpty={isEmpty} total={total} />
  ) : (
    <MobileFooter isEmpty={isEmpty} total={total} />
  );
}
