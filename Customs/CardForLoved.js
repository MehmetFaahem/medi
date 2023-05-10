import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { AntDesign, Entypo } from "@expo/vector-icons";

const CardForLoved = ({ item }) => {
  return (
    <View>
      <View
        style={{
          backgroundColor: "rgb(245, 245, 245)",
          width: 306,
          height: 85,
          marginTop: 20,
          borderRadius: 15,
          paddingHorizontal: 10,
          justifyContent: "center",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View>
            <Text
              style={{
                fontSize: 18,
                fontWeight: "700",
                minWidth: 100,
              }}
            >
              {item.name}
            </Text>
            <Text>by {item.company}</Text>
            <Text>{item.category}</Text>
          </View>
          <View
            style={{
              alignItems: "center",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
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
                  color: "black",
                }}
              >
                {item.rating}
              </Text>
            </View>
            <Text
              style={{
                color: "rgba(117, 196, 76, 1)",
                fontSize: 20,
                fontWeight: "700",
                marginLeft: 25,
              }}
            >
              ৳{item.price}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CardForLoved;

const styles = StyleSheet.create({});
