import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Parent } from "../Customs/Parent";
import { TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import CardForLoved from "../Customs/CardForLoved";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../redux/userSlice";

const Loved = () => {
  const [info, setInfo] = useState({});
  const [products, setProducts] = useState([]);

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
      const finding = AllUsers.find(({ name }) => name == info.name);
      setProducts(finding?.favourites);
    };
    getItems();
  }, [products]);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingTop: 10,
        paddingHorizontal: 20,
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      <FlatList
        data={products}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <CardForLoved item={item} />}
        keyExtractor={(item) => item._id}
      />
    </SafeAreaView>
  );
};

export default Loved;

const styles = StyleSheet.create({});
