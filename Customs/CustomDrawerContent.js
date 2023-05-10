import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from "react-native";
import React, { useEffect, useState } from "react";
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import DrawerButtons from "../Snippets/DrawerButtons";

const CustomDrawerContent = (props) => {
  const [info, setInfo] = useState({});
  useEffect(() => {
    const Catcher = async () => {
      const catchfromstorage = await AsyncStorage.getItem("userInfo");
      const parsed = await JSON.parse(catchfromstorage);
      setInfo(parsed);
    };
    Catcher();
  }, []);
  return (
    <SafeAreaView>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <View
        style={{
          marginTop: 60,
          paddingHorizontal: 20,
        }}
      >
        <FontAwesome
          name="user-circle"
          size={54}
          color="rgba(117, 196, 76, 1)"
        />
        <Text
          style={{
            fontSize: 20,
            color: "black",
            marginTop: 10,
          }}
        >
          {info?.name}
        </Text>
        <Text>Registered With: {info?.phone}</Text>
        <View
          style={{
            marginTop: 20,
            flexDirection: "column",
            height: Dimensions.get("screen").height,
            justifyContent: "space-between",
            paddingBottom: 260,
          }}
        >
          <View>
            <DrawerButtons icon="settings" text="Settings" />
            <DrawerButtons icon="help-circle" text="Help Center" />
            <DrawerButtons icon="person" text="Privacy Policy" />
            <DrawerButtons icon="document" text="Terms and Condition" />
            <DrawerButtons icon="american-football" text="Return Policy" />
          </View>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Ionicons
              name={"log-out-outline"}
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
                fontWeight: 700,
              }}
            >
              Log Out
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CustomDrawerContent;

const styles = StyleSheet.create({});
