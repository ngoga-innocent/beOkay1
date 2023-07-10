import React, { Component } from "react";
import { View, Text, StatusBar, FlatList, Image } from "react-native";
import Header from "../../components/Header";
import { COLORS, height, width } from "../../components/Colors";
import { TouchableOpacity } from "react-native-gesture-handler";

const Emergency = () => {
  const Hospitals = [
    {
      name: "Baho International Hospital",
      location: "Kigali-Nyarugenge",
      category: "DHA",
      open: "08h-20h",
      image: require("../../assets/Hospital/baho.jpg"),
    },
    {
      name: "Best care specialist",
      location: "Kigali-Nyarugenge",
      category: "DHA",
      open: "08h-20h",
      image: require("../../assets/Hospital/best_care.jpg"),
    },
    {
      name: "King Faisal",
      location: "Kigali-Nyarugenge",
      category: "DHA",
      open: "08h-20h",
      image: require("../../assets/Hospital/king_faisal.jpg"),
    },
    {
      name: "La Croix du sud Hospital",
      location: "Kigali-Nyarugenge",
      category: "DHA",
      open: "08h-20h",
      image: require("../../assets/Hospital/lacroix.jpeg"),
    },
    {
      name: "Polyclinc saint Robert",
      location: "Kigali-Nyarugenge",
      category: "DHA",
      open: "08h-20h",
      image: require("../../assets/Hospital/polyclinic.jpg"),
    },
    {
      name: "Univesity teaching hospital",
      location: "Kigali-Nyarugenge",
      category: "DHA",
      open: "08h-20h",
      image: require("../../assets/Hospital/teachning_hosp.jpg"),
    },
  ];
  return (
    <View style={{ backgroundColor: COLORS.white, flex: 1 }}>
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
                marginTop: width / 60,
                // justifyContent: "space-between",
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
                style={{
                  width: width / 4,
                  height: width / 4,
                  marginRight: width / 20,
                }}
                resizeMode="contain"
              />
              <View style={{}}>
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 17,
                  }}
                >
                  {item.name}
                </Text>
                <View style={{}}>
                  <Text>{item.category}</Text>
                </View>
                <View
                  style={{
                    // flexDirection: "row",
                    // alignItems: "center",
                    justifyContent: "space-between",
                    // marginHorizontal: width / 50,
                  }}
                >
                  <Text>Opening Hours: {item.open}</Text>
                  <Text>Located {item.location}</Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};
export default Emergency;
