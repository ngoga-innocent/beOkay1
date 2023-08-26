import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import ConsultationStack from "../screens/ConsultationScreens/ConsultationStack";

import Icon from "react-native-vector-icons/FontAwesome5";
import { COLORS, height } from "./Colors";

import UserLanding from "../screens/ConsultationScreens/UserLanding";

import Hospitals from "../screens/OtherScreen/Hospitals";
import EHR from "../screens/Navigations/EHR";
import Emergency from "../screens/OtherScreen/Emergency";
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarHideOnKeyboard: true,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home";
          } else if (route.name === "consultation") {
            iconName = focused ? "stethoscope" : "stethoscope";
          } else if (route.name === "E.H.R") {
            iconName = focused ? "file" : "file";
          } else if (route.name === "Hospitals") {
            iconName = focused ? "hospital-alt" : "hospital-alt";
          } else if (route.name === "Emergency") {
            iconName = focused ? "ban" : "ban";
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
        name="Home"
        component={UserLanding}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="consultation"
        component={ConsultationStack}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="E.H.R"
        component={EHR}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Hospitals"
        component={Hospitals}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Emergency"
        component={Emergency}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}
export default MyTabs;
