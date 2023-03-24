import { View, Text, Image, StyleSheet, useWindowDimensions } from 'react-native'
import React from 'react'

const OnboardingItem = ({ item }) => {
    const { width } = useWindowDimensions()
    const { height } = useWindowDimensions()
    return (
        <View style={[styles.item, { width }, { height }]}>
            <Image source={item.image} style={[styles.image, { resizeMode: 'contain' }]} />
            <View style={{ flex: 0.3, paddingVertical: 10 }}>
                <Text style={styles.Header}>{item.title}</Text>
                <Text style={styles.paragraph}>{item.subtitle}</Text>
            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    item: {

        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        flex: 0.4,
        justifyContent: 'center'
    },
    Header: {

        color: '#93BD68',
        fontSize: 25,
        textAlign: 'center',
        marginVertical: 10,
        maxWidth: '80%',
        textAlign: 'center'


    },
    paragraph: {
        fontSize: 18,
        color: "#BDBDBD",
        alignItems: 'center',

        maxWidth: '70%',
        textAlign: 'center',



    }
})

export default OnboardingItem