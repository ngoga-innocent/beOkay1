import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Login from "../screens/loginScreens/Login";
import ConsultationStack from "../screens/ConsultationScreens/ConsultationStack";
import Docprofile from "../screens/DoctorScreen/DocProfile";
import Icon from "react-native-vector-icons/AntDesign";
import { COLORS } from "./Colors";

import UserLanding from "../screens/ConsultationScreens/UserLanding";
import User from "../screens/OtherScreen/User";
import Emergency from "../screens/OtherScreen/Emergency";
import { View, TouchableOpacity } from "react-native";
import AntiDesign from "react-native-vector-icons/AntDesign";
import DoctorProfile from "../screens/DoctorScreen/DoctorProfile";
import Dashboard from "../screens/DoctorScreen/Dashboard";
import ScheduleAppointment from "../screens/DoctorScreen/ScheduleAppointment";

import MyCalendar from "../screens/Navigations/MycalendarStack";
const Tab = createBottomTabNavigator();

function DoctorTab({ navigation }) {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarHideOnKeyboard: true,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Dashboard") {
            iconName = focused ? "dashboard" : "dashboard";
          } else if (route.name === "Profile") {
            iconName = focused ? "user" : "user";
          } else if (route.name === "Community") {
            iconName = focused ? "addusergroup" : "addusergroup";
          } else if (route.name === "Emergency") {
            iconName = focused ? "warning" : "warning";
          } else if (route.name === "Calendar") {
            iconName = focused ? "calendar" : "calendar";
          }

          // You can return any component that you like here!
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen
        name="Dashboard"
        component={ScheduleAppointment}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Profile"
        component={DoctorProfile}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Calendar"
        component={MyCalendar}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Emergency"
        component={Emergency}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Community"
        component={Emergency}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}
export default DoctorTab;
