import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import * as Notifications from "expo-notifications";
import axios from "axios";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

const CardForCart = ({ item }) => {
  const [quantity, setQuantity] = useState(1);
  const [removed, setRemoved] = useState(false);
  const [errored, setErrored] = useState(false);

  const RemoveFromCart = (items) => {
    axios
      .delete(`https://medi-backend.vercel.app/api/users/carted/${items.name}`)
      .then(async (res) => {
        if (res.status == 201) {
          Notifications.scheduleNotificationAsync({
            content: {
              title: items.name,
              body: "Remove from your Medi cart",
            },
            trigger: null,
          });
          setRemoved(true);
        } else {
          setErrored(true);
        }
      })
      .catch((e) => {
        console.log(`register error ${e}`);
      });
  };

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
          <View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                width: 70,
              }}
            >
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
                {item.quantity}
              </Text>
              <Pressable
                style={{
                  marginLeft: 5,
                }}
                onPress={() =>
                  quantity > 1
                    ? setQuantity(quantity - 1)
                    : setQuantity(quantity)
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
          <TouchableOpacity
            style={{
              marginLeft: 20,
            }}
            onPress={() => RemoveFromCart(item)}
          >
            <AntDesign name="delete" size={22} color="red" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CardForCart;

const styles = StyleSheet.create({});
