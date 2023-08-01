import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

import AntDesign from "react-native-vector-icons/AntDesign";
import Material from "react-native-vector-icons/MaterialIcons";
import CircularProgressBar from "../../components/CircularProgressBar";
import Input from "../../components/Input";
import Slider from "@react-native-community/slider";
import RadioForm from "react-native-simple-radio-button";
import { COLORS } from "../../components/Colors";
import DateTimePicker from "@react-native-community/datetimepicker";
const Patient_Profile = () => {
  const [range, setRange] = useState("3");
  const [selectedDate, setSelectedDate] = useState("");
  const [showPicker, setShowPicker] = useState(false);
  const [date, setDate] = useState(new Date());
  const [gender, setGender] = useState(null);
  const [selectGender, setSelectGender] = useState(false);
  const [addPeople, setAddPeople] = useState(false);
  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShowPicker(Platform.OS === "ios");
    setDate(currentDate);
  };
  const togglePicker = () => {
    setShowPicker(true);
  };
  const item = [
    { label: "Yes", value: 0 },
    { label: "No", value: 1 },
  ];
  const genderOptions = ["male", "female", "prefer not to say"];
  const [value, setValue] = useState(0);
  const width = Dimensions.get("screen").width,
    height = Dimensions.get("screen").height;

  const ReusableInput = ({ title, placeholder, rewidth }) => {
    return (
      <View style={{ width: rewidth }}>
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
      style={{ flex: 1 }}
      keyboardVerticalOffset={40}
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
              <AntDesign name="idcard" size={30} />
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
        <View
          style={{
            flex: 1,
            flexDirection: "row-reverse",
            justifyContent: "space-between",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: height / 80,
            paddingVertical: height / 80,
            marginBottom: height / 80,
          }}
        >
          <View style={{ marginLeft: width / 40 }}>
            <Text style={{ fontWeight: "600" }}>Date Of Birth</Text>
            <TouchableOpacity
              style={{
                backgroundColor: COLORS.backgrounds,
                alignItems: "center",
                justifyContent: "center",
                height: height / 17,
                borderRadius: width / 30,

                width: "100%",
                marginTop: height / 70,
              }}
              onPress={() => togglePicker()}
            >
              <Text>{"Choose Date" || date}</Text>
              {/* {Platform.OS === "android" && (
                <Text style={{ fontWeight: "bold", color: COLORS.white }}>
                  Choose Date || {date}
                </Text>
              )} */}
              {showPicker && (
                <DateTimePicker
                  value={date}
                  mode="date"
                  display="default"
                  onChange={handleDateChange}
                />
              )}
            </TouchableOpacity>
          </View>
          <View style={{ width: "35%" }}>
            <ReusableInput
              title="Marital Status"
              placeholder="Marital Status"
            />
          </View>
          <View
            style={{
              width: "40%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text>Gender</Text>
            <TouchableOpacity
              onPress={() => setSelectGender(!selectGender)}
              style={{
                height: height / 17,
                backgroundColor: selectGender
                  ? COLORS.white
                  : COLORS.backgrounds,
                alignSelf: "center",
                justifyContent: "center",
                borderRadius: width / 30,
                marginTop: height / 60,
              }}
            >
              {selectGender == true ? (
                <View style={{ marginTop: height / 40 }}>
                  {genderOptions.map((item, index) => {
                    return (
                      <TouchableOpacity
                        key={index}
                        onPress={() => {
                          setGender(item), setSelectGender(false);
                        }}
                        style={{
                          backgroundColor: COLORS.backgrounds,
                          marginBottom: 5,
                          borderRadius: width / 10,
                          padding: 4,
                          alignItems: "center",
                          width: "100%",
                        }}
                      >
                        <Text>{item}</Text>
                      </TouchableOpacity>
                    );
                  })}
                </View>
              ) : (
                <Text style={{ paddingHorizontal: width / 45 }}>
                  {gender == null ? "Choose Gender" : gender}{" "}
                </Text>
              )}
            </TouchableOpacity>
          </View>
          {/* <ReusableInput title="Gender" placeholder="Male" rewidth="30%" /> */}
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <ReusableInput
            title="Location"
            placeholder="Location"
            rewidth={width / 2.5}
          />
          <ReusableInput
            title="Contact"
            placeholder="Contact"
            rewidth={width / 2.5}
          />
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
        {gender != "male" && (
          <>
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
              {value == 0 && (
                <Slider
                  style={{ width: "100%", height: 60 }}
                  minimumValue={0}
                  maximumValue={0.092}
                  minimumTrackTintColor={COLORS.primary}
                  maximumTrackTintColor="grey"
                  thumbTintColor={COLORS.primary}
                  value={0.03}
                  onValueChange={(value) =>
                    setRange(parseInt(value * 100 + "%"))
                  }
                />
              )}
            </View>
            {value == 0 && (
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
            )}
          </>
        )}
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <ReusableInput
            title="Chronicle Disease "
            placeholder="Find Disease"
            rewidth={width / 2.5}
          />
          <ReusableInput
            title="Allergies "
            placeholder="Allergies"
            rewidth={width / 2.5}
          />
        </View>
        <TouchableOpacity
          onPress={() => setAddPeople(!addPeople)}
          style={{
            width: width - 20,
            height: height / 20,
            backgroundColor: COLORS.primary,
            alignSelf: "center",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: width / 20,
            marginTop: height / 60,
          }}
        >
          <Text style={{ fontWeight: "bold", color: COLORS.white }}>
            Add Other People
          </Text>
        </TouchableOpacity>
        {addPeople && (
          <View style={{ marginTop: height / 40 }}>
            <Text
              style={{ alignSelf: "center", fontWeight: "bold", fontSize: 20 }}
            >
              Add Depedent
            </Text>
            <ReusableInput title="Name" placeholder="Dependent Name" />
            <View
              style={{ flexDirection: "row", justifyContent: "space-around" }}
            >
              <ReusableInput
                title="Gender "
                placeholder="Gender"
                rewidth={width / 2.5}
              />
              <ReusableInput
                title="Relationship "
                placeholder="Relationship"
                rewidth={width / 2.5}
              />
            </View>
            <TouchableOpacity
              onPress={() => setAddPeople(!addPeople)}
              style={{
                height: height / 20,
                width: width - 20,
                backgroundColor: COLORS.primary,
                borderRadius: width / 30,
                alignItems: "center",
                justifyContent: "center",
                marginTop: height / 40,
                marginBottom: height / 40,
                alignSelf: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  color: COLORS.white,
                }}
              >
                Add People
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
export default Patient_Profile;
