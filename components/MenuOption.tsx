import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

type MenuOptionProps = {
    item: {
        name: string;
        iconName: string;
    };
}
const MenuOption = ({ item }: MenuOptionProps) => {
  return (
    <TouchableOpacity style={styles.optionRow}>
      <MaterialCommunityIcons
        name={item.iconName as any}
        size={26}
        color="gray"
      />
      <Text style={styles.optionText}>{item.name}</Text>
      <MaterialIcons
        name="keyboard-arrow-right"
        size={24}
        color="gray"
        style={{ marginLeft: "auto" }}
      />
    </TouchableOpacity>
  );
};

export default MenuOption;

const styles = StyleSheet.create({
  optionRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  optionText: {
    color: "#eee",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 10,
  },
});
