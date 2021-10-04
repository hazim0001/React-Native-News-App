import React from "react";

import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";

import HomeScreen from "./src/screens/HomeScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import SearchScreen from "./src/screens/SearchScreen";
import TickerScreen from "./src/screens/TickerScreen";

import { Provider as NewsProvider } from "./src/context/NewsContext";

const navigator = createBottomTabNavigator(
  {
    Home: HomeScreen,
    Search: SearchScreen,
    TickerScreen: TickerScreen,
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
