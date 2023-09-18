import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import UserLanding from '../ConsultationScreens/UserLanding';
import Profile from '../Profile/Profile';
import Patient_Profile from '../Profile/Patient_Profile';

const  HomeStack =()=> {
  
  const homeStack=createStackNavigator()
    return (
     <homeStack.Navigator initialRouteName='userLanding'>
        <homeStack.Screen name='userLanding' component={UserLanding} options={{
            headerShown:false
        }}/>
         <homeStack.Screen
        name="profile"
        component={Profile}
        options={{ headerShown: false }}
      />
       <homeStack.Screen
        name="patient_profile"
        component={Patient_Profile}
        options={{
          headerShown: false,
        
        }}
      />
     </homeStack.Navigator>
    );
  }


export default HomeStack;
