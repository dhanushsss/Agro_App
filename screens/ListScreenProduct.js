import React from "react";
import {
  View,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Screen from "../components/Screen";
import AppText from "../components/AppText";

const DATA = [
  {
    poster:
      "https://images.pexels.com/photos/128402/pexels-photo-128402.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    title: "Vegetables",
  },
  {
    poster:
      "https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    title: "Fruits",
  },
];

export default function ListScreenProduct() {
  const Item = ({ poster, title }) => (
    <View style={styles.card}>
      <Image style={styles.image} source={{ uri: poster }} />
      <TouchableOpacity>
        <AppText>{title}</AppText>
      </TouchableOpacity>
    </View>
  );

  const renderItem = ({ item }) => (
    <Item poster={item.poster} title={item.title} />
  );

  return (
    <Screen style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {},
  card: { padding: 20 },
  image: {
    width: "100%",
    height: 250,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
});
