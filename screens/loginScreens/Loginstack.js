import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Login from './Login';
import Signup from './Signup';
import Signup1 from './Signup1';
import Userverification from './Userverification';
import Forgotpassword from './Forgotpassword';

const LoginStack = () => {
  const stack = createStackNavigator()
  return (

    <stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Signup1'  >
      <stack.Screen name='Login' component={Login} />
      <stack.Screen name='Signup' component={Signup} />
      <stack.Screen name='Signup1' component={Signup1} />
      <stack.Screen name='Userverification' component={Userverification} />
      <stack.Screen name='Forgotpassword' component={Forgotpassword} />

    </stack.Navigator >

  )
}

export default LoginStack