import menuOptions from "@/assets/menuOptions";
import Controls from "@/components/Controls";
import MenuOption from "@/components/MenuOption";
import ScreenWrapper from "@/components/ScreenWrapper";
import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";

const index = () => {
  return (
    <ScreenWrapper style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>My Modal S</Text>
          <Text style={styles.subtitle}>Parked</Text>
        </View>
        <FontAwesome name="user-circle-o" size={30} color="gray" />
      </View>

      <Image
        source={require("../assets/images/car.png")}
        style={styles.image}
        resizeMode="contain"
      />

      <Controls />

      <FlatList
        showsVerticalScrollIndicator={false}
        data={menuOptions}
        keyExtractor={(item) => item.name}
        renderItem={MenuOption}
      />
    </ScreenWrapper>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  header: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 24,
    color: "#eee",
    fontWeight: "bold",
    marginBottom: 6,
  },
  subtitle: {
    color: "gray",
    fontWeight: "500",
  },
  image: {
    width: "110%",
    height: 300,
  },
});
