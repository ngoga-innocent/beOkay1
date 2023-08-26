import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Icon from "react-native-vector-icons/AntDesign";
import { COLORS } from "./Colors";

import Emergency from "../screens/OtherScreen/Emergency";

import DoctorProfile from "../screens/DoctorScreen/DoctorProfile";

import ScheduleAppointment from "../screens/DoctorScreen/ScheduleAppointment";

import MyCalendar from "../screens/Navigations/MycalendarStack";
import { height } from "./Colors";
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
        tabBarLabelStyle: {
          fontWeight: "bold",
          color: COLORS.black,
          fontSize: height / 90,
        },
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
