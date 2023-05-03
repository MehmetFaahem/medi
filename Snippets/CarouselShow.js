import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const CarouselShow = () => {
  return (
    <View>
      <Image source={require("../assets/banner.png")} style={styles.logo} />
    </View>
  );
};

export default CarouselShow;

const styles = StyleSheet.create({
  logo: {
    width: "100%",
    height: 128,
    borderRadius: 12,
    marginTop: 12,
  },
});
