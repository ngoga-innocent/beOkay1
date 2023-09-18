import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./Login";
import Signup from "./Signup";
import Signup1 from "./Signup1";
import Userverification from "./Userverification";
import Forgotpassword from "./Forgotpassword";
import UserType from "../UserType";
import DocSignup from "../DoctorScreen/DocSignup";
import Docverification from "../DoctorScreen/Docverify";
import DocLogin from "../DoctorScreen/DocLogin";
import Docprofile from "../DoctorScreen/DocProfile";
import PasswordReset from "./PasswordReset";

const LoginStack = () => {
  const stack = createStackNavigator();
  return (
    <stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="usertype"
    >
      <stack.Screen name="usertype" component={UserType} />
      <stack.Screen name="Docsignup" component={DocSignup} />
      <stack.Screen name="Docverification" component={Docverification} />
      <stack.Screen name="Doclogin" component={DocLogin} />
      <stack.Screen name="Login" component={Login} />
      <stack.Screen name="Docprofile" component={Docprofile} />
      <stack.Screen name="Signup" component={Signup} />
      <stack.Screen name="Signup1" component={Signup1} />
      <stack.Screen name="Userverification" component={Userverification} />
      <stack.Screen name="Forgotpassword" component={Forgotpassword} />
      <stack.Screen name="passwordReset" component={PasswordReset}/>
    </stack.Navigator>
  );
};

export default LoginStack;
