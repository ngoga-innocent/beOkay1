import React, { Component } from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import MedicalHr from "../OtherScreen/MedicalHr";
import Report from "../ConsultationScreens/Report";
const EHR = () => {
  const stack = createStackNavigator();

  return (
    <stack.Navigator initialRouteName="MedicalRe">
      <stack.Screen
        name="MedicalRe"
        component={MedicalHr}
        options={{ headerShown: false }}
      />
      <stack.Screen
        name="report"
        component={Report}
        options={{ headerShown: false }}
      />
    </stack.Navigator>
  );
};

export default EHR;
