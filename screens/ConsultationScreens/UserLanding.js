import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ScrollView,
  Image,
} from "react-native";
import { React, useState, useLayoutEffect } from "react";
import Header from "../../components/Header";
import Entypo from "react-native-vector-icons/Entypo";
import { COLORS, height, width } from "../../components/Colors";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Fontisto from "react-native-vector-icons/Fontisto";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Url from "../../Url";
import HeaderTab from "../../components/HeaderTab";
import Button from "../../components/Button";
import { TabBar, TabView } from "react-native-tab-view";
import CalendarScreen from "../DoctorScreen/Calendar";

const UserLanding = ({ navigation }) => {
  const [index, setIndex] = useState(0);
  const [currentDate, setCurrentDate] = useState("");
  const [currentDay, setCurrentDay] = useState("");
  const [routes] = useState([
    { key: "first", title: "Appointments" },
    { key: "second", title: "My Calendar" },
  ]);
  useLayoutEffect(() => {
    getProfile();
    getCurrentDateAndDay();
  }, []);
  const getCurrentDateAndDay = () => {
    const date = new Date().getDate();
    const month = new Date().getMonth() + 1;
    const year = new Date().getFullYear();
    const day = new Date().getDay();

    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const currentDayOfWeek = daysOfWeek[day];

    setCurrentDate(`${date}-${month}-${year}`);
    setCurrentDay(currentDayOfWeek);
  };
  const Appointments = () => (
    <ScrollView
      style={{ height: 200 }}
      // contentContainerStyle={{ flexGrow: 1 }}
      scrollEnabled
    >
      {Appointment.map((item, index) => {
        return (
          <View key={index} style={{ flexDirection: "row", marginBottom: 5 }}>
            <View
              style={{
                width: width / 6,
                maxWidth: width / 6,
                height: width / 6,
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
                  textAlign: "center",
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
                  marginBottom: 4,
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
        );
      })}
    </ScrollView>
  );

  const Mycalendar = () => (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <CalendarScreen />
    </ScrollView>
  );

  const renderScene = ({ route }) => {
    switch (route?.key) {
      case "first":
        return Appointments();
      case "second":
        return Mycalendar();

      default:
        return null;
    }
  };
  const [showModal, setShowModal] = useState(true);
  const [name, setName] = useState("");

  const getProfile = async () => {
    const token = await AsyncStorage.getItem("token");

    var myHeaders = new Headers();
    myHeaders.append("Authorization", "JWT " + `${token}`);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(`${Url}/users/edit-profile/`, requestOptions)
      .then((response) => {
        if (response.status == 401) {
          navigation.navigate("Auth", { screen: "Login" });
          return response.json();
        } else {
          return response.json();
        }
      })
      .then((result) => {
        AsyncStorage.setItem("name", result.username);
        setName(result.username);
      })
      .catch((error) => console.log("error", error));
  };
  const status = {
    pressue: 150,
    lastilliness: "headache",
    lastdrugs: "paracetamol",
  };
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
    <View style={[styles.container, { flex: 1 }]}>
      <Header style={{ paddingHorizontal: width / 17 }} />
      <View style={styles.modal}>
        <View style={styles.modalheader}>
          <Text
            style={{
              color: "#809502",
              fontSize: 14,
              fontWeight: "bold",
            }}
          >
            Good Day {name}
          </Text>
          <Text
            style={{
              color: "#809502",
              fontSize: 17,
              fontWeight: "bold",
            }}
          >
            {currentDay} {currentDate}
          </Text>
        </View>

        {/* <Text style={{ fontSize: 14, color: "#809502", marginHorizontal: 4 }}>
          how are you doing?if there is any help you need please let Be-Okay
          know
        </Text> */}
      </View>
      <View
        style={{
          //   backgroundColor: COLORS.white,
          marginHorizontal: 8,
          borderRadius: 7,
          marginVertical: 4,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 4,
            marginHorizontal: 10,
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 13 }}>
            Health Status
          </Text>
          <Text style={{ color: COLORS.text, fontWeight: "300", fontSize: 10 }}>
            last 30 days
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate("E.H.R")}
          style={{
            marginHorizontal: 10,
            flexDirection: "row",
            marginVertical: 7,
          }}
        >
          <View
            style={{
              height: width / 10,
              width: width / 10,
              backgroundColor: COLORS.primary,
              borderRadius: 4,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Icon name="blood-bag" size={40} color="white" />
          </View>
          <View style={{ marginLeft: 15 }}>
            <Text
              style={{
                color: COLORS.paragraph,
                fontSize: 13,
                fontWeight: "800",
              }}
            >
              Blood Pressure
            </Text>
            <Text style={{ fontWeight: "bold" }}>{status.pressue}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("E.H.R")}
          style={{
            marginHorizontal: 10,
            flexDirection: "row",
            marginVertical: 7,
          }}
        >
          <View
            style={{
              height: width / 10,
              width: width / 10,
              backgroundColor: COLORS.primary,
              borderRadius: 4,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Fontisto name="blood-test" size={30} color="white" />
          </View>
          <View style={{ marginLeft: 15 }}>
            <Text
              style={{
                color: COLORS.paragraph,
                fontSize: 13,
                fontWeight: "800",
              }}
            >
              Last Illiness
            </Text>
            <Text style={{ fontWeight: "bold" }}>{status.lastilliness}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("E.H.R")}
          style={{
            marginHorizontal: 10,
            flexDirection: "row",
            marginVertical: 7,
          }}
        >
          <View
            style={{
              height: width / 10,
              width: width / 10,
              backgroundColor: COLORS.primary,
              borderRadius: 4,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Icon name="medical-bag" size={30} color="white" />
          </View>
          <View style={{ marginLeft: 15 }}>
            <Text
              style={{
                color: COLORS.paragraph,
                fontSize: 13,
                fontWeight: "800",
              }}
            >
              Last Drugs
            </Text>
            <Text style={{ fontWeight: "bold" }}>{status.lastdrugs}</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View
        style={{
          backgroundColor: COLORS.white,
          borderTopEndRadius: width / 10,
          borderTopLeftRadius: width / 10,
          //   backgroundColor: COLORS.white,
          //   justifyContent: "center",
          //   alignItems: "center",
          //   marginVertical: height / 78,
          //   borderRadius: width / 14,
        }}
      >
        <Text
          style={{
            fontWeight: "bold",
            marginTop: width / 15,
            alignSelf: "center",
          }}
        >
          What are you Looking For?
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginHorizontal: width / 6,
            alignSelf: "center",
            marginVertical: height / 75,
          }}
        >
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("consultation", {
                screen: "Consultations",
                params: { name: "checkup" },
              })
            }
            style={{ justifyContent: "center", alignItems: "center" }}
          >
            <Image
              source={require("../../assets/medical_checkup.png")}
              style={{
                width: width / 8,
                height: width / 8,
              }}
            />
            <Text style={{ textAlign: "center", maxWidth: "80%" }}>
              General Checkup
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("consultation", {
                screen: "Consultations",
                params: { name: "chat" },
              })
            }
            style={{ justifyContent: "center", alignItems: "center" }}
          >
            <Image
              source={require("../../assets/chat_medical.png")}
              style={{ width: width / 8, height: width / 8 }}
            />
            <Text style={{ textAlign: "center", maxWidth: "80%" }}>
              Chat With Doctor
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("consultation", {
                screen: "Consultations",
                params: { name: "homecare" },
              })
            }
            style={{ justifyContent: "center", alignItems: "center" }}
          >
            <Image
              source={require("../../assets/homecare.png")}
              style={{ width: width / 8, height: width / 8 }}
            />
            <Text style={{ textAlign: "center", maxWidth: "80%" }}>
              Home Care
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* <Text
          style={{
            fontWeight: "500",
            fontSize: 16,
            marginVertical: 5,
            marginLeft: 7,
          }}
        >
          Appointment and Schedule
        </Text> */}
      <View style={{ flex: 1 }}>
        <TabView
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={{ width: width }}
          renderTabBar={(props) => (
            <TabBar
              {...props}
              indicatorStyle={{ backgroundColor: "white" }}
              indicatorContainerStyle={{ height: 4 }}
              style={{ backgroundColor: COLORS.white }}
              renderLabel={({ route, focused, color }) => (
                <View
                  style={{
                    borderRadius: focused ? width / 10 : null,
                    backgroundColor: focused ? COLORS.primary : null,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      color: focused ? COLORS.white : null,
                      textAlign: "center",
                      padding: 9,
                      fontWeight: "bold",
                    }}
                  >
                    {route.title}
                  </Text>
                </View>
              )}
            />
          )}
        />
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

    borderRadius: 15,

    marginTop: width / 80,

    padding: 5,
  },
  modalheader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 4,
    alignItems: "center",
  },
});

export default UserLanding;
