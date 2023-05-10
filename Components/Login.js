import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Parent } from "../Customs/Parent";
import Logger from "../Snippets/Logger";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, setStatus } from "../redux/userSlice";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Login = ({ navigation }) => {
  const dispatch = useDispatch();
  const [details, setDetails] = useState({
    name: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  const [errored, setErrored] = useState(false);

  const AllUsers = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  const LoginUser = async () => {
    setLoading(true);
    axios
      .post(`https://medi-backend.vercel.app/api/users/login`, details)
      .then(async (res) => {
        if (res.status == 201) {
          let userInfoData = res.data;
          setUserInfo(userInfoData);

          const finding = AllUsers.find(({ name }) => name == details.name);
          await AsyncStorage.setItem("userInfo", JSON.stringify(finding));
          console.log(userInfoData);
          dispatch(setStatus(true));
          setLoading(false);
        } else {
          setErrored(true);
        }
      })
      .catch((e) => {
        console.log(`register error ${e}`);
      });
  };

  return (
    <View style={styles.container}>
      <Image source={require("../assets/login.png")} style={styles.logo} />
      <Text style={styles.text_two}>Login</Text>
      <View style={styles.inputs_container}>
        <TextInput
          onChangeText={(name) => setDetails({ ...details, name })}
          placeholder="User name"
          style={styles.inputs}
        />
        <TextInput
          onChangeText={(password) => setDetails({ ...details, password })}
          placeholder="Password"
          style={styles.inputs}
          secureTextEntry={true}
          autoCapitalize="none"
          keyboardType="default"
        />
      </View>
      <TouchableOpacity
        disabled={loading}
        onPress={() => LoginUser()}
        style={styles.button}
      >
        <Text style={styles.button_text}>
          {loading ? "Logging..." : "Log In"}
        </Text>
      </TouchableOpacity>
      <Text
        onPress={() => navigation.navigate("Forgot")}
        style={styles.minitext}
      >
        Forgot username or password?
      </Text>
      <Text style={styles.or}>or</Text>
      <Logger />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  logo: {
    width: 220,
    height: 220,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  text_two: {
    color: "rgba(117, 196, 76, 1)",
    fontSize: 36,
    marginTop: 29,
    fontWeight: "600",
  },
  inputs: {
    width: 306,
    height: 43,
    borderWidth: 1,
    borderColor: "rgb(112, 112, 112)",
    borderRadius: 10,
    paddingHorizontal: 10,
    marginTop: 12,
  },
  inputs_container: {
    marginTop: 18,
  },
  button: {
    width: 306,
    height: 43,
    backgroundColor: "rgba(117, 196, 76, 1)",
    borderRadius: 10,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  button_text: {
    color: "white",
  },
  minitext: {
    marginTop: 6,
    color: "rgba(47, 161, 209, 1)",
    fontSize: 12,
  },
  or: {
    marginTop: 12,
  },
  icons: {
    flexDirection: "row",
    width: 60,
    justifyContent: "space-between",
  },
});
