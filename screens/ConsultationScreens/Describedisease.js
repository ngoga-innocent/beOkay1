import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import { React, useState } from "react";
import { COLORS } from "../../components/Colors";
import Header from "../../components/Header";
import Icon from "react-native-vector-icons/Ionicons";
import Button from "../../components/Button";

const Describedisease = ({ navigation, route }) => {
  const [clicked, setClicked] = useState();
  const BodyPart = [
    {
      name: "eye",
      image: require("../../assets/eye.png"),
    },
    {
      name: "Teeth",
      image: require("../../assets/vaadin_teeth.png"),
    },
    {
      name: "Tongue",
      image: require("../../assets/tongue.png"),
    },
    {
      name: "Ears",
      image: require("../../assets/ear.png"),
    },
    {
      name: "Mental related",
      image: require("../../assets/head.png"),
    },
  ];
  const Department = [
    {
      key: 1,
      title: "Mental health",
    },
    {
      key: 2,
      title: "Fertility",
    },
    {
      key: 3,
      title: "STI’s sexually transmitted infection",
    },
    {
      key: 4,
      title: "Pediatric Medicine",
    },
    {
      key: 5,
      title: "Gynecology",
    },
    {
      key: 6,
      title: "Internal medicine",
    },
    {
      key: 7,
      title: "Chronic diseases",
    },
  ];
  const selectedfn = (item) => {
    setClicked(item.key);
    navigation.navigate("Description", { part: item.title });
  };
  return (
    <View>
      <Header />
      <View style={{ marginHorizontal: 8, marginVertical: 8, height: 98 }}>
        <Text>Adress your Consultation</Text>
        <FlatList
          data={Department}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              style={styles.list}
              onPress={() => selectedfn(item)}
            >
              {clicked == item.key ? (
                <View style={styles.text}>
                  <Text style={styles.text1}>{item.title}</Text>
                </View>
              ) : (
                <View style={styles.text}>
                  <Text>{item.title}</Text>
                </View>
              )}
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
      <View
        style={{
          flexDirection: "row",
          marginHorizontal: 10,
          justifyContent: "space-between",
          alignItems: "stretch",
        }}
      >
        <Image
          source={require("../../assets/AI.png")}
          style={{ marginRight: 60 }}
        />
        <FlatList
          data={BodyPart}
          renderItem={({ item }) => (
            <TouchableOpacity
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
                  backgroundColor: COLORS.green,
                  justifyContent: "center",
                  alignItems: "center",
                  marginRight: 15,
                }}
              >
                <Image source={item.image} />
              </View>
              <Text style={{ fontSize: 14 }}>{item.name}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
      <Button
        text="Describe Illiness"
        style={{
          backgroundColor: COLORS.primary,
          marginTop: 25,
          padding: 5,
          height: 40,
          alignSelf: "center",
        }}
        style1={{ color: COLORS.white }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  list: {
    marginTop: 7,
    borderRadius: 20,
  },
  text: {
    backgroundColor: COLORS.white,
    marginLeft: 10,
    padding: 10,
    borderRadius: 20,
  },
  text1: {
    backgroundColor: COLORS.primary,
    marginLeft: 10,
    padding: 10,
    borderRadius: 10,
  },
});

export default Describedisease;
