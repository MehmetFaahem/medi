import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import React from "react";
import { FlashList } from "@shopify/flash-list";
import DATA from "../drugs.json";
import { TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";

const FeaturedProduct = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Featured Products</Text>
      <FlatList
        data={DATA}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("Details", { item: item })}
            style={{
              color: "black",
              flex: 1,
              marginRight: 13,
              borderRadius: 15,
              height: 180,
              width: 120,
              marginBottom: 15,
              elevation: 6,
              backgroundColor: "white",
            }}
          >
            <Image
              source={require("../assets/medicine.png")}
              style={styles.logo}
            />

            <View
              style={{
                marginLeft: 3,
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "500",
                  marginLeft: 2,
                  marginTop: 2,
                }}
              >
                {item.name}
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: "500",
                  marginLeft: 2,
                }}
              >
                by {item.company}
              </Text>
            </View>
            <View
              style={{
                marginHorizontal: 6,
                marginTop: 3,
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text
                style={{
                  fontWeight: "600",
                  color: "rgba(117, 196, 76, 1)",
                }}
              >
                ৳ {item.price}
              </Text>
              <View
                style={{
                  alignItems: "center",
                  flexDirection: "row",
                  marginRight: 5,
                }}
              >
                <Entypo
                  style={{
                    marginRight: 3,
                  }}
                  name="star"
                  size={17}
                  color="rgb(250, 195, 15)"
                />
                <Text>{item.rating}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
        horizontal={true}
      />
    </View>
  );
};

export default FeaturedProduct;

const styles = StyleSheet.create({
  title: {
    fontWeight: "600",
    fontSize: 16,
    paddingBottom: 10,
  },
  container: {
    marginTop: 15,
  },
  logo: {
    width: 120,
    height: 100,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
  },
});
