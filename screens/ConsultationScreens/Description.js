import { View, Text, TouchableOpacity, FlatList, StyleSheet, Image, TextInput } from 'react-native'
import { React, useState } from 'react'
import Header from '../../components/Header'
import { COLORS } from '../../components/Colors'
import Input from '../../components/Input'
import KeyboardWrapper from '../../components/keyboardWrapper'
import Button from '../../components/Button'

const Description = ({ navigation, route }) => {
    const [clicked, setClicked] = useState()

    const selectedfn = (item) => {




    }

    return (
        <KeyboardWrapper>
            <View>
                <Header />
                <View style={{ marginLeft: 16, marginTop: 16 }}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>Consult with Be Okay</Text>
                    <Text style={{ maxWidth: 180, color: '#BDBDBD', fontSize: 15 }}>We take care of your health as is variable to you!</Text>
                </View>
                <View style={{ marginHorizontal: 8, marginTop: 48, height: 98, alignItems: 'center' }}>
                    <Text>Adress your Consultation</Text>
                    <Text style={styles.text}>{route.params.part}</Text>
                </View>
                <View>
                    <Text>Please select</Text>
                    <TouchableOpacity>
                        <Image source={require('../../assets/lungs.png')} />
                    </TouchableOpacity>
                    <View>
                        <Text>Describe Illiness</Text>
                        <TextInput multiline={true} numberOfLines={10}
                            style={styles.input} />
                    </View>
                    <Button text='Next' style={{ backgroundColor: COLORS.primary, height: 50 }} />
                </View>
            </View>
        </KeyboardWrapper>
    )
}
const styles = StyleSheet.create({
    list: {
        marginTop: 7
    },
    text: {
        color: COLORS.white,

        marginLeft: 10,
        marginTop: 10,
        padding: 10,
        borderRadius: 10,
        backgroundColor: COLORS.primary,
    },
    input: {
        borderColor: COLORS.primary,
        borderWidth: 1,
        marginHorizontal: 10,
        borderRadius: 20,

    },
    text1: {
        backgroundColor: COLORS.primary,
        marginLeft: 10,
        padding: 10,
        borderRadius: 10
    },
})

export default Description