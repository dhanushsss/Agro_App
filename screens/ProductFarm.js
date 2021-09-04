import React from "react";
import { Image, View, StyleSheet } from "react-native";
import AppText from "../components/AppText";
import Screen from "../components/Screen";
import colors from "../config/colors";

export default function ProductFarm() {
  return (
    <Screen style={styles.main}>
      <View style={styles.Background}>
        <Image style={styles.logo} source={require("../images/lo-.png")} />
        <View
          style={{
            backgroundColor: "black",
            width: "100%",
            height: 1,
            marginTop: 20,
          }}
        />
        <View style={{ flexDirection: "row" }}>
          <View>
            <AppText style={styles.details}> Name </AppText>
            <AppText style={styles.details}> Product Name </AppText>
            <AppText style={styles.details}> Area Name </AppText>
            <AppText style={styles.details}> Quantity </AppText>
            <AppText style={styles.details}> Cost</AppText>
          </View>
          <View>
            <AppText style={styles.det}> Surya </AppText>
            <AppText style={styles.det}> Apple </AppText>
            <AppText style={styles.det}> Tambaram </AppText>
            <AppText style={styles.det}> 2 KG</AppText>
            <AppText style={styles.det}> Rs.300</AppText>
          </View>
        </View>
        <View
          style={{
            backgroundColor: "black",
            width: "100%",
            height: 1,
            marginTop: 20,
          }}
        />
        <AppText style={styles.thanks}>Thanks For Your Registration 😊</AppText>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  main: {
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 30,
    alignContent: "center",
    justifyContent: "center",
  },
  Background: {
    backgroundColor: colors.slightBlue,
    width: "100%",
    height: "100%",
    borderRadius: 20,
    padding: 10,
  },
  logo: {
    marginLeft: 50,
    height: 200,
    width: 200,
  },
  details: {
    color: "#fff",
  },
  thanks: {
    fontSize: 30,
    marginTop: 20,
    color: "#fff",
  },
  det: {
    color: colors.primary,
  },
});
