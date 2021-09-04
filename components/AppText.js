import React from "react";
import { Text, StyleSheet } from "react-native";
import colors from "../config/colors";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

export default function AppText({ children, style }) {
  //Fonts
  const [fontsLoaded] = Font.useFonts({
    "Josefin-Sans": require("../assets/fonts/JosefinSans-Medium.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  //application

  return <Text style={[styles.AppText, style]}>{children}</Text>;
}
const styles = StyleSheet.create({
  AppText: {
    color: colors.black,
    fontFamily: "Josefin-Sans",
    fontSize: 20,
    marginTop: 20,
    marginLeft: 10,
  },
});
