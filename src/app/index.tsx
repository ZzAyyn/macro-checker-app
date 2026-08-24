import { ScrollView, Text, StyleSheet } from "react-native";
import { globalStyles } from "@/styles/global";
import HomeHeader from "@/components/HomeHeader";

const HomeScreen = () => {
  return (
    <ScrollView style={globalStyles.container}>
      <Text style={globalStyles.title}>MacroZone</Text>
      <Text>
        <HomeHeader />
      </Text>
    </ScrollView>
  );
};

export default HomeScreen;
