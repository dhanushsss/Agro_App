import React from "react";
import { Image, ImageBackground, StyleSheet, View, Text } from "react-native";
import AppText from "../components/AppText";

export default function WelcomeScreen() {
  return (
    <ImageBackground
      style={styles.backGround}
      blurRadius={20}
      source={require("../images/pic2.jpeg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../images/logo.png")} />
        <AppText>Farm</AppText>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backGround: {
    width: "100%",
    flex: 1,
  },
  logoContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 200,
    height: 300,
  },
});
