import React, { useState, useLayoutEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { COLORS, height, width } from "../../components/Colors";
import { Avatar } from "react-native-elements";
import AntiDesign from "react-native-vector-icons/AntDesign";
import { Svg, Circle } from "react-native-svg";
import Foundation from "react-native-vector-icons/Foundation";
import CircularProgressBar from "../../components/CircularProgressBar";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { TabBar, TabView } from "react-native-tab-view";
import CalendarScreen from "../DoctorScreen/Calendar";
import Entypo from "react-native-vector-icons/Entypo";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Fontisto from "react-native-vector-icons/Fontisto";
import AntDesign from "react-native-vector-icons/AntDesign";
import Fontawasome from "react-native-vector-icons/FontAwesome5";
const Profile = ({ navigation }) => {
  const width = Dimensions.get("screen").width;
  useLayoutEffect(() => {
    getProfile();
  }, []);
  const [name, setName] = useState("");
  const [phone_number, setPhone] = useState("");
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "first", title: "Personal Info" },
    { key: "second", title: "Health Info" },
  ]);
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
  const patient = {
    name: "Issa Gasigwa",
    Gender: "Male",
    birth: "12/07/1997",
    status: "Single",
    location: "Kigali-Nyarugenge",
    contact: "0788258922",
    pregnant: "No",
    familyInfo: [
      {
        relationShip: "Spouse",
        gender: "Female",
        name: "Kellen",
        age: "25",
      },
      {
        relationShip: "Spouse",
        gender: "Female",
        name: "Kellen",
        age: "25",
      },
      {
        relationShip: "Spouse",
        gender: "Female",
        name: "Kellen",
        age: "25",
      },
    ],
    bloodGroup: "A",
    Allergies: [{ name: "Cold Air" }, { name: "Meat" }],
    illness: [
      {
        name: "heart",
      },
      {
        name: "pancreas",
      },
    ],
    disease: "Eye",
    medication: "Prastamol",
    habit: ["Alcohol", "Smoking", "injection", "sexually active"],
  };
  const getProfile = async () => {
    const token = await AsyncStorage.getItem("token");
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "JWT " + `${token}`);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(`${url}/users/edit-profile/`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setName(result.full_name);
        setPhone(result.phone_number);
      })
      .catch((error) => console.log("error", error));
  };
  const Logout = async () => {
    try {
      await AsyncStorage.clear();
      navigation.navigate("Auth");
    } catch (error) {
      console.log("logout error", error);
    }
  };

  const Appointments = () => (
    <ScrollView
      style={{ height: 200, paddingHorizontal: width / 40 }}
      // contentContainerStyle={{ flexGrow: 1 }}
      scrollEnabled
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Entypo name="user" size={20} />
        <Text style={{ fontSize: 16, marginLeft: width / 20 }}>Name:</Text>

        <Text style={styles.txt}>{patient.name}</Text>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <MaterialIcons name="gender-male-female" size={20} />
        <Text style={{ fontSize: 16, marginLeft: width / 20 }}>Gender:</Text>
        <Text style={styles.txt}>{patient.Gender}</Text>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Fontisto name="date" size={20} />
        <Text style={{ fontSize: 16, marginLeft: width / 20 }}>
          Date of Birth:
        </Text>
        <Text style={styles.txt}>{patient.birth}</Text>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <MaterialIcons name="ring" size={20} />
        <Text style={{ fontSize: 16, marginLeft: width / 20 }}>
          Marital Status:
        </Text>
        <Text style={styles.txt}>{patient.status}</Text>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Ionicons name="location-sharp" size={20} />
        <Text style={{ fontSize: 16, marginLeft: width / 20 }}>Location:</Text>
        <Text style={styles.txt}>{patient.location}</Text>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <AntDesign name="phone" size={20} />
        <Text style={{ fontSize: 16, marginLeft: width / 20 }}>Contact:</Text>
        <Text style={styles.txt}>{patient.contact}</Text>
      </View>
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 20,
          paddingVertical: width / 50,
        }}
      >
        Family & Dependents details
      </Text>
      {patient.familyInfo.map((item, index) => {
        return (
          <View
            key={index}
            style={{
              backgroundColor: COLORS.backgrounds,
              marginBottom: width / 40,
              borderRadius: width / 20,
              paddingVertical: width / 40,
              paddingHorizontal: width / 50,
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Entypo name="user" size={20} />
              <Text style={{ fontSize: 16, marginLeft: width / 20 }}>
                {item.relationShip}
              </Text>
              <Text style={styles.txt}> {item.name}</Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <MaterialIcons name="gender-male-female" size={20} />
              <Text style={{ fontSize: 16, marginLeft: width / 20 }}>
                Gender:
              </Text>
              <Text style={styles.txt}> {item.gender}</Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Fontisto name="date" size={20} />
              <Text style={{ fontSize: 16, marginLeft: width / 20 }}>Age:</Text>
              <Text style={styles.txt}> {item.age}</Text>
            </View>
            {/* <View style={{ flexDirection: "row", alignItems: "center" }}>
              <MaterialIcons name="family-tree" size={20} />
              <Text>RelationShip:</Text>
              <Text style={styles.txt}> {item.relationShip}</Text>
            </View> */}
          </View>
        );
      })}
    </ScrollView>
  );

  const Mycalendar = () => (
    <ScrollView style={{ paddingHorizontal: width / 40 }}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Fontisto name="blood" size={20} color="red" />
        <Text style={{ fontSize: 16, marginLeft: width / 20 }}>
          Blood Group/Type:
        </Text>
        <Text style={styles.txt}>{patient.bloodGroup}</Text>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Fontawasome name="disease" size={20} />
        <Text style={{ fontSize: 16, marginLeft: width / 20 }}>
          Current Disease
        </Text>
        <Text style={styles.txt}>{patient.disease}</Text>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <MaterialIcons name="human-pregnant" size={20} />
        <Text style={{ fontSize: 16, marginLeft: width / 20 }}>Pregnant</Text>
        <Text style={styles.txt}>{patient.pregnant}</Text>
      </View>
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 20,
          paddingVertical: width / 150,
        }}
      >
        Allergies
      </Text>
      <View
        style={{
          backgroundColor: COLORS.backgrounds,
          marginBottom: width / 40,
          borderRadius: width / 20,
          paddingVertical: width / 40,
          paddingHorizontal: width / 50,
        }}
      >
        {patient.Allergies.map((item, index) => {
          return (
            <View key={index} style={{ marginBottom: 10 }}>
              <Text>{item.name}</Text>
            </View>
          );
        })}
      </View>
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 20,
          paddingVertical: width / 150,
        }}
      >
        Chronical Disease
      </Text>
      <View
        style={{
          backgroundColor: COLORS.backgrounds,
          marginBottom: width / 40,
          borderRadius: width / 20,
          paddingVertical: width / 40,
          paddingHorizontal: width / 50,
        }}
      >
        {patient.illness.map((item, index) => {
          return (
            <View key={index} style={{ marginBottom: 10 }}>
              <Text>{item.name}</Text>
            </View>
          );
        })}
      </View>
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 20,
          paddingVertical: width / 150,
        }}
      >
        Habits
      </Text>
      <View
        style={{
          backgroundColor: COLORS.backgrounds,
          marginBottom: width / 40,
          borderRadius: width / 20,
          paddingVertical: width / 40,
          paddingHorizontal: width / 50,
        }}
      >
        {patient.habit.map((item, index) => {
          return (
            <View key={index} style={{ marginBottom: 10 }}>
              <Text>{item}</Text>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );

  const Head = () => {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor={COLORS.primary} />
        <View style={styles.header}>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              marginTop: height / 30,
            }}
          >
            <Avatar
              rounded
              source={require("../../assets/profile.jpeg")}
              size="medium"
            />
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("consultation", {
                  screen: "patient_profile",
                })
              }
            >
              <Text
                style={{
                  fontSize: 17,
                  fontWeight: "bold",
                  color: COLORS.white,
                  marginTop: 2,
                }}
              >
                Edit
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              // marginLeft: width / 3,
            }}
          >
            <Text
              style={{
                color: COLORS.white,
                fontSize: 17,
                fontWeight: "bold",
                alignSelf: "center",
                textAlign: "center",
              }}
            >
              {name}
            </Text>
          </View>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <TouchableOpacity
              onPress={() => Logout()}
              // onPress={() => navigation.openDrawer()}
              style={{
                height: 40,
                width: 40,
                backgroundColor: "white",
                borderRadius: 40,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <AntDesign
                name="logout"
                size={30}
                style={{ alignSelf: "center" }}
                color={COLORS.primary}
              />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <Head />
      <View style={{ flex: 1, height: "100%" }}>
        <TabView
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={{ width: width }}
          renderTabBar={(props) => (
            <TabBar
              {...props}
              indicatorStyle={{ backgroundColor: COLORS.white }}
              indicatorContainerStyle={{ height: 4 }}
              style={{
                backgroundColor: COLORS.white,
                // borderRadius: width / 5,
              }}
              renderLabel={({ route, focused, color }) => (
                <View
                  style={{
                    borderRadius: focused ? width / 10 : width / 10,
                    backgroundColor: focused
                      ? COLORS.primary
                      : COLORS.backgrounds,
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                  }}
                >
                  <Text
                    style={{
                      color: focused ? COLORS.white : null,
                      textAlign: "center",
                      paddingHorizontal: width / 12,
                      paddingVertical: width / 30,
                      fontWeight: "bold",
                      textTransform: "capitalize",
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
  //   <View>
  //     <Head />
  //     <View
  //       style={{
  //         backgroundColor: "#afbade",
  //         height: width / 3,
  //         borderBottomEndRadius: 20,
  //         borderBottomLeftRadius: 20,
  //         marginBottom: 30,
  //       }}
  //     >
  //       <View
  //         style={{
  //           flexDirection: "row",
  //           justifyContent: "space-evenly",
  //           alignItems: "center",
  //           paddingTop: "5%",
  //         }}
  //       >
  //         <View style={{}}>
  //           <Avatar
  //             size="large"
  //             rounded
  //             source={require("../../assets/Ellipse15.png")}
  //           />
  //         </View>
  //         <View>
  //           <Text
  //             style={{
  //               fontWeight: "bold",
  //             }}
  //           >
  //             Names
  //           </Text>
  //           <Text>{name}</Text>
  //         </View>
  //         <View>
  //           <Text style={{ fontWeight: "bold" }}>Phone Number</Text>
  //           <Text>{phone_number}</Text>
  //         </View>
  //       </View>
  //       <TouchableOpacity
  //         style={{
  //           flexDirection: "row",
  //           alignItems: "center",
  //           justifyContent: "flex-end",
  //           marginRight: "5%",
  //         }}
  //       >
  //         <Foundation name="pencil" size={25} style={{ marginRight: 3 }} />
  //         <Text>Edit</Text>
  //       </TouchableOpacity>
  //     </View>
  //     <ProfReusablecomp
  //       name="contacts"
  //       title="Patient Profile"
  //       progress={55}
  //       size={30}
  //       thickness={4}
  //       onPress={() => navigation.navigate("patient_profile")}
  //     />
  //     {/* reusable 2  */}
  //     <TouchableOpacity
  //       style={{
  //         flexDirection: "row",
  //         alignItems: "center",
  //         justifyContent: "space-between",
  //         height: width / 8,
  //         width: width - 60,
  //         alignSelf: "center",
  //         backgroundColor: "#bdbbbb",
  //         paddingHorizontal: 15,
  //         borderRadius: 20,
  //         marginBottom: 15,
  //       }}
  //     >
  //       <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
  //         <AntiDesign name="medicinebox" size={20} />
  //         <Text style={{ marginLeft: 12 }}>Medical record (5)</Text>
  //       </View>

  //       <View>
  //         <View
  //           style={{
  //             flexDirection: "row",

  //             backgroundColor: COLORS.green,
  //             padding: 5,
  //             borderRadius: 20,
  //           }}
  //         >
  //           <View
  //             style={{
  //               width: 20,
  //               height: 20,
  //               backgroundColor: COLORS.primary,
  //               borderRadius: 20,
  //               justifyContent: "center",
  //               alignItems: "center",
  //             }}
  //           >
  //             <Text>2</Text>
  //           </View>
  //           <Text style={{ fontSize: 11, alignSelf: "center" }}>
  //             New Update
  //           </Text>
  //         </View>
  //       </View>
  //     </TouchableOpacity>
  //     {/* end reusable */}
  //     <ProfReusablecomp
  //       name="team"
  //       title="Family Member (5)"
  //       progress={55}
  //       size={0}
  //       thickness={4}
  //     />
  //     <ProfReusablecomp
  //       name="setting"
  //       title="Settings"
  //       progress={55}
  //       size={0}
  //       thickness={4}
  //     />
  //     <ProfReusablecomp
  //       name="arrowsalt"
  //       title="Switch to doctor"
  //       progress={55}
  //       size={0}
  //       thickness={4}
  //       onPress={() => navigation.navigate("docTab")}
  //     />
  //   </View>
  // );
};

export default Profile;
const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#8BB85C",
    height: 130,
    elevation: 100,
    justifyContent: "center",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 50,
    paddingHorizontal: width / 20,
  },
  container1: {
    backgroundColor: "#f2f2f2",
    borderRadius: 5,
    overflow: "hidden",
  },
  progressBar: {
    height: "100%",
  },
  textContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
  },
  progressText: {
    fontSize: 6,
    fontWeight: "bold",
    textAlign: "center",
  },
  txt: {
    fontSize: 17,
    fontWeight: "600",
    marginHorizontal: width / 30,
    marginVertical: width / 60,
  },
});
