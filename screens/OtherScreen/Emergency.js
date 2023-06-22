import React, { Component } from "react";
import { View, Text, StatusBar, FlatList, Image } from "react-native";
import Header from "../../components/Header";
import { COLORS, height, width } from "../../components/Colors";
import { TouchableOpacity } from "react-native-gesture-handler";

const Emergency = () => {
  const Hospitals = [
    {
      name: "Nyiranuma",
      open: "08-20",
      image: require("../../assets/Airtel.png"),
    },
    {
      name: "Nyiranuma",
      open: "08-20",
      image: require("../../assets/Airtel.png"),
    },
    {
      name: "Nyiranuma",
      open: "08-20",
      image: require("../../assets/Airtel.png"),
    },
  ];
  return (
    <View style={{ backgroundColor: COLORS.white }}>
      <Header />
      <FlatList
        data={Hospitals}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              style={{
                flexDirection: "row",
                height: height / 8,
                width: "90%",
                borderWidth: 1,
                borderColor: COLORS.black,
                alignSelf: "center",
                borderRadius: width / 25,
                marginTop: width / 25,
                justifyContent: "space-between",
                alignItems: "center",
                paddingHorizontal: width / 40,
                zIndex: 0.8,
                shadowRadius: 0.1,
                shadowColor: COLORS.white,
                shadowOpacity: 11,
                elevation: 11,
              }}
            >
              <Image
                source={item.image}
                style={{ width: "30%", height: "100%" }}
                resizeMode="contain"
              />
              <View>
                <Text>{item.name}</Text>
              </View>
              <View>
                <Text>{item.open}</Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};
export default Emergency;
