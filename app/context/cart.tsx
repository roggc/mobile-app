"use client";

import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useCallback,
  SetStateAction,
  Dispatch,
} from "react";

export type CartItem = {
  id: string;
  name: string;
  color: string;
  storage: string;
  imageUrl: string;
  price: number;
};

type CartContextType = {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  detailItemId: string;
  setDetailItemId: Dispatch<SetStateAction<string>>;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }
  return context;
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [detailItemId, setDetailItemId] = useState("");

  const addItem = useCallback(
    (item: CartItem) =>
      setItems((prev) => [
        ...prev.filter((item_) => item_.id !== item.id),
        item,
      ]),
    []
  );

  const removeItem = useCallback(
    (id: string) => setItems((prev) => prev.filter((item) => item.id !== id)),
    []
  );

  return (
    <CartContext.Provider
      value={{ items, addItem, removeItem, detailItemId, setDetailItemId }}
    >
      {children}
    </CartContext.Provider>
  );
}
