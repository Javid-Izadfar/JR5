import type { Id } from "@/types/general";

export const GetProducts = "https://fakestoreapi.com/products";
export const GetProductDetail = (productId: Id) =>
  `https://fakestoreapi.com/products/${productId}`;
