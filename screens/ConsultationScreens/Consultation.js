import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import React, { useState } from "react";
import Header from "../../components/Header";
import Entypo from "react-native-vector-icons/Entypo";
import { COLORS, width } from "../../components/Colors";
import { ColorSpace } from "react-native-reanimated";
import { head, body, leg, hand } from "../../components/bodypart";

const Consultation = ({ navigation }) => {
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
    navigation.navigate("Description", { part: item });
  };

  const [bodyPart, setBodyPart] = useState();
  return (
    <View style={{ flex: 1 }}>
      <Header />
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
            <Entypo name="circle-with-cross" color={COLORS.primary} size={24} />
          </TouchableOpacity>
        </View>

        <Text style={{ fontSize: 14, color: "#809502", marginHorizontal: 4 }}>
          how are you doing?if there is any help you need please let Be-Okay
          know
        </Text>
      </View>
      <View style={{ marginHorizontal: 8, marginVertical: 8, height: 98 }}>
        <Text style={{ fontWeight: "bold" }}>Address your Consultation</Text>
        <FlatList
          data={department}
          renderItem={({ item }) => (
            <TouchableOpacity
              activeOpacity={0.6}
              underlayColor="blue"
              onPress={() => navigation.navigate("Description", { part: item })}
            >
              <View style={styles.text}>
                <Text>{item}</Text>
              </View>
            </TouchableOpacity>
          )}
          horizontal
        />
        <TouchableOpacity
          style={{
            justifyContent: "flex-end",
            alignItems: "flex-end",
            marginRight: 4,
          }}
        >
          <Text>View All</Text>
        </TouchableOpacity>
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
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Image
            source={require("../../assets/AI.png")}
            // style={{ alignSelf: "center" }}
            // resizeMode="contain"
          />
          <FlatList
            data={bodyPart}
            style={{
              marginLeft: "20%",
            }}
            renderItem={({ item }) => (
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
            )}
          />
        </View>
        <TouchableOpacity
          onPress={() => setBodyPart(head)}
          style={styles.head}
        ></TouchableOpacity>
        <TouchableOpacity
          onPress={() => setBodyPart(body)}
          style={styles.body}
        ></TouchableOpacity>
        <TouchableOpacity
          onPress={() => setBodyPart(hand)}
          style={styles.hand1}
        ></TouchableOpacity>
        <TouchableOpacity
          onPress={() => setBodyPart(hand)}
          style={styles.hand2}
        ></TouchableOpacity>
        <TouchableOpacity
          style={styles.leg}
          onPress={() => setBodyPart(leg)}
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
    width: "8%",
    height: "15%",
    borderRadius: 20,
    // backgroundColor: COLORS.primary,

    position: "absolute",
    marginTop: "4%",
    marginLeft: "9%",
  },
  body: {
    height: "12%",
    width: "11%",
    // backgroundColor: COLORS.doctor,
    position: "absolute",
    marginTop: "21%",
    marginLeft: "8%",
    borderRadius: 10,
  },
  leg: {
    height: "22%",
    width: "10%",
    marginLeft: "8%",
    position: "absolute",
    marginTop: "48%",
    // backgroundColor: COLORS.consultationbg,
  },
  hand1: {
    height: "6%",
    width: "6%",
    // backgroundColor: "red",
    marginTop: "25%",
    position: "absolute",
    marginLeft: "1%",
  },
  hand2: {
    height: "6%",
    width: width / 18,
    // backgroundColor: "red",
    marginTop: "25%",
    position: "absolute",
    left: "25%",
  },
});

export default Consultation;
