import { globalStyles } from "@/styles/global";
import { Link } from "expo-router";
import { ScrollView, Text } from "react-native";

const MealScreen = () => {
  return (
    <ScrollView style={globalStyles.container}>
      <Text style={globalStyles.title}>All Meals</Text>
      <Link href={"/add-meal"} style={globalStyles.sectionTitle}>
        Check out your meals?
      </Link>
    </ScrollView>
  );
};

export default MealScreen;
