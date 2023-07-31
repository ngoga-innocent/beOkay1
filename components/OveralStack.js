import React, { Component } from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import MyTabs from "./BottomTabs";
import DoctorTab from "./DoctorTab";

const OveralStack = () => {
  const stack = createStackNavigator();
  return (
    <stack.Navigator>
      <stack.Screen
        name="Tab"
        component={MyTabs}
        options={{ headerShown: false }}
      />
      <stack.Screen
        name="docTab"
        component={DoctorTab}
        options={{ headerShown: false }}
      />
    </stack.Navigator>
  );
};

export default OveralStack;
