import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS } from "../../components/Colors";
const SignupHeader = ({
  title,
  title1,
  paragraph,
  style,
  style1,
  style2,
  marginTop,
}) => {
  return (
    <View style={{ marginTop: marginTop || "25%" }}>
      <Text style={[styles.header, style]}>{title} </Text>
      <Text style={[styles.header1, style1]}>{title1}</Text>
      <Text style={[styles.paragraph, style2]}>{paragraph}</Text>
    </View>
  );
};

export default SignupHeader;

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    color: COLORS.white,
    marginTop: 50,
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
});
