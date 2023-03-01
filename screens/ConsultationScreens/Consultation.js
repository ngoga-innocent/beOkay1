import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image } from 'react-native'
import React from 'react'
import Header from '../../components/Header'
import Entypo from 'react-native-vector-icons/Entypo'
import { COLORS } from '../../components/Colors'
import { ColorSpace } from 'react-native-reanimated'

const Consultation = ({ navigation }) => {
    const department = [
        'Mental health',
        'Fertility',
        'STI’s sexually transmitted infection',
        'Pediatric Medicine',
        'Gynecology',
        'Internal medicine',
        'Chronic diseases',
    ]
    return (
        <View>
            <Header />
            <View style={styles.modal}>
                <View style={styles.modalheader} >
                    <Text style={{
                        color: '#809502',
                        fontSize: 18,
                        fontWeight: 'bold',

                    }}>Consult with Be Okay</Text>
                    <TouchableOpacity onPress={() => setShowModal(false)}>
                        <Entypo name='circle-with-cross' color={COLORS.primary} size={24} />
                    </TouchableOpacity>
                </View>

                <Text style={{ fontSize: 14, color: '#809502', marginHorizontal: 4 }}>how are you doing?if there is any help you need please let Be-Okay know</Text>
            </View>
            <View style={{ marginHorizontal: 8, marginVertical: 8, height: 98 }}>
                <Text>Adress your Consultation</Text>
                <FlatList data={department} renderItem={({ item }) =>
                    <TouchableOpacity style={styles.list} onPress={() => navigation.navigate('Description', { part: item })}>
                        <Text style={styles.text}>{item}</Text>
                    </TouchableOpacity>
                }
                    horizontal />
                <TouchableOpacity style={{ justifyContent: 'flex-end', alignItems: 'flex-end', marginRight: 4 }}>
                    <Text >View All</Text>
                </TouchableOpacity>

            </View>
            <View style={{ backgroundColor: 'white', alignItems: 'center' }}>
                <Text style={{ marginLeft: 16, marginBottom: 8 }}>Please locate your Illiness</Text>
                <Image source={require('../../assets/AI.png')} style={{ alignSelf: 'center' }} />
                <TouchableOpacity onPress={() => navigation.navigate('Describe', { disease: 'head' })} style={styles.head}></TouchableOpacity>
                <TouchableOpacity style={styles.body}></TouchableOpacity>
                <TouchableOpacity style={styles.leg}></TouchableOpacity>
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

    },
    list: {
        marginTop: 7
    },
    text: {
        backgroundColor: COLORS.white,
        marginLeft: 10,
        padding: 10,
        borderRadius: 10
    },
    head: {
        width: '15%',
        height: '15%',
        borderRadius: 20,

        position: 'absolute',
        marginTop: '4%'

    },
    body: {
        height: "20%",
        width: "25%",

        position: 'absolute',
        marginTop: '21%'
    },
    leg: {
        height: 100,
        width: 90,

        position: 'absolute',
        marginTop: '53%'

    }
})

export default Consultation