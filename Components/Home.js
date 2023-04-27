import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Parent } from "../Customs/Parent";

const Home = () => {
  return (
    <Parent>
      <View>
        <Text>Home</Text>
      </View>
    </Parent>
  );
};

const styles = StyleSheet.create({
  parentStyle: {
    backgroundColor: "white",
    flex: 1,
    paddingHorizontal: "20px",
    paddingVertical: "40px",
  },
});

export default Home;
