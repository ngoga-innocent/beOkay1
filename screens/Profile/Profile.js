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
import Spinner from "react-native-loading-spinner-overlay";
import Url from "../../Url";
const Profile = ({ navigation }) => {
  const width = Dimensions.get("screen").width;
  useLayoutEffect(() => {
    getProfile();
  }, []);
  const [name, setName] = useState("");
  const [phone_number, setPhone] = useState("");
  const [gender,setGender]=useState("")
  const [birth,setBirth]=useState("")
  const [marital_status,setMaritalStatus]=useState("")
  const [location,setLocation]=useState("")
  const [contact,setContact]=useState("")
  const [bloodGroup,setBloodGroup]=useState("")
  const [disease,setDisease]=useState("")
  const [pregnant,setPregnant]=useState("")
  const [allergies,setAllergies]=useState([])
  const [Chronical,setChronical]=useState([])
  const [habits,setHabits]=useState([])
  const [profile,setProfile]=useState(null)
  const [dependent,setDependent]=useState([])
  const [isLoading,setIsLoading]=useState(false)
  const []=useState("")
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
  
  const getProfile = async () => {
    setIsLoading(true)
    const token = await AsyncStorage.getItem("token");
    if(token !==null){
      var myHeaders = new Headers();
    myHeaders.append("Authorization", "JWT " + `${token}`);

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    await fetch(`${Url}/patients/profile/`, requestOptions)
      .then((response) => {if (response.status == 401) {
        return navigation.navigate("Auth", { screen: "Login" });
        
      } else {
        return response.json();
      }})
      .then((result) => {
        console.log(result)
        setName(result.personal_information.full_name);
        // setPhone(result.phone_number);
        setGender(result.personal_information.gender)
        setBirth(result.personal_information.date_of_birth)
        setMaritalStatus(result.personal_information.marital_status)
        setLocation(result.personal_information.address)
        setPhone(result.personal_information.phone_number)
        setBloodGroup(result.blood_group)
        setDisease(result.chronic_diseases)
        setPregnant(result.is_pregnant)
        setAllergies(result.alergies)
        setChronical(result.chronic_diseases)
        setHabits(result.habits)
        setProfile(result.personal_information.profile_image)
        setDependent(result.dependents_profile)
        setIsLoading(false)
      })
      .catch((error) => console.log("patient profile error", error));
    }
    else{
      setIsLoading(false)
      return navigation.navigate("Auth", { screen: "Login" });
    }
    
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

        <Text style={styles.txt}>{name}</Text>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <MaterialIcons name="gender-male-female" size={20} />
        <Text style={{ fontSize: 16, marginLeft: width / 20 }}>Gender:</Text>
        <Text style={styles.txt}>{gender}</Text>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Fontisto name="date" size={20} />
        <Text style={{ fontSize: 16, marginLeft: width / 20 }}>
          Date of Birth:
        </Text>
        <Text style={styles.txt}>{birth || 'unspecified'}</Text>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <MaterialIcons name="ring" size={20} />
        <Text style={{ fontSize: 16, marginLeft: width / 20 }}>
          Marital Status:
        </Text>
        <Text style={styles.txt}>{marital_status}</Text>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Ionicons name="location-sharp" size={20} />
        <Text style={{ fontSize: 16, marginLeft: width / 20 }}>Location:</Text>
        <Text style={styles.txt}>{location || 'unspecified'}</Text>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <AntDesign name="phone" size={20} />
        <Text style={{ fontSize: 16, marginLeft: width / 20 }}>Contact:</Text>
        <Text style={styles.txt}>{phone_number || 'unspecified'}</Text>
      </View>
      
      {dependent.length!==0?dependent.map((item, index) => {
        return (
          <View
            key={index}
            style={{
              backgroundColor: COLORS.backgrounds,
              marginBottom: width / 40,
              borderRadius: width / 20,
              paddingVertical: width / 40,
              paddingHorizontal: width / 50,
              marginVertical:height/40
            }}
          >
          <View
        style={{
          borderWidth: 1,
          borderColor: COLORS.primary,
          borderRadius: width / 50,
          paddingVertical: height / 100,
          paddingHorizontal: width / 60,
          marginTop: -height / 30,
          alignSelf: "center",
          backgroundColor: COLORS.white,
          zIndex: 1,
        }}
      >
        <Text
          style={{
            fontWeight: "bold",
            fontSize: height / 45,
          }}
        >
         {item.dependent_relationship}
        </Text>
      </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Entypo name="user" size={20} />
              <Text style={{ fontSize: 16, marginLeft: width / 20 }}>
                {item.dependent_names}
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
      }):<Text style={{marginVertical:height/20,alignSelf:'center',fontWeight:'bold',fontSize:height/30}}>No dependent</Text>}
    </ScrollView>
  );

  const Mycalendar = () => (
    <ScrollView style={{ paddingHorizontal: width / 40 }}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Fontisto name="blood" size={20} color="red" />
        <Text style={{ fontSize: 16, marginLeft: width / 20 }}>
          Blood Group/Type:
        </Text>
        <Text style={styles.txt}>{bloodGroup}</Text>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Fontawasome name="disease" size={20} />
        <Text style={{ fontSize: 16, marginLeft: width / 20 }}>
          Current Disease
        </Text>
        <Text style={styles.txt}>{disease || 'no disease'}</Text>
      </View>
      {gender !=='male' && <View style={{ flexDirection: "row", alignItems: "center" }}>
        <MaterialIcons name="human-pregnant" size={20} />
        <Text style={{ fontSize: 16, marginLeft: width / 20 }}>Pregnant</Text>
        <Text style={styles.txt}>{pregnant}</Text>
      </View>}
      <View
        style={{
          borderWidth: 1,
          borderColor: COLORS.primary,
          borderRadius: width / 50,
          paddingVertical: height / 100,
          paddingHorizontal: width / 60,
          marginBottom: -height / 50,
          alignSelf: "center",
          backgroundColor: COLORS.white,
          zIndex: 1,
          alignItems: "center",
          justifyContent: "center",
          width: width / 2,
        }}
      >
        <Text
          style={{
            fontWeight: "bold",
            fontSize: height / 60,
            paddingVertical: width / 150,
          }}
        >
          Allergies
        </Text>
      </View>

      <View
        style={{
          backgroundColor: COLORS.backgrounds,
          marginBottom: width / 40,
          borderRadius: width / 20,
          paddingVertical: width / 40,
          paddingHorizontal: width / 50,
        }}
      >
      <Text>{allergies || 'No Allergies'}</Text>
        {/* {patient.Allergies.map((item, index) => {
          return (
            <View key={index} style={{ marginBottom: 10 }}>
              <Text>{item.name}</Text>
            </View>
          );
        })} */}
      </View>
      <View
        style={{
          borderWidth: 1,
          borderColor: COLORS.primary,
          borderRadius: width / 50,
          paddingVertical: height / 100,
          paddingHorizontal: width / 60,
          marginBottom: -height / 50,
          alignSelf: "center",
          backgroundColor: COLORS.white,
          zIndex: 1,
          alignItems: "center",
          justifyContent: "center",
          width: width / 2,
        }}
      >
        <Text
          style={{
            fontWeight: "bold",
            fontSize: height / 60,
            paddingVertical: width / 150,
          }}
        >
          Chronical Diseases
        </Text>
      </View>
      <View
        style={{
          backgroundColor: COLORS.backgrounds,
          marginBottom: width / 40,
          borderRadius: width / 20,
          paddingVertical: width / 40,
          paddingHorizontal: width / 50,
        }}
      >
      <Text>{Chronical || 'no chronic Disease'}</Text>
        {/* {patient.illness.map((item, index) => {
          return (
            <View key={index} style={{ marginBottom: 10 }}>
              <Text>{item.name}</Text>
            </View>
          );
        })} */}
      </View>
      <View
        style={{
          borderWidth: 1,
          borderColor: COLORS.primary,
          borderRadius: width / 50,
          paddingVertical: height / 100,
          paddingHorizontal: width / 60,
          marginBottom: -height / 50,
          alignSelf: "center",
          backgroundColor: COLORS.white,
          zIndex: 1,
          alignItems: "center",
          justifyContent: "center",
          width: width / 2,
        }}
      >
        <Text
          style={{
            fontWeight: "bold",
            fontSize: height / 60,
            paddingVertical: width / 150,
          }}
        >
          Habits
        </Text>
      </View>
      <View
        style={{
          backgroundColor: COLORS.backgrounds,
          marginBottom: width / 40,
          borderRadius: width / 20,
          paddingVertical: width / 40,
          paddingHorizontal: width / 50,
        }}
      >
        {/* {patient.habit.map((item, index) => {
          return (
            <View key={index} style={{ marginBottom: 10 }}>
              <Text>{item}</Text>
            </View>
          );
        })} */}
        <Text>{habits || 'no habits'}</Text>
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
              source={{uri:profile}}
              size="medium"
            />
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Home", {
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
                height: width / 10,
                width: width / 10,
                backgroundColor: COLORS.text,
                borderRadius: 40,
                alignItems: "center",
                justifyContent: "center",
                opacity: 2,
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
      </SafeAreaView>
    );
  };

  return (
    <View style={{ flex: 1 }}>
    <Spinner visible={isLoading} color={COLORS.primary} />
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
