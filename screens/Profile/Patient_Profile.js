import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

// import AntDesign from "react-native-vector-icons/AntDesign";
// import Material from "react-native-vector-icons/MaterialIcons";
// import CircularProgressBar from "../../components/CircularProgressBar";
import Input from "../../components/Input";
import Slider from "@react-native-community/slider";
import RadioForm from "react-native-simple-radio-button";
import { COLORS } from "../../components/Colors";
import DateTimePicker from "@react-native-community/datetimepicker";
import * as ImagePicker from "expo-image-picker";
import { Avatar } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
import Spinner from "react-native-loading-spinner-overlay";
import AsyncStorage from "@react-native-async-storage/async-storage";
import DateInput from "../../components/TypeDate";
import Url from "../../Url";
import CustomCheckbox from "../../components/CheckBox";
import CustomRadioButton from "../../components/CustomRadioButton";
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
  const [name, setName] = useState("");
  const [phone_number, setPhone] = useState("");

  const [birth, setBirth] = useState("");

  const [location, setLocation] = useState("");
  const [contact, setContact] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [disease, setDisease] = useState("");
  const [pregnant, setPregnant] = useState(false);
  const [allergies, setAllergies] = useState([]);
  const [Chronical, setChronical] = useState([]);
  const [habits, setHabits] = useState([]);

  const [dependent, setDependent] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // const handleDateChange = (event, selectedDate) => {
  //   const currentDate = selectedDate;
  //   setShowPicker(Platform.OS === "ios");
  //   setDate(currentDate);
  // };
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

  useEffect(() => {
    getProfile();
  }, []);
  const handleDateChange = (day, month, year) => {
    // setBirth(date)
    setBirth(`${year}-${month}-${day}`);
    // console.log(`${day1}-${month}-${year}`);
  };
  // ===========================Integration ==============================

  const getProfile = async () => {
    setIsLoading(true);
    const token = await AsyncStorage.getItem("token");
    if (token !== null) {
      var myHeaders = new Headers();
      myHeaders.append("Authorization", "JWT " + `${token}`);

      var requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
      };

      await fetch(`${Url}/patients/profile/`, requestOptions)
        .then((response) => {
          if (response.status == 401) {
            return navigation.navigate("Auth", { screen: "Login" });
          } else {
            return response.json();
          }
        })
        .then((result) => {
          // console.log(result)
          setName(result.personal_information.full_name);
          // setPhone(result.phone_number);
          setGender(result.personal_information.gender);
          setBirth(result.personal_information.date_of_birth);
          setMaritalStatus(result.personal_information.marital_status);
          setLocation(result.personal_information.address);
          setPhone(result.personal_information.phone_number);
          setBloodGroup(result.blood_group);
          setDisease(result.chronic_diseases);
          setPregnant(result.is_pregnant);
          setAllergies(result.alergies);
          setChronical(result.chronic_diseases);
          setHabits(result.habits);
          setProfile(result.personal_information.profile_image);
          setDependent(result.dependents_profile);
          setIsLoading(false);
        })
        .catch((error) => console.log("patient profile error", error));
    } else {
      setIsLoading(false);
      return navigation.navigate("Auth", { screen: "Login" });
    }
  };

  // ===========================End Integration ==============================

  const ReusableInput = ({ title, placeholder, rewidth, value, onChange }) => {
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
          value={value}
          onChangeText={onChange}
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
    <KeyboardAvoidingView style={{ backgroundColor: COLORS.primary, flex: 1 }}>
      <HeaderComponent />
      <ScrollView
        style={{
          paddingHorizontal: width / 30,
          marginTop: height / 100,
          backgroundColor: "white",
          borderTopLeftRadius: width / 10,
          borderTopRightRadius: width / 10,
          paddingTop: height / 30,
        }}
      >
        <ReusableInput
          title="Names"
          placeholder="separate names by space"
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            flex: 1,
            paddingVertical: height / 90,
          }}
        >
          <View
            style={{
              // width: "40%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 17 }}>Gender</Text>
            {/* <TouchableOpacity
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
            > */}
            {selectGender == true ? (
              <View style={{ marginTop: height / 40 }}>
                {genderOptions.map((item, index) => {
                  return (
                    <TouchableOpacity
                      key={index}
                      onPress={() => {
                        setGender(item), setSelectGender(!selectGender);
                      }}
                      style={{
                        backgroundColor: COLORS.backgrounds,
                        marginBottom: height / 90,
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
              <TouchableOpacity
                onPress={() => setSelectGender(!selectGender)}
                style={{
                  backgroundColor: COLORS.backgrounds,
                  marginBottom: height / 90,
                  borderRadius: width / 10,
                  padding: 4,
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <Text style={{ paddingHorizontal: width / 45 }}>
                  {gender == null ? "Choose Gender" : gender}
                </Text>
              </TouchableOpacity>
            )}
            {/* </TouchableOpacity> */}
          </View>
          <View
            style={{
              // width: "40%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 17 }}>
              Marital Status
            </Text>
            {/* <TouchableOpacity
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
            > */}
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
              <TouchableOpacity
                onPress={() => setSelectStatus(!selectStatus)}
                style={{
                  backgroundColor: COLORS.backgrounds,
                  marginBottom: height / 90,
                  borderRadius: width / 10,
                  padding: 4,
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <Text style={{ paddingHorizontal: width / 45 }}>
                  {maritalstatus == null ? "Choose Status" : maritalstatus}
                </Text>
              </TouchableOpacity>
            )}
            {/* </TouchableOpacity> */}
          </View>
        </View>
        <View
          style={{ alignItems: "flex-start", justifyContent: "flex-start" }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 17 }}>
            Date of Birth
          </Text>
          <DateInput onChangeDate={handleDateChange} />
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
        <View>
          {gender !== "male" && (
            <View>
              <Text>Pregnant Status</Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <CustomRadioButton
                  label="yes"
                  onSelect={() => setPregnant(true)}
                  selected={pregnant ? true : false}
                />
                <CustomRadioButton
                  label="no"
                  onSelect={() => setPregnant(false)}
                  selected={pregnant ? false : true}
                />
              </View>
            </View>
          )}
        </View>
        {pregnant && (
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Slider
              style={{ width: width / 1.7, height: 60 }}
              minimumValue={0}
              maximumValue={0.092}
              minimumTrackTintColor={COLORS.primary}
              maximumTrackTintColor="grey"
              thumbTintColor={COLORS.primary}
              value={0.03}
              onValueChange={(value) => setRange(parseInt(value * 100 + "%"))}
            />
            <View
              style={{
                // alignSelf: "flex-end",
                backgroundColor: "grey",
                // padding: 10,
                paddingHorizontal: width / 80,
                
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 20,
              }}
            >
              <Text>{range} months</Text>
            </View>
          </View>
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
          {addPeople && (
          <ScrollView
            style={{
              backgroundColor: COLORS.primary,
              position: "absolute",
              bottom: 0,
              borderTopLeftRadius: width / 20,
              borderTopRightRadius: width / 20,
              // 
              paddingHorizontal: width / 30,
              marginBottom: height / 10,
              // height: height / 2.8,
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
                borderRadius: width / 9,
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
        </ScrollView>
        
      {/* </ScrollView> */}
    </KeyboardAvoidingView>


  );
};
export default Patient_Profile;
