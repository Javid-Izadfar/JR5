import useProducts from "@/hooks/products";
import type { Product } from "@/types/product";
import { create } from "zustand";

type ProductStore = {
  products: Product[];
  fetchProducts: () => void;
};

export const useProductsStore = create<ProductStore>((set) => {
  const { getProducts } = useProducts();

  return {
    products: [],
    addNewProduct: (newProduct: Product) => {
      set((prev) => {
        return {
          products: [...prev.products, newProduct],
        };
      });
    },
    fetchProducts: async () => {
      const result = await getProducts();
      set({
        products: result,
      });
    },
  };
});
