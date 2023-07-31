import React, { Component } from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Mycalendar from "../DoctorScreen/Mycalendar";
import ScheduleAppointment from "../DoctorScreen/ScheduleAppointment";
const MyCalendar = () => {
  const stack = createStackNavigator();

  return (
    <stack.Navigator>
      <stack.Screen
        name="myCalendar"
        component={Mycalendar}
        options={{ headerShown: false }}
      />
      <stack.Screen
        name="Schedule"
        component={ScheduleAppointment}
        options={{ headerShown: false }}
      />
    </stack.Navigator>
  );
};

export default MyCalendar;
