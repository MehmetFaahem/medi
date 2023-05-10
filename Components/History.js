import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Parent } from "../Customs/Parent";
import Lottie from "lottie-react-native";

const History = () => {
  return (
    <Parent>
      <Lottie
        source={require("../assets/80582-empty-cart.json")}
        autoPlay
        loop
        style={styles.lottie}
      />
      <Text
        style={{
          marginTop: 30,
        }}
      >
        You have no history
      </Text>
    </Parent>
  );
};

export default History;

const styles = StyleSheet.create({
  lottie: {
    width: 200,
    height: 200,
    marginTop: 60,
  },
});
