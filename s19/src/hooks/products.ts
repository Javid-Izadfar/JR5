import { GetProductDetail, GetProducts } from "@/lib/urls";
import type { Id } from "@/types/general";

const useProducts = () => {
  const getProducts = async () => {
    try {
      const response = await fetch(GetProducts);
      if (!response.ok) throw Error;

      const result = await response.json();

      return result;
    } catch {
      return [];
    }
  };

  const getProductDetail = async (id: Id) => {
    try {
      const response = await fetch(GetProductDetail(id));
      if (!response.ok) throw Error;

      const result = await response.json();

      return result;
    } catch {
      return null;
    }
  };

  return {
    getProducts,
    getProductDetail,
  };
};

export default useProducts;
