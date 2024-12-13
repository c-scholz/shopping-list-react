import { ShoppingItem } from "../Item/types";

export type ShoppingList = {
  id: string;
  name: string;
  items: ShoppingItem[]
}