"use client";

import dynamic from "next/dynamic";
import { PropsWithChildren } from "react";

const NoSSRCartProvider = dynamic(
  () => import("./context/cart").then((mod) => mod.CartProvider),
  { ssr: false }
);

export default function CartProviderWrapper({ children }: PropsWithChildren) {
  return <NoSSRCartProvider>{children}</NoSSRCartProvider>;
}
