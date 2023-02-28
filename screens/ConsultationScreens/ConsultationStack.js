import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import UserLanding from './UserLanding'
import Consultation from './Consultation'


const ConsultationStack = () => {
    const stack = createStackNavigator()
    return (
        <stack.Navigator initialRouteName='Landing' screenOptions={{
            headerShown: false
        }}>
            <stack.Screen name='Landing' component={UserLanding} />
            <stack.Screen name='consultaion' component={Consultation} />

        </stack.Navigator >
    )
}

export default ConsultationStack