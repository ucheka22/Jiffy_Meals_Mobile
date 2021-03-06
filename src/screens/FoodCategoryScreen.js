import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Dimensions,
  Image,
  ImageBackground,
} from "react-native";
import { colors } from "../config/config";

import { categories } from "../store/data";

const FoodCategoryScreen = () => {
  const [active, setActive] = useState(0);

  const change = (nativeEvent) => {
    if (nativeEvent) {
      const slide = Math.ceil(
        nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width
      );

      if (slide !== active) {
        setActive(slide);
      }
    }
  };

  const images = categories.map((c) => c.image);

  return (
    <View style={styles.wrap}>
      <ScrollView
        onScroll={({ nativeEvent }) => change(nativeEvent)}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        horizontal
        style={styles.wrap}
      >
        {images.map((e) => (
          <ImageBackground
            key={e}
            resizeMode="stretch"
            style={styles.wrap}
            source={e}
          >
            <View
              style={{
                backgroundColor: "#000000a0",
                width: Dimensions.get("window").width,
                height: Dimensions.get("window").height * 0.25,
              }}
            >
              <Text>Sushi</Text>
            </View>
          </ImageBackground>
        ))}
      </ScrollView>
      <View style={styles.wrapDot}>
        {images.map((e, index) => (
          <Text
            key={e}
            style={active === index ? styles.dotActive : styles.dot}
          >
            ●
          </Text>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrap: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height * 0.25,
  },
  wrapDot: {
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    alignSelf: "center",
  },
  dot: {
    margin: 3,
    color: colors.light,
  },
});

export default FoodCategoryScreen;
