import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import { React, useState } from "react";
import SignupHeader from "./SignupHeader";
import { COLORS } from "../../components/Colors";
import { TouchableOpacity } from "react-native-gesture-handler";
import KeyboardWrapper from "../../components/keyboardWrapper";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Icon from "react-native-vector-icons/Ionicons";
import Spinner from "react-native-loading-spinner-overlay";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Url from "../../Url";
import { Platform } from "react-native";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkmail, setCheckMail] = useState(false);
  const [secureTextEntry, setSecureText] = useState(true);
  const [accept, setAccept] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const Accepted = () => {
    if (accept) {
      setAccept(false);
    } else {
      setAccept(true);
    }
  };

  const Email = (text) => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    setEmail(text);
    if (reg.test(text)) {
      setCheckMail(false);
    } else {
      setCheckMail(true);
    }
  };
  const Password = (text) => {
    setPassword(text);
  };
  const onPress = () => {
    setSecureText(false);
  };
  const loginCheck = () => {
    if (accept) {
      setIsLoading(true);
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      var raw = JSON.stringify({
        username: email,
        password: password,
      });
      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };
      fetch(`${Url}/login/`, requestOptions)
        .then((response) => response.json())
        .catch((error) => console.log("error", error))
        .then((response) => {
          if (response.access) {
            setIsLoading(false);
            AsyncStorage.setItem("token", response.access);
            navigation.replace("Tabs");
          } else {
            setIsLoading(false);
            return alert(response.detail);
          }
        });
    } else {
      alert("please accept the agreement");
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView>
        <Spinner visible={isLoading} />
        <SignupHeader
          title="Welcome"
          style={{ color: COLORS.primary }}
          title1=" On Be Okay"
          style1={{ color: COLORS.black }}
          paragraph="Stay health using our digital healthcare services(self-test technology,live chat and home followups)"
          style2={{ color: COLORS.paragraph }}
        />
        <Text style={{ fontSize: 20, marginLeft: 32 }}>LOGIN</Text>
        <View
          style={{
            marginLeft: 32,
            marginTop: 20,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text style={{ color: COLORS.black, marginRight: 4 }}>
            Don't have an account
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
            <Text
              style={{
                color: COLORS.primary,
                fontWeight: "bold",
                fontSize: 20,
              }}
            >
              Signup
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            flex: 0.75,
            marginTop: 16,
            marginRight: 16,
            justifyContent: "center",
          }}
        >
          <Button
            icon="logo-google"
            text="with Google"
            size={20}
            color="red"
            style={styles.btn}
            style1={{ fontSize: 17 }}
          />
          <Button
            icon="logo-apple"
            text="with apple"
            size={20}
            style={styles.btn}
            style1={{ fontSize: 17 }}
          />
        </View>
        <Text
          style={{
            color: COLORS.black,
            alignSelf: "center",
            marginTop: 10,
          }}
        >
          or Login with Email
        </Text>
        <View>
          <Input
            name="person"
            placeholder="Email or Username"
            onChangeText={Email}
            value={email}
          />

          <Input
            name="lock-closed"
            placeholder="password"
            secureTextEntry={secureTextEntry}
            onChangeText={(text) => Password(text)}
            value={password}
            name2="eye"
            onPress={onPress}
            style1={{ marginRight: 5 }}
          />
          <View style={{ flexDirection: "row", marginLeft: 32 }}>
            <Text style={{ color: COLORS.black, marginRight: 4 }}>
              Forgot Password?
            </Text>
            <TouchableOpacity>
              <Text style={{ color: COLORS.primary, fontWeight: "bold" }}>
                Get Help
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <Button
          text="Login"
          style1={{ color: COLORS.white }}
          style={{
            backgroundColor: COLORS.primary,
            marginVertical: 7,
            alignSelf: "center",
          }}
          onPress={loginCheck}
        />
        <TouchableOpacity style={styles.fingercover}>
          <Icon
            name="ios-finger-print"
            size={70}
            style={{ alignSelf: "center", color: COLORS.paragraph }}
          />
        </TouchableOpacity>
        <View
          style={{
            paddingBottom: 10,
            marginBottom: 40,
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <TouchableOpacity onPress={Accepted}>
            {accept ? (
              <Icon name="checkbox" size={20} color={COLORS.primary} />
            ) : (
              <View style={styles.checkbox}></View>
            )}
          </TouchableOpacity>
          <Text>Terms of service privacy policy</Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
const styles = StyleSheet.create({
  btn: {
    borderWidth: 1,
    width: "40%",
    height: 50,
    borderRadius: 10,
  },
  fingercover: {
    width: 80,
    height: 80,
    borderColor: COLORS.primary,
    borderWidth: 1,
    borderRadius: 50,

    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: COLORS.green,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderRadius: 6,
    marginRight: 4,
  },
});
export default Login;
