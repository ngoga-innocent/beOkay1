import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import Entypo from "react-native-vector-icons/Entypo";
import { COLORS, height, width } from "../../components/Colors";
import { ColorSpace } from "react-native-reanimated";
import { head, body, leg, hand } from "../../components/bodypart";
import Viewall from "../OtherScreen/Viewall";
import Report from "./Report";

const Consultation = ({ navigation, route }) => {
  const { name } = route.params;
  const department = [
    "Mental health",
    "Fertility",
    "STI’s sexually transmitted infection",
    "Pediatric Medicine",
    "Gynecology",
    "Internal medicine",
    "Chronic diseases",
  ];

  const selectedfn = (item) => {
    setBody(!body);
    navigation.navigate("Description", { part: item, name: name });
  };
  // useEffect(() => {
  //   setBodyPart();
  // });
  const [part, setBodyPart] = useState();
  const [bodystate, setBody] = useState(false);
  const [clicked, setClicked] = useState("");
  const [showViewAll, setShowViewAll] = useState(false);
  const [showModal, setShowModal] = useState(true);
  // const [part, setPart] = useState(body);
  return (
    <View style={{ flex: 1 }}>
      <Header />
      {showModal && (
        <View style={styles.modal}>
          <View style={styles.modalheader}>
            <Text
              style={{
                color: "#809502",
                fontSize: 18,
                fontWeight: "bold",
              }}
            >
              Consult with Be Okay
            </Text>
            <TouchableOpacity onPress={() => setShowModal(false)}>
              <Entypo
                name="circle-with-cross"
                color={COLORS.primary}
                size={24}
              />
            </TouchableOpacity>
          </View>

          <Text style={{ fontSize: 14, color: "#809502", marginHorizontal: 4 }}>
            how are you doing?if there is any help you need please let Be-Okay
            know
          </Text>
        </View>
      )}
      <View
        style={{
          marginHorizontal: 8,
          marginVertical: 8,
          height: 98,
          zIndex: 5,
        }}
      >
        <Text style={{ fontWeight: "bold" }}>Address your Consultation</Text>
        <FlatList
          data={department}
          renderItem={({ item }) => (
            <TouchableOpacity
              activeOpacity={0.6}
              underlayColor="blue"
              onPress={() =>
                navigation.navigate("Description", { part: item, name: name })
              }
            >
              <View style={styles.text}>
                <Text>{item}</Text>
              </View>
            </TouchableOpacity>
          )}
          horizontal
        />
        <TouchableOpacity
          onPress={() => setShowViewAll(!showViewAll)}
          style={{
            justifyContent: "flex-end",
            alignItems: "flex-end",
            marginRight: 4,
          }}
        >
          <Text>View All</Text>
        </TouchableOpacity>
        <View style={{ zIndex: 8 }}>
          {showViewAll === true && <Viewall name={name} />}
        </View>
      </View>
      <View style={{ backgroundColor: "white" }}>
        <Text
          style={{
            marginLeft: 16,
            marginBottom: 8,
            fontWeight: "bold",
            marginTop: 7,
          }}
        >
          Please locate your Illiness
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            height: height / 1.2,
          }}
        >
          <View style={{ marginLeft: bodystate == false ? width / 2.5 : null }}>
            <Image
              source={require("../../assets/AI.png")}
              // style={{ alignSelf: "center" }}
              // resizeMode="contain"
            />
          </View>

          {bodystate == true && (
            <View style={{ flex: 1, height: height / 2.7 }}>
              <FlatList
                data={part}
                style={{
                  marginLeft: "20%",
                }}
                contentContainerStyle={{ flexGrow: 1 }}
                renderItem={({ item }) => {
                  return (
                    <TouchableOpacity
                      onPress={() => selectedfn(item.name)}
                      style={{
                        flexDirection: "row",
                        marginBottom: 5,
                        alignItems: "center",
                        height: 60,
                      }}
                    >
                      <View
                        style={{
                          height: 38,
                          width: 38,
                          borderRadius: 38,
                          backgroundColor: COLORS.black,
                          justifyContent: "center",
                          alignItems: "center",
                          marginRight: 15,
                        }}
                      >
                        <Image
                          source={item.image}
                          resizeMode="contain"
                          style={{
                            width: 38,
                            height: 38,
                            borderRadius: 38,
                            borderWidth: 1,
                            borderColor: COLORS.black,
                          }}
                        />
                      </View>
                      <Text style={{ fontSize: 14 }}>{item.name}</Text>
                    </TouchableOpacity>
                  );
                }}
              />
            </View>
          )}
        </View>
        <TouchableOpacity
          onPress={() => {
            clicked !== "head"
              ? (setClicked("head"), setBody(true), setBodyPart(head))
              : (setBody(!body), setClicked(""), setBodyPart(""));
          }}
          style={[
            styles.head,
            { marginLeft: bodystate == true ? "9%" : width / 2 },
          ]}
        ></TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            if (clicked !== "body") {
              setClicked("body");
              setBody(true);
              setBodyPart(body);
            } else {
              setBody(!body);
              setClicked("");
              setBodyPart([]);
            }
          }}
          style={[
            styles.bodysty,
            { marginLeft: bodystate == true ? "8%" : width / 2 },
          ]}
        ></TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            console.log(hand);
            clicked !== "hand1"
              ? (setClicked("hand1"), setBody(true), setBodyPart(hand))
              : (setBody(!bodystate), setClicked(""), setBodyPart(""));
          }}
          style={[
            styles.hand1,
            { marginLeft: bodystate == true ? "1%" : width / 2.4 },
          ]}
        ></TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            clicked !== "hand2"
              ? (setClicked("hand2"), setBody(true), setBodyPart(hand))
              : (setBody(!bodystate), setClicked(""), setBodyPart(""));
          }}
          style={[
            styles.hand2,
            { left: bodystate == true ? "25%" : width / 1.6 },
          ]}
        ></TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.leg,
            { marginLeft: bodystate == true ? "8%" : width / 2 },
          ]}
          onPress={() => {
            clicked !== "leg"
              ? (setClicked("leg"), setBody(true), setBodyPart(leg))
              : (setBody(!bodystate), setClicked(""), setBodyPart(""));
          }}
        ></TouchableOpacity>
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
  list: {
    marginTop: 7,
    borderRadius: 20,
  },
  text: {
    marginTop: 7,
    backgroundColor: COLORS.white,
    marginLeft: 10,
    padding: 10,
    borderRadius: 20,
  },
  head: {
    width: width / 9,
    height: "15%",
    borderRadius: 20,
    // backgroundColor: COLORS.primary,

    position: "absolute",
    marginTop: height / 27,
  },
  bodysty: {
    height: height / 10,
    width: width / 8,
    // backgroundColor: COLORS.doctor,
    position: "absolute",
    marginTop: "21%",

    borderRadius: 10,
  },
  leg: {
    height: height / 10,
    width: width / 8,

    position: "absolute",
    marginTop: "48%",
    // backgroundColor: COLORS.consultationbg,
  },
  hand1: {
    height: height / 12,
    width: width / 12,
    // backgroundColor: "red",
    marginTop: "25%",
    position: "absolute",
  },
  hand2: {
    height: height / 27,
    width: width / 13,
    // backgroundColor: "red",
    marginTop: "25%",
    position: "absolute",
  },
});

export default Consultation;
