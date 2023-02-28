import { View, Text, StyleSheet, TouchableOpacity, FlatList, ScrollView } from 'react-native'
import { React, useState } from 'react'
import Header from '../../components/Header'
import Entypo from 'react-native-vector-icons/Entypo'
import { COLORS } from '../../components/Colors'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Fontisto from 'react-native-vector-icons/Fontisto'


const UserLanding = () => {
    const date = new Date().getDate()
    const hour = new Date().getHours()
    const time = new Date().getMonth()
    const [showModal, setShowModal] = useState(true)
    const status =
    {
        pressue: 150,
        lastilliness: 'headache',
        lastdrugs: 'paracetamol'


    }
    const Appointment = [
        {
            date: '12-08-2023',
            doctor: 'Dr Issa',
            hospital: 'Nyirinkware'
        },
        {
            date: '1-07-2023',
            doctor: 'Dr Ngoga',
            hospital: 'CHUK'
        },
        {
            date: '12-08-2023',
            doctor: 'Dr MUKWIYE',
            hospital: 'Kanombe Grand Hospital'
        },
        {
            date: '12-08-2023',
            doctor: 'Dr MUKWIYE',
            hospital: 'Kanombe Grand Hospital'
        },
        {
            date: '12-08-2023',
            doctor: 'Dr MUKWIYE',
            hospital: 'Kanombe Grand Hospital'
        },
        {
            date: '12-08-2023',
            doctor: 'Dr MUKWIYE',
            hospital: 'Kanombe Grand Hospital'
        },
        {
            date: '12-08-2023',
            doctor: 'Dr MUKWIYE',
            hospital: 'Kanombe Grand Hospital'
        },
        {
            date: '12-08-2023',
            doctor: 'Dr MUKWIYE',
            hospital: 'Kanombe Grand Hospital'
        },
    ]

    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.modal}>
                <View style={styles.modalheader} >
                    <Text style={{
                        color: '#809502',
                        fontSize: 18,
                        fontWeight: 'bold',

                    }}>Good Day Issa</Text>
                    <TouchableOpacity onPress={() => setShowModal(false)}>
                        <Entypo name='circle-with-cross' color={COLORS.primary} size={24} />
                    </TouchableOpacity>
                </View>

                <Text style={{ fontSize: 14, color: '#809502', marginHorizontal: 4 }}>how are you doing?if there is any help you need please let Be-Okay know</Text>
            </View>
            <View style={{ backgroundColor: COLORS.white, marginHorizontal: 8, borderRadius: 7, marginVertical: 4 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 4, marginHorizontal: 10 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 17 }}>Health Status</Text>
                    <Text style={{ color: COLORS.text, fontWeight: '300', fontSize: 10 }}>last 30 days</Text>
                </View>
                <View style={{ marginHorizontal: 10, flexDirection: 'row', marginVertical: 7 }}>
                    <View style={{
                        height: 48, width: 48, backgroundColor: '#D9F4BD', borderRadius: 4, alignItems: 'center', justifyContent: 'center'
                    }}>
                        <Icon name='blood-bag' size={40} color='white' />
                    </View>
                    <View style={{ marginLeft: 15 }}>
                        <Text style={{ color: COLORS.paragraph, fontSize: 16, fontWeight: '800' }}>Blood Pressure</Text>
                        <Text style={{ fontWeight: 'bold' }}>{status.pressue}</Text>
                    </View>

                </View>
                <View style={{ marginHorizontal: 10, flexDirection: 'row', marginVertical: 7 }}>
                    <View style={{
                        height: 48, width: 48, backgroundColor: '#D9F4BD', borderRadius: 4, alignItems: 'center', justifyContent: 'center'
                    }}>
                        <Fontisto name='blood-test' size={40} color='white' />
                    </View>
                    <View style={{ marginLeft: 15 }}>
                        <Text style={{ color: COLORS.paragraph, fontSize: 16, fontWeight: '800' }}>Last Illiness</Text>
                        <Text style={{ fontWeight: 'bold' }}>{status.lastilliness}</Text>
                    </View>

                </View>
                <View style={{ marginHorizontal: 10, flexDirection: 'row', marginVertical: 7 }}>
                    <View style={{
                        height: 48, width: 48, backgroundColor: '#D9F4BD', borderRadius: 4, alignItems: 'center', justifyContent: 'center'
                    }}>
                        <Icon name='medical-bag' size={40} color='white' />
                    </View>
                    <View style={{ marginLeft: 15 }}>
                        <Text style={{ color: COLORS.paragraph, fontSize: 16, fontWeight: '800' }}>Last Drugs</Text>
                        <Text style={{ fontWeight: 'bold' }}>{status.lastdrugs}</Text>
                    </View>

                </View>
            </View>
            <View style={{ flex: 1, backgroundColor: COLORS.white, marginHorizontal: 8, borderRadius: 7, marginVertical: 4 }}>
                <Text style={{ fontWeight: '500', fontSize: 16, marginVertical: 5, marginLeft: 7 }}>Appointment and Schedule</Text>
                <View style={{ marginBottom: 25 }}>
                    <FlatList
                        data={Appointment}
                        renderItem={({ item }) =>
                            <View style={{ flexDirection: 'row', marginBottom: 5 }}>
                                <View style={{ width: 68, maxWidth: 68, height: 68, alignItems: 'center', justifyContent: 'center', borderRadius: 68, backgroundColor: '#CFDEFF', margin: 5 }}>
                                    <Text style={{ fontSize: 12, color: COLORS.text }}>{item.date}</Text>
                                </View>
                                <View style={{ alignItems: 'center', justifyContent: 'center', marginHorizontal: 7 }}>
                                    <Text style={{ color: COLORS.paragraph, fontSize: 14, fontWeight: '400', marginButtom: 4 }}>{item.date}</Text>
                                    <View style={{ flexDirection: 'row', marginRight: 3, maxWidth: 170 }}>
                                        <Text>{item.doctor}</Text>
                                        <Text>|{item.hospital}</Text>
                                    </View>
                                </View>
                            </View>
                        }
                    />
                </View>
            </View>


        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    modal: {
        marginHorizontal: 8,
        width: 343,
        backgroundColor: '#FFF6C5',
        borderRadius: 15,
        height: 98,
        marginTop: 13,

        padding: 5


    },
    modalheader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 4,
        alignItems: 'center'

    }
})

export default UserLanding