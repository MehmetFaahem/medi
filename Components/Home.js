import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Parent } from "../Customs/Parent";
import SearchBar from "../Snippets/SearchBar";
import CarouselShow from "../Snippets/CarouselShow";

const Home = () => {
  return (
    <Parent>
      <View>
        <SearchBar />
        <CarouselShow />
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
