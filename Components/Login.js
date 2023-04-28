import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Parent } from "../Customs/Parent";
import Logger from "../Snippets/Logger";

const Login = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/login.png")} style={styles.logo} />
      <Text style={styles.text_two}>Login</Text>
      <View style={styles.inputs_container}>
        <TextInput placeholder="User name" style={styles.inputs} />
        <TextInput placeholder="Password" style={styles.inputs} />
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("Signin")}
        style={styles.button}
      >
        <Text style={styles.button_text}>Login</Text>
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
    borderColor: "rgba(112, 112, 112)",
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
