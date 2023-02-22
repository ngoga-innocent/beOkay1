import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Login from './Login';
import Signup from './Signup';
import Signup1 from './Signup1';
import Userverification from './Userverification';
import Forgotpassword from './Forgotpassword';
import { NavigationContainer } from '@react-navigation/native';
const LoginStack = () => {
  const stact = createStackNavigator()
  return (

    <stact.Navigator>
      <stact.Screen name='Login' component={Login} />
      <stact.Screen name='Signup' component={Signup} />
      <stact.Screen name='Signup1' component={Signup1} />
      <stact.Screen name='Userverification' component={Userverification} />
      <stact.Screen name='Forgotpassword' component={Forgotpassword} />

    </stact.Navigator>

  )
}

export default LoginStack