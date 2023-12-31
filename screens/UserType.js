import { React, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Material from "react-native-vector-icons/MaterialCommunityIcons";
import Button from "../components/Button";
import { COLORS } from "../components/Colors";
import SignupHeader from "./loginScreens/SignupHeader";

const UserType = ({ navigation }) => {
  const [usembl, setUsembl] = useState(false);
  const Mbl = () => {
    if (usembl) {
      setUsembl(false);
    } else {
      setUsembl(true);
    }
  };
  return (
    <View
      style={{
        flex: 1,
        // alignItems: "center",
        // justifyContent: "center",
        backgroundColor: COLORS.primary,
      }}
    >
      <SignupHeader
        title="Welcome"
        title1="On Be Okay"
        paragraph="Stay health using our digital healthcare services(self-test technology,live chat and home followups) "
      />

      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 20,
        }}
      >
        <Text
          style={{
            maxWidth: "55%",
            color: "white",
            textAlign: "center",
            fontSize: 18,
            fontWeight: "400",
          }}
        >
          Be Okay is open for both doctor and Patient please specify your,
          category
        </Text>
      </View>
      <Button
        awesome="stethoscope"
        size1={27}
        text="Join as Doctor"
        style={[styles.button, { backgroundColor: "#95DBD3" }]}
        color1="white"
        style1={{ color: "white", fontWeight: "700" }}
        onPress={() => navigation.navigate("Docsignup")}
      />
      <Button
        icon="ios-newspaper-sharp"
        size={27}
        text="Patient"
        style={styles.button}
        color={COLORS.primary}
        style1={{ color: COLORS.primary, fontWeight: "bold" }}
        onPress={() => navigation.navigate("Login")}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    // flex: 1,

    backgroundColor: COLORS.primary,
  },

  // header: {
  //   fontSize: 24,
  //   color: COLORS.white,
  //   marginTop: 103,
  //   marginLeft: 32,
  //   fontWeight: "bold",
  //   flexDirection: "column",
  // },
  // header1: {
  //   fontSize: 24,
  //   color: COLORS.white,

  //   marginLeft: 32,
  //   fontWeight: "bold",
  //   flexDirection: "column",
  // },
  // paragraph: {
  //   color: COLORS.white,
  //   fontSize: 17,
  //   marginLeft: 32,
  //   marginTop: 20,
  //   maxWidth: 280,
  //   marginBottom: 70,
  // },
  button: {
    alignSelf: "center",

    marginBottom: 16,
    height: "6%",
  },
  // Signup: {
  //   marginLeft: 32,
  //   color: COLORS.white,
  //   fontSize: 20,
  //   fontWeight: "bold",
  //   marginBottom: 70,
  // },
  // login: {
  //   color: "#E4E4E4",
  //   marginLeft: 42,
  //   fontSize: 16,
  // },
  // loginbtn: {
  //   color: COLORS.white,
  //   marginLeft: 5,
  //   fontSize: 20,
  //   fontWeight: "bold",
  // },
  // haveacc: {
  //   flexDirection: "row",
  //   marginVertical: 4,

  //   alignItems: "center",
  //   justifyContent: "center",
  // },
  // usembl: {
  //   alignItems: "center",
  //   justifyContent: "center",
  //   marginLeft: "15%",
  //   fontSize: 17,
  //   color: COLORS.white,
  //   marginVertical: 15,
  //   padding: 4,
  // },
  // usembl1: {
  //   alignItems: "center",
  //   justifyContent: "center",
  //   marginLeft: 2,
  //   fontSize: 17,
  //   color: COLORS.white,
  //   marginVertical: 10,
  //   padding: 4,
  // },
});

export default UserType;
