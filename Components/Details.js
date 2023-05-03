import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import Header from "../Customs/Header";
import { Image } from "react-native";
import { Parent } from "../Customs/Parent";
import { AntDesign } from "@expo/vector-icons";
import { Pressable } from "react-native";
import { Entypo } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Details = ({ route, navigation }) => {
  const [quantity, setQuantity] = useState(1);
  const { item } = route.params;
  const [lovedmed, setLovedmed] = useState([]);

  useEffect(() => {
    const getItems = async () => {
      const Gotvalue = await AsyncStorage.getItem("Loved");
      if (Gotvalue) {
        const finalyGotten = await JSON.parse(Gotvalue);
        setLovedmed(finalyGotten);
      }
    };
    getItems();
  }, [lovedmed]);

  const MakeFavourite = async (value) => {
    const Gotvalue = await AsyncStorage.getItem("Loved");
    if (Gotvalue) {
      var finalyGot = await JSON.parse(Gotvalue);
    }
    if (finalyGot) {
      try {
        await finalyGot.push(value);
        const jsonValue = JSON.stringify(finalyGot);
        await AsyncStorage.setItem("Loved", jsonValue);
      } catch (e) {
        console.log(e);
      }
    } else {
      try {
        let LovedData = [];
        await LovedData.push(value);
        const jsonValue = await JSON.stringify(LovedData);
        await AsyncStorage.setItem("Loved", jsonValue);
      } catch (e) {
        console.log(e);
      }
    }
    console.log(finalyGot);
  };
  return (
    <View
      style={{
        backgroundColor: "white",
        flex: 1,
        paddingBottom: 160,
        position: "relative",
      }}
    >
      <Header name={item.name} />
      <Parent>
        <ScrollView
          style={{
            flex: 1,
            width: "100%",
            position: "relative",
          }}
          contentContainerStyle={{ flexGrow: 1 }}
          contentInsetAdjustmentBehavior="automatic"
          showsVerticalScrollIndicator={false}
        >
          <Image
            source={require("../assets/medicine.png")}
            style={{
              height: 154,
              width: "100%",
              borderRadius: 15,
            }}
          />
          <View
            style={{
              position: "absolute",
              flexDirection: "row",
              alignItems: "center",
              right: 16,
              top: 7,
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
            <Text
              style={{
                color: "white",
              }}
            >
              {item.rating}
            </Text>
          </View>
          <View
            style={{
              marginLeft: 5,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View>
              <Text
                style={{
                  fontSize: 26,
                  fontWeight: "600",
                  marginTop: 10,
                }}
              >
                {item.name}
              </Text>
              <Text>by {item.company}</Text>
            </View>
            <TouchableOpacity
              onPress={() => MakeFavourite(item.name)}
              style={{ marginTop: 3 }}
            >
              <AntDesign
                name={
                  lovedmed.find((val) => val == item.name) ? "heart" : "hearto"
                }
                size={24}
                color="rgb(240, 36, 107)"
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              marginTop: 20,
              marginLeft: 5,
            }}
          >
            <Text
              style={{
                fontWeight: "600",
                fontSize: 20,
                marginBottom: 10,
              }}
            >
              Indication
            </Text>
            <Text>{item.indication}</Text>
          </View>
          <View
            style={{
              marginTop: 20,
              marginLeft: 5,
            }}
          >
            <Text
              style={{
                fontWeight: "600",
                fontSize: 20,
                marginBottom: 10,
              }}
            >
              Pharmacology
            </Text>
            <Text>{item.pharmacology}</Text>
          </View>
        </ScrollView>
      </Parent>
      <View
        style={{
          position: "absolute",
          backgroundColor: "white",
          height: 150,
          width: "100%",
          bottom: 0,
        }}
      >
        <View
          style={{
            paddingHorizontal: 60,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              color: "rgba(117, 196, 76, 1)",
              fontSize: 20,
              fontWeight: "700",
              paddingTop: 5,
            }}
          >
            Total = {item.price}৳
          </Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Pressable
              style={{
                marginRight: 5,
              }}
              onPress={() => setQuantity(quantity + 1)}
            >
              <AntDesign
                name="pluscircle"
                size={17}
                color="rgba(117, 196, 76, 1)"
              />
            </Pressable>
            <Text
              style={{
                backgroundColor: "rgba(117, 196, 76, 1)",
                color: "white",
                paddingHorizontal: 15,
                paddingVertical: 2,
                borderRadius: 15,
              }}
            >
              {quantity}
            </Text>
            <Pressable
              style={{
                marginLeft: 5,
              }}
              onPress={() =>
                quantity > 1 ? setQuantity(quantity - 1) : setQuantity(quantity)
              }
            >
              <AntDesign
                name="minuscircle"
                size={17}
                color="rgba(117, 196, 76, 1)"
              />
            </Pressable>
          </View>
        </View>
        <View>
          <TouchableOpacity
            style={{
              width: 290,
              height: 43,
              backgroundColor: "rgba(117, 196, 76, 1)",
              borderRadius: 15,
              alignSelf: "center",
              justifyContent: "center",
              alignItems: "center",
              marginTop: 10,
            }}
          >
            <Text
              style={{
                color: "white",
                fontWeight: 600,
              }}
            >
              Add to cart
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({});
