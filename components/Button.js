import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS } from './Colors';
import React from 'react';
import { useWindowDimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'


const Button = ({ color, style, icon, text, style1, size, textcolor, ...rest }) => {
    const width = useWindowDimensions()
    return (
        <TouchableOpacity style={[styles.Buttonstyle, style]} {...rest}>
            <Icon name={icon} size={size} minimumFontScale={19} color={color} />
            <Text style={[styles.text, style1]}>{text}</Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    Buttonstyle: {
        height: '6%',
        width: '80%',
        borderRadius: 20,
        marginHorizontal: 10,
        backgroundColor: COLORS.white,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    text: {
        marginLeft: 22,
        fontSize: 19,


    }
})

export default Button