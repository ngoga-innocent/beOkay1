import React, { Component } from "react";
import {
  View,
  Text,
  StatusBar,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import { COLORS, width, height } from "../../components/Colors";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Entype from "react-native-vector-icons/Entypo";
import { useNavigation } from "@react-navigation/native";
import Fontisto from "react-native-vector-icons/Fontisto";
import Header from "../../components/Header";
import { Svg, SvgXml } from "react-native-svg";
const MedicalHr = () => {
  const navigation = useNavigation();
  const ReusableBtn = ({ title, background, filen, image }) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate("E.H.R", { screen: "report" })}
        style={{
          borderWidth: 1,
          height: height / 10,
          width: "100%",
          borderRadius: width / 17,
          paddingHorizontal: width / 16,
          flexDirection: "row",
          alignItems: "center",
          // justifyContent: "space-between",
          marginBottom: width / 20,
        }}
      >
        <View
          style={{
            width: "25%",
            // backgroundColor: background,
            height: height / 13,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: width / 23,
            opacity: 0.75,
          }}
        >
          <Image
            source={image}
            style={{
              width: "100%",
              height: "80%",
              borderRadius: width / 20,
              marginRight: width / 20,
            }}
            resizeMode="contain"
          />
          {/* <SvgXml xml={image} height={height / 30} width={width / 10} /> */}
          {/* <FontAwesome name="file-text" size={40} /> */}
        </View>
        <View
          style={{
            alignSelf: "center",
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View>
            <Text style={{ fontSize: 16, fontWeight: "600" }}>{title}</Text>
            <Text>{filen} files</Text>
          </View>
          <View style={{}}>
            <Entype name="dots-three-vertical" size={20} />
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={{ flex: 1 }}>
      <Header />
      <ScrollView
        style={{ paddingHorizontal: width / 15 }}
        showsVerticalScrollIndicator={false}
      >
        <StatusBar backgroundColor={COLORS.primary} hidden />
        <View style={{ marginTop: height / 60 }}>
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
              marginBottom: height / 80,
            }}
          >
            <Text
              style={{ fontWeight: "bold", color: COLORS.white, fontSize: 20 }}
            >
              Latest Report
            </Text>
          </View>
          <ReusableBtn
            background="#267C97"
            title="Prescription & medication"
            filen="5"
            image={require("../../assets/MedicalReportIcons/MedicalReport.png")}
            // image={require("../../assets/Medical report icons/Medical_Prescription.png")}
          />
          <ReusableBtn
            background="#C129F6"
            title="Medical & Lab Test"
            filen="8"
            image={require("../../assets/MedicalReportIcons/MedicalLab.png")}
          />
          <ReusableBtn
            background="#267C97"
            title="Appointment"
            filen="5"
            image={require("../../assets/MedicalReportIcons/Appointment.png")}
          />
          <ReusableBtn
            background="#C129F6"
            title="Recomendations"
            filen="5"
            image={require("../../assets/MedicalReportIcons/Recomendation.jpg")}
          />
          <ReusableBtn
            background="#C129F6"
            title="Daily Tips"
            filen="5"
            image={require("../../assets/MedicalReportIcons/Tips.png")}
          />
        </View>
      </ScrollView>
    </View>
  );
};
export default MedicalHr;
