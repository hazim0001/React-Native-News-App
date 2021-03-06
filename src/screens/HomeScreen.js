import React, { useEffect, useContext } from "react";
import { StyleSheet, Text, View, FlatList, SafeAreaView } from "react-native";

import { Context as NewsContext } from "../context/NewsContext";

import NewsBox from "../components/NewsBox";

const HomeScreen = ({ navigation }) => {
  const { data, fetchNews, addNews } = useContext(NewsContext);

  useEffect(() => {
    fetchNews();
    const listener = navigation.addListener("didFocus", () => {
      fetchNews();
    });
    //runs when we get rid of the index screen completely
    return () => {
      listener.remove();
    };
  }, []);

  const items = ({ item }) => {
    if (!item.author) {
      return null;
    }
    return (
      <NewsBox
        item={item}
        showIcon={true}
        onAdd={() => addNews(item, () => navigation.navigate("MyNewsScreen"))}
      />
    );
  };

  // console.log(data);
  return (
    <SafeAreaView>
      <Text>HomeScreen</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.url}
        renderItem={items}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
