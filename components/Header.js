import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Platform,
} from "react-native";
import React from "react";
import { COLORS, height, width } from "./Colors";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import Signup from "../screens/loginScreens/Signup";
import Entypo from "react-native-vector-icons/Entypo";

const Header = ({ style }) => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={[styles.container, style]}>
      <StatusBar backgroundColor={COLORS.primary} />
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("consultation", { screen: "profile" })
          }
          style={{
            alignItems: "center",
            justifyContent: "center",
            borderWidth: 1,
            borderColor: COLORS.green,
            marginLeft: 4,
            height: 50,
            width: 50,
            borderRadius: 50,
          }}
        >
          <Image
            source={require("../assets/Ellipse15.png")}
            style={{ width: 50, height: 50, alignSelf: "center" }}
          />
        </TouchableOpacity>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* <Image
            source={require("../assets/logo2.png")}
            style={{ width: 50, height: 50 }}
          /> */}
          {/* <Text
            style={{ color: COLORS.white, fontSize: 17, fontWeight: "bold" }}
          >
            Be Okay
          </Text> */}
        </View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <TouchableOpacity
            // onPress={() => navigation.openDrawer()}
            style={{
              // height: width / 9,
              // width: width / 9,
              // backgroundColor: "white",
              borderRadius: width / 30,
              alignItems: "center",
              justifyContent: "center",

              marginRight: width / 15,
            }}
          >
            <Icon
              name="notifications"
              size={30}
              style={{ alignSelf: "center", marginRight: width / 30 }}
              color={COLORS.white}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("consultation", { screen: "support" })
            }
            style={{
              // height: width / 9,
              // width: width / 9,
              // backgroundColor: "white",
              borderRadius: width / 30,
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
              marginRight: width / 15,
            }}
          >
            <Entypo
              name="message"
              size={30}
              style={{ alignSelf: "center" }}
              color={COLORS.white}
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#8BB85C",
    height: Platform.OS === "ios" ? 130 : height / 8,
    elevation: 100,
    justifyContent: "center",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: Platform.OS === "ios" ? 130 : height / 6,
    marginTop: Platform.OS === "android" ? height / 30 : null,
  },
});

export default Header;
