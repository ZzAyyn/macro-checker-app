import { globalStyles } from "@/styles/global";
import { View, Text } from "react-native";

const AddMealScreen = () => {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Meow these are your meals.</Text>
    </View>
  );
};

export default AddMealScreen;
