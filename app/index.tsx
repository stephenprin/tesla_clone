import ScreenWrapper from "@/components/ScreenWrapper";
import {
  Entypo,
  FontAwesome,
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

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

      <View style={styles.controls}>
        <Entypo name="lock" size={26} color="gray" />
        <MaterialCommunityIcons name="fan" size={26} color="gray" />
        <FontAwesome5 name="bolt" size={26} color="gray" />
        <Ionicons name="car-sport-sharp" size={26} color="gray" />
          </View>
          
          <View style={optionRow}>
              
          </View>
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
  controls: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
});
