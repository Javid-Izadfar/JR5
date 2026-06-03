export type MenuItem = {
  id: number;
  title: string;
  category: 'Burger' | 'Pizza' | 'Salad' | 'Sides' | 'Drinks' | 'Dessert';
  price: number;
  calories: number;
  isVegetarian: boolean;
  inStock: boolean;
};

export type OrderItem = {
  id: number,
  quantity: number
}