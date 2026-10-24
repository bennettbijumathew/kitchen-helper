import { Meal } from "@/lib/types/meals";
import { DocumentData, QueryDocumentSnapshot } from "firebase/firestore";

export const mealsConverter = {
  toFirestore(meal: Meal): DocumentData {
    return {
      name: meal.name,
      iddsi: [...meal.iddsi],
      allergens: [...meal.iddsi],
      updatedAt: meal.updatedAt.toDate(),
      updatedBy: meal.updatedBy,
    };
  },
  fromFirestore(snapshot: QueryDocumentSnapshot): Meal {
    const data = snapshot.data();

    const meal: Meal = {
      id: snapshot.id,
      name: data.name,
      iddsi: new Set(data.iddsi),
      allergens: new Set(data.iddsi),
      updatedAt: data.updatedAt.toDate(),
      updatedBy: data.updatedBy,
    };

    return meal;
  },
};
