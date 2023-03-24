import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { COLORS } from '../../../components/Colors'
import Button from '../../../components/Button'


const Results = ({ navigation }) => {
    return (
        <View style={{ flex: 1, marginLeft: 16, marginRight: 16 }}>
            <View style={{ backgroundColor: COLORS.green, marginVertical: 8 }}>
                <Text style={{ maxWidth: '50%', fontSize: 14, paddingVertical: 8, paddingHorizontal: 12 }}>You are Going to take Consultation with AI</Text>
            </View>
            <View style={{ backgroundColor: COLORS.white, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold', paddingVertical: 7 }}>DR. Emile Results</Text>
                <View style={{ paddingVertical: 5, marginBottom: 10 }}>
                    <Image source={require('../../../assets/result.png')} style={{ color: 'black', paddingVertical: 5 }} />
                </View>
                <Text style={{ fontSize: 14, maxWidth: '55%', textAlign: 'center', lineHeight: 20, fontWeight: '400' }}>
                    your Results are now available with recommended medication. please pay to access medical record.
                </Text>
                <Button
                    text='Proceed with Payment'
                    style={{ backgroundColor: COLORS.primary, marginVertical: 20, height: '13%' }}
                    style1={{ color: COLORS.white }}
                    onPress={() => navigation.navigate('payment')}
                />

            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    text: {
        textAlign: 'center'
    }
})

export default Results