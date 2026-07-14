import List from "@/components/home/products/list";
import { useCartStore } from "@/stores/cart";
import { useProductsStore } from "@/stores/products";
import clsx from "clsx";
import { useEffect } from "react";

export default function Home() {
  const fetchProducts = useProductsStore((s) => s.fetchProducts);
  const cart = useCartStore((s) => s.cart);

  useEffect(() => {
    fetchProducts();
  }, []);

  const condition = false;
  const borderClass = "border-2 border-blue-500";

  return (
    <div className="container mx-auto px-4 md:px-0">
      <div
        className={clsx(
          "bg-red-500 p-2",
          borderClass,
          condition && "text-white",
        )}
      >
        items in cart: {cart.length}
      </div>
      <List />
    </div>
  );
}
