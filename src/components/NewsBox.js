import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";

const NewsBox = ({ item, onAdd, showIcon, onDelete }) => {
  const { author, title, url, urlToImage, publishedAt } = item;
  return (
    <View style={styles.newsContainer}>
      <TouchableOpacity>
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
      <Image style={styles.newsImg} source={{ uri: urlToImage }} />

      <View style={styles.row}>
        <Text style={styles.flexOne}>{author}</Text>
        {showIcon ? (
          <TouchableOpacity onPress={() => onAdd()}>
            <Ionicons
              style={styles.icon}
              name="add-circle-outline"
              size={30}
              color="black"
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => onDelete()}>
            <EvilIcons name="trash" size={30} color="black" />
          </TouchableOpacity>
        )}
        <Text style={styles.timeStamp}>
          {new Date(publishedAt).toDateString()}
        </Text>
      </View>
    </View>
  );
};

export default NewsBox;

const styles = StyleSheet.create({
  icon: {
    alignSelf: "center",
  },
  newsContainer: {
    padding: 8,
    marginVertical: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 5,
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 15,
    marginBottom: 5,
  },
  newsImg: {
    width: "88%",
    height: 100,
    padding: 30,
    alignSelf: "center",
    borderRadius: 16,
    margin: 10,
    resizeMode: "contain",
  },
  flexOne: {
    flex: 1,
    alignSelf: "center",
  },
  timeStamp: {
    flex: 1,
    alignSelf: "center",
    textAlign: "right",
  },
});
