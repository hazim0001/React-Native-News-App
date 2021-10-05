import React from "react";

import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";

import HomeScreen from "./src/screens/HomeScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import SearchScreen from "./src/screens/SearchScreen";
import MyNewsScreen from "./src/screens/MyNewsScreen";

import { Provider as NewsProvider } from "./src/context/NewsContext";

const navigator = createBottomTabNavigator(
  {
    Home: HomeScreen,
    Search: SearchScreen,
    MyNewsScreen: MyNewsScreen,
    Profile: ProfileScreen,
  },
  {
    initialRouteName: "Home",
    defualtNavigationOptions: {
      title: "News",
    },
  }
);

const App = createAppContainer(navigator);

export default () => {
  return (
    <NewsProvider>
      <App />
    </NewsProvider>
  );
};

// 9e0575e7c2dc4292ac1571d3b8167973
