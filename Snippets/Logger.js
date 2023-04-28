import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";

const Logger = () => {
  return (
    <View style={styles.icons}>
      <TouchableOpacity style={styles.googleicon}>
        <FontAwesome name="google" size={20} color="white" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.facebookicon}>
        <FontAwesome name="facebook" size={20} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default Logger;

const styles = StyleSheet.create({
  icons: {
    flexDirection: "row",
    width: 100,
    justifyContent: "space-between",
    marginTop: 20,
  },
  facebookicon: {
    backgroundColor: "rgb(0, 167, 250)",
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
  },
  googleicon: {
    backgroundColor: "rgb(0, 0, 0)",
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
  },
});
