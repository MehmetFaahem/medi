import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";

export const Parent = ({ children }) => {
  return (
    <ScrollView style={styles.conatiner}>
      <View style={styles.childrens}>{children}</View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    backgroundColor: "white",
  },
  childrens: {
    paddingTop: 10,
    paddingHorizontal: 20,
    alignItems: "center",
    flex: 1,
  },
});
