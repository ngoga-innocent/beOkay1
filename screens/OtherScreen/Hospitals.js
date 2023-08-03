import React, { Component } from "react";
import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import Header from "../../components/Header";
import { height, COLORS, width } from "../../components/Colors";

const Hospitals = () => {
  const hospitals = [
    {
      name: "King Faisal",
      location: "Kigali-Nyarugege",
      opening: "08:00am-18:00pm",
      image: require("../../assets/Hospital/king_faisal.jpg"),
    },
    {
      name: "Baho",
      location: "Kigali-Nyarugege",
      opening: "08:00am-19:00pm",
      image: require("../../assets/Hospital/baho.jpg"),
    },
    {
      name: "Best Care",
      location: "Kigali-Nyamirambo",
      opening: "08:00am-18:00pm",
      image: require("../../assets/Hospital/best_care.jpg"),
    },
    {
      name: "La croix du sud ",
      location: "Kigali-Nyarugege",
      opening: "08:00am-18:00pm",
      image: require("../../assets/Hospital/lacroix.jpeg"),
    },
    {
      name: "polyClinic",
      location: "Kigali-Nyarugege",
      opening: "08:00am-18:00pm",
      image: require("../../assets/Hospital/polyclinic.jpg"),
    },
    {
      name: "polyClinic",
      location: "Kigali-Nyarugege",
      opening: "08:00am-18:00pm",
      image: require("../../assets/Hospital/polyclinic.jpg"),
    },
    {
      name: "polyClinic",
      location: "Kigali-Nyarugege",
      opening: "08:00am-18:00pm",
      image: require("../../assets/Hospital/polyclinic.jpg"),
    },
    {
      name: "polyClinic",
      location: "Kigali-Nyarugege",
      opening: "08:00am-18:00pm",
      image: require("../../assets/Hospital/polyclinic.jpg"),
    },
    {
      name: "polyClinic",
      location: "Kigali-Nyarugege",
      opening: "08:00am-18:00pm",
      image: require("../../assets/Hospital/polyclinic.jpg"),
    },
  ];
  return (
    <View style={{ flex: 1 }}>
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            padding: height / 90,
            backgroundColor: COLORS.primary,
            width: "80%",
            borderRadius: width / 20,
            borderColor: COLORS.white,
            borderWidth: 1,
            alignItems: "center",
            alignSelf: "center",
            justifyContent: "center",
            marginTop: height / 100,
          }}
        >
          <Text
            style={{ fontWeight: "bold", color: COLORS.white, fontSize: 20 }}
          >
            Hospitals
          </Text>
        </View>

        <View>
          {hospitals.map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  paddingHorizontal: width / 20,
                  paddingVertical: height / 100,
                  marginVertical: height / 100,
                  backgroundColor: COLORS.white,
                  width: "95%",
                  alignSelf: "center",
                  zIndex: 4,
                  borderRadius: width / 30,
                }}
              >
                <Image
                  source={item.image}
                  resizeMode="cover"
                  style={{
                    borderRadius: width / 30,
                    width: width / 4.5,
                    height: height / 12,
                  }}
                />
                <View style={{ marginLeft: width / 40 }}>
                  <Text
                    style={{
                      fontWeight: "bold",
                      fontSize: 18,
                      marginBottom: height / 200,
                    }}
                  >
                    {item.name}
                  </Text>
                  <Text style={{ fontWeight: "bold" }}>
                    Opening Hours :
                    <Text style={{ fontWeight: "normal" }}>{item.opening}</Text>
                  </Text>
                  <Text style={{ fontWeight: "bold" }}>
                    Location:
                    <Text style={{ fontWeight: "normal" }}>
                      {item.location}
                    </Text>
                  </Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default Hospitals;
