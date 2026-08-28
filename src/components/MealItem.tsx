import { deleteMeal } from "@/storage/meals";
import { Alert, StyleSheet, Text, TouchableOpacity } from "react-native";
import { colors } from "@/styles/global";
import * as Haptics from "expo-haptics";

type MealItemProps = {
  id: string;
  name: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  onDelete: () => void;
};

const MealItem = ({
  id,
  name,
  calories,
  protein,
  carbs,
  fat,
  onDelete,
}: MealItemProps) => {
  const handleLongPress = () => {
    Alert.alert("Delete Meal", `Are you sure you want to delete "${name}"?`, [
      { text: "Cancel", style: "cancel" },
      {
        text: "Delete",
        style: "destructive",
        onPress: async () => {
          await deleteMeal(id);
          Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
          onDelete();
        },
      },
    ]);
  };

  return (
    <TouchableOpacity style={styles.container} onLongPress={handleLongPress}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.macros}>
        {calories} cal • {protein}g P • {carbs}g C • {fat}g F
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.surface,
    borderRadius: 10,
    padding: 16,
    marginBottom: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: 600,
    color: colors.text,
  },
  macros: {
    fontSize: 13,
    color: colors.textSecondary,
    marginTop: 4,
  },
});

export default MealItem;
