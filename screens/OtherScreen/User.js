import React, { Component } from "react";
import {
  View,
  Text,
  StatusBar,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { COLORS, width, height } from "../../components/Colors";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Entype from "react-native-vector-icons/Entypo";
import { useNavigation } from "@react-navigation/native";
import Fontisto from "react-native-vector-icons/Fontisto";

const User = () => {
  const navigation = useNavigation();
  const ReusableBtn = ({ title, background, filen }) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("consultation", { screen: "report" })
        }
        style={{
          borderWidth: 1,
          height: height / 7,
          width: "100%",
          borderRadius: width / 17,
          paddingHorizontal: width / 16,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: width / 20,
        }}
      >
        <View
          style={{
            width: "30%",
            backgroundColor: background,
            height: height / 10,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: width / 17,
            opacity: 0.75,
          }}
        >
          <FontAwesome name="file-text" size={40} />
        </View>
        <View>
          <Text style={{ fontSize: 18, fontWeight: "600" }}>{title}</Text>
          <Text>{filen} files</Text>
        </View>
        <View>
          <Entype name="dots-three-vertical" size={40} />
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView>
      <ScrollView
        style={{ paddingHorizontal: width / 15 }}
        showsVerticalScrollIndicator={false}
      >
        <StatusBar backgroundColor={COLORS.primary} />
        <View style={{ marginTop: width / 10 }}>
          <Text
            style={{
              fontSize: 25,
              fontWeight: "bold",
              marginBottom: height / 20,
            }}
          >
            Latest Report
          </Text>
          <ReusableBtn
            background="#267C97"
            title="Prescription & medication"
            filen="5"
          />
          <ReusableBtn
            background="#C129F6"
            title="Medical & Lab Test"
            filen="8"
          />
          <ReusableBtn background="#267C97" title="Appointment" filen="5" />
          <ReusableBtn background="#C129F6" title="Recomendations" filen="5" />
          <ReusableBtn background="#C129F6" title="Daily Tips" filen="5" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default User;
