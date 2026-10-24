import { Timestamp } from "firebase/firestore";

export type Iddsi =
  | "Regular"
  | "Easy to Chew"
  | "Soft Bite and Sized"
  | "Minced and Moist"
  | "Purreed";

export interface Meal {
  id: string;
  name: string;
  iddsi: Set<Iddsi>;
  allergens: Set<string>;
  updatedAt: Timestamp;
  updatedBy: string;
}
