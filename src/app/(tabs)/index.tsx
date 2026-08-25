import { ScrollView, Text, StyleSheet } from "react-native";
import { globalStyles } from "@/styles/global";
import HomeHeader from "@/components/HomeHeader";
import MacroGrid from "@/components/MacroGrid";

const HomeScreen = () => {
  return (
    <ScrollView style={globalStyles.container}>
      <Text style={globalStyles.title}>MacroZone</Text>
      <HomeHeader />
      <MacroGrid />
    </ScrollView>
  );
};

export default HomeScreen;
