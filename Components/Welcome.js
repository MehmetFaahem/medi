import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native";

const Welcome = () => {
  const navigation = useNavigation();
  const [loaded] = useFonts({
    Montserrat: require("../assets/Segoe-UI.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Image source={require("../assets/welcome.png")} style={styles.logo} />

      <Text style={styles.text_one}>Welcome to</Text>
      <Text style={styles.text_two}>Medi Solutions</Text>

      <TouchableOpacity
        onPress={() => navigation.navigate("Signin")}
        style={styles.button}
      >
        <Text style={styles.button_text}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  logo: {
    width: 150,
    height: 150,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text_one: {
    fontFamily: "Montserrat",
    fontSize: 16,
    fontWeight: "600",
    marginTop: 67,
  },
  text_two: {
    color: "rgba(117, 196, 76, 1)",
    fontSize: 30,
    marginTop: 6,
    fontWeight: "800",
  },
  button: {
    width: 306,
    height: 43,
    backgroundColor: "rgba(117, 196, 76, 1)",
    borderRadius: 15,
    marginTop: 45,
    justifyContent: "center",
    alignItems: "center",
  },
  button_text: {
    color: "white",
  },
});
