import type { Id, Rating } from "./general";

export type Product = {
  id: Id;
  title: string;
  price: number;
  description: string;
  category: string;
  image: URL;
  rating: Rating;
};
