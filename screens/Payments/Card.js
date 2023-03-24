import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import PaymentHeader from '../../components/PaymentHeader'
const Card = () => {
    return (
        <SafeAreaView>
            <PaymentHeader />
            <Text>Card</Text>
        </SafeAreaView>
    )
}

export default Card