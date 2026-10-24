import { db } from "@/lib/config/firebase";
import { mealsConverter } from "@/lib/config/firestore-converter";
import { type Meal } from "@/lib/types/meals";
import { collection, getDocs, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function TabOneScreen() {
  const [meals, setMeals] = useState<Meal[]>([]);

  useEffect(() => {
    const loadData = async () => {
      let querySnapshot = await getDocs(
        query(collection(db, "mainMeals")).withConverter(mealsConverter),
      );

      setMeals(
        querySnapshot.docs.map((doc) => ({
          ...doc.data(),
        })),
      );
    };

    loadData();
  }, []);

  return (
    <View>
      <Text>Tab One</Text>

      <View>
        {meals.map((item: Meal) => (
          <Text key={item.id} style={styles.text}>
            {" "}
            {item.name}{" "}
          </Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "white",
  },
});
