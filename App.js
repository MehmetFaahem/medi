import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./Components/Home";
import Search from "./Components/Search";
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
import Details from "./Components/Details";
import Loved from "./Components/Loved";
import Cart from "./Components/Cart";
import HeaderForHome from "./Customs/HeaderForHome";
import { createDrawerNavigator } from "@react-navigation/drawer";

NavigationBar.setBackgroundColorAsync("rgba(117, 196, 76, 1)");

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const Bottomed = () => {
  return (
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
      }}
    >
      <Tab.Screen
        options={{
          tabBarIcon: () => <FontAwesome name="home" size={24} color="white" />,

          header: () => <HeaderForHome />,
        }}
        name="HomeScreen"
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarIcon: () => (
            <FontAwesome name="search" size={22} color="white" />
          ),
          header: () => <Header name={"Search"} />,
        }}
        name="Search"
        component={Search}
      />
      <Tab.Screen
        options={{
          tabBarIcon: () => (
            <FontAwesome name="heart" size={22} color="white" />
          ),
          header: () => <Header name={"Favourites"} />,
        }}
        name="Loved"
        component={Loved}
      />
      <Tab.Screen
        options={{
          tabBarIcon: () => (
            <FontAwesome name="history" size={22} color="white" />
          ),
        }}
        name="Settings2"
        component={Search}
      />
      <Tab.Screen
        options={{
          tabBarIcon: () => (
            <FontAwesome name="shopping-cart" size={22} color="white" />
          ),
          header: () => <Header name={"Cart"} />,
        }}
        name="Cart"
        component={Cart}
      />
      <Tab.Screen
        options={{
          tabBarButton: () => null,
          header: () => null,
        }}
        name="Details"
        component={Details}
      />
    </Tab.Navigator>
  );
};

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
      <Drawer.Navigator
        initialRouteName="Bottomed"
        screenOptions={{
          header: () => null,
        }}
      >
        <Drawer.Screen name="Home" component={Bottomed} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default AppWrapper;
