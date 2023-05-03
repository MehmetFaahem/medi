import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Parent } from "../Customs/Parent";
import { TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Loved = () => {
  return (
    <Parent>
      <TouchableOpacity onPress={() => AsyncStorage.removeItem("Loved")}>
        <Text>Remove All</Text>
      </TouchableOpacity>
    </Parent>
  );
};

export default Loved;

const styles = StyleSheet.create({});
