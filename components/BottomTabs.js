import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Login from "../screens/loginScreens/Login";
import ConsultationStack from "../screens/ConsultationScreens/ConsultationStack";
import Consultation from "../screens/ConsultationScreens/Consultation";
import Ionicons from "react-native-vector-icons/Ionicons";
import Icon from "react-native-vector-icons/FontAwesome5";
import { COLORS } from "./Colors";
import { NavigationContainer } from "@react-navigation/native";
import UserLanding from "../screens/ConsultationScreens/UserLanding";
import User from "../screens/OtherScreen/User";
import Emergency from "../screens/OtherScreen/Emergency";
import { View, TouchableOpacity } from "react-native";
import AntiDesign from "react-native-vector-icons/AntDesign";
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
          }

          // You can return any component that you like here!
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: "gray",
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
        component={User}
        options={{
          headerTitle: "Medical Report",
          headerLeft: () => (
            <View>
              <TouchableOpacity onPress={() => navigation.navigate("Method")}>
                <AntiDesign name="arrowleft" size={30} color="black" />
              </TouchableOpacity>
            </View>
          ),
          headerStyle: {
            height: 120,
            backgroundColor: COLORS.backgrounds,
            elevation: 30,
            shadowColor: "#000",
          },
          headerTitleAlign: "center",
          headerTitleStyle: {
            color: "black",
            justifyContent: "center",
            alignItems: "center",
          },
        }}
      />
      <Tab.Screen
        name="Hospitals"
        component={Emergency}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}
export default MyTabs;
