import React, { Component } from "react";
import { View, Text } from "react-native";
import { COLORS, height, width } from "../../components/Colors";
import Feather from "react-native-vector-icons/Feather";
import { TouchableOpacity } from "react-native";

const SuccessApointment = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <View
        style={{
          width: width / 2,
          height: width / 2,
          borderRadius: width / 2,
          backgroundColor: COLORS.primary,
          opacity: 0.7,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            width: width / 3,
            height: width / 3,
            borderRadius: width / 3,
            backgroundColor: COLORS.primary,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Feather name="check" size={50} color={COLORS.white} />
        </View>
      </View>
      <Text
        style={{ fontSize: 22, color: COLORS.paragraph, fontWeight: "bold" }}
      >
        Thank You
      </Text>
      <Text style={{ fontSize: 18, fontWeight: "600" }}>
        Your Appointment Created
      </Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("Home")}
        style={{
          height: height / 20,
          backgroundColor: COLORS.primary,
          width: "90%",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: width / 30,
          marginTop: height / 8,
        }}
      >
        <Text style={{ color: COLORS.white, fontWeight: "bold", fontSize: 18 }}>
          Done
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SuccessApointment;
