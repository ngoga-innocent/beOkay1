import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import UserLanding from './UserLanding'
import Consultation from './Consultation'
import Describedisease from './Describedisease'
import Description from './Description'


const ConsultationStack = () => {
    const stack = createStackNavigator()
    return (
        <stack.Navigator initialRouteName='Landing' screenOptions={{
            headerShown: false
        }}>
            <stack.Screen name='Landing' component={UserLanding} />
            <stack.Screen name='Describe' component={Describedisease} />
            <stack.Screen name='Description' component={Description} />

        </stack.Navigator >
    )
}

export default ConsultationStack