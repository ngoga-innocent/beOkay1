import { View, Text, FlatList, TouchableOpacity, SafeAreaView } from 'react-native'
import { React, useState } from 'react'
import { useNavigation } from '@react-navigation/native'


const PaymentHeader = () => {
    const [activepy, setActivepy] = useState(false)
    const navigation = useNavigation()
    const Change = (item) => {
        if (item.active) {
            console.log(item.active)
            navigation.navigate(item.screen)
        }
        else {
            setActivepy(true)
            item.active = true
            console.log(item.active);
            navigation.navigate(item.screen)
        }
    }

    const Type = [
        {
            title: 'Mobile Money',
            active: true,
            screen: 'momo'
        },
        {
            title: 'Debit/Credit card',
            active: false,
            screen: 'card'
        },
        {
            title: 'paypal',
            active: false,
            screen: 'paypal'
        }
    ]
    return (
        <SafeAreaView>
            <FlatList
                data={Type}
                renderItem={({ item }) =>
                    <View style={{ flex: 1, paddingTop: 40 }}>
                        <TouchableOpacity onPress={() => Change(item)} style={{ padding: 7 }}>
                            {item.active ? <Text style={{ paddingHorizontal: 15, paddingBottom: 5, fontWeight: '500', lineHeight: 14, textDecorationLine: 'underline' }}>{item.title}</Text> : <Text style={{ paddingHorizontal: 15, fontWeight: '500', lineHeight: 14 }}>{item.title}</Text>}
                        </TouchableOpacity>


                    </View>
                }
                horizontal
            />
        </SafeAreaView>
    )
}

export default PaymentHeader