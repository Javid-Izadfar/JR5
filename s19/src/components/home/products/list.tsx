import Item from "./item";
import { useProductsStore } from "@/stores/products";

const List = () => {
  const products = useProductsStore((s) => s.products);

  return (
    <ul className="my-5 grid grid-cols-2 md:grid-cols-4 gap-4">
      {products.map((product) => (
        <li className="col-span-1" key={product.id}>
          <Item product={product} />
        </li>
      ))}
    </ul>
  );
};

export default List;
