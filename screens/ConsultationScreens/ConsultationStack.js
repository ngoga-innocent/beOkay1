import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import UserLanding from './UserLanding'
import Consultation from './Consultation'
import Describedisease from './Describedisease'
import Description from './Description'
import Method from './Method'
import { COLORS } from '../../components/Colors'
import Aiconsultation from './AIScreen/Aiconsultation'
import Icon from 'react-native-vector-icons/AntDesign'


const ConsultationStack = ({ navigation }) => {
    const stack = createStackNavigator()
    return (
        <stack.Navigator initialRouteName='Landing'>
            <stack.Screen name='Landing' component={UserLanding} options={{ headerShown: false }} />
            <stack.Screen name='Describe' component={Describedisease} options={{ headerShown: false }} />
            <stack.Screen name='Description' component={Description} options={{ headerShown: false }} />
            <stack.Screen name='Method' component={Method} options={{ headerShown: false }} />
            <stack.Screen name='Aiconsultation' component={Aiconsultation} options={{
                headerTitle: 'Consultation',
                headerLeft: () => (<View>
                    <TouchableOpacity onPress={() => navigation.navigate('Method')}><Icon name='arrowleft' size={30} color={COLORS.white} /></TouchableOpacity>
                </View>),
                headerStyle: {
                    height: 80,
                    backgroundColor: COLORS.primary,
                    elevation: 30,
                    shadowColor: '#000',
                },
                headerTitleAlign: 'center',
                headerTitleStyle: {

                    color: COLORS.white,
                    justifyContent: 'center',
                    alignItems: 'center'
                }

            }} />

        </stack.Navigator >
    )
}

export default ConsultationStack