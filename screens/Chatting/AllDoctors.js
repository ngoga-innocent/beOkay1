import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import Header from "../../components/Header";
import { COLORS, height, width } from "../../components/Colors";
import { Avatar } from "react-native-elements";
// import { Avatar } from "react-native-badge-avatar";
import { useNavigation } from "@react-navigation/native";

const AllDoctors = () => {
  const navigation = useNavigation();
  const Doctors = [
    {
      name: "Dr.Jules",
      description: "Lorem ipsum dotor sit amet consecteur.",
      available: "12h30 -17h30 ",
      image: require("../../assets/Drjules.png"),
    },
    {
      name: "Dr.james",
      description: "Lorem ipsum dotor sit amet consecteur.",
      available: "12h30 -17h30 ",
      image: require("../../assets/DrJjames.png"),
    },
    {
      name: "Dr.Anne",
      description: "Lorem ipsum dotor sit amet consecteur.",
      available: "13h30 -17h30",
      image: require("../../assets/DrAnne.png"),
    },
    {
      name: "Dr.Jeanne",
      description: "Lorem ipsum dotor sit amet consecteur.",
      available: "12h30 -17h30 ",
      image: require("../../assets/Drjeanne.png"),
    },
    {
      name: "Dr.Jeanne",
      description:
        "Lorem ipsum dotor sit amet consecteur.Lorem ipsum dotor sit amet consecteur.Lorem ipsum dotor sit amet consecteur.Lorem ipsum dotor sit amet consecteur.Lorem ipsum dotor sit amet consecteur.",
      available: "12h30 -17h30 ",
      image: require("../../assets/Drjeanne.png"),
    },
    {
      name: "Dr.Jeanne",
      description: "Lorem ipsum dotor sit amet consecteur.",
      available: "12h30 -17h30 ",
      image: require("../../assets/Drjeanne.png"),
    },
    {
      name: "Dr.Frank",
      description: "Lorem ipsum dotor sit amet consecteur.",
      available: "12h30 -17h30 ",
      image: require("../../assets/DrFrank.png"),
    },
  ];

  return (
    <View style={{ flex: 1, padding: width / 40 }}>
      <View
        style={{
          backgroundColor: COLORS.warning,
          paddingVertical: width / 40,
          borderRadius: width / 30,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 15, fontWeight: "bold" }}>
          You are going to take real-Time consultation with our doctors. service
          Price is 4$
        </Text>
        <View
          style={{
            marginTop: height / 60,
            width: "90%",
            backgroundColor: COLORS.primary,
            padding: height / 140,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: width / 30,
            alignSelf: "center",
          }}
        >
          <Text style={{ color: COLORS.white, fontWeight: "700" }}>
            we reccommend doctors based on previous illness description you
            provided
          </Text>
        </View>
      </View>
      <View
        style={{
          backgroundColor: COLORS.white,
          flex: 1,
          paddingVertical: height / 90,
          paddingHorizontal: width / 40,
        }}
      >
        <Text>Recent Doctors</Text>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          data={Doctors}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("chat", {
                    name: item.name,
                    image: item.image,
                    available: item.available,
                  })
                }
                style={{
                  marginRight: width / 30,
                  alignItems: "center",
                  marginTop: 10,
                  paddingBottom: height / 20,
                  //   justifyContent: "center",
                }}
              >
                <View
                  style={{
                    width: width / 40,
                    height: width / 40,
                    backgroundColor: COLORS.primary,
                    borderRadius: width / 40,
                    marginBottom: -height / 50,
                    marginLeft: width / 10,
                    zIndex: 5,
                    transform: [{ rotate: "90deg" }],
                  }}
                />
                <Avatar
                  source={item.image}
                  size="medium"
                  containerStyle={{
                    borderColor: COLORS.primary,
                  }}
                  rounded
                />

                <Text style={{ fontSize: 13 }}>{item.name}</Text>
              </TouchableOpacity>
            );
          }}
        />
        <Text
          style={{
            marginTop: height / 20,
            fontSize: 17,
            fontWeight: "600",
            marginBottom: height / 40,
          }}
        >
          available Doctors
        </Text>

        <FlatList
          showsVerticalScrollIndicator={false}
          data={Doctors}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("consultation", {
                    screen: "doctorDetails",
                    params: {
                      name: item.name,
                      image: item.image,
                      available: item.available,
                      description: item.description,
                    },
                  })
                }
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginBottom: height / 50,
                  justifyContent: "space-between",
                }}
              >
                <Avatar source={item.image} size="medium" rounded />
                <View>
                  <Text style={{ fontSize: 17, fontWeight: "600" }}>
                    {item.name}
                  </Text>
                  <Text
                    style={{ maxWidth: width / 2.6, maxHeight: height / 19 }}
                  >
                    {item.description}
                  </Text>
                </View>
                <View>
                  <Text style={{ fontWeight: "600" }}>Available</Text>
                  <Text>{item.available}</Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </View>
  );
};

export default AllDoctors;
