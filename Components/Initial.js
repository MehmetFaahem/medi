import { StyleSheet, Text, View, Image } from "react-native";
import React, { useState, useEffect } from "react";
import AnimatedLoader from "react-native-animated-loader";

const Initial = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    setInterval(() => {
      setVisible(!visible);
    }, 2000);
  }, []);
  return (
    <View style={styles.container}>
      <Image source={require("../assets/splash.png")} style={styles.logo} />
      <AnimatedLoader
        visible={visible}
        overlayColor="rgba(255,255,255,0.0)"
        animationStyle={styles.lottie}
        speed={1}
        source={require("../assets/98993-three-dots-loading.json")}
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
    marginTop: 40,
  },
});
