import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import UserLanding from './UserLanding'
import Consultation from './Consultation'
import Describedisease from './Describedisease'
import Description from './Description'
import Method from './Method'
import Results from './AIScreen/Results'
import Payment from '../../components/Payment'
import ConsultationResults from './ConsultionResults'
import Momo from '../Payments/Momo'
import Card from '../Payments/Card'
import Paypal from '../Payments/Paypal'
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
                    height: 120,
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
            <stack.Screen name='AiResult' component={Results} options={{
                headerTitle: 'Consultation Results',
                headerLeft: () => (<View>
                    <TouchableOpacity onPress={() => navigation.navigate('Aiconsultation')}><Icon name='arrowleft' size={30} color={COLORS.white} /></TouchableOpacity>
                </View>),
                headerStyle: {
                    height: 120,
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
             <stack.Screen name='Results' component={ConsultationResults} options={{
                headerTitle: 'Consultation Results',
                headerLeft: () => (<View>
                    <TouchableOpacity onPress={() => navigation.navigate('payment')}><Icon name='arrowleft' size={30} color={COLORS.white} /></TouchableOpacity>
                </View>),
                headerStyle: {
                    height: 120,
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
            <stack.Screen name='payment' component={Payment} options={{ headerShown: false }} />
            <stack.Screen name='momo' component={Momo} options={{ headerShown: false }} />
            <stack.Screen name='card' component={Card} options={{ headerShown: false }} />
            <stack.Screen name='paypal' component={Paypal} options={{ headerShown: false }} />

        </stack.Navigator >
    )
}

export default ConsultationStack