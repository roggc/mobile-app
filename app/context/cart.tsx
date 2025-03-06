"use client";

import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useCallback,
  SetStateAction,
  Dispatch,
  useEffect,
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
  const isClient = typeof window !== "undefined";

  const [items, setItems] = useState<CartItem[]>(() => {
    if (isClient) {
      const storedItems = localStorage.getItem("cartItems");
      return storedItems ? JSON.parse(storedItems) : [];
    }
    return [];
  });
  const [detailItemId, setDetailItemId] = useState(() => {
    if (isClient) {
      const storedDetailItemId = localStorage.getItem("detailItemId");
      return storedDetailItemId || "";
    }
    return "";
  });

  const addItem = useCallback((item: CartItem) => {
    setItems((prev) => {
      const updatedItems = [
        ...prev.filter((item_) => item_.id !== item.id),
        item,
      ];
      localStorage.setItem("cartItems", JSON.stringify(updatedItems));
      return updatedItems;
    });
  }, []);

  const removeItem = useCallback((id: string) => {
    setItems((prev) => {
      const updatedItems = prev.filter((item) => item.id !== id);
      localStorage.setItem("cartItems", JSON.stringify(updatedItems));
      return updatedItems;
    });
  }, []);

  useEffect(() => {
    if (detailItemId) {
      localStorage.setItem("detailItemId", detailItemId);
    }
  }, [detailItemId]);

  return (
    <CartContext.Provider
      value={{ items, addItem, removeItem, detailItemId, setDetailItemId }}
    >
      {children}
    </CartContext.Provider>
  );
}
