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

const Mycalendar = ({ navigation }) => {
  const [selected, setSelected] = useState([0]);
  const days = ["Mo", "Tu", "We", "Th", "fr", "Sa", "Su"];
  return (
    <ScrollView>
      <Header style={{ backgroundColor: COLORS.doctor }} />
      <View style={{ marginTop: 20, flexDirection: "row" }}>
        <Button
          onPress={() => navigation.navigate("Schedule")}
          text="Appointment & Schedule"
          style={{
            backgroundColor: COLORS.backgrounds,
            height: height / 20,
            width: "60%",
          }}
          style1={{ fontSize: 15 }}
        />
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
      </View>
      <View style={{ marginTop: height / 20, paddingHorizontal: 16 }}>
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
        <View style={{ marginTop: 15 }}>
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
        <View style={{ marginTop: 15 }}>
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
        </View>
        <Button
          onPress={() => navigation.navigate("history")}
          text="Confirm Availability"
          style={{
            width: width - 40,
            height: height / 17,
            backgroundColor: COLORS.doctor,
            marginTop: 20,
          }}
          style1={{ color: COLORS.white, fontSize: 22, fontWeight: "bold" }}
        />
      </View>
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
});

export default Mycalendar;
