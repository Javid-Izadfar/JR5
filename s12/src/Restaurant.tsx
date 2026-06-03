import { useMemo, useState } from "react";
import type { MenuItem, OrderItem } from "./types/restaurant";

const MENU: MenuItem[] = [
  {
    id: 1,
    title: "Cheeseburger",
    category: "Burger",
    price: 12.99,
    calories: 850,
    isVegetarian: false,
    inStock: true,
  },
  {
    id: 2,
    title: "Chicken Burger",
    category: "Burger",
    price: 11.99,
    calories: 780,
    isVegetarian: false,
    inStock: true,
  },
  {
    id: 3,
    title: "Margherita Pizza",
    category: "Pizza",
    price: 14.99,
    calories: 920,
    isVegetarian: true,
    inStock: true,
  },
  {
    id: 4,
    title: "Pepperoni Pizza",
    category: "Pizza",
    price: 16.99,
    calories: 1100,
    isVegetarian: false,
    inStock: true,
  },
  {
    id: 5,
    title: "Caesar Salad",
    category: "Salad",
    price: 8.99,
    calories: 350,
    isVegetarian: true,
    inStock: true,
  },
  {
    id: 6,
    title: "Greek Salad",
    category: "Salad",
    price: 9.99,
    calories: 420,
    isVegetarian: true,
    inStock: false,
  },
  {
    id: 7,
    title: "French Fries",
    category: "Sides",
    price: 4.99,
    calories: 450,
    isVegetarian: true,
    inStock: true,
  },
  {
    id: 8,
    title: "Onion Rings",
    category: "Sides",
    price: 5.49,
    calories: 480,
    isVegetarian: true,
    inStock: true,
  },
  {
    id: 9,
    title: "Cola",
    category: "Drinks",
    price: 2.99,
    calories: 140,
    isVegetarian: true,
    inStock: true,
  },
  {
    id: 10,
    title: "Orange Juice",
    category: "Drinks",
    price: 3.99,
    calories: 120,
    isVegetarian: true,
    inStock: true,
  },
  {
    id: 11,
    title: "Chocolate Cake",
    category: "Dessert",
    price: 6.99,
    calories: 650,
    isVegetarian: true,
    inStock: true,
  },
  {
    id: 12,
    title: "Ice Cream",
    category: "Dessert",
    price: 5.99,
    calories: 500,
    isVegetarian: true,
    inStock: true,
  },
];
const TAX = 0.13;

type OrderItemDetail = MenuItem & OrderItem;
const Restaurant = () => {
  const [orderItems, setOrderItems] = useState<OrderItem[]>([]);

  const orderItemsDetail = useMemo<OrderItemDetail[]>(() => {
    return orderItems.map((order) => {
      const orderItem = MENU.find((item) => item.id === order.id);
      return {
        ...order,
        ...orderItem,
      } as OrderItemDetail;
    });
  }, [orderItems]);

  const totalPrice = useMemo<number>(() => {
    return orderItemsDetail.reduce((acc, cur) => {
      return acc + cur.price * (TAX + 1) * cur.quantity;
    }, 0);
  }, [orderItemsDetail]);

  const orderFood = (item: MenuItem) => {
    setOrderItems((prev) => {
      const prevItemIndex = prev.findIndex(
        (prevItem) => prevItem.id === item.id,
      );
      if (prevItemIndex > -1) {
        return prev.map((prevItem) => {
          if (prevItem.id === item.id) {
            return {
              ...prevItem,
              quantity: prevItem.quantity + 1,
            };
          }
          return prevItem;
        });
      }
      return [
        ...prev,
        {
          id: item.id,
          quantity: 1,
        },
      ];
    });
  };

  return (
    <div>
      <section>
        <h2>Menu</h2>
        <ul>
          {MENU.map((item) => (
            <li key={item.id}>
              <h3>{item.title}</h3>
              <p>
                {item.category} {item.isVegetarian && "🌿"}
              </p>
              <p>${item.price}</p>
              <button disabled={!item.inStock} onClick={() => orderFood(item)}>
                {item.inStock ? "Order" : "Out of Stock"}
              </button>
            </li>
          ))}
        </ul>
      </section>
      <section className="receipt">
        <h2>Receipt</h2>
        <code>
          {orderItemsDetail.length ? (
            <div>
              <ul>
                {orderItemsDetail.map((item) => (
                  <li key={item.id}>
                    {item.title} X {item.quantity}
                  </li>
                ))}
              </ul>
              <div>Total: ${totalPrice}</div>
            </div>
          ) : (
            <>No Food Ordered Yet</>
          )}
        </code>
      </section>
    </div>
  );
};

export default Restaurant;
