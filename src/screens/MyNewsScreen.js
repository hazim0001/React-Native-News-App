import React, { useEffect, useContext } from "react";
import { StyleSheet, Text, View, FlatList, SafeAreaView } from "react-native";

import { Context as NewsContext } from "../context/NewsContext";

import NewsBox from "../components/NewsBox";

const MyNewsScreen = ({ navigation }) => {
  const { data, showNews, deleteNews } = useContext(NewsContext);

  useEffect(() => {
    showNews();
    const listener = navigation.addListener("didFocus", () => {
      showNews();
    });
    //runs when we get rid of the index screen completely
    return () => {
      listener.remove();
    };
  }, []);

  const items = ({ item }) => {
    if (!item.publishedAt) {
      return null;
    }
    return (
      <NewsBox
        item={item}
        showIcon={false}
        onDelete={() => deleteNews(item.id)}
      />
    );
  };

  return (
    <SafeAreaView>
      <Text>MyNewsScreen</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.publishedAt}
        renderItem={items}
      />
    </SafeAreaView>
  );
};

export default MyNewsScreen;

const styles = StyleSheet.create({});
