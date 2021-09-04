import React from "react";
import { Image, StyleSheet, View, Text, Platform } from "react-native";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import AppButton from "../components/AppButton";
import Screen from "../components/Screen";
import colors from "../config/colors";

export default function LoginScreen() {
  //Fonts
  const [fontsLoaded] = Font.useFonts({
    "Josefin-Sans": require("../assets/fonts/JosefinSans-Medium.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  //application

  return (
    <Screen style={styles.backGround}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../images/logo.png")} />
        <Text style={styles.text}>Agro Stock</Text>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton title="Buy" onPress={() => console.log("Hi")} />
        <AppButton
          title="Farmer"
          color={colors.slightBlue}
          onPress={() => console.log("Hi")}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  backGround: {
    width: "100%",
    flex: 1,
    backgroundColor: colors.primary,
  },
  logoContainer: {
    alignItems: "center",
  },
  logo: {
    width: 200,
    height: 100,
    overflow: "visible",
    top: 50,
    left: -60,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignContent: "space-around",
    padding: 20,
    fontFamily: "Josefin-Sans",
  },

  ...Platform.select({
    android: {
      text: {
        top: 110,
        fontSize: 30,
        fontFamily: "Josefin-Sans",
      },
    },
    ios: {
      text: {
        top: 100,
        fontSize: 30,
        fontFamily: "Josefin-Sans",
      },
    },
  }),
});
