import { StyleSheet, Text, View } from "react-native";
import React from "react";

export const Parent = ({ children }) => {
  return (
    <View style={styles.conatiner}>
      <View style={styles.childrens}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    backgroundColor: "white",
  },
  childrens: {
    paddingVertical: 50,
    paddingHorizontal: 30,
    marginTop: 150,
  },
});
