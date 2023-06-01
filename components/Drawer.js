import { createDrawerNavigator } from "@react-navigation/drawer";
import ConsultationStack from "../screens/ConsultationScreens/ConsultationStack";
import MyTabs from "./BottomTabs";
import AIstack from "../screens/ConsultationScreens/AIScreen/AIstack";
import LoginStack from "../screens/loginScreens/Loginstack";
const Drawer = createDrawerNavigator();

const MyDrawer = () => {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }}>
      <Drawer.Screen name="Tab" component={MyTabs} />
      <Drawer.Screen name="Consultation" component={ConsultationStack} />
    </Drawer.Navigator>
  );
};

export default MyDrawer;
