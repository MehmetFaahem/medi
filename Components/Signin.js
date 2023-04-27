import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const Signin = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/signin.png")} style={styles.logo} />
    </View>
  );
};

export default Signin;

const styles = StyleSheet.create({
  logo: {
    width: 150,
    height: 150,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
