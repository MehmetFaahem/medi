import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import { Parent } from "../Customs/Parent";
import SearchBar from "../Snippets/SearchBar";
import CarouselShow from "../Snippets/CarouselShow";
import FeaturedProduct from "../Customs/FeaturedProduct";
import { SafeAreaView } from "react-native";

const Home = ({ navigation }) => {
  return (
    <Parent>
      <ScrollView
        style={{
          flex: 1,
        }}
        contentContainerStyle={{ flexGrow: 1 }}
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}
      >
        <SafeAreaView style={styles.parentStyle}>
          <SearchBar />
          <CarouselShow />
          <FeaturedProduct navigation={navigation} />
          <FeaturedProduct navigation={navigation} />
          <FeaturedProduct navigation={navigation} />
        </SafeAreaView>
      </ScrollView>
    </Parent>
  );
};

const styles = StyleSheet.create({
  parentStyle: {
    backgroundColor: "white",
    flex: 1,
    marginBottom: 70,
  },
});

export default Home;
