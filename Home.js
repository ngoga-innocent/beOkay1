import { StatusBar } from "expo-status-bar";
import { React, useState, useEffect } from "react";
import { StyleSheet, View, Text, SafeAreaView } from "react-native";
import { OnboadingScreen } from "./screens/";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Homescreen from "./screens/Homescreen";
import AsyncStorage from "@react-native-async-storage/async-storage";
import LoginStack from "./screens/loginScreens/Loginstack";
import ConsultationStack from "./screens/ConsultationScreens/ConsultationStack";
import MyDrawer from "./components/Drawer";
import AIstack from "./screens/ConsultationScreens/AIScreen/AIstack";
import OveralStack from "./components/OveralStack";

export default function Home() {
  const [isAppFirstLaunched, setisAppFirstLaunched] = useState(null);
  useEffect(() => {
    const LoadData = async () => {
      const appData = await AsyncStorage.getItem("isAppFirstLaunched");
      if (appData == null) {
        setisAppFirstLaunched(true);
      } else {
        setisAppFirstLaunched(false);
      }
    };
    LoadData();
  }, []);
  const stack = createStackNavigator();
  return (
    isAppFirstLaunched != null && (
      <stack.Navigator screenOptions={{ headerShown: false }}>
        <stack.Screen name="Homescreen" component={Homescreen} />
        {isAppFirstLaunched && (
          <stack.Screen name="Onboadingscreen" component={OnboadingScreen} />
        )}

        <stack.Screen name="Auth" component={LoginStack} />
        <stack.Screen name="Consultation" component={ConsultationStack} />
        <stack.Screen name="Tabs" component={OveralStack} />
        <stack.Screen
          name="allTab"
          component={OveralStack}
          options={{ headerShown: false }}
        />
      </stack.Navigator>
    )
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
