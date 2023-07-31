import "react-native-gesture-handler";
import { React, useState, useEffect, useCallback, useContext } from "react";
import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Home from "./Home";
import OveralStack from "./components/OveralStack";
// import MyDrawer from "./components/Drawer";
// import MyTabs from "./components/BottomTabs";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();
SplashScreen.hideAsync();
export default function App() {
  const [isAppFirstLaunched, setisAppFirstLaunched] = useState(null);
  useEffect(() => {
    const LoadData = async () => {
      const appData = await AsyncStorage.getItem("isAppFirstLaunched");
      if (appData == null) {
        setisAppFirstLaunched(true);
        setAuthToken("");
      } else {
        setisAppFirstLaunched(false);
        setAuthToken("asdf");
      }
    };
    LoadData();
  }, []);

  const [authtoken, setAuthToken] = useState("");
  const [fontsLoaded] = useFonts({
    Inter: require("./assets/Fonts/Inter.ttf"),
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    isAppFirstLaunched != null && (
      <NavigationContainer>
        {authtoken ? <OveralStack /> : <Home />}
      </NavigationContainer>
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
