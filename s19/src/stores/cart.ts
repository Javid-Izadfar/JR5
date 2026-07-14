import type { Product } from "@/types/product";
import { create } from "zustand";

type CartStore = {
  cart: Product[];
  addToCart: (item: Product) => void;
  removeFromCart: (item: Product) => void;
};

export const useCartStore = create<CartStore>((set) => ({
  cart: [],
  addToCart: (item: Product) => {
    set((prev) => ({
      cart: [...prev.cart, item],
    }));
  },
  removeFromCart: (item: Product) => {
    alert("hi");
  },
}));
