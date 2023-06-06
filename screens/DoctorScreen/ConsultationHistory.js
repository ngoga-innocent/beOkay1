import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Header from "../../components/Header";
import { COLORS, height, width } from "../../components/Colors";
import HeaderTab from "../../components/HeaderTab";

const ConsultationHistory = ({ navigation }) => {
  const Patient = [
    {
      name: "Karangwa James",
      desease: "Heart Symptoms",
      date: "today",
      time: "09:50",
    },
    {
      name: "Karangwa James",
      desease: "Heart Symptoms",
      date: "today",
      time: "09:50",
    },
  ];
  return (
    <ScrollView>
      <Header style={{ backgroundColor: COLORS.doctor }} />
      <HeaderTab
        title1="Consultation"
        title2="Consultation History"
        style1={{ width: "30%", backgroundColor: COLORS.doctor }}
        style2={{ width: "60%", backgroundColor: COLORS.backgrounds }}
        width2="60%"
      />
      <View style={{ marginTop: 30 }}>
        {Patient.map((item, index) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("patientRecord", {
                  name: item.name,
                })
              }
              key={index}
              style={[
                { width: width - 40, alignSelf: "center", marginTop: 10 },
                styles.box,
              ]}
            >
              <Text
                style={{ fontSize: 18, fontWeight: "700", marginBottom: 10 }}
              >
                {item.name}
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text>{item.desease}</Text>
                <Text>
                  {item.date} {item.time}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  box: {
    width: width - 20,
    height: height / 12,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    justifyContent: "center",
    padding: 4,
    elevation: 4, // This elevation property is specific to Android, won't have any effect on iOS
  },
});
export default ConsultationHistory;
