import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import Header from "../../components/Header";
import { COLORS, height, width } from "../../components/Colors";
import Button from "../../components/Button";
import { FlatList } from "react-native-gesture-handler";
import DateTime from "../../components/DateTimePicker";
import DatePicker from "../../components/DatePicker";
import Entypo from "react-native-vector-icons/Entypo";
const Mycalendar = ({ navigation }) => {
  const [selected, setSelected] = useState([0]);
  const days = ["Mo", "Tu", "We", "Th", "fr", "Sa", "Su"];
  const [showModal, setShowModal] = useState(true);
  return (
    <ScrollView style={{ flex: 1 }}>
      <Header
        style={{
          backgroundColor: COLORS.doctor,
          paddingHorizontal: width / 20,
        }}
      />
      {/* <View style={{ marginTop: 20, flexDirection: "row" }}>
        <Button
          onPress={() => navigation.navigate("mycalendar")}
          text="My Calendar"
          style={{
            backgroundColor: COLORS.doctor,
            height: height / 20,
            width: "30%",
          }}
          style1={{ fontSize: 15 }}
        />
      </View> */}
      {/* <View
        style={{
          padding: width / 25,
          backgroundColor: COLORS.warning,
          borderRadius: width / 10,
          width: "90%",
          alignSelf: "center",
          marginTop: height / 90,
        }}
      >
        <Text>Schedule and Make Public your daily availability </Text>
      </View> */}
      {showModal && (
        <View style={styles.modal}>
          <View style={styles.modalheader}>
            <Text
              style={{
                color: "#809502",
                fontSize: 18,
                fontWeight: "bold",
              }}
            >
              My Calendar
            </Text>
            <TouchableOpacity onPress={() => setShowModal(!showModal)}>
              <Entypo
                name="circle-with-cross"
                color={COLORS.primary}
                size={24}
              />
            </TouchableOpacity>
          </View>

          <Text style={{ fontSize: 14, color: "#809502", marginHorizontal: 4 }}>
            Schedule and Make Public your daily availability
          </Text>
        </View>
      )}
      <View
        style={{
          marginTop: height / 20,
          paddingHorizontal: 16,
          backgroundColor: COLORS.primary,
          flex: 2,
          height: "100%",
          paddingVertical: height / 20,
          borderRadius: width / 10,
        }}
      >
        <Text style={styles.headers}>My Availability</Text>
        <FlatList
          horizontal
          data={days}
          renderItem={({ item, index }) => {
            return (
              <View
                style={{
                  marginTop: 10,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <TouchableOpacity
                  onPress={() => {
                    if (selected.includes(index)) {
                      const select = selected.filter((item) => item !== index);
                      setSelected(select);
                    } else {
                      setSelected([...selected, index]);
                    }
                  }}
                  style={[
                    styles.availability,
                    {
                      backgroundColor: selected.includes(index)
                        ? COLORS.doctor
                        : COLORS.backgrounds,
                    },
                  ]}
                >
                  <Text style={{ fontWeight: "bold" }}>{item}</Text>
                </TouchableOpacity>
              </View>
            );
          }}
        />
        <View style={{ marginTop: height / 40 }}>
          <Text style={styles.headers}>Time Range</Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              marginTop: 15,
            }}
          >
            <View>
              <Text style={{ fontWeight: "700", fontSize: 17 }}>From</Text>
              <DateTime mode="time" />
            </View>
            <View>
              <Text style={{ fontWeight: "700", fontSize: 17 }}>To</Text>
              <DateTime mode="time" />
            </View>
          </View>
        </View>
        {/* <View style={{ marginTop: 15 }}>
          <Text style={styles.headers}>Custom Availability</Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "600",
              marginTop: 20,
              marginBottom: 20,
            }}
          >
            Choose Date
          </Text>
          <View
            style={{
              width: width - 40,
              height: height / 17,
              backgroundColor: COLORS.backgrounds,
              justifyContent: "space-between",
              alignItems: "center",
              borderRadius: width / 7,
              flexDirection: "row",
              paddingLeft: 20,
            }}
          >
            <DatePicker />
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              marginTop: 15,
            }}
          >
            <View>
              <Text style={{ fontWeight: "700", fontSize: 17 }}>From</Text>
              <DateTime mode="time" />
            </View>
            <View>
              <Text style={{ fontWeight: "700", fontSize: 17 }}>To</Text>
              <DateTime mode="time" />
            </View>
          </View>
        </View> */}
      </View>
      <Button
        onPress={() => navigation.navigate("history")}
        text="Confirm Availability"
        style={{
          width: width - 20,
          height: height / 17,
          backgroundColor: COLORS.doctor,
          marginTop: 20,
        }}
        style1={{ color: COLORS.white, fontSize: 22, fontWeight: "bold" }}
      />
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  headers: {
    fontWeight: "bold",
    fontSize: 19,
  },
  paragraph: {
    fontWeight: "400",
  },
  availability: {
    height: height / 13,
    width: width / 10,
    // backgroundColor: COLORS.backgrounds,
    marginHorizontal: 10,
    borderRadius: width / 7,
    alignItems: "center",
    justifyContent: "center",
  },
  modal: {
    marginHorizontal: width / 30,
    paddingVertical: height / 50,
    paddingHorizontal: width / 40,
    backgroundColor: "#FFF6C5",
    borderRadius: width / 30,
    marginTop: height / 50,
  },
  modalheader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 4,
    alignItems: "center",
  },
});

export default Mycalendar;
