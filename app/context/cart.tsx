"use client";

import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useCallback,
} from "react";

type CartItem = {
  id: string;
  name: string;
  color: string;
  storage: string;
  imageUrl: string;
  price: number;
};

interface CartContextType {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
}

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
    <CartContext.Provider value={{ items, addItem, removeItem }}>
      {children}
    </CartContext.Provider>
  );
}
