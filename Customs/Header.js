import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Header = (props) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons
          name="arrow-back-outline"
          size={29}
          color="rgba(117, 196, 76, 1)"
        />
      </TouchableOpacity>
      <Text style={styles.HeaderTitle}>{props.name}</Text>
      <TouchableOpacity>
        <FontAwesome
          name="user-circle"
          size={29}
          color="rgba(117, 196, 76, 1)"
        />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flexDirection: "row",
    paddingTop: 40,
    paddingBottom: 17,
    paddingHorizontal: 20,
    justifyContent: "space-between",
    alignItems: "center",
  },
  HeaderTitle: {
    fontSize: 16,
    color: "rgba(117, 196, 76, 1)",
  },
});
