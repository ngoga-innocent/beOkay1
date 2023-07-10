import React, { Component } from "react";
import { View, Text, FlatList, Image } from "react-native";
import Header from "../../components/Header";
import { TouchableOpacity } from "react-native-gesture-handler";
import { COLORS, height, width } from "../../components/Colors";
import { useNavigation } from "@react-navigation/native";

const Viewall = ({ onPress, route, name }) => {
  // const { name } = route.params;
  const navigation = useNavigation();
  const Categories = [
    {
      name: "Cardioligist",
      img: require("../../assets/doctor.png"),
    },
    {
      name: "Cardioligist",
      img: require("../../assets/doctor.png"),
    },
    {
      name: "Cardioligist",
      img: require("../../assets/doctor.png"),
    },
    {
      name: "Cardioligist",
      img: require("../../assets/doctor.png"),
    },
    {
      name: "Cardioligist",
      img: require("../../assets/doctor.png"),
    },
    {
      name: "Cardioligist",
      img: require("../../assets/doctor.png"),
    },
    {
      name: "Cardioligist",
      img: require("../../assets/doctor.png"),
    },
  ];
  return (
    <View
      style={{
        zIndex: 7,
        backgroundColor: COLORS.white,
        height: height / 4,
        borderColor: COLORS.primary,
        borderRadius: width / 10,
        padding: 5,
        borderWidth: 2,
      }}
    >
      {/* <Header /> */}
      <Text style={{ fontSize: 20, fontWeight: "bold", alignSelf: "center" }}>
        Categories
      </Text>
      <FlatList
        style={{ alignSelf: "center" }}
        numColumns={3}
        data={Categories}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("Description", {
                    part: item.name,
                    name: name,
                  })
                }
                style={{
                  width: width / 8,
                  height: width / 8,
                  alignSelf: "center",
                  paddingHorizontal: "10%",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: width / 4,
                  backgroundColor: COLORS.primary,
                  margin: width / 40,
                }}
              >
                <Image source={item.img} />
              </TouchableOpacity>
              <Text>{item.name}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default Viewall;
