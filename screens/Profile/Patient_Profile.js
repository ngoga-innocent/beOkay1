import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  KeyboardAvoidingView,
} from "react-native";

import AntDesign from "react-native-vector-icons/AntDesign";
import Material from "react-native-vector-icons/MaterialIcons";
import CircularProgressBar from "../../components/CircularProgressBar";
import Input from "../../components/Input";
import Slider from "@react-native-community/slider";
import RadioForm from "react-native-simple-radio-button";
import { COLORS } from "../../components/Colors";
const Patient_Profile = () => {
  const [range, setRange] = useState("32");
  const item = [
    { label: "Yes", value: 0 },
    { label: "No", value: 1 },
  ];

  const [value, setValue] = useState(0);
  const width = Dimensions.get("screen").width,
    height = Dimensions.get("screen").height;

  const ReusableInput = ({ title, placeholder, rewidth }) => {
    return (
      <View style={{ marginTop: 7, width: rewidth }}>
        <Text style={{ fontSize: 17 }}>{title}</Text>
        <Input
          placeholder={placeholder}
          style={{ width: "100%", borderColor: "#989c99" }}
        />
      </View>
    );
  };

  const BloodType = ({ title }) => {
    return (
      <TouchableOpacity
        style={{
          height: height / 24,
          width: width / 10,
          borderRadius: width / 40,
          borderWidth: 2,
          justifyContent: "center",
          alignItems: "center",
          marginRight: width / 13,
        }}
      >
        <Text style={{ fontWeight: "bold", fontSize: 17 }}>{title}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <KeyboardAvoidingView
      behavior="position"
      enabled
      style={{ flex: 2 }}
      keyboardVerticalOffset={120}
    >
      <ScrollView
        style={{
          paddingHorizontal: 20,
          marginTop: 4,
          backgroundColor: "white",
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "#dae0db",
            width: "100%",
            height: height / 16,
            alignSelf: "center",
            borderRadius: 30,
            borderWidth: 1,
            borderColor: "#989c99",
            paddingLeft: 10,
            justifyContent: "center",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <AntDesign name="idcard" size="30%" />
              <Text style={{ marginLeft: 8, fontSize: 16, fontWeight: "600" }}>
                Patient Profile
              </Text>
            </View>

            <View
              style={{
                marginRight: 8,
                marginBottom: height / 90,
                alignSelf: "center",
              }}
            >
              <CircularProgressBar
                progress={2}
                barColor="green"
                thickness={7}
                size={width / 10}
              />
            </View>
          </View>
        </TouchableOpacity>
        <ReusableInput title="Names" placeholder="separate names by space" />
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <ReusableInput title="Date of Birth " placeholder="DD / MM / YYY" />
          <ReusableInput title="Gender" placeholder="Male" rewidth="40%" />
        </View>
        <View style={{ marginTop: 10 }}>
          <Text>Blood Type</Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 10,
            }}
          >
            <BloodType title="A" />
            <BloodType title="AB" />
            <BloodType title="B" />
            <BloodType title="O" />
            <TouchableOpacity
              style={{
                backgroundColor: "grey",
                width: width / 5,
                height: height / 22,
                borderRadius: 20,

                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text>Unknown</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ marginTop: 10 }}>
          <Text>Pregnant Status</Text>
          <RadioForm
            radio_props={item}
            initial={0}
            onPress={(value) => setValue(value)}
            formHorizontal={true}
            animation
            buttonColor={COLORS.paragraph}
            selectedButtonColor={COLORS.primary}
            buttonWrapStyle={{ margin: 40 }}
            // style={{ margin: 5, padding: 4 }}
            buttonStyle={{ margin: 50 }}
            labelStyle={{ marginRight: 40 }}
          />
          <Slider
            style={{ width: "100%", height: 60 }}
            minimumValue={0}
            maximumValue={0.092}
            minimumTrackTintColor={COLORS.primary}
            maximumTrackTintColor="grey"
            thumbTintColor={COLORS.primary}
            value={0.03}
            onValueChange={(value) => setRange(parseInt(value * 100 + "%"))}
          />
        </View>
        <View
          style={{
            alignSelf: "flex-end",
            backgroundColor: "grey",
            padding: 10,
            height: height / 24,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 20,
          }}
        >
          <Text>{range} months</Text>
        </View>
        <ReusableInput title="Chronicle Disease " placeholder="Find Disease" />
        <ReusableInput title="Father's Name " placeholder="Father's Name" />
        <ReusableInput title="Father's Contact " placeholder="Tel" />

        <ReusableInput title="Mother's Name " placeholder="Mother's Name" />
        <ReusableInput title="Mother's Contact " placeholder="Tel" />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 20,
          }}
        >
          <ReusableInput title="Parent Location " placeholder="Location" />
          <Material
            name="my-location"
            size={30}
            style={{ marginTop: height / 20, marginRight: width / 10 }}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
export default Patient_Profile;
