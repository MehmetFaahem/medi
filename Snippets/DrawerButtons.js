import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const DrawerButtons = (props) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        alignItems: "center",
        marginTop: 8,
      }}
    >
      <Ionicons
        name={props.icon}
        size={20}
        color="rgba(117, 196, 76, 1)"
        style={{
          marginRight: 10,
        }}
      />
      <Text
        style={{
          fontSize: 16,
          color: "rgba(117, 196, 76, 1)",
        }}
      >
        {props.text}
      </Text>
    </TouchableOpacity>
  );
};

export default DrawerButtons;

const styles = StyleSheet.create({});
