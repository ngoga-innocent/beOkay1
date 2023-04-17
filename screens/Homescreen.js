import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Image,
  FlatList,
} from "react-native";
import React, { Component } from "react";
import sponsors from "../sponsors";
import { COLORS } from "../components/Colors";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default class Homescreen extends Component {
  constructor(props) {
    super(props);
    setTimeout(() => {
      this.handleToken();
    }, 5000);
  }
  handleToken = async () => {
    const dataToken = await AsyncStorage.getItem("token");
    dataToken
      ? this.props.navigation.replace("Tabs")
      : this.props.navigation.replace("Onboadingscreen");
  };
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#93BD68" />

        <Image
          source={require("../assets/logo.png")}
          style={{
            width: "50%",
            height: "30%",
            alignSelf: "center",
            marginTop: "50%",
          }}
        />

        <Text style={{ color: COLORS.white, fontSize: 18, marginTop: "50%" }}>
          Sponsors
        </Text>

        <FlatList
          data={sponsors}
          renderItem={({ item }) => (
            <View
              style={{
                justifyContent: "flex-end",
                paddingVertical: 20,
                paddingHorizontal: 3,
              }}
            >
              <Image
                source={item.image}
                style={{
                  width: "90%",
                  height: "30%",
                  alignContent: "center",
                  alignItems: "center",
                }}
              />
              <Text
                style={{
                  color: COLORS.white,
                  maxWidth: 100,
                  alignContent: "center",
                  justifyContent: "center",
                }}
              >
                {item.title}
              </Text>
            </View>
          )}
          horizontal
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#93BD68",
  },
});
