"use client";

import dynamic from "next/dynamic";
import { PropsWithChildren } from "react";

const NoSSRCartProvider = dynamic(
  () => import("./context/cart").then((mod) => mod.CartProvider),
  { ssr: false }
);

type Props = {};

export default function CartProviderWrapper({
  children,
}: PropsWithChildren<Props>) {
  return <NoSSRCartProvider>{children}</NoSSRCartProvider>;
}
