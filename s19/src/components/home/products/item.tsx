import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useCartStore } from "@/stores/cart";
import { useMemo } from "react";

const Item = ({ product }: { product: any }) => {
  const addToCart = useCartStore((s) => s.addToCart);

  // What the issue with this code?
  const cart = useCartStore((s) => s.cart);
  const isInCart = useMemo(
    () => cart.some((cartProduct) => cartProduct.id === product.id),
    [cart],
  );

  return (
    <Card className="flex flex-col h-full  p-0">
      <CardHeader className="bg-gray-100 p-4">
        <img
          src={product.image}
          alt={`image of ${product.title}`}
          className="w-full aspect-video object-contain"
        />
      </CardHeader>
      <CardContent className="grow ">
        <CardTitle className="line-clamp-2">{product.title}</CardTitle>
      </CardContent>
      <CardAction className="p-2 w-full">
        <Button
          className="w-full"
          disabled={isInCart}
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </Button>
      </CardAction>
    </Card>
  );
};

export default Item;
