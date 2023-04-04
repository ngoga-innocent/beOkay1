import { View, Text, StyleSheet, StatusBar, Image, TouchableOpacity, SafeAreaView } from 'react-native'
import React from 'react'
import { COLORS } from './Colors'
import Icon from 'react-native-vector-icons/Ionicons'
import { useNavigation } from "@react-navigation/native"
import Signup from '../screens/loginScreens/Signup'



const Header = () => {
    const navigation = useNavigation()
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={COLORS.primary} />
            <View style={styles.header}>
                <View style={{ alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: COLORS.green, marginLeft: 4, height: 50, width: 50, borderRadius: 50 }}>
                    <Image source={require('../assets/Ellipse15.png')} style={{ width: 50, height: 50, alignSelf: 'center' }} />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={require('../assets/logo2.png')} style={{ width: 50, height: 50 }} />
                    <Text style={{ color: COLORS.white, fontSize: 17, fontWeight: 'bold' }}>Be Okay</Text>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity
                        onPress={() => navigation.openDrawer()}
                        style={{
                            height: 50, width: 50,
                            backgroundColor: 'white', borderRadius: 50,
                            alignItems: 'center', justifyContent: 'center'
                        }} >
                        <Icon name='notifications' size={40} style={{ alignSelf: 'center' }} color={COLORS.primary} />
                    </TouchableOpacity>
                </View>
            </View>

        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#8BB85C',
        height: 130,
        elevation: 100,
        justifyContent: 'center'

    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 50,

    }
})

export default Header