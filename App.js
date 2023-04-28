import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./Components/Home";
import Setting from "./Components/Setting";
import { FontAwesome } from "@expo/vector-icons";
import "react-native-gesture-handler";
import * as NavigationBar from "expo-navigation-bar";
import { useState } from "react";
import Initial from "./Components/Initial";
import Welcome from "./Components/Welcome";
import Signin from "./Components/Signin";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { navigationRef } from "./Customs/rootNavigation";
import Login from "./Components/Login";
import Forgot from "./Components/Forgot";
NavigationBar.setBackgroundColorAsync("rgba(117, 196, 76, 1)");

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const [logged, setLogged] = useState(false);

  setTimeout(function () {
    setLoaded(true);
  }, 5000);

  if (!loaded) {
    return <Initial />;
  }

  if (!logged) {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName="Welcome"
        >
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="Signin" component={Signin} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Forgot" component={Forgot} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

  return (
    <NavigationContainer>
      <StatusBar backgroundColor="rgba(117, 196, 76, 1)" />
      <Tab.Navigator
        initialRouteName="signin"
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: "rgba(117, 196, 76, 1)",
            paddingTop: 7,
            borderTopLeftRadius: 24,
            borderTopRightRadius: 24,
            borderLeftWidth: 0.2,
            borderRightWidth: 0.2,
            position: "absolute",
            overflow: "hidden",
          },
          tabBarShowLabel: false,
        }}
      >
        <Tab.Screen
          options={{
            tabBarIcon: () => (
              <FontAwesome name="home" size={24} color="white" />
            ),
          }}
          name="Home"
          component={Home}
        />
        <Tab.Screen
          options={{
            tabBarIcon: () => (
              <FontAwesome name="search" size={24} color="white" />
            ),
          }}
          name="Settings"
          component={Setting}
        />
        <Tab.Screen
          options={{
            tabBarIcon: () => (
              <FontAwesome name="heart" size={24} color="white" />
            ),
          }}
          name="Settings1"
          component={Setting}
        />
        <Tab.Screen
          options={{
            tabBarIcon: () => (
              <FontAwesome name="history" size={24} color="white" />
            ),
          }}
          name="Settings2"
          component={Setting}
        />
        <Tab.Screen
          options={{
            tabBarIcon: () => (
              <FontAwesome name="shopping-cart" size={24} color="white" />
            ),
          }}
          name="Settings3"
          component={Setting}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
