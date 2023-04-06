import { View, Text, StyleSheet } from "react-native";
import { React, useState } from "react";
import SignupHeader from "./SignupHeader";
import { COLORS } from "../../components/Colors";
import { TouchableOpacity } from "react-native-gesture-handler";
import KeyboardWrapper from "../../components/keyboardWrapper";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Icon from "react-native-vector-icons/Ionicons";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkmail, setCheckMail] = useState(false);
  const [secureTextEntry, setSecureText] = useState(true);
  const [accept, setAccept] = useState(false);

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
    if (!checkmail) {
      if (accept) {
        navigation.navigate("Tabs");
      } else {
        alert("please accept the agreement");
      }
    } else {
      alert("invalid credentials");
    }
  };

  return (
    <KeyboardWrapper>
      <View style={styles.container}>
        <SignupHeader
          title="Welcome"
          style={{ color: COLORS.primary }}
          title1=" On Be Okay"
          style1={{ color: COLORS.text }}
          paragraph="Lorem ipsum dolor amet consecteur.Gravida sit fermentum ac"
          style2={{ color: COLORS.paragraph }}
        />
        <Text style={{ fontSize: 20, marginLeft: 32 }}>LOGIN</Text>
        <View style={{ marginLeft: 32, marginTop: 20, flexDirection: "row" }}>
          <Text style={{ color: COLORS.paragraph, marginRight: 4 }}>
            Don't have an account
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
            <Text style={{ color: COLORS.primary }}>Signup</Text>
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
            color: COLORS.paragraph,
            alignSelf: "center",
            marginTop: 10,
          }}
        >
          or Login with Email
        </Text>
        <View>
          {checkmail ? (
            <Input
              name="person"
              placeholder="Email or Phone number"
              onChangeText={(text) => Email(text)}
              style={{ borderColor: "red" }}
              style1={{ padding: 3 }}
              value={email}
            />
          ) : (
            <Input
              name="person"
              placeholder="Email or Phone number"
              onChangeText={Email}
              value={email}
            />
          )}
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
            <Text style={{ color: COLORS.paragraph, marginRight: 4 }}>
              Forgot Password?
            </Text>
            <TouchableOpacity>
              <Text style={{ color: COLORS.primary }}>Get Help</Text>
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
      </View>
    </KeyboardWrapper>
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
