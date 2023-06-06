import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";
import { React, useState } from "react";
import Header from "../../components/Header";
import Entypo from "react-native-vector-icons/Entypo";
import { COLORS, width, height } from "../../components/Colors";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Fontisto from "react-native-vector-icons/Fontisto";
import Button from "../../components/Button";
import Input from "../../components/Input";
import CalendarScreen from "./Calendar";

const ScheduleAppointment = ({ navigation }) => {
  const date = new Date().getDate();
  const hour = new Date().getHours();
  const time = new Date().getMonth();
  const [showModal, setShowModal] = useState(true);
  const status = {
    pressue: 150,
    lastilliness: "headache",
    lastdrugs: "paracetamol",
  };
  const newAppointment = [
    {
      date: 12,
      month: "Feb",
      title: "Medical Consultation",
      patient: "Eric Gasana",
    },
    {
      date: 24,
      month: "Feb",
      title: "Physiothera",
      patient: "Emmanuel",
    },
    {
      date: 2,
      month: "March",
      title: "Medical Consultation",
      patient: "Eric Gasana",
    },
    {
      date: 17,
      month: "Jan",
      title: "Medical Consultation",
      patient: "Eric Gasana",
    },
  ];
  const Appointment = [
    {
      date: "12-08-2023",
      doctor: "Dr Issa",
      hospital: "Nyirinkware",
    },
    {
      date: "1-07-2023",
      doctor: "Dr Ngoga",
      hospital: "CHUK",
    },
    {
      date: "12-08-2023",
      doctor: "Dr MUKWIYE",
      hospital: "Kanombe Grand Hospital",
    },
    {
      date: "12-08-2023",
      doctor: "Dr MUKWIYE",
      hospital: "Kanombe Grand Hospital",
    },
    {
      date: "12-08-2023",
      doctor: "Dr MUKWIYE",
      hospital: "Kanombe Grand Hospital",
    },
  ];

  return (
    <View style={styles.container}>
      <Header style={{ backgroundColor: COLORS.doctor }} />
      <View style={{ marginTop: 20, flexDirection: "row" }}>
        <Button
          text="Appointment & Schedule"
          style={{
            backgroundColor: COLORS.doctor,
            height: height / 20,
            width: "60%",
          }}
          style1={{ fontSize: 15 }}
        />
        <Button
          onPress={() => navigation.navigate("mycalendar")}
          text="My Calendar"
          style={{
            backgroundColor: COLORS.backgrounds,
            height: height / 20,
            width: "30%",
          }}
          style1={{ fontSize: 15 }}
        />
      </View>
      <Input placeholder="Find Instance" />
      <View
        style={{
          width: "90%",
          margin: width / 12,
          backgroundColor: COLORS.doctor,
          padding: 8,
          borderRadius: 10,
        }}
      >
        <Text style={{ fontWeight: "bold", fontSize: 15 }}>
          New Appointment Request
        </Text>
        <FlatList
          pagingEnabled
          horizontal
          showsHorizontalScrollIndicator={false}
          data={newAppointment}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginRight: 10,
                  marginTop: 10,
                }}
              >
                <View
                  style={{
                    width: width / 7,
                    height: height / 16,
                    borderRadius: 4,
                    backgroundColor: COLORS.primary,
                    marginTop: 5,
                    marginRight: 10,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text>{item.date}</Text>
                  <Text style={{ fontWeight: "bold" }}>{item.month}</Text>
                </View>
                <View>
                  <Text>{item.title}</Text>
                  <Text style={{ fontWeight: "bold" }}>{item.patient}</Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>

      <View
        style={{
          flex: 1,
          backgroundColor: COLORS.white,
          marginHorizontal: 8,
          borderRadius: 7,
          marginVertical: 4,
        }}
      >
        <View style={{ marginBottom: 25 }}>
          <FlatList
            style={{ height: height / 4 }}
            data={Appointment}
            renderItem={({ item }) => (
              <View style={{ flexDirection: "row", marginBottom: 5 }}>
                <View
                  style={{
                    width: 68,
                    maxWidth: 68,
                    height: 68,
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 68,
                    backgroundColor: "#CFDEFF",
                    margin: 5,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 12,
                      color: COLORS.text,
                      alignSelf: "center",
                    }}
                  >
                    {item.date}
                  </Text>
                </View>
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    marginHorizontal: 7,
                  }}
                >
                  <Text
                    style={{
                      color: COLORS.paragraph,
                      fontSize: 14,
                      fontWeight: "400",
                      marginButtom: 4,
                    }}
                  >
                    {item.date}
                  </Text>
                  <View
                    style={{
                      flexDirection: "row",
                      marginRight: 3,
                      maxWidth: 170,
                    }}
                  >
                    <Text>{item.doctor}</Text>
                    <Text>|{item.hospital}</Text>
                  </View>
                </View>
              </View>
            )}
          />
          {/* <CalendarScreen /> */}
          <Button
            onPress={() => navigation.navigate("history")}
            text="Schedule an appoint"
            style={{
              height: height / 17,
              backgroundColor: COLORS.doctor,
              width: width - 30,
              marginTop: height / 14,
            }}
          />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  modal: {
    marginHorizontal: 8,
    width: 343,
    backgroundColor: "#FFF6C5",
    borderRadius: 15,
    height: 98,
    marginTop: 13,

    padding: 5,
  },
  modalheader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 4,
    alignItems: "center",
  },
});

export default ScheduleAppointment;
