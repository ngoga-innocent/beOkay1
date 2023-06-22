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
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { COLORS } from "../../components/Colors";
import { Avatar } from "react-native-elements";
import AntiDesign from "react-native-vector-icons/AntDesign";
import { Svg, Circle } from "react-native-svg";
import Foundation from "react-native-vector-icons/Foundation";
import CircularProgressBar from "../../components/CircularProgressBar";
import AsyncStorage from "@react-native-async-storage/async-storage";
const Profile = ({ navigation }) => {
  const width = Dimensions.get("screen").width;
  useLayoutEffect(() => {
    getProfile();
  }, []);
  const [name, setName] = useState("");
  const [phone_number, setPhone] = useState("");

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
  const Head = () => {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor={COLORS.primary} />
        <View style={styles.header}>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginLeft: width / 3,
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
              Profile
            </Text>
          </View>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <TouchableOpacity
              // onPress={() => navigation.openDrawer()}
              style={{
                height: 50,
                width: 50,
                backgroundColor: "white",
                borderRadius: 50,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Icon
                name="notifications"
                size={40}
                style={{ alignSelf: "center" }}
                color={COLORS.primary}
              />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  };

  const ProfReusablecomp = ({
    name,
    title,

    progress,
    thickness,
    size,
    record,
    update,
    onPress,
  }) => {
    return (
      <TouchableOpacity
        onPress={onPress}
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          height: width / 8,
          width: width - 60,
          alignSelf: "center",
          backgroundColor: "#bdbbbb",
          paddingHorizontal: 15,
          borderRadius: 20,
          marginBottom: 15,
        }}
      >
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <AntiDesign name={name} size={20} />
          <Text style={{ marginLeft: 12 }}>{title}</Text>
        </View>

        <View>
          <CircularProgressBar
            progress={progress}
            barColor="green"
            thickness={thickness}
            size={size}
          />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <Head />
      <View
        style={{
          backgroundColor: "#afbade",
          height: width / 3,
          borderBottomEndRadius: 20,
          borderBottomLeftRadius: 20,
          marginBottom: 30,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
            paddingTop: "5%",
          }}
        >
          <View style={{}}>
            <Avatar
              size="large"
              rounded
              source={require("../../assets/Ellipse15.png")}
            />
          </View>
          <View>
            <Text
              style={{
                fontWeight: "bold",
              }}
            >
              Names
            </Text>
            <Text>{name}</Text>
          </View>
          <View>
            <Text style={{ fontWeight: "bold" }}>Phone Number</Text>
            <Text>{phone_number}</Text>
          </View>
        </View>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-end",
            marginRight: "5%",
          }}
        >
          <Foundation name="pencil" size={25} style={{ marginRight: 3 }} />
          <Text>Edit</Text>
        </TouchableOpacity>
      </View>
      <ProfReusablecomp
        name="contacts"
        title="Patient Profile"
        progress={55}
        size={30}
        thickness={4}
        onPress={() => navigation.navigate("patient_profile")}
      />
      {/* reusable 2  */}
      <TouchableOpacity
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          height: width / 8,
          width: width - 60,
          alignSelf: "center",
          backgroundColor: "#bdbbbb",
          paddingHorizontal: 15,
          borderRadius: 20,
          marginBottom: 15,
        }}
      >
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <AntiDesign name="medicinebox" size={20} />
          <Text style={{ marginLeft: 12 }}>Medical record (5)</Text>
        </View>

        <View>
          <View
            style={{
              flexDirection: "row",

              backgroundColor: COLORS.green,
              padding: 5,
              borderRadius: 20,
            }}
          >
            <View
              style={{
                width: 20,
                height: 20,
                backgroundColor: COLORS.primary,
                borderRadius: 20,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text>2</Text>
            </View>
            <Text style={{ fontSize: 11, alignSelf: "center" }}>
              New Update
            </Text>
          </View>
        </View>
      </TouchableOpacity>
      {/* end reusable */}
      <ProfReusablecomp
        name="team"
        title="Family Member (5)"
        progress={55}
        size={0}
        thickness={4}
      />
      <ProfReusablecomp
        name="setting"
        title="Settings"
        progress={55}
        size={0}
        thickness={4}
      />
      <ProfReusablecomp
        name="arrowsalt"
        title="Switch to doctor"
        progress={55}
        size={0}
        thickness={4}
        onPress={() => navigation.navigate("docTab")}
      />
    </View>
  );
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
});
