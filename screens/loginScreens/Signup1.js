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
import Button from "../../components/Button";
import { COLORS } from "../../components/Colors";
import SignupHeader from "./SignupHeader";

const Signup1 = ({ navigation }) => {
  const [usembl, setUsembl] = useState(false);
  const Mbl = () => {
    if (usembl) {
      setUsembl(false);
    } else {
      setUsembl(true);
    }
  };
  return (
    <ScrollView style={styles.container}>
      <SignupHeader
        title="Welcome"
        title1="On Be Okay"
        paragraph="Stay health using our digital healthcare services(self-test technology,live chat and home followups) "
      />
      <Text style={styles.Signup}>SIGN UP</Text>
      <Button
        icon="logo-google"
        size={27}
        text=" with Google"
        style={styles.button}
        color="red"
      />
      <Button
        icon="logo-apple"
        size={27}
        text=" with Apple"
        style={styles.button}
      />
      <Button
        icon="mail"
        size={27}
        text="with Email"
        style={styles.button}
        onPress={() => navigation.navigate("Signup")}
      />
      <View style={styles.haveacc}>
        <Text style={styles.login}>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={styles.loginbtn}>LOGIN</Text>
        </TouchableOpacity>
      </View>
      <View style={[styles.usembl, styles.lgn, { marginBottom: 40 }]}>
        <TouchableOpacity
          onPress={(usembl) => {
            Mbl(usembl);
          }}
        >
          {usembl ? (
            <Material
              name="toggle-switch"
              color="white"
              size={40}
              marginLeft={10}
            />
          ) : (
            <Material
              name="toggle-switch-off"
              color="grey"
              size={40}
              marginLeft={10}
            />
          )}
        </TouchableOpacity>
        <Text style={styles.usembl1}> Use Phone security to Login</Text>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: COLORS.primary,
  },
  lgn: {
    flexDirection: "row",
  },
  header: {
    fontSize: 24,
    color: COLORS.white,
    marginTop: 103,
    marginLeft: 32,
    fontWeight: "bold",
    flexDirection: "column",
  },
  header1: {
    fontSize: 24,
    color: COLORS.white,

    marginLeft: 32,
    fontWeight: "bold",
    flexDirection: "column",
  },
  paragraph: {
    color: COLORS.white,
    fontSize: 17,
    marginLeft: 32,
    marginTop: 20,
    maxWidth: 280,
    marginBottom: 70,
  },
  button: {
    alignSelf: "center",
    justifyContent: "center",
    marginBottom: 16,
  },
  Signup: {
    marginLeft: 32,
    color: COLORS.white,
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 70,
  },
  login: {
    color: "#E4E4E4",
    marginLeft: 42,
    fontSize: 16,
  },
  loginbtn: {
    color: COLORS.white,
    marginLeft: 5,
    fontSize: 20,
    fontWeight: "bold",
  },
  haveacc: {
    flexDirection: "row",
    marginVertical: 4,

    alignItems: "center",
    justifyContent: "center",
  },
  usembl: {
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "15%",
    fontSize: 17,
    color: COLORS.white,
    marginVertical: 15,
    padding: 4,
  },
  usembl1: {
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 2,
    fontSize: 17,
    color: COLORS.white,
    marginVertical: 10,
    padding: 4,
  },
});

export default Signup1;
