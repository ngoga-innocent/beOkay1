import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import Header from "../../components/Header";
import { COLORS, height, width } from "../../components/Colors";
import Input from "../../components/Input";
import MapScreen from "../../components/map";
const Emergency = () => {
  const [emergecyty, setEmergency] = useState(null);
  const [choose, setChoose] = useState(false);
  const emergency = ["Accident", "Severe Illness", "Other"];

  const ReusableInput = ({
    title,
    placeholder,
    rewidth,
    multiline,
    maxHeight,
    padding,
    height1,
    keyboardType,
  }) => {
    return (
      <View style={{ width: rewidth }}>
        <Text style={{ fontSize: 17 }}>{title}</Text>
        <Input
          keyboardType={keyboardType}
          multiline={multiline}
          placeholder={placeholder}
          style={{
            width: "100%",
            borderColor: "#989c99",
            maxHeight: maxHeight,
            padding: padding,
            height: height1,
          }}
        />
      </View>
    );
  };
  return (
    <KeyboardAvoidingView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <Header style={{ paddingHorizontal: width / 40 }} />

      <ScrollView
        style={{ backgroundColor: COLORS.white, paddingHorizontal: width / 30 }}
      >
        <View
          style={{
            padding: height / 40,
            backgroundColor: COLORS.doctor,
            width: "100%",
            borderRadius: width / 20,
            borderColor: COLORS.white,
            borderWidth: 1,
            alignItems: "center",
            alignSelf: "center",
            justifyContent: "center",
            marginTop: height / 30,
          }}
        >
          <Text
            style={{ fontWeight: "bold", color: COLORS.black, fontSize: 20 }}
          >
            Contact the Emergency Asap
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            marginTop: height / 60,
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              marginRight: width / 4,
            }}
          >
            Emergency Type
          </Text>
          <View>
            <TouchableOpacity
              onPress={() => setChoose(!choose)}
              style={{
                backgroundColor: COLORS.backgrounds,
                padding: width / 35,
                borderRadius: width / 40,
              }}
            >
              {emergecyty === null ? (
                <Text>Choose Type</Text>
              ) : (
                <Text>{emergecyty}</Text>
              )}
            </TouchableOpacity>
          </View>
        </View>
        {choose
          ? emergency.map((item, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => {
                    setEmergency(item), setChoose(!choose);
                  }}
                  style={{
                    marginBottom: height / 60,
                    borderRadius: width / 50,
                    backgroundColor:
                      emergecyty === item ? COLORS.primary : COLORS.backgrounds,
                    justifyContent: "center",
                    alignItems: "center",
                    width: "60%",
                    alignSelf: "center",
                  }}
                >
                  <Text style={{ padding: width / 50 }}>{item}</Text>
                </TouchableOpacity>
              );
            })
          : null}
        {emergecyty === "Other" && <ReusableInput title="Specify Type" />}
        <ReusableInput
          title="Emergency details"
          multiline={true}
          maxHeight={height / 4}
          height1={height / 10}
        />
        <ReusableInput
          title="Specific requirements"
          multiline={true}
          height1={height / 15}
        />
        {/* <ReusableInput title="Location" height1={height / 15} /> */}
        <View>
          <Text>Location</Text>
          <MapScreen />
        </View>
        <ReusableInput
          title="Contact number"
          keyboardType="numeric"
          height1={height / 18}
        />
        <TouchableOpacity
          style={{
            backgroundColor: COLORS.primary,
            padding: width / 35,
            borderRadius: width / 40,
            alignSelf: "center",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            marginTop: height / 40,
            marginBottom: height / 40,
          }}
        >
          <Text
            style={{ fontWeight: "bold", fontSize: 20, color: COLORS.white }}
          >
            Submit
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Emergency;
