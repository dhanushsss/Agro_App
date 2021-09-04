import React from "react";
import { Text, StyleSheet, TouchableOpacity, Platform } from "react-native";

import colors from "../config/colors";

export default function AppButton({
  title,
  onPress,
  color = colors.slightPink,
}) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: color }]}
      onPress={onPress}
    >
      <Text style={styles.textButton}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    height: Platform.OS === "android" ? 50 : 70,
    width: "100%",
    borderRadius: 50,
    justifyContent: "center",
    padding: 10,
    marginVertical: 10,
  },

  textButton: {
    color: "#fff",
    fontSize: Platform.OS === "android" ? 20 : 25,
    textAlign: "center",
    fontFamily: "Josefin-Sans",
  },
});
