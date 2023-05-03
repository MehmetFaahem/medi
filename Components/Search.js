import { View, Text, StyleSheet } from "react-native";
import { Parent } from "../Customs/Parent";
import SearchBar from "../Snippets/SearchBar";
import Lottie from "lottie-react-native";
import React, { useEffect, useState } from "react";

const Search = () => {
  return (
    <Parent>
      <View
        style={{
          flex: 1,
          alignItems: "center",
        }}
      >
        <SearchBar />
        <View style={{ paddingVertical: 70 }} />
        <Lottie
          source={require("../assets/128040-searching.json")}
          autoPlay
          loop
          style={styles.lottie}
        />
      </View>
    </Parent>
  );
};

export default Search;

const styles = StyleSheet.create({
  lottie: {
    width: 150,
    height: 220,
  },
});
