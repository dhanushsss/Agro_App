import React from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native-paper";
import { theme } from "../core/theme";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import colors from "../config/colors";

export default function Header(props) {
  const [fontsLoaded] = Font.useFonts({
    "Josefin-Sans": require("../assets/fonts/JosefinSans-Medium.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return <Text style={styles.header} {...props} />;
}

const styles = StyleSheet.create({
  header: {
    fontSize: 21,
    color: colors.darkPink,
    fontWeight: "bold",
    paddingVertical: 12,
    fontFamily: "Josefin-Sans",
  },
});
