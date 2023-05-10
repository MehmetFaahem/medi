import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Parent } from "../Customs/Parent";
import AsyncStorage from "@react-native-async-storage/async-storage";
import CardForCart from "../Customs/CardForCart";
import axios from "axios";
import { fetchUsers } from "../redux/userSlice";
import { useSelector, useDispatch } from "react-redux";

const Cart = () => {
  const [info, setInfo] = useState({});
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);

  const dispatch = useDispatch();

  const AllUsers = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [AllUsers]);

  useEffect(() => {
    const getItems = async () => {
      const userInfo = await AsyncStorage.getItem("userInfo");
      const Parsed = await JSON.parse(userInfo);
      setInfo(Parsed);

      const finding = await AllUsers.find(({ name }) => name == info.name)
        ?.carted;
    };

    getItems();
  }, [products]);

  useEffect(() => {
    async function Runit() {
      let Amounts = [];
      for (
        let index = 0;
        index < AllUsers.find(({ name }) => name == info.name)?.carted?.length;
        index++
      ) {
        const element = await AllUsers.find(({ name }) => name == info.name)
          ?.carted[index].price;
        const parsed = parseInt(element);
        await Amounts.push(parsed);
      }
      setTotal(await Amounts.reduce((a, v) => (a = a + v), 0));
      console.log(Amounts);
    }

    Runit();
  }, [total, AllUsers.find(({ name }) => name == info.name)?.carted?.length]);

  return (
    <View
      style={{
        flex: 1,
        paddingTop: 10,
        paddingHorizontal: 20,
        alignItems: "center",
        backgroundColor: "white",
        paddingBottom: 270,
      }}
    >
      <SafeAreaView
        style={{
          flex: 1,
        }}
      >
        <FlatList
          style={{
            flex: 1,
          }}
          data={AllUsers.find(({ name }) => name == info.name)?.carted}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => <CardForCart item={item} />}
          keyExtractor={(item) => item._id}
        />
      </SafeAreaView>
      <View
        style={{
          position: "absolute",
          bottom: 10,
          backgroundColor: "white",
          height: 250,
          width: "100%",
        }}
      >
        <View
          style={{
            height: 1,
            backgroundColor: "rgb(0,0,0)",
            width: "100%",
            marginBottom: 5,
          }}
        />
        <View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text>Total Cost</Text>
            <Text>৳ {total}</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text>Vat/Tax</Text>
            <Text>৳ {total % 90}</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text>Service Charge</Text>
            <Text>৳ {total % 80}</Text>
          </View>
        </View>
        <View
          style={{
            height: 1,
            backgroundColor: "rgb(0,0,0)",
            width: "100%",
            marginTop: 5,
          }}
        />
        <View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                fontSize: 20,
              }}
            >
              Total Fee
            </Text>
            <Text
              style={{
                fontSize: 20,
              }}
            >
              ৳ {total + (total % 90) + (total % 80)}
            </Text>
          </View>
        </View>
        <TouchableOpacity
          style={{
            width: "100%",
            height: 43,
            backgroundColor: "rgba(117, 196, 76, 1)",
            borderRadius: 15,
            alignSelf: "center",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 20,
          }}
        >
          <Text
            style={{
              color: "white",
              fontWeight: 600,
            }}
          >
            Check out
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({});
