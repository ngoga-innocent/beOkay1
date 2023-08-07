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
      name: "Mental Health",
      img: require("../../assets/doctor.png"),
    },
    {
      name: "Fertility",
      img: require("../../assets/doctor.png"),
    },
    {
      name: " Sexually Transmitted Infection",
      img: require("../../assets/doctor.png"),
    },
    {
      name: "Pediatric Medecine",
      img: require("../../assets/doctor.png"),
    },
    {
      name: "Gyneocology",
      img: require("../../assets/doctor.png"),
    },
    {
      name: "Internal Medecine",
      img: require("../../assets/doctor.png"),
    },
    {
      name: "Chronical Diseases",
      img: require("../../assets/doctor.png"),
    },
  ];
  return (
    <View
      style={{
        zIndex: 7,
        backgroundColor: COLORS.white,

        borderColor: COLORS.primary,
        borderRadius: width / 10,
        padding: height / 50,
        borderWidth: 2,
        height: height / 3,
      }}
    >
      <FlatList
        style={{ alignSelf: "center" }}
        numColumns={3}
        data={Categories}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <View style={{ alignItems: "center" }}>
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
              <Text style={{ maxWidth: width / 3.6, textAlign: "center" }}>
                {item.name}
              </Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default Viewall;
