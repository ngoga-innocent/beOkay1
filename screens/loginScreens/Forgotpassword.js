import { View, Text } from "react-native";
import React from "react";
import Input from "../../components/Input";
import { COLORS, height } from "../../components/Colors";
import Button from "../../components/Button";
import { useNavigation } from "@react-navigation/native";
import Explanatory from "../../components/Explanatory";

const Forgotpassword = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Explanatory
        title="Reset Password"
        paragraph="Enter your email to reset password"
      />
      <Text
        style={{
          color: COLORS.primary,
          fontWeight: "bold",
          marginTop: height / 30,
        }}
      >
        Forgot Password
      </Text>
      <Input placeholder="Enter Email" />
      <Button
        text="Reset Password"
        style={{ marginTop: height / 30, backgroundColor: COLORS.primary }}
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

export default Forgotpassword;
