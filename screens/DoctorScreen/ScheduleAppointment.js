import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
  FlatList,
  Alert,
  Modal,
} from "react-native";
import { React, useState } from "react";
import Header from "../../components/Header";
import Entypo from "react-native-vector-icons/Entypo";
import { COLORS, width, height } from "../../components/Colors";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Fontisto from "react-native-vector-icons/Fontisto";
import Button from "../../components/Button";
import Input from "../../components/Input";
import CalendarScreen from "./Calendar";
import AntiDesign from "react-native-vector-icons/AntDesign";

import { Avatar } from "react-native-elements";
import Ionicons from "react-native-vector-icons/Ionicons";
import { TabView, TabBar } from "react-native-tab-view";
const ScheduleAppointment = ({ navigation }) => {
  const date = new Date().getDate();
  const hour = new Date().getHours();
  const time = new Date().getMonth();
  const [showModal, setShowModal] = useState(true);
  const [name, setName] = useState("Jessica");
  const [joinCall, setJoin] = useState(false);
  const [visibleDesc, setDescription] = useState();
  const [cancelappoint, setCanceled] = useState(false);
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "first", title: "Appointments & Schedule" },
    { key: "second", title: "My Calendar" },
  ]);
  const status = {
    pressue: 150,
    lastilliness: "headache",
    lastdrugs: "paracetamol",
  };
  const Appointment = [
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
  const CancelAppointment = () => {
    setCanceled(true);
  };
  const CancelPrompt = () => {
    return (
      <Modal
        visible={cancelappoint}
        animationType="fade"
        style={{
          alignSelf: "center",
          flex: 1,

          marginTop: height / 2.4,
        }}
        collapsable={true}
      >
        <View
          style={{
            flex: 1,
            zIndex: 3,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: COLORS.green,
          }}
        >
          <TextInput
            placeholder="Why did you cancel appointment?"
            multiline
            numberOfLines={5}
            style={{
              height: height / 14,
              maxHeight: height / 10,
              borderColor: COLORS.warning,
              borderWidth: 1,
              padding: 5,
              borderRadius: width / 25,
              marginBottom: 10,
              width: "95%",
            }}
          />
          <TouchableOpacity
            onPress={() => setCanceled(false)}
            style={{
              backgroundColor: COLORS.doctor,
              alignItems: "center",
              justifyContent: "center",
              alignSelf: "center",
              height: height / 23,
              width: "95%",
              borderRadius: width / 30,
            }}
          >
            <Text style={{ fontWeight: "bold" }}>Submit</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    );
  };
  const AppointmentView = () => (
    <View style={{}}>
      <FlatList
        showsVerticalScrollIndicator={false}
        // style={{ height: height / 4 }}
        data={Appointment}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            onPress={() =>
              visibleDesc === index
                ? setDescription(null)
                : setDescription(index)
            }
            style={{
              // marginBottom: 5,
              shadowColor: COLORS.white,
              shadowOpacity: 1,
              shadowRadius: 4,
              zIndex: 7,

              // alignItems: "center",
              backgroundColor: COLORS.backgrounds,
              marginVertical: height / 90,
              borderRadius: width / 20,
              padding: width / 60,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                // marginBottom: 5,
                shadowColor: COLORS.white,
                shadowOpacity: 1,
                shadowRadius: 4,
                zIndex: 7,
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Avatar
                  source={item.Image}
                  size="medium"
                  rounded
                  containerStyle={{ borderWidth: 1 }}
                />
                <View style={{ marginLeft: 15 }}>
                  <Text style={{ fontWeight: "bold", fontSize: 17 }}>
                    {item.patient}
                  </Text>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <AntiDesign
                      name="calendar"
                      size={20}
                      style={{ marginRight: width / 30 }}
                    />
                    <Text style={{ fontWeight: "600" }}>{item.date}</Text>
                  </View>
                </View>
              </View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Ionicons name="time-sharp" size={20} />
                <Text>{item.time}</Text>
              </View>
              <TouchableOpacity>
                {visibleDesc === index ? (
                  <AntiDesign name="up" size={20} />
                ) : (
                  <AntiDesign name="down" size={20} />
                )}

                {/* */}
              </TouchableOpacity>
            </View>
            {visibleDesc === index && (
              <View style={{}}>
                <Text style={{ paddingHorizontal: width / 10 }}>
                  {item.description}
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    alignSelf: "center",
                    marginTop: 10,
                  }}
                >
                  <TouchableOpacity
                    style={[
                      styles.button,
                      {
                        borderColor: COLORS.white,
                        marginRight: 10,
                        backgroundColor: COLORS.doctor,
                      },
                    ]}
                  >
                    <Text>ACCEPT</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => setCanceled(true)}
                    style={[styles.button, { borderColor: "red" }]}
                  >
                    <Text>CANCEL</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          </TouchableOpacity>
        )}
      />
      {/* <CalendarScreen /> */}
      {/* <Button
            onPress={() => navigation.navigate("history")}
            text="Schedule an appoint"
            style={{
              height: height / 17,
              backgroundColor: COLORS.doctor,
              width: width - 30,
              // marginTop: height / 14,
            }}
          /> */}
    </View>
  );

  const CalendarView = () => (
    <ScrollView>
      <CalendarScreen />
    </ScrollView>
  );
  const renderScene = ({ route }) => {
    switch (route?.key) {
      case "first":
        return AppointmentView();
      case "second":
        return CalendarView();

      default:
        return null;
    }
  };
  return (
    <View style={styles.container}>
      <CancelPrompt />
      {/* <Header style={{ backgroundColor: COLORS.doctor }} /> */}
      <View>
        <View
          style={{
            marginTop: height / 70,
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: width / 20,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Avatar
              size="large"
              source={require("../../assets/cuate.png")}
              rounded
            />
            <View style={{ marginLeft: width / 10 }}>
              <Text style={{ color: COLORS.backgrounds, fontSize: 15 }}>
                Welcome Back
              </Text>
              <Text style={{ fontWeight: "bold", fontSize: 23 }}>{name}</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: height / 40,
            paddingHorizontal: width / 20,
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>
            Upcoming Consultations
          </Text>
          <AntiDesign name="arrowright" size={30} />
        </View>
        <FlatList
          style={{ marginTop: height / 23, paddingHorizontal: width / 20 }}
          showsHorizontalScrollIndicator={false}
          horizontal
          data={consultations}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                style={{
                  justifyContent: "center",
                  // alignItems: "center",
                  width: width / 2.3,
                  backgroundColor: joinCall ? COLORS.doctor : COLORS.primary,
                  marginRight: width / 20,
                  borderRadius: width / 22,
                  paddingHorizontal: "6%",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",

                    width: "100%",
                    marginTop: 20,
                  }}
                >
                  <Avatar
                    source={item.Image}
                    rounded
                    size="medium"
                    containerStyle={{
                      borderWidth: 2,
                      borderColor: "black",
                    }}
                  />
                  <View>
                    <Text
                      style={[
                        styles.text,
                        { textTransform: "uppercase", fontSize: 16 },
                      ]}
                    >
                      {item.time}
                    </Text>
                    <Text
                      style={[
                        styles.text,
                        {
                          textTransform: "uppercase",
                          fontSize: 13,
                          textAlign: "right",
                        },
                      ]}
                    >
                      {item.date}
                    </Text>
                  </View>
                </View>
                <View style={{ marginTop: 15 }}>
                  <Text
                    style={[
                      styles.text,
                      { textTransform: "capitalize", fontSize: 19 },
                    ]}
                  >
                    {item.fname}
                  </Text>
                  <Text
                    style={[
                      styles.text,
                      { textTransform: "capitalize", fontSize: 19 },
                    ]}
                  >
                    {item.sname}
                  </Text>
                </View>
                <TouchableOpacity
                  style={{
                    width: "90%",
                    alignSelf: "center",
                    backgroundColor: joinCall ? COLORS.primary : COLORS.white,
                    height: height / 30,
                    borderRadius: width / 15,
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: 10,
                    marginBottom: 20,
                  }}
                >
                  {joinCall === true ? (
                    <Text>Join Call </Text>
                  ) : (
                    <Text>Wait Call </Text>
                  )}
                </TouchableOpacity>
              </TouchableOpacity>
            );
          }}
        />
      </View>
      {/* end copy */}
      {/* <View style={{ marginTop: 20, flexDirection: "row" }}>
        <Button
          text="Appointment & Schedule"
          style={{
            backgroundColor: COLORS.doctor,
            height: height / 20,
            width: "60%",
          }}
          style1={{ fontSize: 15 }}
        />
        <Button
          onPress={() => navigation.navigate("mycalendar")}
          text="My Calendar"
          style={{
            backgroundColor: COLORS.backgrounds,
            height: height / 20,
            width: "30%",
          }}
          style1={{ fontSize: 15 }}
        />
      </View> */}

      {/* <View
        style={{
          width: "90%",
          margin: width / 12,
          backgroundColor: COLORS.doctor,
          padding: 8,
          borderRadius: 10,
        }}
      >
        <Text style={{ fontWeight: "bold", fontSize: 15 }}>
          New Appointment Request
        </Text>
        <FlatList
          pagingEnabled
          horizontal
          showsHorizontalScrollIndicator={false}
          data={newAppointment}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginRight: 10,
                  marginTop: 10,
                }}
              >
                <View
                  style={{
                    width: width / 7,
                    height: height / 16,
                    borderRadius: 4,
                    backgroundColor: COLORS.primary,
                    marginTop: 5,
                    marginRight: 10,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text>{item.date}</Text>
                  <Text style={{ fontWeight: "bold" }}>{item.month}</Text>
                </View>
                <View>
                  <Text>{item.title}</Text>
                  <Text style={{ fontWeight: "bold" }}>{item.patient}</Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View> */}

      <View
        style={{
          flex: 1,
          // backgroundColor: COLORS.white,
          marginHorizontal: 8,
          borderRadius: 7,
          marginTop: height / 70,
          height: "100%",
          // marginVertical: 4,
        }}
      >
        <TabView
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={{ width: width }}
          renderTabBar={(props) => (
            <TabBar
              {...props}
              indicatorStyle={{ backgroundColor: COLORS.doctor }}
              indicatorContainerStyle={{ height: 4 }}
              style={{
                backgroundColor: COLORS.doctor,
                borderRadius: width / 20,
              }}
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
    marginTop: height / 20,
  },
  modal: {
    marginHorizontal: 8,
    width: 343,
    backgroundColor: "#FFF6C5",
    borderRadius: 15,
    height: 98,
    marginTop: 13,

    padding: 5,
  },
  modalheader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 4,
    alignItems: "center",
  },
  button: {
    borderWidth: 2,
    borderRadius: 6,
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
    width: "45%",

    padding: height / 60,
  },
});

export default ScheduleAppointment;
