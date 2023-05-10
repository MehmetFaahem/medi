import { StyleSheet, Text, View, Image } from "react-native";
import React, { useState, useEffect } from "react";
import Lottie from "lottie-react-native";

const Initial = () => {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/splash.png")} style={styles.logo} />
      <Lottie
        source={require("../assets/98993-three-dots-loading.json")}
        autoPlay
        loop
        style={styles.lottie}
      />
    </View>
  );
};

export default Initial;

const styles = StyleSheet.create({
  logo: {
    width: 85,
    height: 70,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  lottie: {
    width: 100,
    height: 100,
  },
});
