import * as React from "react";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import {
  StatusBar,
  Image,
  FlatList,
  Dimensions,
  Animated,
  Text,
  View,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import {
  State,
  FlingGestureHandler,
  Directions,
} from "react-native-gesture-handler";
const { width } = Dimensions.get("screen");
import { EvilIcons } from "@expo/vector-icons";
import colors from "../config/colors";

const DATA = [
  {
    title: "Apples",
    location: "Thuraipakkam, Chennai",
    poster:
      "https://images.pexels.com/photos/2487443/pexels-photo-2487443.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    title: "Banana",
    location: "Pallikaranai,Chennai",
    poster:
      "https://images.pexels.com/photos/5966630/pexels-photo-5966630.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    title: "Grape",
    location: "Thuraipakkam, Chennai",
    poster:
      "https://images.pexels.com/photos/708777/pexels-photo-708777.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    title: "Mango",
    location: "Salem, India",
    poster:
      "https://images.pexels.com/photos/2294471/pexels-photo-2294471.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
  },
  {
    title: "Watermelon",
    location: "sholingnallur, Chennai",
    poster:
      "https://images.pexels.com/photos/5946081/pexels-photo-5946081.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
];

const OVERFLOW_HEIGHT = 100;
const SPACING = 20;
const VISIBLE_ITEMS = 3;
const ITEM_WIDTH = width * 0.8;
const ITEM_HEIGHT = ITEM_WIDTH * 1.7;

const OverflowItems = ({ scrollX, data }) => {
  //Fonts
  const [fontsLoaded] = Font.useFonts({
    "Josefin-Sans": require("../assets/fonts/JosefinSans-Medium.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  //application

  const translateY = scrollX.interpolate({
    inputRange: [-1, 0, 1],
    outputRange: [OVERFLOW_HEIGHT, 0, -OVERFLOW_HEIGHT],
  });
  return (
    <View style={{ height: OVERFLOW_HEIGHT, overflow: "hidden" }}>
      <Animated.View style={{ transform: [{ translateY }] }}>
        {data.map((item, index) => {
          return (
            <Animated.View key={index} style={styles.itemContainer}>
              <Text style={[styles.title]} numberOfLines={1}>
                {item.title}
              </Text>
              <View style={styles.itemContainerRow}>
                <Text style={[styles.location]}>
                  <EvilIcons
                    name="location"
                    size={16}
                    color="black"
                    style={{ marginRight: 5 }}
                  />
                  {item.location}
                </Text>
              </View>
            </Animated.View>
          );
        })}
      </Animated.View>
    </View>
  );
};
export default function ListFruits() {
  const scrollX = React.useRef(new Animated.Value(0)).current;
  const scrollXAnimated = React.useRef(new Animated.Value(0)).current;
  const [index, setIndex] = React.useState(0);
  const [data, setData] = React.useState(DATA);

  const setAnimatedIndex = React.useCallback((i) => {
    setIndex(i);
    scrollX.setValue(i);
  }, []);
  React.useEffect(() => {
    Animated.spring(scrollXAnimated, {
      toValue: scrollX,
      useNativeDriver: true,
    }).start();
  });

  return (
    <FlingGestureHandler
      direction={Directions.LEFT}
      onHandlerStateChange={(e) => {
        if (e.nativeEvent.state === State.END) {
          if (index === data.length - 1) {
            return;
          }
          setAnimatedIndex(index + 1);
        }
      }}
    >
      <FlingGestureHandler
        direction={Directions.RIGHT}
        onHandlerStateChange={(e) => {
          if (e.nativeEvent.state === State.END) {
            if (index === 0) {
              return;
            }
            setAnimatedIndex(index - 1);
          }
        }}
      >
        <SafeAreaView style={styles.container}>
          <StatusBar hidden />
          <OverflowItems scrollX={scrollXAnimated} data={data} />
          <FlatList
            data={data}
            keyExtractor={(_, index) => String(index)}
            scrollEnabled={false}
            inverted
            renderToHardwareTextureAndroid
            removeClippedSubviews={false}
            contentContainerStyle={{
              flex: 1,
              justifyContent: "center",
              padding: SPACING * 2,
            }}
            CellRendererComponent={({ children, index, style, ...props }) => {
              const cellStyle = [style, { zIndex: data.length - index }];
              return (
                <View style={cellStyle} index={index} {...props}>
                  {children}
                </View>
              );
            }}
            renderItem={({ item, index }) => {
              const inputRange = [index - 1, index, index + 1];
              const translateX = scrollXAnimated.interpolate({
                inputRange,
                outputRange: [50, 0, -100],
              });
              const opacity = scrollXAnimated.interpolate({
                inputRange,
                outputRange: [1 - 1 / VISIBLE_ITEMS, 1, 0],
              });
              const scale = scrollXAnimated.interpolate({
                inputRange,
                outputRange: [0.8, 1, 1.3],
              });
              return (
                <Animated.View
                  style={{
                    position: "absolute",
                    width: ITEM_WIDTH,
                    top: -ITEM_HEIGHT / 2,
                    borderRadius: 10,
                    overflow: "hidden",
                    transform: [{ translateX }, { scale }],
                    opacity,
                  }}
                >
                  <Image
                    source={{ uri: item.poster }}
                    style={{ width: ITEM_WIDTH, height: ITEM_HEIGHT }}
                  />
                </Animated.View>
              );
            }}
          />
        </SafeAreaView>
      </FlingGestureHandler>
    </FlingGestureHandler>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: colors.lightPink,
  },
  title: {
    fontSize: 28,
    fontWeight: "900",
    letterSpacing: -1,
    fontFamily: "Josefin-Sans",
  },
  location: {
    fontSize: 16,
    fontFamily: "Josefin-Sans",
  },

  itemContainer: {
    height: OVERFLOW_HEIGHT,
    padding: SPACING,
  },
  itemContainerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
