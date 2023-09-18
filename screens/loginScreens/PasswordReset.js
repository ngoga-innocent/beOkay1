import { View, Text } from "react-native";
import React, { useState } from "react";
import Input from "../../components/Input";
import { COLORS, height, width } from "../../components/Colors";
import Button from "../../components/Button";
import { useNavigation } from "@react-navigation/native";
import Explanatory from "../../components/Explanatory";
import Url from "../../Url";
import Spinner from "react-native-loading-spinner-overlay";

const PasswordReset = ({ route }) => {
  const navigation = useNavigation();
  const [password, setPassword] = useState("");
  const [password1, setPassword1] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [secureTextEntry, setSecureText] = useState(false);
  const [code, setCode] = useState();
  const email = route.params.email;
  const onPress = () => {
    setSecureText(!secureTextEntry);
  };
  const resetPassword = () => {
    if (password !== "" || password1 !== "" || code !== "") {
      if (password === password1) {
        setIsLoading(true);
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        var raw = JSON.stringify({
          code: code,
          password: password,
        });
        var requestOptions = {
          method: "PATCH",
          headers: myHeaders,
          body: raw,
          redirect: "follow",
        };
        fetch(`${Url}/users/reset-password/`, requestOptions)
          .then((response) => response.json())

          .catch((error) => console.log("error", error))
          .then((result) => {
            console.log(result);
            if (result.password) {
              setIsLoading(false);
              return alert("ensure that password has atleast 8 characters");
            } else if (result.non_field_errors) {
              setIsLoading(false);
              return alert("invalid code");
            } else if (result.message) {
              if (result.message === "Password reset successful") {
                setIsLoading(false);
                navigation.navigate("Auth", { screen: "usertype" });
              }
              setIsLoading(false);
              return alert(result.message);
            }
          });
      } else {
        setIsLoading(false);
        return alert("fill in your email");
      }
    } else {
      setIsLoading(false);
      return alert("fill in your password");
    }
  };
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Spinner visible={isLoading} color={COLORS.primary}/>
      <Explanatory title="Reset Password" paragraph="Enter your new Password" />
      <Text
        style={{
          color: COLORS.primary,
          fontWeight: "bold",
          marginTop: height / 30,
        }}
      >
        Forgot Password
      </Text>
      {/* <Input placeholder="password" value={email} onChangeText={(text)=>setEmail(text)} />
      <Input placeholder="confirm Password" value={email} onChangeText={(text)=>setEmail(text)} /> */}
      <Input
        placeholder="Enter recieved code"
        value={code}
        onChangeText={(text) => setCode(text)}
        keyboardType="numeric"
      />
      <Input
        name="lock-closed"
        placeholder="password"
        secureTextEntry={secureTextEntry}
        onChangeText={(text) => setPassword(text)}
        value={password}
        name2="eye"
        onPress={onPress}
        style1={{ marginRight: width / 30 }}
      />
      <Input
        name="lock-closed"
        placeholder="Confirm password"
        secureTextEntry={secureTextEntry}
        onChangeText={(text) => setPassword1(text)}
        value={password1}
        name2="eye"
        onPress={onPress}
        style1={{ marginRight: width / 30 }}
      />
      <Button
        text="Reset Password"
        style={{ marginTop: height / 30, backgroundColor: COLORS.primary }}
        onPress={() => resetPassword()}
      />
    </View>
  );
};

export default PasswordReset;
