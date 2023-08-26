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
import * as ImagePicker from "expo-image-picker";
import { Avatar } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";

const Patient_Profile = () => {
  const [range, setRange] = useState("3");
  const [selectedDate, setSelectedDate] = useState("");
  const [showPicker, setShowPicker] = useState(false);
  const [date, setDate] = useState(new Date());
  const [gender, setGender] = useState(null);
  const [selectGender, setSelectGender] = useState(false);
  const [addPeople, setAddPeople] = useState(false);
  const [profile, setProfile] = useState(null);
  const [maritalstatus, setMaritalStatus] = useState(null);
  const [selectStatus, setSelectStatus] = useState(false);
  const [type, setType] = useState(null);
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
  const maritalStatus = ["single", "married", "divorced", "widow"];
  const genderOptions = ["male", "female", "prefer not to say"];
  const bloodtype = ["A", "AB", "B", "0"];
  const [value, setValue] = useState(0);
  const width = Dimensions.get("screen").width,
    height = Dimensions.get("screen").height;
  //handle Image Profile
  const handleProfile = async () => {
    try {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Permission denied!");
        }
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [3, 3],
          quality: 1,
        });

        if (!result.canceled) {
          // console.log(result.assets[0].uri);
          setProfile(result.assets[0].uri);
        } else {
          console.log("canceled");
        }
      }
    } catch (err) {
      console.log("Error:", err);
    }
  };
  //end Chose Image Profile
  const ReusableInput = ({ title, placeholder, rewidth }) => {
    return (
      <View style={{ width: rewidth }}>
        <Text style={{ fontWeight: "bold", fontSize: 17 }}>{title}</Text>
        <Input
          placeholder={placeholder}
          style={{
            width: "100%",
            borderColor: "#989c99",
            backgroundColor: COLORS.backgrounds,
          }}
        />
      </View>
    );
  };

  const BloodType = ({ title }) => {
    return (
      <View style={{ flexDirection: "row" }}>
        {bloodtype.map((item, index) => {
          return (
            <TouchableOpacity
              onPress={() => setType(item)}
              key={index}
              style={{
                height: height / 24,
                width: width / 10,
                borderRadius: width / 40,
                borderWidth: 2,
                justifyContent: "center",
                alignItems: "center",
                marginRight: width / 13,
                backgroundColor: type == item ? COLORS.primary : null,
              }}
            >
              <Text style={{ fontWeight: "bold", fontSize: 17 }}>{item}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };
  const HeaderComponent = () => {
    return (
      <View
        style={{
          // backgroundColor: COLORS.primary,
          height: height / 10,
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: width / 20,
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity onPress={() => handleProfile()}>
          <Avatar
            rounded
            size="large"
            source={
              profile == null
                ? require("../../assets/Ellipse15.png")
                : { uri: profile }
            }
          />
        </TouchableOpacity>

        {/* <Image  /> */}
        <Text
          style={{
            color: COLORS.white,
            fontWeight: "bold",
            fontSize: 20,
          }}
        >
          Edit Profile
        </Text>
        <TouchableOpacity
          style={{
            alignItems: "center",
            justifyContent: "center",
            padding: width / 30,
            backgroundColor: COLORS.white,
            borderRadius: width / 30,
          }}
        >
          <Text style={{ color: COLORS.primary, fontWeight: "bold" }}>
            Save Profile
          </Text>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : null}
      enabled
      style={{ flex: 1, backgroundColor: COLORS.primary }}
      keyboardVerticalOffset={height / 1.4}
    >
      <SafeAreaView>
        <HeaderComponent />
        <ScrollView
          style={{
            paddingHorizontal: 20,
            marginTop: 4,
            backgroundColor: "white",
            borderTopLeftRadius: width / 10,
            borderTopRightRadius: width / 10,
            paddingTop: height / 30,
          }}
        >
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
              <Text style={{ fontWeight: "bold", fontSize: 17 }}>
                Date Of Birth
              </Text>
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
                <Text style={{ fontSize: 17 }}>{"Choose Date" || date}</Text>
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
            <View
              style={{
                width: "40%",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text style={{ fontWeight: "bold", fontSize: 17 }}>
                Marital Status
              </Text>
              <TouchableOpacity
                onPress={() => setSelectStatus(!selectStatus)}
                style={{
                  height: height / 17,
                  backgroundColor: selectStatus
                    ? COLORS.white
                    : COLORS.backgrounds,
                  alignSelf: "center",
                  justifyContent: "center",
                  borderRadius: width / 30,
                  marginTop: height / 60,
                }}
              >
                {selectStatus == true ? (
                  <View style={{ marginTop: height / 40 }}>
                    {maritalStatus.map((item, index) => {
                      return (
                        <TouchableOpacity
                          key={index}
                          onPress={() => {
                            setMaritalStatus(item), setSelectStatus(false);
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
                    {maritalstatus == null ? "Choose Status" : maritalstatus}
                  </Text>
                )}
              </TouchableOpacity>
            </View>
            {/* <ReusableInput title="Gender" placeholder="Male" rewidth="30%" /> */}

            <View
              style={{
                width: "40%",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text style={{ fontWeight: "bold", fontSize: 17 }}>Gender</Text>
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
          <View
            style={{ flexDirection: "row", justifyContent: "space-around" }}
          >
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
              <BloodType />

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
          <View
            style={{ flexDirection: "row", justifyContent: "space-around" }}
          >
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
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              marginTop: height / 60,
            }}
          >
            <ReusableInput
              title="Current Medication "
              placeholder="Find Medecine"
              rewidth={width / 2.5}
            />
            <ReusableInput
              title="Current Disease "
              placeholder="Disease"
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
              marginBottom: height / 6,
            }}
          >
            <Text style={{ fontWeight: "bold", color: COLORS.white }}>
              Add Other People
            </Text>
          </TouchableOpacity>
        </ScrollView>
        {addPeople && (
          <ScrollView
            style={{
              backgroundColor: COLORS.primary,
              position: "absolute",
              bottom: 0,
              borderTopLeftRadius: width / 20,
              borderTopRightRadius: width / 20,
              width: width,
              paddingHorizontal: width / 30,
              marginBottom: height / 10,
              height: height / 2.8,
              zIndex: 4,
              paddingVertical: height / 30,
            }}
          >
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
                backgroundColor: COLORS.white,
                borderRadius: width / 30,
                alignItems: "center",
                justifyContent: "center",
                marginTop: height / 40,
                marginBottom: height / 20,
                alignSelf: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  color: COLORS.text,
                }}
              >
                Add People
              </Text>
            </TouchableOpacity>
          </ScrollView>
        )}
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};
export default Patient_Profile;
