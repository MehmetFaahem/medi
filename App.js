import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./Components/Home";
import Setting from "./Components/Setting";
import { FontAwesome } from "@expo/vector-icons";
import "react-native-gesture-handler";
import * as NavigationBar from "expo-navigation-bar";
import { useEffect, useState } from "react";
import Initial from "./Components/Initial";
import Welcome from "./Components/Welcome";
import Signin from "./Components/Signin";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./Components/Login";
import Forgot from "./Components/Forgot";
import { mediStore } from "./redux/store";
import { Provider } from "react-redux";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import Header from "./Customs/Header";

NavigationBar.setBackgroundColorAsync("rgba(117, 196, 76, 1)");

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const AppWrapper = () => {
  return (
    <Provider store={mediStore}>
      <App />
    </Provider>
  );
};

export function App() {
  const status = useSelector((state) => state.logged);

  const [loaded, setLoaded] = useState(false);
  const [logged, setLogged] = useState(status);

  useEffect(() => {
    setLogged(status);
  }, [status]);

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
          // headerTitleAlign: "center",
          // headerTitleStyle: {
          //   color: "rgba(117, 196, 76, 1)",
          // },
          // headerLeftContainerStyle: {
          //   paddingHorizontal: 20,
          //   marginTop: 3,
          // },
          // headerRightContainerStyle: {
          //   paddingHorizontal: 20,
          // },
          // headerLeft: () => (
          //   <TouchableOpacity>
          //     <Entypo name="menu" size={29} color="rgba(117, 196, 76, 1)" />
          //   </TouchableOpacity>
          // ),
        }}
      >
        <Tab.Screen
          options={{
            tabBarIcon: () => (
              <FontAwesome name="home" size={24} color="white" />
            ),

            header: () => <Header name={"Home"} />,
          }}
          name="Home"
          component={Home}
        />
        <Tab.Screen
          options={{
            tabBarIcon: () => (
              <FontAwesome name="search" size={24} color="white" />
            ),
            header: () => <Header name={"Search"} />,
          }}
          name="Search"
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

export default AppWrapper;
