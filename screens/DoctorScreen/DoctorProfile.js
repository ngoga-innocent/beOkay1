import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  Image,
  Dimensions,
  Platform,
  KeyboardAvoidingView,
  FlatList,
  SafeAreaView,
  RefreshControl,
} from "react-native";
import { React, useState, useEffect } from "react";
import { COLORS, width, height } from "../../components/Colors";
import SignupHeader from "../loginScreens/SignupHeader";
import Input from "../../components/Input";
import Button from "../../components/Button";

import axios from "axios";
import Spinner from "react-native-loading-spinner-overlay/lib";
import url from "../../Url";
import { ScrollView } from "react-native-gesture-handler";
import { Avatar } from "react-native-elements";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import Dropdown from "../../components/DropDown";
import CustomCheckbox from "../../components/CheckBox";
import * as DocumentPicker from "expo-document-picker";
import AntDesign from "react-native-vector-icons/AntDesign";
import Icon from "react-native-vector-icons/Ionicons";
import Entypo from "react-native-vector-icons/Entypo";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { CheckLogin } from "../../components/CheckLogin";
import Url from "../../Url";
const Docprofile = ({ route, navigation }) => {
  const width = Dimensions.get("screen").width,
    height = Dimensions.get("screen").height;

  const [visible, setVisible] = useState();
  const [visible1, setVisible1] = useState();

  const [isLoading, setIsLoading] = useState(false);
  const Status = [
    { id: 1, name: "Nurse" },
    { id: 1, name: "Doctor" },
  ];
  const Specialization = [
    { id: 1, name: "Eye" },
    { id: 1, name: "Nose" },
    { id: 1, name: "Ear" },
    { id: 1, name: "None" },
  ];
  const Profile = {
    Image: require("../../assets/cuate.png"),
    name: "Dr .Kanimba",
    specialite: "Physiology",
    rating: 4.4,
    bio: "Attended Doctorates in Francais for specialization in Physiology",
  };
  const Appointment = [
    {
      date: "22 July 2023",
      time: "10:30 AM",
      title: "Medical Consultation",
      patient: "Eric Gasana",
      Image: require("../../assets/cuate.png"),
      description: "UnResponding Doctor ",
    },
    {
      date: "22 July 2023",
      time: "10:30 AM",
      title: "Medical Consultation",
      patient: "Eric Gasana",
      Image: require("../../assets/cuate.png"),
      description: "Good Services ",
    },
    {
      date: "22 July 2023",
      time: "10:30 AM",
      title: "Medical Consultation",
      patient: "Eric Gasana",
      Image: require("../../assets/cuate.png"),
      description:
        "my head hurts and my body aches also in evening I feel cold with unmeasurable temperature ",
    },
    {
      date: "22 July 2023",
      time: "10:30 AM",
      title: "Medical Consultation",
      patient: "Eric Gasana",
      Image: require("../../assets/cuate.png"),
      description:
        "my head hurts and my body aches also in evening I feel cold with unmeasurable temperature ",
    },
  ];

  const consultations = [
    {
      Image: require("../../assets/cuate.png"),
      fname: "Michael",
      sname: "Simpson",
      time: "4:4pm",
      date: "dEC 7",
    },
    {
      Image: require("../../assets/amico.png"),
      fname: "Michael",
      sname: "Simpson",
      time: "4:4pm",
      date: "dEC 7",
    },
    {
      Image: require("../../assets/amico.png"),
      fname: "Michael",
      sname: "Simpson",
      time: "4:4pm",
      date: "dEC 7",
    },
    {
      Image: require("../../assets/amico.png"),
      fname: "Michael",
      sname: "Simpson",
      time: "4:4pm",
      date: "dEC 7",
    },
  ];

  const call_api = () => {
    navigation.navigate("Docverification", {
      email: Email,
      number: number,
    });
  };
  useEffect(() => {
    
    getProfile()
  }, []);

  async function getProfile() {
    const token = (await CheckLogin()).token;
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `JWT ${token}`);

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(`${Url}/doctor/profile`, requestOptions)
      .then((response) => response.json())
      .then((result) => {console.log(result),setIsLoading(true)})
      .catch((error) => console.log("error", error));
  }

  const Logout = async () => {
    await AsyncStorage.clear();
    navigation.navigate("Auth", { screen: "usertype" });
  };
  return (
    <ScrollView
      style={[styles.container, { backgroundColor: COLORS.doctor, flex: 1 }]}
      // refreshControl={()=>{
      //   <RefreshControl onRefresh={getProfile()} refreshing={isLoading} />
      // }}
    >
      <Spinner visible={isLoading} />
      <View style={{ paddingHorizontal: width / 30, marginTop: height / 100 }}>
        <View
          style={{
            marginTop: height / 70,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <TouchableOpacity onPress={() => navigation.navigate("Docprofile")}>
              <Avatar
                source={Profile.Image}
                size="large"
                rounded
                containerStyle={{ borderWidth: 1 }}
              />
            </TouchableOpacity>
            <View style={{ marginLeft: width / 20 }}>
              <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                {Profile.name}
              </Text>
              <Text style={{ fontWeight: "700" }}>{Profile.specialite}</Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <EvilIcons name="star" color="orange" size={20} />
                <Text style={{ fontSize: 17, marginLeft: width / 25 }}>
                  {Profile.rating}
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginRight: width / 30,
              alignItems: "center",
            }}
          >
            <TouchableOpacity style={{ marginRight: width / 30 }}>
              <Icon name="notifications" size={30} color={COLORS.white} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Entypo name="message" size={30} color={COLORS.white} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => Logout()}
              // onPress={() => navigation.openDrawer()}
              style={{
                height: width / 10,
                width: width / 10,
                backgroundColor: COLORS.text,
                borderRadius: 40,
                alignItems: "center",
                justifyContent: "center",
                opacity: 2,
                marginLeft: width / 40,
              }}
            >
              <AntDesign
                name="poweroff"
                size={20}
                style={{ alignSelf: "center", fontWeight: "bold" }}
                color={COLORS.white}
              />
            </TouchableOpacity>
          </View>
        </View>
        <Text
          style={{ fontWeight: "bold", marginTop: height / 60, fontSize: 17 }}
        >
          Bio
        </Text>
        <View
          style={{
            borderRadius: width / 40,
            borderWidth: 1,
            paddingVertical: height / 70,
            marginTop: height / 130,
          }}
        >
          <Text style={{ textAlign: "center" }}>{Profile.bio}</Text>
        </View>
      </View>
      <View
        style={{
          backgroundColor: COLORS.white,
          borderTopLeftRadius: width / 10,
          borderTopRightRadius: width / 10,
          marginTop: height / 90,
          paddingHorizontal: width / 30,
          paddingTop: height / 70,
        }}
      >
        <View>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 17,
              marginTop: height / 60,
            }}
          >
            My Patients
          </Text>
          <FlatList
            showsHorizontalScrollIndicator={false}
            style={{ marginTop: height / 100 }}
            horizontal
            data={consultations}
            renderItem={({ item, index }) => {
              return (
                <View
                  style={{
                    marginRight: width / 20,
                    justifyContent: "flex-start",
                  }}
                >
                  <TouchableOpacity
                    onPress={() => {
                      visible === index ? setVisible() : setVisible(index);
                    }}
                  >
                    <Avatar
                      source={item.Image}
                      size="large"
                      rounded
                      containerStyle={{
                        borderWidth: 2,
                        borderColor: COLORS.doctor,
                      }}
                    />
                  </TouchableOpacity>
                  {visible === index && (
                    <View style={{ borderWidth: 1, borderRadius: width / 18 }}>
                      <Text style={{ textAlign: "center", maxWidth: "90%" }}>
                        {item.sname}
                      </Text>
                    </View>
                  )}
                </View>
              );
            }}
          />
        </View>
        <View>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 17,
              marginTop: height / 60,
            }}
          >
            Services Review
          </Text>
          <FlatList
            showsHorizontalScrollIndicator={false}
            style={{ marginTop: height / 100 }}
            horizontal
            data={Appointment}
            renderItem={({ item, index }) => {
              return (
                <View style={{ marginRight: width / 20 }}>
                  <TouchableOpacity
                    onPress={() =>
                      visible1 === index ? setVisible1() : setVisible1(index)
                    }
                  >
                    <Avatar
                      source={item.Image}
                      size="large"
                      rounded
                      containerStyle={{
                        borderWidth: 2,
                        borderColor: COLORS.doctor,
                      }}
                    />
                  </TouchableOpacity>
                  {visible1 === index && (
                    <View
                      style={{
                        flex: 1,
                        borderWidth: 1,
                        borderRadius: width / 18,
                      }}
                    >
                      <Text style={{ textAlign: "center", maxWidth: "90%" }}>
                        {item.description}
                      </Text>
                    </View>
                  )}
                </View>
              );
            }}
          />

          <Text
            style={{
              fontSize: 17,
              fontWeight: "bold",
              marginTop: height / 100,
            }}
          >
            Consultations
          </Text>

          <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            {consultations.map((item, index) => {
              return (
                <View key={index}>
                  <TouchableOpacity
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      paddingHorizontal: width / 19,
                      marginVertical: height / 90,
                      backgroundColor: COLORS.backgrounds,
                      paddingVertical: height / 120,
                      borderRadius: width / 24,
                      alignItems: "center",
                    }}
                  >
                    <Avatar
                      source={item.Image}
                      size="medium"
                      rounded
                      containerStyle={{ borderWidth: 1 }}
                    />
                    <View>
                      <Text style={{ fontSize: 17, fontWeight: "bold" }}>
                        {item.sname}
                      </Text>
                      <Text style={{ fontSize: 17, fontWeight: "bold" }}>
                        {item.fname}
                      </Text>
                    </View>
                    <View>
                      <Text
                        style={{
                          textTransform: "uppercase",
                          fontWeight: "bold",
                        }}
                      >
                        {item.date}
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              );
            })}
          </ScrollView>
        </View>
      </View>
    </ScrollView>
  );
};

export default Docprofile;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // marginTop: Platform.OS === "ios" ? height / 25 : height / 45,
  },
  SecondView: {
    flex: 1,
    backgroundColor: COLORS.white,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  inner: {
    marginHorizontal: 32,
  },
  Signup: {
    color: "#000000",
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 20,
  },
  text: {
    color: COLORS.text,
  },
  login: {
    color: COLORS.text,
  },
  loginbtn: {
    color: COLORS.doctor,
    fontSize: 20,
  },
  haveacc: {
    flexDirection: "row",
  },
  Button: {
    backgroundColor: COLORS.doctor,
    height: 40,
    marginTop: 16,
    alignSelf: "center",
  },
  usembl: {
    alignItems: "center",
    justifyContent: "center",
    fontSize: 17,
    backgroundColor: "white",
    flexDirection: "row",
  },
  usembl1: {
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 2,
    fontSize: 17,
  },
});
