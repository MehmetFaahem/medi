import { StyleSheet, Text, View, TextInput, input } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";

const SearchBar = () => {
  return (
    <View>
      <View style={styles.inputs}>
        <FontAwesome
          style={{
            marginRight: 10,
          }}
          name="search"
          size={17}
          color="rgba(117, 196, 76, 1)"
        />
        <TextInput placeholder="Search" />
      </View>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  inputs: {
    width: 306,
    height: 43,
    borderWidth: 1,
    borderColor: "rgba(112, 112, 112)",
    borderRadius: 10,
    paddingHorizontal: 10,
    marginTop: 12,
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
  },
});
