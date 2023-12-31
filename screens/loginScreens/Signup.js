import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from "react-native";
import { React, useState } from "react";
import { COLORS } from "../../components/Colors";
import SignupHeader from "./SignupHeader";
import Input from "../../components/Input";
import Button from "../../components/Button";
import KeyboardWrapper from "../../components/keyboardWrapper";
import Icon from "react-native-vector-icons/Ionicons";
import Material from "react-native-vector-icons/MaterialCommunityIcons";
import useNavigation from "@react-navigation/native";
import axios from "axios";
import Spinner from "react-native-loading-spinner-overlay/lib";
import url from "../../Url";

const Signup = ({ route, navigation }) => {
  const [result, setResult] = useState([]);
  const [error, setError] = useState();
  const [fullName, setFullName] = useState("");
  const [Email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [checkmail, setCheckMail] = useState(false);
  const [secureText, setSecureText] = useState(true);
  const [usembl, setUsembl] = useState(false);
  const [username, setUsername] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const Mbl = () => {
    if (usembl) {
      setUsembl(false);
    } else {
      setUsembl(true);
    }
  };
  const Username = (e) => {
    setUsername(e);
  };
  const FullName = (e) => {
    setFullName(e);
  };
  const email = (text) => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    setEmail(text);
    if (reg.test(text)) {
      setCheckMail(false);
    } else {
      setCheckMail(true);
    }
  };
  const Number = (e) => {
    setNumber(e);
  };
  const Password = (e) => {
    setPassword(e);
  };
  const secureTextfun = () => {
    if (secureText) {
      setSecureText(false);
    } else {
      setSecureText(true);
    }
  };
  const Signupbtn = () => {
    if (fullName == "") {
      alert("please fill your Full names");
      return false;
    } else if (email == "") {
      alert("please fill email");
      return false;
    } else if (number == "") {
      alert("please fill phone number");
      return false;
    } else if (password == "") {
      alert("password must be greater 8 digit ");
      return false;
    } else {
      return true;
    }
  };
  const call_api = () => {
    // navigation.navigate("Userverification", {
    //   email: Email,
    //   number: number,
    // });
    setIsLoading(true);
    if (Signupbtn()) {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        full_name: fullName,
        username: username,
        email: Email,
        phone_number: number,
        password: password,
        user_type: "patient",
      });

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      fetch(`${url}/users/`, requestOptions)
        .then((response) => response.json())
        .then((result) => {
          console.log(result);
          if (result.hasOwnProperty("message")) {
            setIsLoading(false);
            navigation.navigate("Userverification", {
              email: Email,
              number: number,
            });
          } else {
            if (result.hasOwnProperty("email")) {
              setIsLoading(false);
              return alert("user With this email already exists");
            } else if (result.hasOwnProperty("username")) {
              setIsLoading(false);
              return alert("User with this username already exists");
            } else {
              setIsLoading(false);
              return alert("User with this phone number already exists");
            }
          }
        })
        .catch((error) => console.log("error", error));
    } else {
      setIsLoading(false);
      alert("there is errors in your inputs");
    }
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <ScrollView style={styles.container}>
        <Spinner visible={isLoading} />
        <SignupHeader
          marginTop="1%"
          title="You are"
          title1="Almost There"
          paragraph=" Stay healthy using our digital healthcare services (self-test technology, livechat and home followups)"
        />
        <View style={styles.SecondView}>
          <View style={styles.inner}>
            <Text style={styles.Signup}>SIGNUP</Text>
            <View style={styles.haveacc}>
              <Text style={styles.login}>Already have an account? </Text>
              <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                <Text style={styles.loginbtn}>LOGIN</Text>
              </TouchableOpacity>
            </View>
          </View>
          <Text>{result.status}</Text>
          <Input
            name="person"
            placeholder="Enter Username"
            onChangeText={Username}
            value={username}
          />
          <Input
            name="person"
            placeholder="Enter Full Name"
            onChangeText={FullName}
            value={fullName}
          />
          {checkmail ? (
            <Input
              name="mail"
              placeholder="Email"
              onChangeText={(text) => email(text)}
              value={Email}
              style={{ borderColor: "red" }}
            />
          ) : (
            <Input
              name="mail"
              placeholder="Email"
              onChangeText={(text) => email(text)}
              value={Email}
            />
          )}

          <Input
            name="call"
            placeholder="Phone Number"
            onChangeText={Number}
            value={number}
            keyboardType="numeric"
          />
          <Input
            name="lock-closed"
            placeholder="password"
            onChangeText={Password}
            value={password}
            secureTextEntry={secureText}
            name2="eye"
            style1={{ marginRight: 5 }}
            onPress={secureTextfun}
          />

          <Button
            text="Signup"
            textcolor={COLORS.white}
            style={styles.Button}
            onPress={call_api}
          />
          <View style={styles.usembl}>
            <TouchableOpacity onPress={(usembl) => Mbl(usembl)}>
              {usembl ? (
                <Material
                  name="toggle-switch"
                  color={COLORS.primary}
                  size={40}
                  marginLeft={10}
                />
              ) : (
                <Material
                  name="toggle-switch-off"
                  color={COLORS.paragraph}
                  size={40}
                  marginLeft={10}
                />
              )}
            </TouchableOpacity>
            <Text style={styles.usembl1}> Use Mobile security to Login</Text>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
  SecondView: {
    flex: 1,
    backgroundColor: COLORS.white,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  inner: {
    marginLeft: 32,
  },
  Signup: {
    color: "#000000",
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 20,
  },
  text: {
    color: COLORS.text,
  },
  login: {
    color: COLORS.text,
  },
  loginbtn: {
    color: COLORS.primary,
    fontSize: 20,
    fontWeight: "bold",
  },
  haveacc: {
    flexDirection: "row",
    alignItems: "center",
  },
  Button: {
    backgroundColor: COLORS.primary,
    height: 40,
    marginTop: 16,
    alignSelf: "center",
  },
  usembl: {
    alignItems: "center",
    justifyContent: "center",
    fontSize: 17,
    backgroundColor: "white",
    flexDirection: "row",
  },
  usembl1: {
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 2,
    fontSize: 17,
  },
});
