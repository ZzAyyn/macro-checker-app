import { globalStyles } from "@/styles/global";
import { ScrollView, Text } from "react-native";

const MealsPage = () => {
  return (
    <ScrollView style={globalStyles.container}>
      <Text style={globalStyles.title}>All Meals</Text>
    </ScrollView>
  );
};

export default MealsPage;
