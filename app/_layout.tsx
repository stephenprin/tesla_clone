import { Stack } from "expo-router";
import React from "react";
import { StyleSheet } from "react-native";

const StackLayout = () => {
  return (
    <>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="index"
          options={{ animation: "slide_from_bottom" }}
        />
      </Stack>
    </>
  );
};

export default StackLayout;

const styles = StyleSheet.create({});
