import { COLORS } from "@/constants/Colors";
import React from "react";
import {
  Dimensions,
  Platform,
  StatusBar,
  StyleSheet,
  View,
  ViewStyle,
} from "react-native";

const { height } = Dimensions.get("window");
export type ScreenWrapperProps = {
  style?: ViewStyle;
  children: React.ReactNode;
};

const ScreenWrapper = ({ style, children }: ScreenWrapperProps) => {
  const paddingTop = Platform.OS === "ios" ? height * 0.04 : 40;
  return (
    <View
      style={[
        { paddingTop, flex: 1, backgroundColor: COLORS.primaryBlackHex },
        style,
      ]}
    >
      <StatusBar barStyle="light-content" />
      {children}
    </View>
  );
};

export default ScreenWrapper;

const styles = StyleSheet.create({});
